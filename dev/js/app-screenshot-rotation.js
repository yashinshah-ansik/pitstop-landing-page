(function() {
    var imgs = document.querySelectorAll('.app-screenshot');
    var current = 0;
    // The last image is just an overlay with a phone frame, we don't touch it
    // during image rotation.
    var total = imgs.length - 1;
    window.setInterval(function() {
        var next = current + 1;
        if (next >= total) {
            next = 0;
        }
        imgs[current].style.opacity = 0.0;
        imgs[next].style.opacity = 1.0;
        current = next;
    }, 5000);
})();
