function greet()
{
    console.log('I am greet');

    // variable declaration
    let x;
    x = 10; // initialization
    console.log(x);

    let y = 20; // declaration and initialization
    console.log(y);

    let add = x + y; // expression
    console.log(add);

    let subtract = x - y;
    console.log(subtract);

}


function init()
{
    let arr=[{firstName:'John'}];
    function initValues()
    {
        return arr;
    }

    return initValues;
}

function remove(event)
{
   let btnId =  event.target.id;
   let element = document.getElementById("div"+btnId);
   element.remove();
   arr.splice(btnId,1);
}

function addUser(event)
{
    let firstNameValue = document.getElementById('firstName').value;
    arr.push({firstName:firstNameValue});
    refresh();
}

function refresh()
{
 let element = document.getElementById("content");

 if(element === null && arr.length == 0){
    return;
 }

 if(element === null)
 {
   element = document.createElement("div");
  element.id="content";
 document.body.appendChild(element);
 }

 element.innerText='';
  for(let i = 0; i< arr.length; i++)
  {
    let divElement = document.createElement("div");
    divElement.id = "div"+i; 

    let paraElement = document.createElement("span");
    paraElement.innerText = JSON.stringify(arr[i]);

    let buttonElement = document.createElement("button");
    buttonElement.textContent='Remove';
    buttonElement.id = i;
    buttonElement.addEventListener('click',remove);
    buttonElement.type='button';

    divElement.appendChild(paraElement);
    divElement.appendChild(buttonElement);

    element.appendChild(divElement);
  }

}

let arr=[];
window.onload = function(event){
    console.log(event);
    refresh();
}