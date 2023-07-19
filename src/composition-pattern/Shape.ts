export default abstract class Shape{
    protected x : number;
    protected y : number;

    constructor(x:number,y:number){
        this.x = x;
        this.y = y;
    }

    abstract draw() : void;
}

// 도형들을 다루는 프로그램을 만드는 예제
// 먼저 도형들이 갖는 공통적인 기능을 가진 Shape 클래스 작성
