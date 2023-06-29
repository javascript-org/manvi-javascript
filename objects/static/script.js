window.onload = function (event) {
  literals();
  proto();
  proto1_prototype_chain();
  proto2_prototype_this();
  proto3_object_keys();
};

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
function proto3_object_keys()
{
    console.log('object keys');
    let objA={
        x: 10,
        w: 20,
        write:function(){
            this.z = 100;
            console.log(`${this.x}`);
        }
    }

    let objB={
        x: 20,
        y: 30,
        display:function(){
            console.log(`${this.y}`);
        }
    }

    objB.__proto__=objA;
    
    console.log('inherited keys');
    for(let key in objB){
        console.log(key);
    }
    console.log('object keys');
    console.log('object keys for objB: '+Object.keys(objB));
    objB.write();
    console.log('object keys for objB: '+Object.keys(objB));
    console.log('object keys for objB: '+Object.keys(objA));

    console.log('own property');
    console.log('x in objB'+Object.prototype.hasOwnProperty.call(objB,'x'));
    console.log('w in objB'+Object.prototype.hasOwnProperty(objB, 'w'));
    console.log('own property names of objB: '+Object.getOwnPropertyNames(objB));
   
}
/**
 * __proto__ is a historical getter/setter for [[Prototype]]
It’s a common mistake of novice developers not to know the difference between these two.

Please note that __proto__ is not the same as the internal [[Prototype]] property. It’s a getter/setter for [[Prototype]]. Later we’ll see situations where it matters, for now let’s just keep it in mind, as we build our understanding of JavaScript language.

The __proto__ property is a bit outdated. It exists for historical reasons, modern JavaScript suggests that we should use Object.getPrototypeOf/Object.setPrototypeOf functions instead that get/set the prototype. We’ll also cover these functions later.

By the specification, __proto__ must only be supported by browsers. In fact though, all environments including server-side support __proto__, so we’re quite safe using it.

As the __proto__ notation is a bit more intuitively obvious, we use it in the examples.
 */
function proto2_prototype_this()
{
 console.log('prototype2');

 let objA={

    execute:function(){
        if(this.x){
          console.log(this.x);
        }

    },
    setX:function(){
        this.x=10;
    }
 };

 let objB={
    __proto__:objA,
 }

 objB.setX();
 objB.execute();
 objA.execute();
}

function proto1_prototype_chain() {
    console.log('prootype 1');
  let objA = {
    x: 10,
    display:function(){
        console.log(`Inside objA: ${this.x}`);
    },
    write: function(){
      console.log(`Inside objA: ${this.y}`);
    }
  };
  let objB = {
    y: 20,
    write: function(){
        console.log(`Inside objB: ${this.y}`);
      }
  };

  objB.__proto__ = objA; // sets objB.[[Prototype]] = objA
  console.log(objB.y);
  console.log(objB.x);
  objB.write();
  objB.display();

  let objC={
    y: 300,
    x: 100,
    __proto__: objB
  }

  console.log(objC.y);
  console.log(objC.x);
  objC.display();
  objC.write();
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
