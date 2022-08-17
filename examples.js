const newObj = {}



const car = {
  name: 'Marty',
  make: 'amc',
  model: 'delorean',
  year: '1989',
  color: 'grey',
  key: 'keyless',
  drive: function(){
    return `I am driving the ${this.name} car`;
  }
}



console.log('car:', car);

const car2 = new Object(car);
console.log({car2});

const car3 = new Object({make: 'gmc', model: 'sierra'});
console.log('car3:', car3);

car.value = 12345;
car['fuel'] = 'flux capacitor';
console.log('car after add:', car)

const carArray = [['make', 'amc'],['model', 'delorean']];

const carObj = Object.fromEntries(carArray);


console.log('carObj:',carObj);

console.log('array from object', Object.entries(car));



// accessing keys and values

console.log('car stuff',car.stuff);

const stuff = 'make';
console.log('car stuff',car[stuff]);

const carAsArr = [ 'amc', 'delorean', car.year, car.color, ]

const exCarArr = {
  0: 'amc',
  1: 'delorean',
  2: car.year,
}

console.log('car array', exCarArr[2])

// const car = {
//   make: 'amc',
//   model: 'delorean',
//   year: '1989',
//   color: 'grey',
//   key: 'keyless',
// }

const toObjValuesArray = (obj) => {
  let result = [];
  
  for ( const key in obj) {
    result.push(obj[key])
  }
  return result;
}
const toObjKeyArray = (obj) => {
  let result = [];
  
  for ( const key in obj) {
    result.push(key)
  }
  return result;
}

// console.log(toObjValuesArray(car));
// console.log(Object.values(car));
// console.log(toObjKeyArray(car));
// console.log(Object.keys(car));
console.log(car.drive());

