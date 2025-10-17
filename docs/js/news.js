import { assetHref } from './utils.js';
import { newsArticleHref, newsAnchorId } from './renderers.js';
import { getStyleVariant, STYLE_VARIANTS } from './ab-testing.js';

let newsDataPromise;

const readActiveStyleVariant = () => {
  if (typeof window === 'undefined') {
    return null;
  }
  if (window.__LYDIARX_STYLE_VARIANT__) {
    return window.__LYDIARX_STYLE_VARIANT__;
  }
  try {
    return getStyleVariant();
  } catch (_) {
    return null;
  }
};

const fetchNewsData = async () => {
  const response = await fetch(assetHref('json/news.json'), { cache: 'no-store' });
  if (!response.ok) {
    throw new Error(`Failed to load news: ${response.status}`);
  }
  const payload = await response.json();
  if (!Array.isArray(payload)) {
    return [];
  }
  return [...payload]
    .map((item) => ({
      id: String(item.id ?? ''),
      date: item.date ?? '',
      title: item.title ?? '',
      excerpt: item.excerpt ?? '',
      content: item.content ?? '',
    }))
    .filter((item) => item.id && item.title)
    .sort((a, b) => new Date(b.date || 0) - new Date(a.date || 0));
};

const loadNewsData = () => {
  if (!newsDataPromise) {
    newsDataPromise = fetchNewsData().catch((error) => {
      newsDataPromise = undefined;
      throw error;
    });
  }
  return newsDataPromise;
};

const escapeHtml = (value = '') =>
  String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');

const formatDate = (isoDate) => {
  if (!isoDate) {
    return '';
  }
  const date = new Date(isoDate);
  if (Number.isNaN(date.getTime())) {
    return escapeHtml(isoDate);
  }
  return date.toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
};

const parseArticleContent = (article) => {
  const parsedContent =
    typeof window !== 'undefined' &&
    window.marked &&
    typeof window.marked.parse === 'function'
      ? window.marked.parse(article.content)
      : article.content
          .split(/\n{2,}/)
          .map((paragraph) => `<p>${escapeHtml(paragraph).replace(/\n/g, '<br>')}</p>`)
          .join('');

  return parsedContent;
};

const renderArticleSection = (article, index) => {
  const anchorId = newsAnchorId(article.id || index);
  const titleId = `${anchorId}-title`;
  const bodyContent = parseArticleContent(article);

  return `
    <article class="news-article" id="${anchorId}" data-news-anchor="${anchorId}" aria-labelledby="${titleId}">
      <span class="news-card-date">${formatDate(article.date)}</span>
      <h2 class="news-article-title" id="${titleId}">${escapeHtml(article.title)}</h2>
      <div class="news-article-body">
        ${bodyContent}
      </div>
    </article>
  `;
};

const renderArticlesView = (newsItems) =>
  newsItems.map((item, index) => renderArticleSection(item, index)).join('');

const renderSliderCard = (item, variant) => {
  const cardContent = `
    <span class="news-card-date">${formatDate(item.date)}</span>
    <h3 class="news-card-title">${escapeHtml(item.title)}</h3>
    <p class="news-card-excerpt">${escapeHtml(item.excerpt)}</p>
  `;

  if (variant === STYLE_VARIANTS.A) {
    return `
      <div class="swiper-slide news-carousel__slide news-slider-slide--variant-a">
        <a href="${newsArticleHref(item.id)}" class="news-card news-card--slider news-card--carousel news-card--variant-a news-slider-link" aria-label="${escapeHtml(item.title)}">
          ${cardContent}
          <span class="button is-grey w-button news-card-cta-button">Read more</span>
        </a>
      </div>
    `;
  }

  return `
    <div class="swiper-slide news-carousel__slide">
      <a href="${newsArticleHref(item.id)}" class="news-card news-card--slider news-card--carousel" aria-label="${escapeHtml(item.title)}">
        ${cardContent}
        <span class="news-card-cta">Read article</span>
      </a>
    </div>
  `;
};

