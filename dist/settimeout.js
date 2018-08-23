"use strict";

(function () {
    // let delay = 10,
    //     i = 0;
    // let startTimer = () => {
    //     //console.log('Function startTimer run');
    //     let elem = document.getElementById('circle'),
    //         bottom = elem.offsetTop;
    //     console.log(bottom);
    //     if (i < 10) {
    //         //console.log(`Function startTimer ${i} run`);
    //         setTimeout(startTimer, delay);
    //         elem.style.top = bottom + 20 + 'px';
    //     }
    //     i++;
    // }

    // let timer = setTimeout(startTimer, delay);

    for (var i = 0; i < 3; i++) {
        setTimeout(function (i) {
            console.log(i);
        }, 1000, i); // third parametr in setTimeout
    };
})();