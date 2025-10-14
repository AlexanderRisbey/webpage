import { assetHref, pageHref } from './utils.js';
import { newsArticleHref } from './renderers.js';
import { routes } from './routes.js';
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

const renderListView = (newsItems) => {
  const articles = newsItems
    .map(
      (item) => `
        <a class="news-card news-card--list" href="${newsArticleHref(item.id)}">
          <div>
            <p class="news-card-date">${formatDate(item.date)}</p>
            <h3 class="news-card-title">${escapeHtml(item.title)}</h3>
            <p class="news-card-excerpt">${escapeHtml(item.excerpt)}</p>
          </div>
          <span class="news-card-cta">Read article</span>
        </a>
      `,
    )
    .join('');

  return `
    <div class="news-page-header">
      <span class="tag">Latest updates</span>
      <h1>News &amp; Announcements</h1>
      <p>Explore the milestones, partnerships, and product stories shaping LydiaRx.</p>
    </div>
    <div class="news-page-list">
      ${articles}
    </div>
  `;
};

const renderArticleView = (article) => {
  const parsedContent =
    typeof window !== 'undefined' &&
    window.marked &&
    typeof window.marked.parse === 'function'
      ? window.marked.parse(article.content)
      : article.content
          .split(/\n{2,}/)
          .map((paragraph) => `<p>${escapeHtml(paragraph).replace(/\n/g, '<br>')}</p>`)
          .join('');

  return `
    <h2>${escapeHtml(article.title)}</h2>
    <div class="padding-bottom"></div>
    <p><strong>Published on ${formatDate(article.date)}</strong></p>
    <div class="padding-bottom"></div>
    <div class="news-article-body">
      ${parsedContent}
    </div>
  `;
};

const renderSliderCard = (item, variant) => {
  const cardContent = `
    <div>
      <p class="news-card-date">${formatDate(item.date)}</p>
      <h3 class="news-card-title">${escapeHtml(item.title)}</h3>
      <p class="news-card-excerpt">${escapeHtml(item.excerpt)}</p>
    </div>
  `;

  if (variant === STYLE_VARIANTS.A) {
    return `
      <div class="swiper-slide news-slider-slide news-slider-slide--variant-a">
        <a href="${newsArticleHref(item.id)}" class="news-slider-link">
          <div class="news-card news-card--slider news-card--variant-a">
            ${cardContent}
            <div class="button-wrapper button-wrapper--variant-a">
              <span class="button is-grey w-button">Read more</span>
            </div>
          </div>
        </a>
      </div>
    `;
  }

  return `
    <div class="swiper-slide">
      <a href="${newsArticleHref(item.id)}" class="news-card news-card--slider">
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

  loadNewsData()
    .then((news) => {
      if (!Array.isArray(news) || news.length === 0) {
        newsSliderContainer.innerHTML = '<p class="news-empty-state">No news available at this time.</p>';
        if (onReady) onReady();
        return;
      }

      const slidesHTML = news.map((item) => renderSliderCard(item, activeVariant)).join('');

      newsSliderContainer.innerHTML = `
        <section class="news-container">
          <h2 style="margin-bottom: 30px;">Company News</h2>
          <div class="swiper">
            <div class="swiper-wrapper">
              ${slidesHTML}
            </div>
            <div class="swiper-pagination"></div>
          </div>
        </section>
      `;

      if (typeof Swiper === 'function') {
        new Swiper('.swiper', {
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
          },
          spaceBetween: 20,
          breakpoints: {
            0: { slidesPerView: 1 },
            768: { slidesPerView: 3 },
          },
        });
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
    <section class="section_product-header">
      <div class="page-padding">
        <div class="container-large" style="position: relative;">
          <div class="max-width-large">
            <h1>News</h1>
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
    <section class="section_about-us">
      <div class="page-padding">
        <div class="container-large">
          <div class="padding-section-huge">
            <div class="about_component">
              <div class="max-width-large">
                <div id="news-page-root" class="news-page">
                  <div class="news-loading">Loading news...</div>
                </div>
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

  loadNewsData()
    .then((news) => {
      if (!Array.isArray(news) || news.length === 0) {
        container.innerHTML = '<div class="news-empty-state">No news available yet. Please check back soon.</div>';
        return;
      }

      const params = new URLSearchParams(window.location.search);
      const articleId = params.get('id');

      if (articleId) {
        const article = news.find((item) => item.id === articleId);
        if (!article) {
          container.innerHTML = `
            <div class="news-empty-state">
              We could not find that article. <a class="news-back-link" href="${pageHref(routes.news)}">Back to all news</a>
            </div>
          `;
          return;
        }

        container.innerHTML = renderArticleView(article);
        return;
      }

      container.innerHTML = renderListView(news);
    })
    .catch(() => {
      container.innerHTML = '<div class="news-empty-state">Unable to load news at this time.</div>';
    });
};
