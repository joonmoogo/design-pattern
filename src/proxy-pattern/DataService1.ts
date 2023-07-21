import DAO from "./DAO.ts";

class DataService1{
    dao = new DAO();

    accessName(index:number) : string{
        return this.dao.accessName(index);
    }
    accessSecInfo(index:number):string{
        return "data access denied";
    }
    accessBirthDayInfo(index:number):string{
        return "data access denied";
    }
    accessGrade(index:number):string{
        return "data access denied";
    }

}

// 이름만 접근 가능할 수 있는 Service 객체1이다.
// 일단 모양의 통일성을 주기 위해 모든 메서드를 제공한다.

class DataService2{
    dao = new DAO();

    accessName(index:number) : string{
        return this.dao.accessName(index);
    }
    accessSecInfo(index:number):string{
        return "data access denied";
    }
    accessBirthDayInfo(index:number):string{
        return this.dao.accessBirthday(index);
    }
    accessGrade(index:number):string{
        return "data access denied";
    }
}

// 이름과 생일 정보에 접근 가능한 Service 객체2이다.

class DataService3{
    dao = new DAO();
    accessCount : number = 0;

    accessName(index:number) : string{
        this.accessCount++;
        return this.dao.accessName(index);
    }
    accessSecInfo(index:number):string{
        this.accessCount++;
        return this.dao.accessSecInfo(index);
    }
    accessBirthDayInfo(index:number):string{
        this.accessCount++;
        return this.dao.accessBirthday(index);
    }
    accessGrade(index:number):string{
        this.accessCount++;
        return this.dao.accessGrade(index);
    }
    getCount():number{
        return this.accessCount;
    }
}
// 모든 정보에 접근 가능한 Service 객체3이다.
// 이 객체는 접근 횟수를 count한다.

// 이와 같이 다른 객체 접근을 통제하기 위해 사전 또는 사후처리를 해주는
// 대리객체를 제공하는 구조를 제시하는 것이 바로 Proxy pattern이다.

