/**
 * Basic generic
 */

class Printer<T> {
    constructor() {
    }

    print(something: T): void {
        console.log(something);
    }
}

type Person = {
    name: string,
    age: number,
};

const numberPrinter = new Printer<number>();
const stringPrinter = new Printer<string>();
const personPrinter = new Printer<Person>();
const nestedTypePrinter = new Printer<Printer<number>>();

numberPrinter.print(13);
stringPrinter.print('안녕!');
personPrinter.print({ name: '정현승', age: 3 });
nestedTypePrinter.print(numberPrinter);


class MyGenericClass<T> {
    private _name: T;

    constructor(name: T) {
        this._name = name;
    }
}

const myClass: MyGenericClass<string> = new MyGenericClass('Daniel');

/**
 * Generic with extends
 */

// T를 제한할 수 있다.
class MyClassWithExtendGeneric<T extends string | number> {
    private _name: T;

    constructor(name: T) {
        this._name = name;
    }
}

const myClassWithExtendsGeneric = new MyClassWithExtendGeneric(3);


/**
 * Generic with multiple types
 */

class MyClassWithMultipleGeneric<T, K> {
    private _name: T;
    private _age: K;

    constructor(name: T, age: K) {
        this._name = name;
        this._age = age;
    }
}

new MyClassWithMultipleGeneric<string, number>('야', 32);

