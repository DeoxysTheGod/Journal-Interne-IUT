let currentPage = 1;
let totalPages = 0;
let articleData = '';
let articles = ['cover-page', 'article1']; // Ajoutez plus d'articles à cette liste si nécessaire
let currentArticleIndex = 0;

function getArticle(article) {
    fetch(`pages/${article}.html`)
        .then(response => response.text())
        .then(data => {
            const parser = new DOMParser();
            const doc = parser.parseFromString(data, 'text/html');
            const pages = doc.querySelectorAll('.pages');
            totalPages = pages.length;
            articleData = pages[currentPage - 1].outerHTML;
        })
        .catch(error => {
            console.error('Erreur :', error);
        });
}

function prepareArticle() {
    const article = document.getElementById('container');
    article.innerHTML = articleData;
}

function displayArticle(article) {
    getArticle(article);
    setTimeout(prepareArticle, 50);
}

function nextPage() {
    if (currentPage < totalPages) {
        currentPage++;
        displayArticle(articles[currentArticleIndex]);
    } else if (currentArticleIndex < articles.length - 1) {
        currentArticleIndex++;
        currentPage = 1;
        displayArticle(articles[currentArticleIndex]);
    }
}

function previousPage() {
    if (currentPage > 1) {
        currentPage--;
        displayArticle(articles[currentArticleIndex]);
    } else if (currentArticleIndex > 0) {
        currentArticleIndex--;
        currentPage = 1; // Affiche la première page de l'article précédent
        displayArticle(articles[currentArticleIndex]);
    }
}
const tabs = document.getElementById('tabs');
const buttons = tabs.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('click', function(e) {
        e.preventDefault();
        currentArticleIndex = articles.indexOf(this.getAttribute('id'));
        currentPage = 1;
        displayArticle(articles[currentArticleIndex]);
    });
});

document.getElementById('next').addEventListener('click', nextPage);
document.getElementById('prev').addEventListener('click', previousPage);

displayArticle(articles[currentArticleIndex]);