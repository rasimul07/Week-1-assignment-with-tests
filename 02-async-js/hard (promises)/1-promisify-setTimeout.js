/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const value = true;
            if (value) {
                resolve("resolved")
            } else {
                reject("rejected")
            }
        }, (n * 1000));
    });
}



wait(4).then((a) => {
    console.log(a);
}).catch((err) => {
    console.log(err);
})