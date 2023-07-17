export default class Prototype{
    value: number;

    constructor(value:number){
        this.value=value;
    }

    clone() : Prototype{
        return new Prototype(this.value);
    }
}
const originalObject = new Prototype(10);
const clonedObject = originalObject.clone();

// 매우 간단 
