export default class What{
    private static onlyWhat : What;
    private constructor(){
        console.log('What is ready');
    }

    public doThis() : void {
        console.log('OK');
    }

    public static getInstance() : What{
        if(this.onlyWhat == null){
            this.onlyWhat = new What();
        }
        return this.onlyWhat;
    }
    // 객체의 인스턴스 수가 한개로 제한된다.
}
// 여러 클라이언트가 동일 객체를 사용해야만 하는 상황이면서
// 유일하게 하나의 객체가 있음을 보장할 상위객체가 따로 
// 존재하지 않을 때 singleton pattern을 적용해야 한다.
// 프린트 드라이버와 같이 여러 개의 객체가 존재하면 문제가
// 생길 경우 꼭 필요하다. (멀티 프로세스 환경 고려 필요)

const doWhat = What.getInstance();
doWhat.doThis();

