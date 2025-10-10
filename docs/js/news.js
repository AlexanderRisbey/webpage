import { assetHref } from './utils.js';
import { newsArticleHref } from './renderers.js';

export const initNewsSlider = (onReady) => {
  const newsSliderContainer = document.getElementById('news-slider');
  if (!newsSliderContainer) {
    if (onReady) onReady();
    return;
  }

  fetch(assetHref('json/news.json'))
    .then((response) => response.json())
    .then((news) => {
      if (!Array.isArray(news) || news.length === 0) {
        newsSliderContainer.innerHTML = '<p>No news available at this time.</p>';
        if (onReady) onReady();
        return;
      }

      const slidesHTML = news
        .map(
          (item) => `
            <div class="swiper-slide">
              <a href="${newsArticleHref(item.id)}" style="width: 100%; text-decoration: none;">
                <div class="news-card">
                  <div>
                    <p class="news-card-date">${item.date}</p>
                    <h3 class="news-card-title">${item.title}</h3>
                    <p class="news-card-excerpt">${item.excerpt}</p>
                  </div>
                  <div class="button-wrapper" style="bottom: 0;">
                    <span class="button is-grey w-button">Read more</span>
                  </div>
                </div>
              </a>
            </div>
          `
        )
        .join('');

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
      newsSliderContainer.innerHTML = '<p>Unable to load news at this time.</p>';
      if (onReady) onReady();
    });
};
