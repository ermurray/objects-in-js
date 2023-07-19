const newObj = {};

const drive = () => 'vroom vroom';


const baseCar = {
  name: 'Marty',
  make: 'amc',
  model: 'delorean',
  year: 1989,
  color: 'grey',
  key: 'keyless',
  honks: function(){return 'beep'},
  timeTravel: () => Date.now(),
  drive,
  'fun/morefun': 'funnnnnnn',
  talk: function() {console.log(`hi im ${this.name} `) }
}

const myCar = new Object(baseCar)

console.log('newObject', myCar);

baseCar.talk();
// console.log('timeTravel function:', baseCar.timeTravel());
// console.log('honk function:', baseCar.honks());
// console.log('driving', baseCar.drive());

// const myArray = [['name', 'Marty'], ['make', 'amc'], ['model', 'delorean']];

// const car3 = Object.fromEntries(myArray);

// console.log('car3:', car3);

// const key = 'name';

// console.log(baseCar.make)


// for(const key in baseCar){
//   console.log(baseCar[key])
// }
// add a new key

// myCar.mileage = 10010101001;

// const myNewCar = {...baseCar}


// console.log('baseCar', baseCar);

// baseCar.color = 'purple';

// console.log('baseCar', baseCar);

// console.log('myCar', myCar);
// myNewCar.mileage = 1000

// console.log(myNewCar);

// const myNum = 1;


// const myFunc = (value) => {
//   return value += 1
// }

// console.log('myNum', myNum);

// console.log('myfunc exe', myFunc(myNum));

// console.log('myNum', myNum);

// const myObjectFunc = (ref) => {
//   ref.specs = {length: 10020, hp: 0};
//   return ref;
// }

// console.log('myNewCar', myNewCar);

// console.log('myObjFunc', myObjectFunc(myNewCar));

// console.log('myNewCar', myNewCar);

// myNewCar.specs = null;

// console.log('myNewCar', myNewCar);

