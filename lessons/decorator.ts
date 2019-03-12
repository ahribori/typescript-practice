function ClassDecorator(constructor: Function) {
    console.log('hello');
}

function ClassDecoratorFactory(show: boolean) {
    if (show) {
        return ClassDecorator
    }
    return () =>{};
}

@ClassDecoratorFactory(false)
class MyClass {

}


function Hello(constructor: Function) {
    constructor.prototype.hello = () => { console.log('hello') }
}

@Hello
class HelloClass {

}

const helloClass = new HelloClass();

(<any>helloClass).hello();
