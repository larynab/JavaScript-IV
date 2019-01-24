/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/

/*
function GameObject(property) {
  this.createdAt = property.createdAt;
  this.dimensions = property.dimensions;
  this.destroy = function() {
    return `${this.name} was removed from the game`
  };
};

function CharacterStats(attributes) {
  GameObject.call(this, attributes);
  this.healthPoints = attributes.healthPoints;
  this.name = attributes.name;
  this.takeDamage = function() {
    return `${this.name} took damage.`;
  };
};

function Humanoid(stats){
  GameObject.call(this, stats);
  CharacterStats.call(this, stats);
  this.team = stats.team;
  this.weapons = stats.weapons;
  this.language = stats.language;
  this.greet = function() {
    return `${this.name} offers a greeting in ${this.language}`;
  };
};
*/ 

class Humanoid {
    constructor(attributes) {
        this.createdAt = attributes.createdAt;
        this.dimensions = attributes.dimensions;
        this.healthPoints = attributes.healthPoints;
        this.name = attributes.name;
        this.team = attributes.team;
        this.weapons = attributes.weapons;
        this.language = attributes.language;
    };
    destroy() {
        console.log(`${this.name} was removed from the game`);
    };
    takeDamage() {
        console.log(`${this.name} took damage.`);
    };
    greet() {
        console.log(`${this.name} offers a greeting in ${this.language}`);
    };
};
 
 class Villain extends Humanoid {
    constructor(villainAttributes){
        super(villainAttributes);
    };
    poisonDagger() {
        console.log(`${this.name} throws a deadly poisoned dagger! Damage for 10 health points.`);
    };    
 };
 class Hero extends Humanoid {
     constructor(heroAttributes){
         super(heroAttributes);
     };
     charmingEyes() {
         console.log(`${this.name} stares deeply into your eyes, you feel feverish and overwhelmed, weakened.`);
     };
 };
/*
function Villain(mod){
  Humanoid.call(this, mod);
  this.poisonDagger = function() {
    return `${this.name} throws a deadly poisoned dagger! Damage for 10 health points.`;
  };
};

function Hero(mod){
  Humanoid.call(this, mod);
  this.charmingEyes = function() {
    return `${this.name} stares deeply into your eyes, you feel feverish and overwhelmed, weakened.`;
  };
};
*/
   const mage = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 1,
      height: 1,
    },
    healthPoints: 5,
    name: 'Bruce',
    team: 'Mage Guild',
    weapons: [
      'Staff of Shamalama',
    ],
    language: 'Common Tongue',
  });

  const swordsman = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 2,
      height: 2,
    },
    healthPoints: 15,
    name: 'Sir Mustachio',
    team: 'The Round Table',
    weapons: [
      'Giant Sword',
      'Shield',
    ],
    language: 'Common Tongue',
  });

  const archer = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 2,
      height: 4,
    },
    healthPoints: 10,
    name: 'Lilith',
    team: 'Forest Kingdom',
    weapons: [
      'Bow',
      'Dagger',
    ],
    language: 'Elvish',
  });

 const paul = new Hero({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 3,
    height: 5,
  },
  healthPoints: 5,
  name: "Super Paul",
  team: 'Sky Kingdom',
  weapons: [
    'Fists',
    'Iron Muscles',
  ],
  language: 'English'
});
 
 const eric = new Villain({
   createdAt: new Date(),
  dimensions: {
    length: 1,
    width: 2,
    height: 3,
  },
  healthPoints: 7,
  name: "Exilimor",
  team: 'Nether Warp',
  weapons: [
    'Electron Whip',
    'Plasma Flak Cannon',
  ],
  language: 'Enrwiw'
  });


  console.log(mage.createdAt); // Today's date
  console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
  console.log(swordsman.healthPoints); // 15
  console.log(mage.name); // Bruce
  console.log(swordsman.team); // The Round Table
  console.log(mage.weapons); // Staff of Shamalama
  console.log(archer.language); // Elvish
 archer.greet(); // Lilith offers a greeting in Elvish.
 mage.takeDamage(); // Bruce took damage.
 swordsman.destroy(); // Sir Mustachio was removed from the game.
 paul.charmingEyes(); // ${this.name} stares deeply into your eyes, you feel feverish and overwhelmed, weakened.
 eric.poisonDagger(); // ${this.name} throws a deadly poisoned dagger! Damage for 10 health points.
 paul.destroy(); // Super Paul was removed from game.
