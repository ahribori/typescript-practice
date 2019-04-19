function* counter() {
  console.log('첫번째 호출');
  yield 1;
  console.log('두번째 호출');
  yield 2;
  console.log('세번쨰 호출');
}

const iterator = counter();

while (!iterator.next().done) {
  const a = iterator.next();
  console.log(a)

}
