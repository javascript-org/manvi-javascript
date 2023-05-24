
// defining function
function greet()
{
    console.log('Welcome John');
}

function btnHandler1()
{
    greet(); // calling function
}

const greetMe = function greet1()
{
    console.log('Welcome John. Function assignment');
}

function btnHandler2()
{
    console.log(greetMe);
    greetMe(); // calling function
}


const greetMe1 = function(){
    console.log('Welcome John. Function Expression. Anonymous')
}

function btnHandler3()
{
    console.log(greetMe1);
    greetMe1(); // calling function
}

const greetMe2 = ()=>{
    console.log('Welcome John. Arrow Function');
}

function btnHandler4()
{
    console.log(greetMe2);
    greetMe2(); // calling function
}

function btnHandler5()
{
    function greet(){
        console.log('Welcome John 1, Self calling');
    }


    (function greet(){
        console.log('Welcome John, Self calling');
    })()
}