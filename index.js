function receivesAFunction(callback) {
    callback();
}

function returnsANamedFunction() {
    return function namedFunction() {
        console.log('hi');
    }
}

function returnsAnAnonymousFunction() {
    return function () {
        console.log('bye');
    }
}