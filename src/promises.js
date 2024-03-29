function applyForVisa(documents) {
    console.log('Обработка заявления...');
    let promise = new Promise((resolve, reject) => {
        setTimeout(function () {
            Math.random() > 0.5 ? resolve('ВОТ ПОДТВЕРЖДЕНИЕ ВАШЕЙ ВИЗЫ!!!') : reject('В визе отказано: нехватка документов');
        }, 2000);
    });
    return promise;
}

function getVisa(visa) {
    console.info('Виза получена');
    // return visa;
    return new Promise(function (resolve, reject) {
        // resolve(visa);
        setTimeout(() => resolve(visa), 500);
    });
}

function bookHotel(visa) {
    console.log(visa);
    console.log('Бронируем отель');
    // return {};
    // return new Promise(function (resolve, reject, visa) {
    //     // reject('There are no places');
    //     resolve(visa);
    // });
    // return Promise.reject('There are no places');
    return Promise.resolve(visa);
}

function buyTickets(booking) {
    console.log('Покупаем билеты');
    console.log('Бронь', booking);
}

applyForVisa({})
    .then(getVisa)
    .then(bookHotel)
    .then(buyTickets)
    .catch(error => console.error(error));