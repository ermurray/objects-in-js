# objects-in-js
Lighthouse Labs lecture web-flex week2 objects in javascript

## Topics
1. **Primitives**
  * what is or is not a primitive
    - Numbers
    - Booleans
    - Strings
    - null
    - undefined (sortof)
    * special
      - NAN

2. **Data structures**
  * what are data structures
    - Array
    - objects (functions)

3. **Dive into Objects**
 * what? how?
 

 * advantages/differences
 * functions as object methods
 * this!

4. **Questions/deep dive**
  * student questions

## Notes

### Topic 1: primatives
  * *primative data types*
  

### Topic 2: data structures
  * *some data structures*
  
  

### Topic 2.5:     
* *special*
  
### Topic 3:
#### **what? how?**
  1. how to define an object
   - object literal
  ```js
   const myObj = {
    stuff: 'this is mine',
    moreStuff: 'this is some things'
   };
  ```
  - initialize with the 'new' key word 
  ```js
  const myObj = new Object({
    stuff: 'this is mine',
    anotherKey: 'this is also mine'
  });
  ``` 
  - Object.create() method  create a new instance of an object.
  ```js
  const myNewObject = Object.Create(myObj);
  ```
     
  2. assiging new properties
  - define key and value
    ```js
    const obj = {};

    obj.things = 'some new thing'

    ```
  - object initializer or literal
  - Object.fromEntries()  
    
  3. object notation/ accessing objects
      
  4. iteration over objects
     
  5. logic/conditionals with objects
     
  6. Arrays of Objects
    

#### **advantages/differences**
