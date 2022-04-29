class Animal {
    protected name: string;
    constructor(theName: string) { this.name = theName; }
}

class Cat extends Animal{
    constructor(){
        super('cat')
    }
    getName(){
        return this.name  
    }
}

new Cat().getName(); // 正确