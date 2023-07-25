import { CompressionStrategy } from "./CompressionStrategy.ts"
export class Compressor{
    private compressionStrategy : CompressionStrategy;

    constructor(strategy : CompressionStrategy){
        this.compressionStrategy = strategy;
    }

    setCompressionStrategy(strategy : CompressionStrategy){
        this.compressionStrategy = strategy;
    }

    compressFile(file:string):void{
        this.compressionStrategy.compress(file);
    }
}

