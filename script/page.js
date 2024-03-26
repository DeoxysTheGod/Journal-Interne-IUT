let currentPage = 1;
let totalPages = 0;
let articleData = '';
let articles =
    ['journal-page',
    'vie-etudiante', 'bde', 'av-vie-etu',
    'etudier-a-iut', 'erasmus', 'sae', 'profs',
    'pk-nous-choisir', 'apres-but',
    'credits'];

let currentArticleIndex = 10;

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

document.querySelectorAll('.menu').forEach((menu) => {
    menu.addEventListener('mouseover', function() {
        const parentBtn = this.querySelector('.unwrap-menu');
        const lastBtn = this.querySelector('.under-dir').children[this.querySelector('.under-dir').children.length - 1].firstChild;
        const underdir = this.querySelector('.under-dir');
        underdir.style.width = parentBtn.offsetWidth + 'px';
        lastBtn.style.borderRadius = '0 0 15px 15px';
        parentBtn.style.borderRadius = '15px 15px 0 0';
    });

    menu.addEventListener('mouseout', function() {
        const parentBtn = this.querySelector('.unwrap-menu');
        const lastBtn = this.querySelector('.under-dir').children[this.querySelector('.under-dir').children.length - 1].firstChild;
        lastBtn.style.borderRadius = '';
        parentBtn.style.borderRadius = '';
    });
});

displayArticle(articles[currentArticleIndex]);
