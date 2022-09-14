'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// const { getUser, getPosts, getComments } = require('./db');

// getUser(1, (error, user) => {
//     if (error) return console.error(error);

//     getPosts(user.id, (error, posts) => {
//         if (error) return console.error(error);

//         getComments(posts[0].id, (error, comments) => {
//             if (error) return console.error(error);

//             console.log(comments);
//         });
//     });
// });

// getUser(1)
//     .then(user => getPosts(user.id))
//     .then(posts => getComments(posts[0].id))
//     .then(comments => console.log(comments))
//     .catch(error => console.error(error));

function co(generator) {
    var iterator = generator();

    return new Promise(function (resolve, reject) {
        function run(prev) {
            var _iterator$next = iterator.next(prev),
                value = _iterator$next.value,
                done = _iterator$next.done;

            if (done) {
                resolve(value);
            } else if (value instanceof Promise) {
                value.then(run, reject);
            } else {
                run(value);
            }
        }

        run();
    });
}

// co(function* () {
//     try {
//         let user = yield getUser(1);
//         let posts = yield getPosts(user.id);
//         let comments = yield getComments(posts[0].id);

//         console.log(comments);
//     }
//     catch (error) {
//         console.error(error);
//     }
// });

function getUser1(id) {
    return { id: id };
}

var user = getUser1(1);

console.log(user);

async function getUser2(id) {
    return { id: id };
}

getUser2(1).then(function (user) {
    return console.log(user);
});

// Asynchronous function always invokes promise
async function getUser3(id) {
    // return { id: 1 };
    // если асинхронная функция непосредственно
    // возвращает обещание, то она не 
    // оборачивает его в другое обещание
    return Promise.resolve({ id: 1 });
}

getUser3(1).then(function (user) {
    return console.log(user);
});

// давайте посмотрим что произойдет если
// внутри асинхронной функции произойдет ошибка 04:50

var fetch = require('node-fetch');

async function getUser4(id) {
    try {
        var response = await fetch('https://jsonplaceholder.typicode.com/users/' + id);
        response = await response.json();

        return data;
    } catch (error) {
        throw new Error('Не удалось получить данные от сервера');
    }
}

async function main() {
    try {
        var _user = await getUser(1);
        console.log(_user);
    } catch (error) {
        console.error(error);
    }
}

main();

var dataService0 = {
    getUser: async function getUser(id) {
        try {
            var response = await fetch('https://jsonplaceholder.typicode.com/users/' + id);
            response = await response.json();

            return data;
        } catch (error) {
            throw new Error('Не удалось получить данные от сервера');
        }
    }
};

async function main() {
    try {
        var _user2 = await dataService0.getUser(1);
        console.log(_user2);
    } catch (error) {
        console.error(error);
    }
}

main();

var dataService1 = {
    getUser: async function getUser(id) {
        try {
            var response = await fetch('https://jsonplaceholder.typicode.com/users/' + id);
            response = await response.json();

            return data;
        } catch (error) {
            throw new Error('Не удалось получить данные от сервера');
        }
    }
};

async function main() {
    try {
        var _user3 = await dataService1.getUser(1);
        console.log(_user3);
    } catch (error) {
        console.error(error);
    }
}

main();

var DataService1 = function () {
    function DataService1() {
        _classCallCheck(this, DataService1);
    }

    _createClass(DataService1, [{
        key: 'getUser',
        value: async function getUser(id) {
            try {
                var response = await fetch('https://jsonplaceholder.typicode.com/users/' + id);
                response = await response.json();

                return data;
            } catch (error) {
                throw new Error('Не удалось получить данные от сервера');
            }
        }
    }]);

    return DataService1;
}();

async function main() {
    var dataService = new DataService1();

    try {
        var _user4 = await dataService.getUser(1);
        console.log(_user4);
    } catch (error) {
        console.error(error);
    }
}

main();

var DataService2 = function () {
    function DataService2(url) {
        _classCallCheck(this, DataService2);

        this.url = url;
    }

    _createClass(DataService2, [{
        key: 'getUser',
        value: async function getUser(id) {
            try {
                var response = await fetch(this.url + '/users/' + id);
                response = await response.json();

                return data;
            } catch (error) {
                throw new Error('Не удалось получить данные пользователя');
            }
        }
    }, {
        key: 'getPosts',
        value: async function getPosts(userId) {
            try {
                var response = await fetch(this.url + '/posts?userId=' + userId);
                response = await response.json();

                return data;
            } catch (error) {
                throw new Error('Не удалось получить посты');
            }
        }
    }, {
        key: 'getComments',
        value: async function getComments(postId) {
            try {
                var response = await fetch(this.url + '/comments?postId=' + postId);
                response = await response.json();

                return data;
            } catch (error) {
                throw new Error('Не удалось получить комментарии');
            }
        }
    }]);

    return DataService2;
}();

(async function () {
    var dataService = new DataService2('https://jsonplaceholder.typicode.com');

    try {
        var _user5 = await dataService.getUser(1);
        var posts = await dataService.getPosts(_user5.id);
        var comments = await dataService.getComments(posts[0].id);

        console.log(comments);
    } catch (error) {
        console.error(error);
    }
})();