import Command from "./Command.ts";

export default class RemoteControl{
    private commands : Command[] = [];
    private undoCommand : Command | null = null;

    setCommand(command : Command) : void {
        this.commands.push(command);
    }

    pressButton() : void {
        if(this.commands.length>0){
            const command  = this.commands.pop()!;
            this.undoCommand = command;
            command.execute();
            // 느낌표는 단언 연산자, Not Null임을 알림
        }
        else{
            throw new Error('no command find');
        }
    }

    pressUndo() : void {
        if(this.undoCommand){
            this.undoCommand.undo();
        }
    }
}

