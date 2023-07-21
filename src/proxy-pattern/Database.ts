export default class Database{
    nameList : string[] = new Array();
    secInfoList : string[] = new Array();
    birthDayList : string[] = new Array();
    gradeList : string[] = new Array();

    constructor(){
        this.nameList.push('kim');
        this.secInfoList.push('Charming');
        this.birthDayList.push('2014/01/01');
        this.gradeList.push('Good');

        this.nameList.push('park');
        this.secInfoList.push('Beauty');
        this.birthDayList.push('2010/10/10');
        this.gradeList.push('Best');
        
        this.nameList.push('Lee');
        this.secInfoList.push('Healthy');
        this.birthDayList.push('2012/12/12');
        this.gradeList.push('no good');
    }
}

// 실제 DB를 대신할 객체이다.
