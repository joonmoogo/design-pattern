// 상태 인터페이스
export interface LightState{
    turnOn() : void;
    turnOff() : void;
    adjustBrightness() : void;
}

// 조명 시스템 클래스
export class LightSystem{
    private state : LightState;

    constructor(){
        this.state = new LightOffState(this);
        // 처음은 OFF상태로 시작 
    }

    setState(state : LightState) : void{
        this.state = state;
    }
    turnOn():void{
        this.state.turnOn();
    }
    turnOff():void{
        this.state.turnOff();
    }
    adjustBrightness():void{
        this.state.adjustBrightness();
    }

}

export class LightOffState implements LightState{
    constructor(private lightSystem : LightSystem){}

    turnOn(): void {
        console.log('조명을 켭니다.')
        this.lightSystem.setState(new LightOnState(this.lightSystem));
    }
    turnOff(): void {
        console.log('이미 조명이 꺼져있습니다.');
    }
    adjustBrightness(): void {
        console.log('조명이 꺼져 있어 밝기 조절 불가능합니다.')
    }

}

export class LightOnState implements LightState{
    constructor(private lightSystem : LightSystem){}
    turnOn(): void {
        console.log('이미 조명이 켜져있습니다.')
    }
    turnOff(): void {
        console.log('조명을 끕니다');
        this.lightSystem.setState(new LightOffState(this.lightSystem));
    }
    adjustBrightness(): void {
        console.log('조명의 밝기를 조절합니다.')   
    }
}

