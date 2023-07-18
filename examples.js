const myObject = { somestuff: 'things'};

const newObject = new Object({
  newStuff: 'things'
});

const createObject = Object.create(myObject)

console.log('this is my object ==============>', myObject)
console.log('this is new object ==============>', newObject)
console.log('this is create object ==============>', createObject)

const someArray =  [1, 2, 3, 4, 5];

const car = {
  name: 'Marty',
  make: 'amc',
  model: 'delorean',
  year: '1989',
  color: 'grey',
  key: 'keyless',
  drive: function(){
    return `I am driving the ${this.name} car`;
  },
  someArray
}

const carStrings = {
  "name": "marty",
  "make": "amc",

}

console.log("car's, name:" , car.name);
console.log('values', Object.values(car)); // [ 'Marty', 'amc',]

const likeValues = function(bar) {
  if ( typeof bar !== 'object') {
    return
  }
  const result = [];
  for (const keyNamedFoo in bar) {
    result.push(bar[keyNamedFoo]);
  }
  return result;
}

const printPretty = (arr) => {
  console.log(arr.join(', '));
}

const myResult = likeValues(car);
printPretty(likeValues(car));


// likeValues(car);
// console.log('myResult', myResult);
// console.log('myResult', likeValues(car)); //same as above

console.log('access values', car["name"])
console.log('access values', car.name) // same as above

const car2 = car; //car2 refs car

const fuel = 'flux capacitor';

car2['fuel'] = fuel;

const car3 = { ...car };

car3.isMint = true;


console.log('car2 with fuel', car2);
console.log('car with fuel', car);
console.log('car3 with fuel', car3);

let myNumber = 0;
console.log('myNumber', myNumber)
const addNumber = (x) => {
 return myNumber += x;  // creates a side effect
}



console.log(addNumber(1))

console.log('myNumber after add', myNumber);


const changeObj = (ref) => {
  const myNewObject = { ...ref } 
  myNewObject.newProp = 'hey im new here';
  return myNewObject;

};

console.log('changed car', changeObj(car));

console.log('Car after change', car)

console.log( 'car.drive', car.drive());


const newObjectTwo ={
  name: 'joe',
  newFunction: car.drive
}

const giveMeObject = () => ({ name: 'joe' })

// newFunction.name = 'joe';

console.log('give', giveMeObject());
