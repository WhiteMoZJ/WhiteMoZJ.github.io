document.addEventListener('DOMContentLoaded', function () {
    const containers = document.querySelectorAll('.gif-container');
    containers.forEach(container => {
        const img = container.querySelector('.gif-preview');
        const btn = container.querySelector('.gif-play-btn');

        container.addEventListener('click', function () {
            const gifSrc = img.dataset.gif;
            if (gifSrc) {
                img.src = gifSrc; // 切换为 GIF
                btn.style.display = 'none'; // 隐藏播放按钮
                container.style.pointerEvents = 'none'; // 禁止再次点击
            }
        });
    });
});