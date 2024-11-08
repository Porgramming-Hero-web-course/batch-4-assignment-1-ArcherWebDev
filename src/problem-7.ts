class Car {
    constructor(public make: string, public model: string, public year:number ){
    }

    getCarAge(){
        console.log(2024-this.year);
    }
}
