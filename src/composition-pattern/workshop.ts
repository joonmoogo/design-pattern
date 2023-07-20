class Postman{
    sendEmail(address:string) : void{
        console.log(`send email to ${address}`);
    }
}

abstract class Contact{
    protected contact : Contact[] = [];

    abstract sendEmail() : void;
    abstract sendEmail(name:string) : void;
    add(contact : Contact) : void{
        this.contact.push(contact);
    }
}

class Person extends Contact{
    private name : string;
    private email : string;
    
    constructor(name:string,email:string){
        super();
        this.name = name;
        this.email = email;
    }
    sendEmail(): void {
        const post = new Postman();
        post.sendEmail(this.email);    
    }
    sendEmailTo(email:string){
        const post = new Postman();
        post.sendEmail(email);
    }
    getEmail() : string {
        return this.email;
    }
    getName() : string{
        return this.name;
    }
    getList() : Contact[]{
        return this.contact;
    }
}

class Group extends Contact{
    name : string = '';
   
    sendEmail(): void{
        this.contact.forEach((person)=>{
            person.sendEmail();
        })
    }

}

// Person 생성
const person1 = new Person('John Doe',"johnDoe@naver.com");
console.log(person1);
const person2 = new Person('Jane Smith','Janesmith@naver.com');
console.log(person2);

// 전화번호부 그룹 생성
const group1 = new Group();
group1.name = 'Friends Group';
group1.add(person1);
group1.add(person2);
console.log('-----');
console.log(group1);
console.log('-----');
console.log(group1.sendEmail());

// Person의 연락처에 다른 사람 연락처 추가
person1.add(person2);
person2.add(person1);
console.log(person1.getList());
console.log(person2.getList());
console.log(person1);
console.log(person2);


