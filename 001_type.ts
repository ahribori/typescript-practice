/**
 * 부울 (Boolean)
 */
const isDone: boolean = true;

/**
 * 숫자 (Number)
 */
const decimal: number = 6;
const hex: number = 0xf00d;
const binary: number = 0b1010;
const octal: number = 0o744;

/**
 * 문자열 (String)
 */
const str = `print ${decimal}`;

/**
 * 배열 (Array)
 */
const numberList: number[] = [1, 2, 3];
const stringList: string[] = ['1', '2', '3'];
const numberList2: Array<number> = [1, 2, 3];

/**
 * 튜플 (Tuple)
 */
let x: [string, number];
// 초기화
x = ['hello', 10]; // 좋아요
// 부정확한 초기화
// x = [10, 'hello']; // 오류
console.log(x[0].substr(1));
// console.log(x[1].substr(1)) // 오류

x[3] = 3;
x[4] = 'a';
// x[5] = false; // 오류

/**
 * 열거 (Enum)
 */
enum Animal { Dog = 1, Cat = 4 , Cow }
let dog: Animal = Animal.Dog;
let cat: Animal = Animal.Cat;
let cow: Animal = Animal.Cow;
console.log(dog, cat, cow);

/**
 *  Any
 */
let notSure: any = 4;
notSure = 'hi';
notSure = false;

/**
 * Void
 */
const voidVar: void = undefined;
const voidVar2: void = null;

function print(m): void {
    console.log(m);
}

function func1(): void {
    return undefined;
}

function func2(): void {
    return null;
}

function func3(): void {
    // return 3; // 오류
}

/**
 * Null & Undefined
 */
let u: undefined = undefined;
let n: null = null;
let union: undefined | null | string = undefined;
let union2: undefined | null | string = null;

/*
 * Never -> 엔드포인트가 있으면 안됨
 */
function error(message: string): never {
    throw new Error();
}

function fail(): never {
    return error('Something failed');
}

function infiniteLoop(): never {
    while (true) {
    }
}