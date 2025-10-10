
const renderNewsPage = () => {
    const newsPageContent = `
    <main class="main-wrapper">
        <section class="section_product-header">
            <div class="page-padding">
                <div class="container-large" style="position: relative;">
                    <div class="max-width-large">
                        <h1>
                            News
                        </h1>
                        <div class="padding-bottom"></div>
                    </div>
                    <div class="max-width-medium">
                        <p class="Paragraph">Stay up to date with the latest company news, insights, and announcements from Lydriarx.</p>
                    </div>
                    <div class="ps_header_shapes">
                        <img src="../assets/images/LydiaRx_web-art.svg" class="ps_header-image" alt="LydiaRx Logo Art"/>
                    </div>
                </div>   
            </div>
        </section>
        <section class="section_about-us">
            <div class="page-padding">
                <div class="container-large">
                    <div class="padding-section-huge">
                        <div class="about_component">
                            <div class="max-width-large" id="news-content">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
    `;
    document.getElementById('root').insertAdjacentHTML('beforeend', newsPageContent);
}

const renderNewsList = (news) => {
    const newsContent = document.getElementById('news-content');
    let newsListHTML = '<div class="w-layout-grid team_person-wrapper">';
    news.forEach(item => {
        newsListHTML += `
            <a href="?id=${item.id}" class="team_item">
                <div class="news-card-date">${item.date}</div>
                <h3 class="news-card-title">${item.title}</h3>
                <p class="news-card-excerpt">${item.excerpt}</p>
            </a>
        `;
    });
    newsListHTML += '</div>';
    newsContent.innerHTML = newsListHTML;
}

const renderNewsArticle = (article) => {
    const newsContent = document.getElementById('news-content');
    const articleHTML = `
        <h2>${article.title}</h2>
        <div class="padding-bottom"></div>
        <p><strong>Published on ${article.date}</strong></p>
        <div class="padding-bottom"></div>
        <div>${marked.parse(article.content)}</div>
    `;
    newsContent.innerHTML = articleHTML;
}

document.addEventListener('DOMContentLoaded', () => {
    if (window.location.pathname.includes('news/index.html')) {
        renderNewsPage();
        
        fetch('../assets/json/news.json')
            .then(response => response.json())
            .then(news => {
                const urlParams = new URLSearchParams(window.location.search);
                const articleId = urlParams.get('id');

                if (articleId) {
                    const article = news.find(item => item.id === articleId);
                    if (article) {
                        renderNewsArticle(article);
                    } else {
                        document.getElementById('news-content').innerHTML = '<p>Article not found.</p>';
                    }
                } else {
                    renderNewsList(news);
                }
            });
    }
});
