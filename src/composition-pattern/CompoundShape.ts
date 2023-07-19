import Shape from "./Shape.ts";

export default class CompoundShape extends Shape{

    private shapes : Shape[] =[];

    constructor(x:number,y:number){
        super(x,y);
    }

    add(shape: Shape) : void{
        this.shapes.push(shape);
    }

    draw(): void {
        console.log(`Drawing a compund shape at(${this.x}, ${this.y})`);
        this.shapes.forEach((shape)=>{
            shape.draw();
        })
    }
}

// Composition 패턴을 사용
// Circle과 Rectangle을 그룹화하여 하나의 도형처럼 취급할 수 있다.