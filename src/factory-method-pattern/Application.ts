import { Document,PDFDocument,TextDocument } from "./Document.ts";

abstract class Application{
    // 팩토리 메서드
    abstract createDocument(content : string) : Document;

    // 문서 생성하고 저장하는 메서드
    newDocument(content: string) : void{
        const document : Document = this.createDocument(content);
        document.save();
    }
}

class TextApplication extends Application{
    createDocument(content: string): Document {
        return new TextDocument(content)
    }
}

class PDFApplication extends Application{
    createDocument(content: string): Document {
        return new PDFDocument(content);
    }
}
// TextApplication과 PDFAplplication은 Application을 상속받아
// createDocument 메서드를 오버라이딩하여 실제 문서 객체를 생성

export{
    Application,
    TextApplication,
    PDFApplication,
}