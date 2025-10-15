// Complete the js code
function Car(make, model) {
	constructor(make, model){
		this.make=make;
		this.model=model;
	}
	get getMakeModel(){
		return `${this.make} ${this.model}`
	}
}

function SportsCar extends Car(make, model, topSpeed) {
	constructor(make,model,topSpeed){
		super(make,model);
		this.topSpeed=topSpeed;
	}
	get getTopSpeed(){
		return `${topSpeed} of the car`;
	}
}

// Do not change the code below
window.Car = Car;
window.SportsCar = SportsCar;

const car = new SportsCar("Ferrari", "Testarossa", 200);
console.log(car.getMakeModel()); // Output: Ferrari Testarossa
console.log(car.getTopSpeed());

