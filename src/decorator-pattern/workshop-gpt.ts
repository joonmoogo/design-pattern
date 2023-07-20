interface Beverage{
    cost() : number;
    getDescription() : string;
}

class Coffee implements Beverage{
    cost(): number {
        return 3;        
    }
    getDescription(): string {
        return `Simple Coffee`;
    }
}

abstract class CoffeeDecorator extends Coffee{
    coffee : Coffee;
    constructor(coffee:Coffee){
        super();
        this.coffee = coffee;
    }
    abstract cost(): number;
    abstract getDescription(): string;
}

class MilkDecorator extends CoffeeDecorator{
    cost(): number {
        return this.coffee.cost() + 2;
    }
    getDescription(): string {
        return this.coffee.getDescription() + ' with Milk';
    }
}

class WhipDecorator extends CoffeeDecorator{
    cost(): number {
        return this.coffee.cost() + 1;
    }
    getDescription(): string {
        return this.coffee.getDescription() + ' with Whip Cream';
    }
}


let coffee = new Coffee();
console.log(coffee.cost());
console.log(coffee.getDescription());
coffee = new WhipDecorator(coffee);
console.log(coffee.cost());
console.log(coffee.getDescription());

