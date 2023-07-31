import Command from "./Command.ts";
import Light from "./Light.ts";

export default class LightOnCommand implements Command{
    private light : Light;

    constructor(light:Light){
        this.light = light;
    }

    execute(): void {
        this.light.turnOn();
    }
    undo(): void {
        this.light.turnOff();
    }
}