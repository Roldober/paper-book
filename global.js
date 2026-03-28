const link = document.createElement('link');
link.rel = 'icon';
link.type = 'image/x-icon';
link.href = 'favicon.ico';
document.head.appendChild(link);
(function() {
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
            navigator.share({
                title: title,
                url: url
            });
        } else {
            navigator.clipboard.writeText(url);
            alert('Ссылка на рассказ скопирована!');
        }
    };
    
    manuscript.appendChild(shareBtn);
});