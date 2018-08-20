'use strict';

(function () {
    var delay = 10,
        i = 0;
    var startTimer = function startTimer() {
        //console.log('Function startTimer run');
        var elem = document.getElementById('circle'),
            bottom = elem.offsetTop;
        console.log(bottom);
        if (i < 10) {
            //console.log(`Function startTimer ${i} run`);
            setTimeout(startTimer, delay);
            elem.style.top = bottom + 20 + 'px';
        }
        i++;
    };

    var timer = setTimeout(startTimer, delay);
})();