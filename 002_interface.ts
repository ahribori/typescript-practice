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