const Vehicle = {
  startEngine() {
    console.log(`${this.type} engine started`);
  },
  stopEngine() {
    console.log(`${this.type} engine stopped`);
  },
};

const car = {
  type: "Car",
  wheels: 4,
};

const bike = {
  type: "Bike",
  wheels: 2,
};

const auto = {
  type: "Auto",
  wheels: 3,
};

const arr = [1, 2, 4];

auto.__proto__ = arr;

car.__proto__ = Vehicle;

bike.__proto__ = Vehicle;

car.startEngine();
car.stopEngine();

bike.startEngine();
bike.stopEngine();

console.log(car.__proto__, "car");

console.log(car.__proto__.__proto__);

console.log(car.__proto__.__proto__.__proto__);

console.log(auto.__proto__, "auto");

console.log(auto.__proto__.__proto__);

console.log(auto.__proto__.__proto__.__proto__);

console.log(auto.__proto__.__proto__.__proto__.__proto__);
