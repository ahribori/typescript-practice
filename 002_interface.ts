function printLabel(labelledObject: { label: string }) {
    console.log(labelledObject.label);
}

let myObj = { size: 10, label: 'Size 10 Object' };

printLabel(myObj);

//-----------------------------

interface LabelledValue {
    label: string;
}

function printLabel2(labelledObject: LabelledValue) {
    console.log(labelledObject.label);
}

printLabel2(myObj);


//-----------------------------

/**
 * Optional properties
 * 있을 수도 있고 없을 수도 있음
 */
interface SquareConfig {
    color?: string;
    width?: number;
}

function createSquare(config: SquareConfig): { color: string; area: number } {
    let newSquare = { color: 'white', area: 100 };
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width ** 2;
    }
    return newSquare;
}

let mySquare = createSquare({ color: 'black' });
console.log(mySquare);

//-----------------------------

/**
 * Readonly properties
 */
interface Point {
    readonly x: number;
    readonly y: number;
}

let p1: Point = { x: 10, y: 20 };
// p1.x = 5; // 오류!

let a: number[] = [1, 2, 3, 4];
let ro: ReadonlyArray<number> = a;

// ro[0] = 12; // 오류!
// ro.push(5); // 오류!
// ro.length = 100; // 오류!
// a = ro; // 오류!

//-----------------------------

/**
 * 타입 초과검사 회피 (권장하지 않음)
 */
interface SquareConfig2 {
    color?: string;
    width?: number;
    [propName: string]: any;
}

let squareOptions = { c: 'red', width: 100 };
let mySquare2 = createSquare(squareOptions);

//-----------------------------

/**
 * 함수 타입
 */
interface SearchFunc {
    (source: string, subString: string): boolean;
}

let mySearch: SearchFunc;

mySearch = (source: string, subString: string) => {
    let result = source.search(subString);
    return result > -1;
};

mySearch = (source: string, subString: string) => {
    let result = source.search(subString);
    return result > -1;
};

mySearch = (src: string, sub: string) => { // 변수명은 일치하지 않아도 된다
    let result = src.search(sub);
    return result > -1;
};

//-----------------------------

/**
 * 인덱싱 타입
 */
interface StringArray {
    [index: number]: string;
}

let myArray: StringArray;

myArray = ['Ahri', 'Bori'];

myArray = {
  0: 'a',
  1: 'b',
};

// myArray = {
//     'a': 1, // 오류
//     'b': 2,
// };

class Animal2 {
    name: string;
}
class Dog extends Animal2 {
    breed: string;
}

// 오류: numeric과 string으로 인덱싱하면 완전히 다른 타입의 Animal을 얻을 수 있습니다!
interface NotOkay {
    // [x: number]: Animal;
    [x: string]: Dog;
}

interface NumberDictionary {
    [index: string]: number;
    length: number; // 좋아요, length는 number입니다.
    // name: string; // 오류, 'name'의 타입이 인덱서의 하위 타입이 아닙니다.
}

interface ReadonlyStringArray {
    readonly [index: number]: string;
}
let myArr: ReadonlyStringArray = ["Alice", "Bob"];
// myArr[2] = "Mallory"; // 오류!


//-----------------------------

/**
 * 클래스 타입
 */
interface ClockInterface {
    currentTime: Date;
}

class Clock implements ClockInterface {
    currentTime: Date;
    constructor(h: number, m: number) {
    }
}

