class Octopus{
    readonly name:string;
    readonly num: number =8
    constructor (theName:string){
        this.name = theName
    }

    setName(newName){
        this.name = newName  // 错误
    }
}

let dad = new Octopus('man')
dad.name = 'women'   // 错误