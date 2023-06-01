function greet() {
  console.log("I am greet");

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

function init() {
  let arr = [{ firstName: "John" }];
  function initValues() {
    return arr;
  }

  return initValues;
}

const MY_LIST = "myList";
function remove(event) {
  let index = event.target.id;
  let element = document.getElementById("div" + index);
  element.remove();
  let arr = getObject(MY_LIST);
  arr.splice(index, 1);
  setObject(MY_LIST,arr);
  refresh();
}

function addUser(event) {
  let firstNameValue = document.getElementById("firstName").value;
  let arr = getObject(MY_LIST);
  arr.push({ firstName: firstNameValue });
  setObject(MY_LIST, arr);
  refresh();
}

function refresh() {
  let arr = getObject(MY_LIST);
  let contentElement = document.getElementById("content");


  if (contentElement === null) {
    contentElement = document.createElement("div");
    contentElement.id = "content";
    document.body.appendChild(contentElement);
  }

  contentElement.innerText = "";
  for (let i = 0; i < arr.length; i++) {
    let divElement = document.createElement("div");
    divElement.id = "div" + i;

    let paraElement = document.createElement("span");
    paraElement.innerText = JSON.stringify(arr[i]);

    let buttonElement = document.createElement("button");
    buttonElement.textContent = "Remove";
    buttonElement.id = i;
    buttonElement.addEventListener('click', remove);
    buttonElement.type = "button";

    divElement.appendChild(paraElement);
    divElement.appendChild(buttonElement);

    contentElement.appendChild(divElement);
  }
}

window.onload = function (event) {
  console.log(event);
  localStorage.setItem("myList", JSON.stringify([]));
  refresh();
};

function getObject(key) {
  let result = localStorage.getItem(key);
  return JSON.parse(result);
}

function setObject(key, value){
    localStorage.setItem(key, JSON.stringify(value));

    [
        {
            a: {
               b: {
                stepId: uuid
               },
               c: {
                stepId: uuid
               }
            }
        }
    ]

    solutionId: graph
    solutionId, stepUuid, stepJson  {input , output, parent }


    /**
     *  a: {
               c: {},
            }
     */
     /**
      * row : ettetue : v2
      * parent: t1 : a
      * child: (t2,a, b) (t3, a, c)
      *  
      * (t2, v1, v2) (t3, v1 , v3)
      */
}
