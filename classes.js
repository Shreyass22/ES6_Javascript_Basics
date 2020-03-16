// 5. Classes of ES6.
class Person {
    constructor(name, age, weight, height){
        this.name = name;
        this.age = age;
        this.weight = weight;
        this.height = height;
    };
    displayName(){
        console.log(this.name);
    }
}
let p1 = new Person ('shreyas', 20, 80, 177);
let p2 = new Person ('deepesh', 21, 77, 166);
p1.displayName();
p2.displayName();