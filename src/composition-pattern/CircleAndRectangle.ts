import Shape from "./Shape.ts";

class Circle extends Shape{
    private radius : number;
    constructor(x:number,y:number,radius:number){
        super(x,y);
        this.radius = radius;
    }
    draw() : void{
        console.log(`Drawing a Circle at ${this.x}, ${this.y} with radius ${this.radius}`);
    }
}


class Rectangle extends Shape{
    private width : number;
    private height : number;

    constructor(x:number, y:number, width:number, height:number){
        super(x,y);
        this.width = width;
        this.height = height;
    }
    draw(): void {
        console.log(`Drawing a Rectangle at ${this.x}, ${this.y} with width ${this.width} and ${this.height}`);
    }
}

export {
    Circle,
    Rectangle
}