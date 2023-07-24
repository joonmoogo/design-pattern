export interface Observer{
    update(data : any) : void;
}
// 알림을 받는 객체의 인터페이스


export class Subject{
    private observers : Observer[] = [];

    public addObserver(observer : Observer) : void{
        this.observers.push(observer);
    }

    public notifyObservers(data : any) : void{
        for(const observer of this.observers){
            observer.update(data)
        }
    }
}
// 알림을 보내는 객체
