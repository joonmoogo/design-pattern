import { Coffee, SimpleCoffee } from "./Coffee.ts";

abstract class CoffeeDecorator implements Coffee{
    protected coffee: Coffee;
    constructor(coffee:Coffee){
        this.coffee = coffee;
    }
    abstract cost(): number 
    abstract getDescription(): string;
}

class MilkDecorator extends CoffeeDecorator{
    cost(): number {
        return this.coffee.cost() + 2;
    }
    getDescription(): string {
        return `${this.coffee.getDescription()}, milk`;
    }
}

class SugarDecorator extends CoffeeDecorator{
    cost(): number {
        return this.coffee.cost() + 1;
    }
    getDescription(): string {
        return `${this.coffee.getDescription()}, sugar`;
    }
}

let coffee : Coffee = new SimpleCoffee();
console.log(coffee.cost());
console.log(coffee.getDescription());
coffee = new MilkDecorator(coffee);
console.log(coffee.cost());
console.log(coffee.getDescription());