interface FlowerSeed{
    whoAmI() : string;
}

abstract class Garden{
    abstract getSeed() : FlowerSeed

    plantSeed() : void{
        const flowerseed = this.getSeed();
        flowerseed.whoAmI();
    }
} 

class Rose implements FlowerSeed{
    whoAmI(): string {
        return 'Rose';
    }
}

class SunFlower implements FlowerSeed{
    whoAmI(): string {
        return "SunFlower"
    }
}

class TheGarden extends Garden{
    getSeed(): FlowerSeed {
        return new Rose();
    }
    plantSeed(): void {
        const rose = this.getSeed();
        rose.whoAmI();
    }
}

class MyGarden extends Garden{
    getSeed(): FlowerSeed {
        return new SunFlower();
    }
    plantSeed(): void {
        const sunflower = this.getSeed();
        sunflower.whoAmI();
    }
}