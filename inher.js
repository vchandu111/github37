const car = {
  type: "Car",
  wheels: 4,
  startEngine() {
    console.log(`${this.type} engine started`);
  },
  stopEngine() {
    console.log(`${this.type} engine stopped`);
  },
};

const bike = {
  type: "Bike",
  wheels: 2,
  startEngine() {
    console.log(`${this.type} engine started`);
  },
  stopEngine() {
    console.log(`${this.type} engine stopped`);
  },
};

car.startEngine();
car.stopEngine();

bike.startEngine();
bike.stopEngine();
