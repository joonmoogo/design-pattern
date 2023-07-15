abstract class Document{
    private content : string;
    constructor(content: string){
        this.content = content;
    }
    // 문서 내용 반환 메서드
    getContent() : string{
        return this.content;
    };
    // 문서 저장하는 추상 메서드
    abstract save() : void;
}

// 추상 클래스 Document : 문서 클래스들의 공통적 인터페이스 제공
// 어떤 클래스의 인스턴스를 생성할지는 서브 클래스에게 위임

class TextDocument extends Document{
    constructor(content : string){
        super(content);
    }
    // override
    save(): void {
        console.log(`text document saved:  ${this.getContent()}`)
    }
}

class PDFDocument extends Document{
    constructor(content : string){
        super(content);
    }
    // override
    save(): void {
        console.log(`PDF Document saved:  ${this.getContent()}`)
    }
}

export{
    Document,
    TextDocument,
    PDFDocument
}