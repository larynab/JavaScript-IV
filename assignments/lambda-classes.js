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
    constructor(instructorAttributes) {
        super(instructorAttributes);
        this.specialty = instructorAttributes.specialty;
        this.favLanguage = instructorAttributes.favLanguage;
        this.catchPhrase = instructorAttributes.catchPhrase; 
    };
    demo(subject) {
        console.log(`Today we are learning about ${subject}.`);
    };
    grade(student, subject) {
        console.log(`${student.name} receives a perfect score on ${subject}`);
    };
};

class Student extends Person {
    constructor(studentAttributes) {
        super(studentAttributes);
        this.previousBackground = studentAttributes.previousBackground;
        this.className = studentAttributes.className;
    };
    listsSubjects(student, favoriteSubjects) {
        console.log(`${student.name} likes ${favoriteSubjects}`);
    };
    PRAssignment(student, subject) {
        console.log(`${student.name} has submitted a PR for ${subject}`);
    };
    sprintChallenge(student, subject) {
        console.log(`${student.name} has begun sprint challenge on ${subject}`);
    };
};

class ProjectManagers extends Instructor {
    constructor(pmAttributes) {
        super(pmAttributes);
        this.gradClassName = pmAttributes.gradClassName;
        this.favInstructor = pmAttributes.favInstructor;
    };
    standUp(pm, channel) {
        console.log(`${pm.name} announces to ${channel}, @channel standy times!​​​​​`);
    };
    debugsCode(pm, student, subject) {
        console.log(`${pm.name} debugs ${student.name}'s code on ${subject}.`);
    };

};

//Instructors 
const fred = new Instructor({
  name: 'Fred',
  location: 'Bedrock',
  age: 37,
  gender: 'male',
  favLanguage: 'JavaScript',
  specialty: 'Front-end',
  catchPhrase: `Don't forget the homies`,
});
const kyle = new Instructor({
  name: 'Kyle',
  location: 'Azura',
  age: 800,
  gender: 'male',
  favLanguage: 'Python',
  specialty: 'Front-end',
  catchPhrase: `Patience can be chosen with wisdom`,
});

//Students
const phil = new Student({
    name: 'Phil',
    location: 'Tzuni',
    age: 20,
    gender: 'male',
    previousBackground: 'Robotics',
    className: 'INT11',
});
const beatrix = new Student({
    name: 'Lady Beatrix',
    location: 'Isilam',
    age: 50,
    gender: 'female',
    previousBackground: 'Hacking',
    className: 'KIN77',
});

//Project Managers
const jimbo = new ProjectManagers({
    name: 'Yojimbo',
    location: 'Vzraq',
    age: 100,
    gender: 'male',
    gradClassName: 'TNT99',
    favInstructor: 'Gandalf The White',
    favLanguage: 'Watermelon',
    specialty: 'Samurai Code',
    catchPhrase: 'one shot one kill',

});
const vim = new ProjectManagers({
    name: 'Vimuntriza',
    location: 'Renjikal',
    age: 150,
    gender: 'female',
    gradClassName: 'XUR66',
    favInstructor: 'Optimus Prime',
    favLanguage: 'Xurxi',
    specialty: 'Dark Magic',
    catchPhrase: 'build it break it'
});

//commands
console.log(fred);
console.log(kyle);
fred.demo('JSIV');
kyle.grade(phil, 'Fusion');
console.log(phil);
console.log(beatrix);
phil.listsSubjects(phil, ['Alchemy', 'Herbalism']);
beatrix.sprintChallenge(beatrix, 'KIN77');
jimbo.standUp(jimbo, 'KIN77');
console.log(vim);
console.log(jimbo);
vim.debugsCode(vim, beatrix, 'Conjouring');