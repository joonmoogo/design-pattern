export interface CompressionStrategy{
    compress(file : string) : void;
}

export class ZipCompressionStrategy implements CompressionStrategy{
    compress(file: string): void {
        console.log(`Compression ${file} using ZIP compression`);
    }
}

export class RarCompressionStrategy implements CompressionStrategy{
    compress(file: string): void {
        console.log(`Compression ${file} using ZIP compression`);
    }
} 

