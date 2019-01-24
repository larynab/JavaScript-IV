// CODE here for your Lambda Classes
class Person {
    constructor(attributes) {
        this.name = attributes.name;
        this.age = attributes.age;
        this.location = attributes.location;
        this.gender = attributes.gender;
    };
    speak() {
        console.log(`Hello my name is ${this.name}, and I am from ${this.location}.`);
    };
};

class Instructor extends Person {
    constructor(instructorAttributes){
        super(instructorAttributes);
        this.specialty = instructorAttributes.specialty;
        this.favLanguage = instructorAttributes.favLanguage;
        this.cactchPhrase = instructorAttributes.cactchPhrase; 
    };
    demo(subject) {
        console.log(`Today we are learning about ${subject}.`);
    };
    grade(student) {
        console.log(`${student.name} receives a perfect score on ${subject}`);
    };
};
