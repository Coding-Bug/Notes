class Animal{
    constructor(private name:String){}

    print(){
        console.log(this.name)
    }
}

let cat = new Animal('cat')
cat.print()