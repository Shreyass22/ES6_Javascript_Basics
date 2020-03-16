function* simpleGenerator() {
    yield 'javascript';
    yield 'nodejs';
    console.log('this is the line after nodejs');
    yield 'reactjs';
}
let simple = simpleGenerator();
console.log(simple.next().value);
console.log(simple.next().value);
console.log(simple.next().value);
console.log(simple.next().value);
console.log("-----------------")
// another type.
function* simpleIncrement(){
    var id = 0;
    while(id < 4)
        yield id++ ;
}
let sample = simpleIncrement();
console.log(sample.next().value);
console.log(sample.next().value);
console.log(sample.next().value);
console.log(sample.next().value);
console.log(sample.next().value);