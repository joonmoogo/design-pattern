import Animal from "./Animal.ts";
export default class Dog extends Animal{
    breed : string;

    constructor(name:string, breed:string){
        super(name);
        this.breed = breed;
    }

    speak() : void{
        console.log(`${this.name} barks`);
    }

    fetch() : void{
        console.log(`${this.name} fetches the ball`);
    }
}

const dog = new Dog("doggy", "Retriver");

dog.spaek();
dog.speak();