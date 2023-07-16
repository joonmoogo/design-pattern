export default class Counter{

    private static onlyCounter : Counter;
    private innerCounter : number = 0;

    inc1() : number {
        this.innerCounter +=1;
        return this.innerCounter;
    }
    inc2() : number {
        this.innerCounter +=2;
        return this.innerCounter;
    }
    inc3() : number{
        this.innerCounter +=3;
        return this.innerCounter;
    }
    static getInstance() : Counter {
        if(Counter.onlyCounter == null) Counter.onlyCounter = new Counter();
        return Counter.onlyCounter;
    }
}

class Jump1{
    counter : Counter  = Counter.getInstance(); 
    
    jumpup() : void{
        console.log(this.counter.inc1());
        
    }
}

class Jump2{
    counter : Counter  = Counter.getInstance();
    
    jumpup() : void{
        console.log(this.counter.inc2());

    }
}

class Jump3{
    counter : Counter  = Counter.getInstance();
    
    jumpup() : void{
        console.log(this.counter.inc3());

    }
}

const jump1 = new Jump1();
const jump2 = new Jump2();
const jump3 = new Jump3();
jump1.jumpup();
jump2.jumpup();
jump3.jumpup();
jump2.jumpup();
jump1.jumpup();