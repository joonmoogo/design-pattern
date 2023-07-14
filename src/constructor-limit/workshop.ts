interface Frog{
    swim() : void;
}
class AdultFrog implements Frog{
    swim() : void {
        console.log(`breaststroke`);
    }
}

class Tadpole implements Frog{
    swim() : void{
        console.log('breaststroke');
    }
}

let bigEye = new Tadpole();
bigEye.swim();
bigEye = new AdultFrog();
bigEye.swim();
