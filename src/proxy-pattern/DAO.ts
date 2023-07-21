import Database from "./Database.ts";

export default class DAO{
    db : Database = new Database();

    accessName(index:number) : string{
        return this.db.nameList[index];
    }
    accessSecInfo(index:number) : string{
        return this.db.secInfoList[index];
    }
    accessBirthday(index:number) : string{
        return this.db.birthDayList[index];
    }
    accessGrade(index:number) : string{
        return this.db.gradeList[index];
    }
}

// 모든 데이터베이스의 자료는 DAO를 통해서만 접근이 가능하다.