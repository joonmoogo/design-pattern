import { Circle, Rectangle } from "./CircleAndRectangle.ts";
import CompoundShape from "./CompoundShape.ts";

const circle = new Circle(10,20,5);
const rectangle = new Rectangle(30,40,15,10);

const compoundShape = new CompoundShape(5,5);
compoundShape.add(circle);
compoundShape.add(rectangle);

circle.draw();
rectangle.draw();
console.log(' ');
compoundShape.draw();
