import Employee from "./Employee.ts";
export default class Manager extends Employee{
    name : string = 'manager';
    constructor(){
        super();
    }
}