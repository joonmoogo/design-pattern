export default class Animal{
    name: string;

    constructor(name:string){
        this.name = name;
    }

    spaek() : void{
        console.log(`${this.name} makes a sound`);
    }
}

