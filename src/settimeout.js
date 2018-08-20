(() => {
    let delay = 10,
        i = 0;
    let startTimer = () => {
        //console.log('Function startTimer run');
        let elem = document.getElementById('circle'),
            bottom = elem.offsetTop;
            console.log(bottom);
        if (i < 10) {
            //console.log(`Function startTimer ${i} run`);
            setTimeout(startTimer, delay);
            elem.style.top = bottom + 20 + 'px';
        }
        i++;
    }

    let timer = setTimeout(startTimer, delay);
})();