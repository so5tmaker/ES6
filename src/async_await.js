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
    const iterator = generator();

    return new Promise((resolve, reject) => {
        function run(prev) {
            const { value, done } = iterator.next(prev);

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
    return { id }
}

let user = getUser1(1);

console.log(user);


async function getUser2(id) {
    return { id }
}

getUser2(1).then(user => console.log(user));


// Asynchronous function always invokes promise
async function getUser3(id) {
    // return { id: 1 };
    // если асинхронная функция непосредственно
    // возвращает обещание, то она не 
    // оборачивает его в другое обещание
    return Promise.resolve({ id: 1 });
}

getUser3(1)
    .then(user => console.log(user));

// давайте посмотрим что произойдет если
// внутри асинхронной функции произойдет ошибка 04:50

const fetch = require('node-fetch');

async function getUser4(id) {
    try {
        let response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
        response = await response.json();

        return data;
    } catch (error) {
        throw new Error('Не удалось получить данные от сервера');
    }
}

async function main() {
    try {
        let user = await getUser(1);
        console.log(user);
    } catch (error) {
        console.error(error);
    }
}

main();

const dataService0 = {
    getUser: async function (id) {
        try {
            let response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
            response = await response.json();

            return data;
        } catch (error) {
            throw new Error('Не удалось получить данные от сервера');
        }
    }
}

async function main() {
    try {
        let user = await dataService0.getUser(1);
        console.log(user);
    } catch (error) {
        console.error(error);
    }
}

main();

const dataService1 = {
    async getUser(id) {
        try {
            let response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
            response = await response.json();

            return data;
        } catch (error) {
            throw new Error('Не удалось получить данные от сервера');
        }
    }
}

async function main() {
    try {
        let user = await dataService1.getUser(1);
        console.log(user);
    } catch (error) {
        console.error(error);
    }
}

main();

class DataService1 {
    async getUser(id) {
        try {
            let response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
            response = await response.json();

            return data;
        } catch (error) {
            throw new Error('Не удалось получить данные от сервера');
        }
    }
}

async function main() {
    let dataService = new DataService1();

    try {
        let user = await dataService.getUser(1);
        console.log(user);
    } catch (error) {
        console.error(error);
    }
}

main();

class DataService2 {

    constructor(url) {
        this.url = url;
    }

    async getUser(id) {
        try {
            let response = await fetch(`${this.url}/users/${id}`);
            response = await response.json();

            return data;
        } catch (error) {
            throw new Error('Не удалось получить данные пользователя');
        }
    }

    async getPosts(userId) {
        try {
            let response = await fetch(`${this.url}/posts?userId=${userId}`);
            response = await response.json();

            return data;
        } catch (error) {
            throw new Error('Не удалось получить посты');
        }
    }

    async getComments(postId) {
        try {
            let response = await fetch(`${this.url}/comments?postId=${postId}`);
            response = await response.json();

            return data;
        } catch (error) {
            throw new Error('Не удалось получить комментарии');
        }
    }

}

(async () => {
    let dataService = new DataService2('https://jsonplaceholder.typicode.com');

    try {
        let user = await dataService.getUser(1);
        let posts = await dataService.getPosts(user.id);
        let comments = await dataService.getComments(posts[0].id);

        console.log(comments);
    } catch (error) {
        console.error(error);
    }
})();