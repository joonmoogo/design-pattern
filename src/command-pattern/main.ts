import Light from "./Light.ts";
import LightOnCommand from "./LightOnCommand.ts";
import RemoteControl from "./RemoteControl.ts";

const light = new Light();
const lightOnCommand = new LightOnCommand(light);
const remote = new RemoteControl();

remote.setCommand(lightOnCommand);
remote.pressButton();
remote.pressUndo();

/* 
리모컨을 통해 Light 객체를 켜고 끄는 예제
LightOnCommand 클래스가 Light 객체와 실행 메서드를 캡슐화
RemoteControl 클래스에서 이를 관리
pressUndo를 통해 이전에 실행한 명령을 취소할 수 있다.
*/ 
