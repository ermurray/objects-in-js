//primatives
const myString = 'stuff';
const myEmptyString = '';
const checkFalsy = (stuff) => {
  if(!stuff) {
    return console.log('I am falsy', stuff )
  }
  return console.log('I am truthy', stuff)
    
};
 
// checkFalsy(myEmptyString);

//data structures
const myArr = ['this is mine', 'this is also mine'];

const exampleArr = [
  1,
  2,
  '',
  'asdf',
  {},
  [],
]

const myStuff = {};

const myObject = {
  myStuff: 'this is mine'
}

const myObject2 = {
  myStuff: 'this is mine'
}

const example = {
  1: 1,
  2: 2,
  3: '',
  letters: 'asdf',
  emptyArray: [],
  nestedObject: {
    'key': 'value', 
  } ,
  myStuff, // myStuff: myStuff
  
}

// example.emptyArray = [1, 2, 3]

// const newExample = {...example, emptyArray: [1,2,3]}

// console.log('example object', newExample);




// console.log(myObject === myObject2);

const myEmptyObject = {}


// checkFalsy(myEmptyObject);
