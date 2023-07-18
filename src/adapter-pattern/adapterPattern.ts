// 예시
// 기존에 사용되는 Square 클래스가 있다고 가정하자.
// 이를 Shape 인터페이스와 호환되도록 만들어야 한다. 

class Square{
    private sideLength : number;

    constructor(sideLength : number){
        this.sideLength = sideLength;
    }
    getSideLength() : number{
        return this.sideLength;
    }
}

interface Shape{
    getArea() : number;
}
// 목표는 Square 클래스를 Shape 인터페이스와 호환되도록
// Adapter를 만드는 것

class SquareAdapter implements Shape{
    private square : Square;

    constructor(square:Square){
        this.square = square;
    }
    getArea(): number {
        const sideLength = this.square.getSideLength();
        return sideLength * sideLength;
    }
}

// 이제 Square 클래스를 Shape 인터페이스와 사용가능하다.