export default class Light{
    private isOn: boolean = false;

    turnOn() : void {
        this.isOn = true;
        console.log("Light is on");
    }
    turnOff() : void{
        this.isOn = false;
        console.log("Light is Off");
    }
    
}