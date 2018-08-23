'use strict';

// The setInterval() method will continue calling the function until clearInterval() is called, 
// or the window is closed.
(function () {
    var delay = 10;
    var startTimer = function startTimer(pixels) {
        console.log(pixels);
        //console.log('Function startTimer run');
        var elem = document.getElementById('circle'),
            bottom = elem.offsetTop;
        //console.log(bottom);
        if (pixels > 0 && bottom > 250 || pixels < 0 && bottom < 50) {
            clearInterval(timer);

            timer = setInterval(function () {
                startTimer(pixels * -1);
            }, delay);
        } else {}
        elem.style.top = bottom + pixels + 'px';
    };

    var timer = setInterval(function () {
        startTimer(1);
    }, delay);
})();