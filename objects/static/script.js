window.onload = function (event) {
  literals();
  proto();
  proto1_prototype_chain();
  proto2_prototype_this();
  proto3_object_keys();
};

function factoryFunction()
{
  function personFactory(firstName,lastName){
    console.log(this);
    return {
      firstName:firstName,
      lastName,
      display(){
        console.log(`${this.firstName} ${this.lastName}`);
      }
    }
  }

  personFactory.prototype.greet=function(){
    console.log(`welcome ${this.lastName}`);
  }
  let person = personFactory('John','Doe');
  person.display();
  person.greet();

  person = new personFactory('John','Doe');
  person.display();
  person.greet();
}

function objectEntries()
{
  // entries(), keys(), values()
  let objA = {
    x:10,
    display(){
      console.log(`${this.x}`);
    }
  }

  let objB = {
    __proto__: objA,
    y: 20,
    print(){
      console.log(`inside objB: ${this.y}`);
    }
  }

  for(let key in objB){
    console.log(`key: ${key}`);
  }

  console.log(`entries: ${Object.entries(objB)}`);
  console.log(`values: ${Object.values(objB)}`);
  console.log(`keys: ${Object.keys(objB)}`);
  objB.print();
  
}
// let arrowX=10;
this.arrowX=100;
function arrowThis(){
  let objA={
    x: 20,
    display: ()=>{
      console.log(`display:${this} ${this.x}`);
    },
    print: function(){
      console.log(`print: ${this.x}`);
    },
    message: ()=>{
      console.log(`messgae: ${this.arrowX}`);
    }

  }

  objA.display();
  objA.print();
  objA.message();

}
/**
 * Object.assign vs spread:
 * 
 * The `Object.assign()` method and the spread syntax (`{...}`) can both be used to merge multiple objects into a single object. However, there are a few differences between them:

1. **Mutability:** `Object.assign()` mutates the target object, while the spread syntax creates a new object.

   - With `Object.assign()`, the properties from the source objects are copied directly into the target object. If there are properties with the same name in both the target and source objects, the value of the target object's property will be overwritten with the value from the source object.

   - On the other hand, the spread syntax creates a new object by copying the properties from the source objects. The original objects (`objA` and `objB`) remain unchanged.

2. **Nested objects and deep cloning:** The spread syntax performs a shallow copy, while `Object.assign()` allows for deep cloning of nested objects.

   - When using the spread syntax (`{...objA, ...objB}`), properties from `objB` will overwrite properties with the same name in `objA`. However, if there are nested objects within `objA` or `objB`, the references to those nested objects will be shared in the merged object. Changes to the nested objects will be reflected in both the original and merged objects.

   - `Object.assign()` performs a shallow copy of properties, but for nested objects, it creates new references. This means that changes to the nested objects in the merged object will not affect the original objects.

Here's an example to illustrate these differences:

```javascript
let objA = { x: 10, y: { z: 20 } };
let objB = { y: { z: 30 }, w: 40 };

// Using Object.assign()
let objC = Object.assign(objA, objB);
console.log(objA); // { x: 10, y: { z: 30 }, w: 40 }
console.log(objC); // { x: 10, y: { z: 30 }, w: 40 }

// Using spread syntax
let objK = { ...objA, ...objB };
console.log(objA); // { x: 10, y: { z: 20 } }
console.log(objK); // { x: 10, y: { z: 30 }, w: 40 }

objA.y.z = 50; // this change will reflect in objC due to 
// Object.assign gives shallow copy for nested objects

console.log(objA); // { x: 10, y: { z: 50 } }
console.log(objK); // { x: 10, y: { z: 30 }, w: 40 }
console.log(objC); // { x: 10, y: { z: 50 }, w: 40 } // z is shared and shallow copy
```

In the example above, you can see that `Object.assign()` 
modifies `objA` and `objC` directly, '
whereas the spread syntax creates a new object `objK`. 

Additionally, changes to the nested object `y` in `objA` are reflected in `objC` 
(due to shared references) but not in `objK` (as it performs a shallow copy).
 * 
 */
function object_assign()
{
  let objA = {
    x:10,
    display:function(){
      console.log(`${this.x}`);
    },
    print:function(){
      console.log(`${this.x}`);
    }
  }

  let objB = {
    y: 20,
    display: function(){
      console.log(`${this.y}`);
    }
  }
  objA.display();
  objB.display();

  let objC = Object.assign(objA,objB);
  objC.display(); // 20 replaced
  objC.print(); // 10

  objC = {...objA, ...objB};
  objC.display(); // 20 replaced
  objC.print(); // 10

}

function proto_modern_way() {
  // create, isPrototypeof, setPrototype, getPrototypeOf
  let objA = {
    x: 10,
    display: function() {
      console.log(`${this.x} inside A`);
    },
  };

  let objB = Object.create(objA);
  objB.y = 20;
  objB.print = function(){
    console.log(`${this.y} inside B`);
  };


  console.log(objA.isPrototypeOf(objB));

  objB.display(); // 10
  objB.print(); // 20

  objA.display(); // 10
  objA.print(); // undefined



  console.log(Object.getPrototypeOf(objB)); // objA
  console.log(Object.getPrototypeOf(objA)); // Object.prototype
  console.log(Object.getPrototypeOf({})); // Object.prototype
  console.log(Object.getPrototypeOf(new Object())); // Object.prototype
  console.log(Object.prototype);
  console.log(Object.prototype==Object.getPrototypeOf({})); // true
  console.log(Object.prototype==Object.getPrototypeOf(objA)); // true
  console.log(Object.prototype==Object.getPrototypeOf(new Object())); // true

  let objC = {
    z: 30,
    print: function () {
      console.log(`${this.z} inside objC`);
    },
  };

  Object.setPrototypeOf(objC, objA);

  console.log(Object.getPrototypeOf(objC)); // objA
  console.log(Object.getPrototypeOf(objA)); // Object.prototype

  objC.display(); // 10
  objC.print(); // 30



}
function constructorFunction() {
  function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;

    this.greet = (message) => {
      console.log(`${message} ${this.firstName} ${this.lastName}`);
    };
  }

  Person.prototype.getFullName = function () {
    return `${this.firstName} ${this.lastName}`;
  };

  let person1 = new Person("John", "Doe");
  console.log(person1.getFullName());
  person1.greet("Welcome");
}

