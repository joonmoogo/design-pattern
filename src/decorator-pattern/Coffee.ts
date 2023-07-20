export interface Coffee{
    cost() : number;
    getDescription() : string;
}

export class SimpleCoffee implements Coffee{
    cost(): number {
        return 3; // 기본 커피 가격
    }
    getDescription(): string {
        return "Simple Coffee";
    }
}

