import { LightSystem } from "./LightState.ts";

const lightSystem = new LightSystem();

lightSystem.turnOn();
lightSystem.adjustBrightness();
lightSystem.turnOn();
lightSystem.turnOff();
lightSystem.adjustBrightness();
lightSystem.turnOff();
