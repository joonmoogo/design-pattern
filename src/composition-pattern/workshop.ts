class Postman{
    sendEmail(address:string) : void{
        console.log(`send email to ${address}`);
    }
}

abstract class Contact{
    protected contact : Contact[] = [];

    abstract sendEmail() : void;

    add(contact : Contact) : void{
        this.contact.push(contact);
    }
}

class Person extends Contact{
    name : string ='';
    email : string ='';

    sendEmail(): void {
        const post = new Postman();
        post.sendEmail(this.email);    
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

// 연락처 생성
const person1 = new Person();
person1.name = 'John Doe';
person1.email = 'john.doe@example.com';
console.log(person1);

const person2 = new Person();
person2.name = 'Jane Smith';
person2.email = 'jane.smith@example.com';
console.log(person2);
// 그룹 생성
const group1 = new Group();
group1.name = 'Friends Group';
group1.add(person1);
group1.add(person2);
console.log('-----');
console.log(group1);
console.log('-----');
console.log(group1.sendEmail());



