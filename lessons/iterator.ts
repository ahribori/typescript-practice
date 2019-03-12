/**
 * Iterator
 *
 * target es3 or es5 에서는 array 에만 for..of를 사용 가능하다.
 * target ex6 이상은 Symbol.iterator 함수를 구현하면 어떤 객체에도 for..of 사용 가능
 */

class CustomIterable implements Iterable<string> {
    [Symbol.iterator](): Iterator<string> {
        const iterator:Iterator<string> = {
            next(): IteratorResult<string> {
                return {
                    done: false,
                    value: 'hi'
                }
            }
        };
        return iterator;
    }
}

const customIterable: CustomIterable = new CustomIterable();

for (const item of customIterable) {
    console.log(item)
}
