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
personPrinter.print({name: '정현승', age: 3});
nestedTypePrinter.print(numberPrinter);