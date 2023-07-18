class RecoBox{
    width() : number{
        return 8;
    }
    height() : number{
        return 5;
    }
    volume() : number{
        return 200;
    }
}

// RecoBox는 inch를 리턴하는 객체다.
// 우리는 inch 단위가 아닌 cm 단위를 사용한다.

// 1인치 = 2.54센티미터

// RecoBox를 재활용하자.
// 이 것을 cm을 기준으로 만드는 시스템에 적용하자.

interface Hexahedron{
    width() : number;
    height() : number;
    depth() : number;
}
// 현재 우리 프로젝트에서의 육면체를 위한 인터페이스다.

// Class Adapter Pattern ⬇
class HexahedronImp1 extends RecoBox implements Hexahedron{
    width(): number {
        return 2.54 * super.width();
    }
    height(): number {
        return 2.54 * super.height();
    }
    depth(): number {
        let inchDepth : number = super.volume() / super.width();
        inchDepth = inchDepth / super.height();
        return 2.54 * inchDepth;
    }
}

// Object Adapter Pattern ⬇
class HexahedronImp2 implements Hexahedron{
    private inchBox = new RecoBox();
    width(): number {
        return this.inchBox.width() * 2.54;    
    }
    height(): number {
        return this.inchBox.height() * 2.54;
    }
    depth(): number {
        let inchDepth = this.inchBox.volume() / this.inchBox.width();
        inchDepth = inchDepth / this.inchBox.height();
        return 2.54 * inchDepth;
    }

}