/**
 * Type assertion
 *
 * 컴파일러에게 '타입이 이것이다' 라고 알려주는 것.
 * Type assertion 은 작성자가 신뢰도 있게 작성해야 한다.
 */

const strValue: any = 'this is a string';

const strLength1 = (strValue as string).length;

// 이 방법은 jsx 에서는 다른 문법과 헷갈릴 수 있기 때문에 지양한다.
const strLength2 = (<string>strValue).length;