/**
 * using __proto__
 *
 * let objA={}
 * objA.x=10
 * let objB={}
 * objB.__proto__=objA
 * objB.w=20;
 * let objC={
 *  __proto__:objB
 *   z: 10
 * }
 */
function proto3_object_keys() {
  console.log("object keys");
  let objA = {
    x: 10,
    w: 20,
    write: function () {
      this.z = 100;
      console.log(`${this.x}`);
    },
  };

  let objB = {
    x: 20,
    y: 30,
    display: function () {
      console.log(`${this.y}`);
    },
  };

  objB.__proto__ = objA;

  console.log("inherited keys");
  for (let key in objB) {
    console.log(key);
  }
  console.log("object keys");
  console.log("object keys for objB: " + Object.keys(objB));
  objB.write();
  console.log("object keys for objB: " + Object.keys(objB));
  console.log("object keys for objB: " + Object.keys(objA));

  console.log("own property");
  console.log("x in objB" + Object.prototype.hasOwnProperty.call(objB, "x"));
  console.log("w in objB" + Object.prototype.hasOwnProperty(objB, "w"));
  console.log(
    "own property names of objB: " + Object.getOwnPropertyNames(objB)
  );
}
/**
 * __proto__ is a historical getter/setter for [[Prototype]]
It’s a common mistake of novice developers not to know the difference between these two.

Please note that __proto__ is not the same as the internal [[Prototype]] property. It’s a getter/setter for [[Prototype]]. Later we’ll see situations where it matters, for now let’s just keep it in mind, as we build our understanding of JavaScript language.

The __proto__ property is a bit outdated. It exists for historical reasons, modern JavaScript suggests that we should use Object.getPrototypeOf/Object.setPrototypeOf functions instead that get/set the prototype. We’ll also cover these functions later.

By the specification, __proto__ must only be supported by browsers. In fact though, all environments including server-side support __proto__, so we’re quite safe using it.

As the __proto__ notation is a bit more intuitively obvious, we use it in the examples.
 */
function proto2_prototype_this() {
  console.log("prototype2");

  let objA = {
    execute: function () {
      if (this.x) {
        console.log(this.x);
      }
    },
    setX: function () {
      this.x = 10;
    },
  };

  let objB = {
    __proto__: objA,
  };

  objB.setX();
  objB.execute();
  objA.execute();
}

function proto1_prototype_chain() {
  console.log("prootype 1");
  let objA = {
    x: 10,
    display: function () {
      console.log(`Inside objA: ${this.x}`);
    },
    write: function () {
      console.log(`Inside objA: ${this.y}`);
    },
  };
  let objB = {
    y: 20,
    write: function () {
      console.log(`Inside objB: ${this.y}`);
    },
  };

  objB.__proto__ = objA; // sets objB.[[Prototype]] = objA
  console.log(objB.y);
  console.log(objB.x);
  objB.write();
  objB.display();

  let objC = {
    y: 300,
    x: 100,
    __proto__: objB,
  };

  console.log(objC.y);
  console.log(objC.x);
  objC.display();
  objC.write();

  console.log(Object.getPrototypeOf(objC));
  console.log(Object.getPrototypeOf(objB));
  console.log(Object.getPrototypeOf(objA));
  console.log(Object.prototype);
}

/**
 * [[Prototype]] is an internal property of JavaScript objects that points to their prototype. It is not directly accessible in standard JavaScript code, but it determines the prototype chain of an object. When you access a property on an object, and the property is not found, JavaScript automatically looks for the property in the object's prototype, and if not found there, in the prototype's prototype, and so on, until the property is found or the end of the prototype chain is reached.
 *
 * On the other hand, __proto__ is a non-standard property that some JavaScript environments provide as a way to access and modify the prototype of an object directly. It allows you to explicitly set the prototype of an object or retrieve the prototype of an existing object.
 *
 * In modern JavaScript, it is generally recommended to use the Object.create() or Object.setPrototypeOf() methods to establish the prototype relationship instead of directly manipulating [[Prototype]] or __proto__. These methods provide a more explicit and standardized way to work with prototypes.
 *
 * It's worth noting that __proto__ is considered a legacy feature and is not part of the ECMAScript standard. Its usage is discouraged, and it's best to use the recommended methods mentioned above to work with prototypes in JavaScript.
 */
function proto() {
  console.log("prototype inheritance");
  let commonProto = {
    collegeName: "Oxford",
    describe: function () {
      console.log(`Person Name: ${this.name} & ${this.collegeName}`);
    },
  };

  let john = {
    name: "John",
    __proto__: commonProto,
    display: function () {
      console.log(`Object: ${this.name}`);
    },
  };

  let alex = {
    name: "Alex",
    __proto__: commonProto,
    describe: function () {
      console.log(`Person: ${this.name} && ${this.collegeName}`);
    },
  };

  console.log(john.name);
  console.log(john.collegeName);
  john.describe();
  john.display();

  alex.describe();
}
// object literals
function literals() {
  console.log("object literal");
  let john = {
    name: "john",
    describe: function () {
      console.log(`${this.name}`);
    },
  };
  console.log(john.name);
  john.describe();
}
