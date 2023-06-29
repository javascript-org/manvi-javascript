window.onload=function(event){

}

function f5()
{
    let objA={
        y: 20,
        execute:function(){
           console.log(`${this.x}`);
        },
    }

    let objB={
        x: 10,
        __proto__: objA
    }

    objB.execute(); // 10
    objA.execute(); // undefined

    for(let key in objB){
        console.log(key); // enumerable keys : own keys + inherited keys
    }

    console.log(Object.keys(objB)); // own keys
    Object.keys(objB).forEach((key)=>{
        console.log(`${key}`);
    });

    console.log(Object.prototype.hasOwnProperty.call(objB, 'x')); // true
    console.log(Object.prototype.hasOwnProperty.call(objB, 'y')); // false
    console.log(Object.prototype.hasOwnProperty.call(objA, 'y')); // true

    Object.getOwnPropertyNames(objA).forEach(key=>{
        console.log(`${key}`);
    })
}


function f4()
{
    let objA={
        execute:function(){
            if(this.x){
                console.log(`${this.x}`);
            }
            else{
                console.log(this.x);
            }
        },

        setX: function(){
            this.x =10;
        }
    }

    let objB={
        __proto__: objA
    }

    objB.setX();
    objB.execute();

    objA.execute();
}

function f3()
{
    let _theProto={
        collegeName: 'Oxford',
        describe: function(){
            console.log(`college: ${this.collegeName} & name: ${this.name}`);
        }
    }

    let john ={
        name: 'John',
        __proto__: _theProto
    }
    john.display=function(){
        console.log(`${this.name}`);
    }

    let alex = {
        name: 'Alex',
        describe: function(){
            console.log(`inside: alexObj: ${this.collegeName}  ${this.name}`);
        }
    }
    alex.__proto__ = _theProto;

    john.describe();
    john.display();

    alex.describe();

}

function f2()
{
    let _theProto = {
        display: function(){
            console.log(`${this.name}`);
        }
    }

    let john = {
        __proto__: _theProto,
        name: 'John'
    }

    let alex = {
        __proto__: _theProto,
        name: 'Alex'
    }

    john.display();
    alex.display();
    _theProto.display();
}

function f1()
{
    // single objects or object literals
    let john = {
        name: 'John',
        display: function(){
            console.log(`${this.name}`);
        }
    }

    let alex = {
        name: 'Alex',
        display: function(){
            console.log(`${this.name}`);
        }
    }

    john.display();
    alex.display();
}