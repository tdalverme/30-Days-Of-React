// 1. Override the method you create in Animal class
class Mouse extends Animal {
    constructor (name, age, color, legs) {
        super(name, age, color, legs)
    }

    talk () {
        console.log(`I am a mouse called ${this.name}`)
    }
}

let mouse = new Mouse('Nashe', 13, 'Grey', 4)
mouse.talk()