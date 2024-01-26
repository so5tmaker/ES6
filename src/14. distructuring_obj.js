// destructuring object assignment

let user = {
    firstName: 'John',
    lastName: 'Doe',
    social: {
        facebook: 'johndoe',
        twitter: 'jdoe'
    }
};

let person = {
    firstName: 'John',
    lastName: 'Doe'
};

//let {firstName: first, lastName: last} = person;

//let { firstName: first, lastName: last, age = 25 } = { firstName: 'John', lastName: 'Doe' };

let { firstName: first, lastName: last, social: { facebook: fb }, age = 25 } = user;

console.log(first, last, fb, age);

// function post(url, { data, cache }) {
//     console.log(data, cache);
// }

function post(url, { data: { firstName, lastName }, cache }) {
    console.log(firstName, lastName, cache);
}

let result = post('api/users', { data: user, cache: false });

function getUserInfo() {
    return {
        firstName: 'John',
        lastName: 'Doe',
        social: {
            facebook: 'johndoe',
            twitter: 'jdoe'
        }
    };
}

let { firstName, lastName, social: { twitter } } = getUserInfo();

console.log(firstName, lastName, twitter);
