// The setInterval() method will continue calling the function until clearInterval() is called, 
// or the window is closed.
(() => {
    let delay = 10;
    let startTimer = (pixels) => {
        console.log(pixels);
        //console.log('Function startTimer run');
        let elem = document.getElementById('circle'),
            bottom = elem.offsetTop;
        //console.log(bottom);
        if ((pixels > 0 && bottom > 250) || (pixels < 0 && bottom < 50)) {
            clearInterval(timer);

            timer = setInterval(() => {
                startTimer(pixels * -1);
            }, delay);
        } else {

        }
        elem.style.top = bottom + pixels + 'px';
    };

    let timer = setInterval(() => {
        startTimer(1);
    }, delay);

})();