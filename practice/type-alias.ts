/**
 * Type alias
 *
 * 인터페이스랑 비슷해보인다.
 * 원시타입을 나만의 타입명으로 지정할 수 있음. (별 의미는 없다)
 * 별명을 만드는 것이지 새로운 타입을 만드는 것은 아니다.
 */


// 1. Aliasing Primitive (별 의미 없음)
type MyStringType = string;

const helloStr = 'hello';

let myStr: MyStringType = 'hello';
myStr = helloStr;


// 2. Union type

type StringOrNumber = string | number

let unionValue: StringOrNumber = 'hello';
unionValue = 3;
unionValue = 'a';


/**
 * Interface 와 차이점
 *
 * 1. Type alias 는 오브젝트 리터럴 타입으로 간주되어서 가이드 문구에서 타입 이름이 아닌 리터럴로 표시된다.
 * 2. Type 끼리 extends, implements 안됨.
 *
 * 아무튼 엥간하면 interface 사용하자!
 *
 */
