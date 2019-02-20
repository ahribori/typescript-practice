function ClassDecorator(constructFn: Function) {
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
