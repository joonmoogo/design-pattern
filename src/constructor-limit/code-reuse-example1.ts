class Pet{
    name : string;
    age : number;
    constructor(name:string, age:number){
        this.name = name;
        this.age = age;
    }
    speak () : void {
        console.log(`${this.name} make a sound`);
    }  
}
// declare Pet class

class Dog extends Pet{
    breed : string;
    constructor(name:string,age:number,breed:string){
        super(name,age);
        this.breed = breed;
    }
    speak(): void {
        console.log('dog makes a sound');
    }
    // override Pet's method

}
// declare Dog class extends Pet

class Cat extends Pet{
    breed : string;
    constructor(name:string,age:number,breed:string){
        super(name,age);
        this.breed = breed;
    }
    speak(): void {
        console.log('cat makes a sound');
    }
    // override Pet's method
}
// declare Cat class extends Pet

let myPet = new Cat("meng",5,"korean short hair");
myPet.speak();
myPet = new Dog("meng",5,"korean short hair");
myPet.speak();