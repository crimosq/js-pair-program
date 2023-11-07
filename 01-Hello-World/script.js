function createHelloWorld() {
    return function helloWorld() {
        console.log('Hello World')
    }
}

const f = createHelloWorld();

f();