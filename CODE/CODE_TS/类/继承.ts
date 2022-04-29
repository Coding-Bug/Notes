class Animal{
    name: String
    constructor(theName:String){
        this.name = theName
    }

    move(distanceInMeters:number=0){
        console.log(`${this.name} moved ${distanceInMeters}m.`)
    }
}

class Snake extends Animal{
    constructor(name:String){
        super(name)
    }

    move(distanceInMeters = 5): void {
        console.log("Slithering...")
        super.move(distanceInMeters)
    }
}

class Horse extends Animal{
    constructor(name:String){
        super(name)
    }
    move(distanceInMeters = 45){
        console.log("Galloping...")
        super.move(distanceInMeters)
    }
}


let sam =new Snake("Sammy the Python")
let tom:Animal = new Horse ("Yommy the Palomino")

sam.move()
tom.move()