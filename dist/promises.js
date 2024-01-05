'use strict';

function applyForVisa(documents) {
    console.log('Обработка заявления...');
    var promise = new Promise(function (resolve, reject) {
        setTimeout(function () {
            Math.random() > 0 ? resolve({}) : reject('В визе отказано: нехватка документов');
        }, 2000);
    });
    return promise;
}

function getVisa(visa) {
    console.info('Виза получена');
    // return visa;
    return new Promise(function (resolve, reject) {
        // resolve(visa);
        setTimeout(function () {
            return resolve(visa);
        }, 5000);
    });
}

function bookHotel(visa) {
    console.log(visa);
    console.log('Бронируем отель');
    // return {};
    // return new Promise(function(resolve, reject, visa){
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

applyForVisa({}).then(getVisa).then(bookHotel).then(buyTickets).catch(function (error) {
    return console.error(error + 1);
});