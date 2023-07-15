import Employee from "./Employee.ts";
import Manager from "./Manager.ts";
import Staff from "./Staff.ts";
import { Work, Professional, Novice } from "./Work.ts";

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