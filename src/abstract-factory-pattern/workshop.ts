interface Weapon{

}

class Sword implements Weapon{

}
class Dagger implements Weapon{

}
class MagicWand implements Weapon{

}
class UnicornWand implements Weapon{

}

interface Dress{

}
class ChainMail implements Dress{

}
class Armor implements Dress{

}
class Clock implements Dress{

}
class Cape implements Dress{

}

class Character{
    talent : string
    constructor(talent : string){
        this.talent = talent;
    }
}

interface DramatisFactory{
    makeCharacter() : Character;
    wearWeapon() : Weapon;
    wearDress() : Dress;
}
class RoyalFither implements DramatisFactory{
    makeCharacter() : Character {
        return new Character('Fighter');
    }
    wearWeapon() : Weapon {
        return new Dagger();
    }
    wearDress() : Dress {
        return new Armor();
    }
}

class Novice implements DramatisFactory{
    makeCharacter() : Character{
        return new Character('Fighter');
    }
    wearWeapon() : Weapon{
        return new Dagger();
    }
    wearDress() : Dress{
        return new ChainMail();
    }
}

class DoomedFighterFactory implements DramatisFactory{
    makeCharacter(): Character {
        return new Character('Magician')
    }
    wearWeapon(): Weapon {
        return new Sword();
    }
    wearDress(): Dress {
        return new Armor();
    }
}