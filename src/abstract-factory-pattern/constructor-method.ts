import Employee from "./Employee.ts";
import Manager from "./Manager.ts";
import Staff from "./Staff.ts";
import EmployeeFactory from "./EmployeeFactory.ts";
import AdvancedEmployeeFactory from "./AdvancedEmployeeFactory.ts";
import {ManagerFactory,StaffFactory} from './AbstractFactoryPattern.ts';

// a method to manage constructor seperately
const getInstace = (choice : string) : Employee | undefined =>{
    if(choice ==='manager'){
        return new Manager();
    }
    else if(choice ==='staff'){
        return new Staff();
    }
}

let one = getInstace('manager');
console.log(one?.name);
let two = getInstace('staff');
console.log(two?.name);


EmployeeFactory.getInstance('manager');
EmployeeFactory.getInstance('staff');

let advancedEmployeeFactory = new AdvancedEmployeeFactory('manager');
const onee = advancedEmployeeFactory.getEmployeeInstance();
advancedEmployeeFactory = new AdvancedEmployeeFactory('staff');
const twoo = advancedEmployeeFactory.getEmployeeInstance();
const threee = advancedEmployeeFactory.getEmployeeInstance();
console.log(onee?.name);
console.log(twoo?.name);
console.log(threee?.name)

// const managerFacotry = new ManagerFactory();
// const staffFactory = new StaffFactory();
