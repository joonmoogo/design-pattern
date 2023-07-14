import Manager from "./Manager.ts";
import Staff from "./Staff.ts";
import Employee from "./Employee.ts";

export default class EmployeeFactory{
    static getInstance(choice : string) : Employee | undefined {
        if(choice ==='manager') return new Manager();
        else if(choice ==='staff') return new Staff();
    }
    // common method creating class
    // but not Abstract Factory method
}