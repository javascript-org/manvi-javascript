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
/**
 *  push , pop
 */
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

/**
 * shift, unshift
 */
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

function deleteByIndex() {
  let arr = ["Hi", "Hello", "Bye"];

  delete arr[1];

  console.log(arr);
  console.log(arr[1]);
}

function sparseArray() {
  let arr = [];
  arr[5] = undefined;
  arr[6] = 100;

  console.log(arr, arr.length);
  console.log(5 in arr); // element present at 5th index
  console.log(6 in arr); // element present at 6th index
  console.log(2 in arr); // element not present at 3rd index

  let arr1 = [12, , 34];
  console.log(arr1, arr1.length);
  console.log(0 in arr1);
  console.log(1 in arr1);
}

function arrayIteration() {
  // we can use any loop with index based approach
  let arr = ["Hi", "Hello", "Bye"];
  for (const index in arr) {
    console.log(`${index} = ${arr[index]}`);
  }
  // ============ reverse traversal ===================
  for (let index = arr.length - 1; index >= 0; index--) {
    console.log(`${index} = ${arr[index]}`);
  } // try this with do...while or while loop

  for (const item of arr) {
    console.log(`${item}`);
  }

  // iterating sparse array
  let arr1 = [10, , , , , "", 20];
  for (let item of arr1) {
    // try this with index approach
    if (item === undefined) {
      // skip undefined elements
      continue;
    }
    console.log(item);
  }

  // using entries to get index and value
  for (let [index, value] of arr1.entries()) {
    console.log(`${index} = ${value}`);
  }
}

function multiDimensionArray() {
  let name1 = "John";
  let name2 = "Doe";
  console.log(name1, name2);
  let name3 = ["John", "Doe", "Alex", "Cook"];
  console.log(name3);
  console.log(name3[0]);
  console.log(name3[1]);
  console.log(name3[2]);
  console.log(name3.length);

  for (let index in name3) {
    let value = name3[index];
    console.log(`${index} = ${value}`);
  }

  let name4 = [
    ["John", "Doe"],
    ["Alex", "Cook"],
  ];

  for (let index in name4) {
    let value = name4[index];
    console.log(`${index} = ${value}`);
  }
}

/**
 * map, filter, forEach
 * find, findIndex
 * reduce, reduceRight
 * every, some
 */
function arrayFunctionalArrowMethods() {
  forEachExample();
  mapExample();
  filterExample();
  sparseArrayFilter();
  filterAndMapExample();
  findExample();
  findByIndexExample();
  reduceExample();
  reduceRightExample();
  everyExample();
  someExample();
}


/**
  * flat, flatMap
  */
 function arrayMethods2() {}
 
 
/**
 * slice, splice
 * join, split
 * sort, reverse
 * includes, indexOf, lastIndexOf
 * concat, toString
 * fill, copyWithin
 */
 function arrayMethods1() {

 }

 

function forEachExample() {
  let arr1 = [10, 20, 30, 40];
  // with function
  function displayItem(item) {
    console.log(`${item}`);
  }
  arr1.forEach(displayItem);

  // with arrow function forEach
  arr1.forEach((item) => {
    // it skips undefined
    console.log(`${item}`);
  });
}

function someExample() {
  // some: check if some of the element are matching a given conditon
  let numbers = [1, 2, 3, 4, 5];
  let resultFlag = numbers.some((item) => {
    return item >= 10;
  });
  console.log(resultFlag);
}

function everyExample() {
  // every : checks every if every element is matching a given condition
  let numbers = [1, 2, 3, 4];
  let resultFlag = numbers.every((item) => {
    return item < 3;
  });
  console.log(resultFlag);
}

function reduceRightExample() {
  let initialValue = 5;
  let digits = [1, 2, 3];
  // reduce right moves from right to left
  let result = digits.reduceRight((x, y, index, digits) => {
    console.log(index, digits);
    return 10 * x + y;
  }, initialValue);
  console.log(result);
}

function reduceExample() {
  // reduce moves from left to right
  let initialValue = 5;
  let digits = [1, 2, 3];
  let result = digits.reduce((x, y, index, digits) => {
    console.log(index, digits, x, y);
    return 10 * x + y;
  }, initialValue);
  console.log(result);
}

function findByIndexExample() {
  let numbers = [1, 2, 3, 4, 5, 6];

  // findIndex(): finds the first index that matches the condition

  let firstMatchIndex = numbers.findIndex((item, index) => {
    return index + item > 4;
  });
  console.log(firstMatchIndex);
}

function findExample() {
  let numbers = [1, 2, 3, 4, 5, 6];
  // find(): finds the first match in the array
  let firstMatchElement = numbers.find((item, index) => {
    return index + item > 4;
  });
  console.log(firstMatchElement);
}

function filterAndMapExample() {
  let numbers = [1, 2, 3, 4, 5, 6];

  let squareValues = numbers
    .filter((item) => {
      return item % 2 === 0;
    })
    .map((item) => {
      return item * item;
    });
  console.log(squareValues);
}

function sparseArrayFilter() {
  // sparse array
  let sparse = [1, , null, undefined, 2, 3, null];
  sparse.length = 15;
  console.log(sparse);
  let skipEmptyValues = sparse.filter(() => {
    return true;
  });
  console.log(skipEmptyValues);

  skipEmptyValues = skipEmptyValues.filter((item) => {
    let resultFlag = item !== null && item !== undefined;
    return resultFlag;
  });
  console.log(skipEmptyValues);

  // filter chain
  let validNumbers = sparse
    .filter(() => {
      return true;
    })
    .filter((item) => {
      let resultFlag = item !== null && item !== undefined;
      return resultFlag;
    });
  console.log(validNumbers);
}

function filterExample() {
  let numbers = [1, 2, 30, 40, 5];
  // filter
  let filterValues = numbers.filter((item) => {
    return item > 10;
  });

  console.log(filterValues);

  filterValues = numbers.filter((item, index) => {
    let resultFlag = index % 2 === 0;
    return resultFlag;
  });

  console.log(filterValues);
}

function mapExample() {
  let arr = [1, 2, 3, 4, 5];

  // map()
  let squareValueFunction = (item) => {
    return item * item;
  };
  let squares = arr.map(squareValueFunction);
  console.log(squares);
  squares = arr.map((item) => {
    return item * item;
  });
  console.log(squares);
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
  addClickEvent("id8", sparseArray);
  addClickEvent("id9", arrayIteration);
  addClickEvent("id10", arrayFunctionalArrowMethods);
}

function addClickEvent(id, functionParam) {
  let btnId = document.getElementById(id);
  btnId.onclick = functionParam;
}

window.onload = function onLoad() {
  addEventListeners();
};
