import { CompressionStrategy,ZipCompressionStrategy,RarCompressionStrategy } from "./CompressionStrategy.ts";
import { Compressor } from "./Compressor.ts";

// 압축 전략 객체 생성
const zipStrategy : CompressionStrategy = new ZipCompressionStrategy();
const rarStrategy : CompressionStrategy = new RarCompressionStrategy();

//  컨텍스트 객체 생성
const compressor : Compressor = new Compressor(zipStrategy);

// ZIP 압축 전략 사용
compressor.compressFile(`document.txt`);

// 압축 전략 변경 (RAR 압축 전략 사용)
compressor.setCompressionStrategy(rarStrategy);
compressor.compressFile(`image.png`);

/*
 이 예제는 행위를 캡슐화 한다는 것이 특징이다.
*/
