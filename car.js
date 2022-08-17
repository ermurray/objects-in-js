

// bug in syntax during lecture with new Object(car) constructor  method not used correctly. should have used .create()

const driveCar = function() {
  return `I am driving the ${this.name} car`;
} 

const car = {
  name: '',
  model: '',
  make: '',
  drive: driveCar
}

const marty = Object.create(car);

const doc = Object.create(car);
marty.name = 'Marty'
doc.name = 'Doc'

console.log('marty car drive:', marty.drive());

console.log('doc car drive', doc.drive());
