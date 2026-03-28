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