export const initNewsSlider = (onReady) => {
  const activeVariant = readActiveStyleVariant();
  const newsSliderContainer = document.getElementById('news-slider');
  if (!newsSliderContainer) {
    if (onReady) onReady();
    return;
  }

  const carouselContainer = newsSliderContainer.closest('.news-carousel');
  newsSliderContainer.innerHTML = '<div class="news-loading">Loading news...</div>';

  loadNewsData()
    .then((news) => {
      if (!Array.isArray(news) || news.length === 0) {
        newsSliderContainer.innerHTML = '<p class="news-empty-state">No news available at this time.</p>';
        if (carouselContainer) {
          carouselContainer.classList.add('news-carousel--empty');
          const controls = carouselContainer.querySelectorAll('.news-carousel__button');
          controls.forEach((button) => {
            button.setAttribute('disabled', 'disabled');
            button.setAttribute('aria-hidden', 'true');
          });
        }
        if (onReady) onReady();
        return;
      }

      const slidesHTML = news.map((item) => renderSliderCard(item, activeVariant)).join('');

      newsSliderContainer.innerHTML = `
        <div class="swiper news-carousel__swiper">
          <div class="swiper-wrapper">
            ${slidesHTML}
          </div>
        </div>
        <div class="news-carousel__pagination"></div>
      `;

      const prevButton = carouselContainer?.querySelector('.news-carousel__button--prev') ?? null;
      const nextButton = carouselContainer?.querySelector('.news-carousel__button--next') ?? null;
      const paginationEl = newsSliderContainer.querySelector('.news-carousel__pagination');
      const swiperEl = newsSliderContainer.querySelector('.news-carousel__swiper');

      if (news.length <= 1) {
        [prevButton, nextButton].forEach((button) => {
          if (button) {
            button.setAttribute('disabled', 'disabled');
            button.setAttribute('aria-hidden', 'true');
          }
        });
      } else {
        [prevButton, nextButton].forEach((button) => {
          if (button) {
            button.removeAttribute('disabled');
            button.removeAttribute('aria-hidden');
          }
        });
      }

      if (typeof Swiper === 'function' && swiperEl) {
        const slideCount = news.length;
        const slidesPerViewMd = Math.min(slideCount, 2);
        const slidesPerViewLg = Math.min(slideCount, 3);

        const config = {
          slidesPerView: 1,
          spaceBetween: 24,
          loop: slideCount > 1,
          autoHeight: false,
          grabCursor: true,
          speed: 600,
          breakpoints: {
            768: { slidesPerView: slidesPerViewMd },
            1280: { slidesPerView: slidesPerViewLg },
          },
        };

        if (slideCount > 1) {
          config.autoplay = {
            delay: 6000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          };
        }

        if (paginationEl) {
          config.pagination = {
            el: paginationEl,
            clickable: true,
            bulletClass: 'news-carousel__bullet',
            bulletActiveClass: 'news-carousel__bullet--active',
          };
        }

        if (prevButton && nextButton && slideCount > 1) {
          config.navigation = {
            prevEl: prevButton,
            nextEl: nextButton,
          };
        }

        new Swiper(swiperEl, config);
      }
      if (onReady) onReady();
    })
    .catch(() => {
      newsSliderContainer.innerHTML = '<p class="news-empty-state">Unable to load news at this time.</p>';
      if (onReady) onReady();
    });
};

export const renderNewsPage = () => `
  <main class="main-wrapper">
    <section class="section_product-header section_news-header">
      <div class="page-padding">
        <div class="container-large section_news-header__container">
          <div class="max-width-large">
            <h1>LydiaRx News</h1>
            <div class="padding-bottom"></div>
          </div>
          <div class="max-width-medium">
            <p class="Paragraph">Stay up to date with the latest company news, insights, and announcements from LydiaRx.</p>
          </div>
          <div class="ps_header_shapes">
            <img src="${assetHref('images/LydiaRx_web-art.svg')}" class="ps_header-image" alt="LydiaRx Logo Art"/>
          </div>
        </div>
      </div>
    </section>
    <section class="section_about-us section_news-feed">
      <div class="page-padding">
        <div class="container-large">
          <div class="padding-section-huge">
              <div class="news-feed container-background">
              <div class="news-feed__intro">
                <h2>All articles</h2>
                <p>Browse every update in one place. Each story is part of our journey to build trusted healthcare technology.</p>
              </div>
              <div id="news-page-root" class="news-feed__articles">
                <div class="news-loading">Loading news...</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
`;

export const initNewsPage = () => {
  const container = document.getElementById('news-page-root');
  if (!container) {
    return;
  }

  container.innerHTML = '<div class="news-loading">Loading news...</div>';

  loadNewsData()
    .then((news) => {
      if (!Array.isArray(news) || news.length === 0) {
        container.innerHTML = '<div class="news-empty-state">No news available yet. Please check back soon.</div>';
        return;
      }

      container.innerHTML = renderArticlesView(news);

      let highlightedElement = null;
      let highlightTimeout = null;

      const highlightArticle = (anchorId, { smooth = false } = {}) => {
        if (!anchorId) {
          return;
        }

        requestAnimationFrame(() => {
          const target = document.getElementById(anchorId);
          if (!target) {
            return;
          }

          if (highlightedElement && highlightedElement !== target) {
            highlightedElement.classList.remove('news-article--highlight');
            highlightedElement.removeAttribute('tabindex');
          }

          target.classList.add('news-article--highlight');
          target.setAttribute('tabindex', '-1');
          target.focus({ preventScroll: true });
          target.scrollIntoView({
            behavior: smooth ? 'smooth' : 'auto',
            block: 'start',
          });

          if (highlightTimeout) {
            window.clearTimeout(highlightTimeout);
          }

          highlightTimeout = window.setTimeout(() => {
            target.classList.remove('news-article--highlight');
            target.removeAttribute('tabindex');
            if (highlightedElement === target) {
              highlightedElement = null;
            }
          }, 2000);

          highlightedElement = target;
        });
      };

      const params = new URLSearchParams(window.location.search);
      const searchId = params.get('id');
      const initialHash = window.location.hash;

      if (searchId) {
        const anchorId = newsAnchorId(searchId);
        highlightArticle(anchorId, { smooth: false });
        if (window.history && typeof window.history.replaceState === 'function') {
          window.history.replaceState(null, '', `${window.location.pathname}#${anchorId}`);
        }
      } else if (initialHash && initialHash.startsWith('#news-')) {
        highlightArticle(initialHash.substring(1), { smooth: false });
      }

      window.addEventListener('hashchange', () => {
        const { hash } = window.location;
        if (hash && hash.startsWith('#news-')) {
          highlightArticle(hash.substring(1), { smooth: true });
        }
      });
    })
    .catch(() => {
      container.innerHTML = '<div class="news-empty-state">Unable to load news at this time.</div>';
    });
};
