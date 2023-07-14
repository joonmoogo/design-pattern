import Employee from "./Employee";
import Manager from "./Manager";
import Staff from "./Staff";
import { Work, Professional, Novice } from "./Work";

interface EmployeeFactory{
    getEmployeeInstance() : Employee|undefined
    getWorkInstance() : Work|undefined
}

class ManagerFactory implements EmployeeFactory{
    getEmployeeInstance(): Employee | undefined {
        return new Manager;
    }
    getWorkInstance(): Work | undefined {
        return new Professional;
    }
}

class StaffFactory implements EmployeeFactory{
    getEmployeeInstance(): Employee | undefined {
        return new Staff;
    }
    getWorkInstance(): Work | undefined {
        return new Novice;
    }
}

export {
    ManagerFactory,
    StaffFactory,
}