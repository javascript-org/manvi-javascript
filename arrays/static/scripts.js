function arrayCreation() {
  // array constructor with size zero
  let arr1 = new Array();
  console.log(arr1, arr1.length);

  // array constructor with size 3 but no elements
  let arr2 = new Array(3);
  console.log(arr2, arr2.length);

  // array literal
  let arr3 = ["Hi", "Hello", "Bye"];
  console.log(arr3, arr3.length);

  // empty array literal
  let arr4 = [];
  console.log(arr4, arr4.length);

  // array like object
  let objectAsArray = {};
  objectAsArray[0] = "Hi";
  objectAsArray[1] = "Hello";
  objectAsArray["length"] = 2; // must add length property

  console.log(objectAsArray);

  let arr5 = Array.from(objectAsArray);
  console.log(arr5, arr5.length);

  // spread operator
  let arr6 = [2, 4, 6];
  let arr7 = [1, ...arr6, 8, 9];
  console.log(arr7, arr7.length);
}

function mixedArray() {
  let person = {
    firstName: "John",
    lastName: "Doe",
  };

  let display = () => {
    console.log("the function");
  };

  let arr = ["Hi", 100, person, display];

  for (const item of arr) {
    console.log(item, typeof item);
  }

  console.log("============================");

  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i], typeof arr[i]);
  }
}

function indexWithAt() {
  let arr = ["Hi", "Hello", "Bye"];
  console.log(arr.length);
  console.log(arr[2]);
  console.log(arr.at(-1));

  console.log(arr[1]);
  console.log(arr.at(-2));
}

function indexInit() {
  let arr = [];
  arr[0] = "Hi";
  console.log(arr);
  arr[0] = "Hello";
  arr[1] = "Bye";
  arr[10] = "Done";

  console.log(arr);
}

function addOrRemoveFromEnd() {
  let arr = [1, 2, 3];
  arr.push(4);
  arr.push(5, 6);
  arr.push(...arr);

  let arr1 = [100, 200, 300];
  arr.push(arr1);

  console.log(arr);

  let lastItem = arr.pop();

  console.log(lastItem);

  lastItem = arr.pop();

  console.log(lastItem);
}

function addOrRemoveAtFront() {
  let arr = [1, 2, 3];
  arr.unshift(4);
  arr.unshift(5, 6);
  arr.unshift(...arr);

  let arr1 = [100, 200, 300];
  arr.unshift(arr1);

  console.log(arr);

  let firstItem = arr.shift();

  console.log(firstItem);

  firstItem = arr.shift();

  console.log(firstItem);
}

function deleteByIndex()
{
    let arr=['Hi', 'Hello', 'Bye'];

    delete arr[1];

    console.log(arr);
    console.log(arr[1]);
}

// =====================================================

function addEventListeners() {
  addClickEvent("id1", arrayCreation);
  addClickEvent("id2", mixedArray);
  addClickEvent("id3", indexWithAt);
  addClickEvent("id4", indexInit);
  addClickEvent("id5", addOrRemoveFromEnd);
  addClickEvent("id6", addOrRemoveAtFront);
  addClickEvent("id7", deleteByIndex);
}

function addClickEvent(id, functionParam) {
  let btnId = document.getElementById(id);
  btnId.onclick = functionParam;
}

window.onload = function onLoad() {
  addEventListeners();
};
