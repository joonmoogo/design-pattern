import Employee from "./Employee.ts";
import Manager from "./Manager.ts";
import Staff from "./Staff.ts";
import { Work, Professional, Novice } from "./Work.ts";

// Advanced Factory pattern
export default class AdvancedEmployeeFactory{
    private choice : string;
    constructor(choice : string){
        this.choice = choice;
    }
    getEmployeeInstance() : Employee|undefined {
        if(this.choice === 'manager') return new Manager();
        else if(this.choice ==='staff') return new Staff();
        return undefined;
    }
    getWorkInstance() : Work|undefined{
        if(this.choice ==='manager') return new Professional();
        else if(this.choice ==='staff') return new Novice();
        return undefined;
    }
}
