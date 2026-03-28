(function() {
    const link = document.createElement('link');
    link.rel = 'icon';
    link.type = 'image/x-icon';
    link.href = 'favicon.ico';
    document.head.appendChild(link);

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        document.body.classList.add('light');
    }
})();

document.addEventListener('DOMContentLoaded', function() {
    const manuscript = document.querySelector('.manuscript');
    if (!manuscript) return;

    const shareBtn = document.createElement('button');
    shareBtn.className = 'share-btn';
    shareBtn.innerHTML = '📤 ПОДЕЛИТЬСЯ РАССКАЗОМ';
    shareBtn.onclick = function() {
        const url = window.location.href;
        const title = document.title;
        if (navigator.share) {
            navigator.share({ title: title, url: url });
        } else {
            navigator.clipboard.writeText(url);
            alert('Ссылка на рассказ скопирована!');
        }
    };
    manuscript.appendChild(shareBtn);

    const progressContainer = document.createElement('div');
    progressContainer.className = 'progress-container';
    progressContainer.innerHTML = '<div class="progress-bar" id="readingProgress"></div>';
    document.body.insertBefore(progressContainer, document.body.firstChild);

    window.addEventListener('scroll', () => {
        const winScroll = window.scrollY;
        const height = document.documentElement.scrollHeight - window.innerHeight;
        const scrolled = (winScroll / height) * 100;
        const progressBar = document.getElementById('readingProgress');
        if (progressBar) progressBar.style.width = scrolled + '%';
    });

    const topBtn = document.createElement('button');
    topBtn.className = 'top-btn';
    topBtn.innerHTML = '↑';
    topBtn.title = 'Наверх';
    topBtn.onclick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    document.body.appendChild(topBtn);

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            topBtn.style.display = 'flex';
        } else {
            topBtn.style.display = 'none';
        }
    });
    topBtn.style.display = 'none';
});