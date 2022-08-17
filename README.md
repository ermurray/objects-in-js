# objects-in-js
Lighthouse Labs lecture web-flex week2 objects in javascript

## Topics
1. **Primitives**
  * what is or is not a primitive

2. **Data structures**
  * what are data structures

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
    - number
    - string 
    - boolean
    - undefined
    - null

### Topic 2: data structures
  * *some data structures*
    - Array
    - Objects
    * *some more complex data structures*
    - Set
    - linked list
    - stack
  

### Topic 2.5:     
* *special*
    - NaN
### Topic 3:
#### **what? how?**
  1. how to define an object
      * object literal
      ```javascript
        const myStuff = {
          stuff: 'this is mine'
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
      ```
      * initialize with new keyword
      ```javascript
      const car = {
        name: '',
        model: '',
        make: '',
        drive: function() {
          return `I am driving the ${this.name} car`;
        }
      }
      const marty = new Object(car);

      ```

  2. assiging new properties
      * define property and value
      ```javascript
        const obj = {};
        obj.newKey = 'a new value'
      ```
      * object initializer/obj literal
      * object.fromEntries()
  3. object notation/ accessing objects
      * dot syntax
        - when key is known
      * []
        - when accessing with variable key
      * when do i use which one?
      * what is "this"
  4. iteration over objects
      * for... in
      * js built in methods ie.( Object.entries() Object.keys(), Object.values())
  5. logic/conditionals with objects
      * do i even exist (use truthy or falsey  values)
  6. Arrays of Objects
      * now what?
      * format some data?
      * count some properties?

#### **advantages/differences**
  * constant time to look up value
  * directly access via key