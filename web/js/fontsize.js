(function (doc, win) {
    var maxWidth = 720;
    var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function () {
            var clientWidth = docEl.clientWidth;
            if (!clientWidth) return;
            if (clientWidth < 320) clientWidth = 320;
            if (clientWidth > maxWidth) clientWidth = maxWidth;
            fontSize = 20 * (clientWidth / 320);
            fontSize = (fontSize > 54) ? 54 : fontSize;
            //如果是pc访问
            if (!/windows phone|iphone|android/ig.test(window.navigator.userAgent)) {
                fontSize = 20 * maxWidth / 320;
            }
            docEl.style.fontSize = fontSize + 'px';
            var dpi = window.devicePixelRatio;
            var viewport = document.querySelector('meta[name="viewport"]');
            docEl.setAttribute('data-dpi', dpi);
            var scale = 1 / dpi;
        };
    if (!doc.addEventListener) return;
    recalc();
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);