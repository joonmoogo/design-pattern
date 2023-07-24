import { Subject,Observer } from "./ObserverPattern.ts";


class Subscriber implements Observer{
    private name : string;

    constructor(name:string){
        this.name = name;
    }

    update(data: any): void {
        console.log(`${this.name} received an updata ${data}`)
    }
}

const subject = new Subject();
// subject == 알림을 보내는 객체

const observer1 = new Subscriber('sub1');
const observer2 = new Subscriber('sub2');
const observer3 = new Subscriber('sub3');
// subscriber implements Observer == 알림을 받는 객체

subject.addObserver(observer1);
subject.addObserver(observer2);
subject.addObserver(observer3);

subject.notifyObservers('hello');

// 이와 같이 처리하면 서브젝트와 구독자들 간의 결합도를 낮추고
// 유연하고 확장 가능한 코드를 작성 가능

