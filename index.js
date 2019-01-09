import './news-article.js';
import {topHeadLinesUrl} from './newsapi.js'

window.addEventListener('load', () => {
    fetchNews();
});

async function fetchNews() {
    const res = await fetch(topHeadLinesUrl);
    const json = await res.json();
    const articles = await json.articles

    const main = document.querySelector('main');

    articles.forEach(article => {
        const el = document.createElement('news-article');
        el.article = article;
        main.appendChild(el);
    });
}