// 1. Create an Animal class. The class will have name, age, color, legs properties and create different methods
class Animal {
    constructor (name, age, color, legs) {
        this.name = name
        this.age = age
        this.color = color
        this.legs = legs
    }

    sayName () {
        return `My name is ${this.name}`
    }
}

// 2. Create a Dog and Cat child class from the Animal Class.
class Dog extends Animal {
    constructor (name, age, color, legs, breed) {
        super(name, age, color, legs)
        this.breed = breed
    }

    talk () {
        return 'woof woof'
    }
}

class Cat extends Animal {
    constructor (name, age, color, legs) {
        super(name, age, color, legs)
    }

    talk () {
        return 'miau miau'
    }
}