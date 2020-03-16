// 6. Inheritance of ES6.
class Person {
constructor(name, age, weight, height){
    this.name = name;
    this.age = age;
    this.weight = weight;
    this.height = height;
    };
    displayName(){console.log(this.name);}
    displayAge(){console.log(this.age);}
    displayWeight(){console.log(this.weight);}
    displayHeight(){console.log(this.height);}

}
class Programmer extends Person{
    constructor(name, age, weight, height, language){
        super(name, age, weight, height);
        this.language = language;
    };
    displayLanguage(){ console.log(this.language); }
}
let p1 = new Person ('shreyas', 20, 80, 177); // class person.
let p2 = new Programmer ('deepesh', 21, 77, 166, "JAVASCRIPT"); // inherit classs programmer.
p1.displayName();
p1.displayAge();
p1.displayWeight();
p1.displayHeight();
console.log("------------------------------------------------");
p2.displayName();
p2.displayAge();
p2.displayWeight();
p2.displayHeight();
p2.displayLanguage();