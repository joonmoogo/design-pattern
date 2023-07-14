interface Employee{
    displayInfo() : void
}
// declare interface Employee

class Staff implements Employee{
    name : string;
    constructor(name:string){
        this.name = name;
    }
    // override
    displayInfo(): void {
        console.log(`staff name : ${this.name}`)
    }
}
 
class Manager implements Employee{
    name : string;
    constructor(name:string){
        this.name = name;
    }
    // override
    displayInfo(): void {
        console.log(`Manager name : ${this.name}`)
    }
}

let guy = new Staff('hong');
guy.displayInfo();
guy = new Manager('hong');
guy.displayInfo();

// this guy can be switched from staff to manager
// it means code can be reused