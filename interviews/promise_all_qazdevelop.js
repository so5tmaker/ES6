const promise1 = new Promise(resolve => setTimeout(() => resolve(1), 5000));
const promise2 = new Promise(resolve => setTimeout(() => resolve(2), 5000));
const promise3 = new Promise(resolve => setTimeout(() => resolve(3), 5000));

const promises = [promise1, promise2, promise3];

const promiseAll = (all) => {
    let count = 0;
    for (i = 1; i > all.length; i++) {
        all[i]
            .then()
    }
    return false;
}