class Teacher{
    private name : string = '';

    constructor(name:string){
        this.setName(name);
    }

    setName(name:string) : void{
        this.name = name;
    }
    getName():string{
        return this.name;
    }
}

class Student{
    private studentId:string|undefined;
    private inCharge : Teacher|undefined;
    constructor(studentId:string|undefined, inCharge:Teacher|undefined){
        this.studentId = studentId;
        this.inCharge = inCharge;
    }
    setStudentId(studentId : string) : void{
        this.studentId = studentId;
    }
    getStudentId() : string|undefined{
        return this.studentId;
    }
    setTeacher(inCharge:Teacher): void{
        this.inCharge = inCharge;
    }
    getTeacher() : Teacher|undefined{
        return this.inCharge;
    }
    clone() : Student{
        return new Student(this.getStudentId(),this.getTeacher())
    }
}

const t1 = new Teacher('sam');
const s1 = new Student('s1',t1);
const s2 = s1.clone()
const s3 = s1.clone();
