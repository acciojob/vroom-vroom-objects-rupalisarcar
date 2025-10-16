// Complete the js code
class Car{
	constructor(make, model){
		this.make=make;
		this.model=model;
	}
	get getMakeModel(){
		return `${this.make} ${this.model}`
	}
}

class SportsCar extends Car {
	constructor(make,model,topSpeed){
		super(make,model);
		this.topSpeed=topSpeed;
	}
	get getTopSpeed(){
		return `${this.topSpeed} of the car`;
	}
}

// Do not change the code below
window.Car = Car;
window.SportsCar = SportsCar;

const car = new SportsCar("Ferrari", "Testarossa", 200);
console.log(car.getMakeModel); // Output: Ferrari Testarossa
console.log(car.getTopSpeed);

