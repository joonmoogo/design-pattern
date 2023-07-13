import Animal from "./Animal.js";
export default class Dog extends Animal {
    constructor(name, breed) {
        super(name);
        this.breed = breed;
    }
    speak() {
        console.log(`${this.name} barks`);
    }
    fetch() {
        console.log(`${this.name} fetches the ball`);
    }
}
