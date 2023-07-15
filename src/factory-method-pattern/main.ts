import { Application,TextApplication,PDFApplication } from "./Application.ts";

const textApplication = new TextApplication();
textApplication.newDocument('Sample Text');

const pdfApplication = new PDFApplication();
pdfApplication.newDocument('Sample Text');

// 위와 같이 Factory method pattern을 사용하면
// Application 클래스는 실제 생성되는 Document 객체의 
// 유형을 알 필요 없이 새로운 문서를 생성할 수 있다.

// 위와 같은 패턴을 활용하면 새로운 문서 유형을 추가하기 쉽다.
// 새로운 문서 유형을 만드려면 Document를 상속받는 새로운 클래스 작성,
// 해당 클래스의 생성을 위한 factory method 구현하면 된다.