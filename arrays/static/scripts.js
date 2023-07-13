window.onload = (event) => {
  addHandler("id1", f1);
  addHandler("id2", f2);
  addHandler("id3", f3);
  addHandler("id4", f4);
  addHandler("id5", f5);
  addHandler("id6", f6);
  addHandler("id7", f7);
};

function addHandler(id, handler) {
  let element = document.getElementById(id);
  element.addEventListener("click", handler);
}

function f7(){
    // iteration

    let arr=['hi','hello', 'bye'];
    for(const index in arr){
        console.log(index,arr[index]);
    }

    for(let index = arr.length -1; index >=0; index--){
        console.log(index,arr[index]);
    }

    for(let item of arr)
    {
        console.log(item);
    }

    for( let [index,value] of arr.entries()){
        console.log(index, value);
    }

    let arr1=[10,,,,,,"", 20];
    for(let item of arr1){
        if(item===undefined){
            continue;
        }
        console.log(item);
    }

}
function f6(){
    // sparse array: some values are empty
    let arr=[];
    arr[5] = undefined;
    arr[6] = 100;
    console.log(arr);
    console.log(5 in arr); // index in arr
    console.log(6 in arr);
    console.log(2 in arr);

    let arr1 = [10,,,30];
    console.log(arr1, arr1.length);
    console.log(0 in arr1);
    console.log(1 in arr1);
}
function f5()
{
    let arr=[10,20,30];
    delete arr[2];
    console.log(arr);
    console.log(arr[2]); // undefined
}

function f4(){
    // unshift at front (push)
    // shift at front (pop)
    let arr=[1,2,3];
    arr.unshift(4);
    arr.unshift(5,6);

    let arr1 = [7,8];
    arr.unshift(...arr1);
    arr.unshift(arr1);
    console.log(arr);

    let firstItem = arr.shift();
    console.log(firstItem);

    firstItem = arr.shift();
    console.log(firstItem);

    console.log(arr);
}
function f3(){
    // add or remove from end
    let arr=[1,2,3];
    arr.push(4);
    arr.push(5,6);
    console.log(arr);

    let arr1 = [10,20];
    arr.push(...arr1);
    arr.push(arr1);
    console.log(arr);

    let popItem = arr.pop();
    console.log(popItem);

    popItem = arr.pop();
    console.log(popItem);

    console.log(arr);
}
function f2(){
    let arr=['hi','hello','bye'];
    console.log(arr.length);
    console.log(arr[0]); // hi
    console.log(arr.at(-1)); // bye
}
function f1() {
  // constructor approach
  let arr1 = new Array();
  console.log(arr1, arr1.length);

  let arr2 = new Array(3);
  console.log(arr2, arr2.length);

  let arr3 = ["Hi", "Hello"];
  console.log(arr3, arr3.length);

  let arr4 = [];
  console.log(arr4, arr4.length);

  let arr5 = {}; // object but init as array
  arr5[0] ='Hi';
  arr5[1] = 'Hello';
  arr5["length"]=2;
  console.log(arr5, arr5.length);

  // arr6 and arr3 both are diffrent copies
  let arr6 = Array.from(arr3); // from is a factory method
  arr6.push('bye');
  console.log("arr6:",arr6);
  console.log("arr3",arr3);

  let arr7 = Array.from(arr5); // arr5 is object init as array 
  console.log(arr7);

  let arr8=[1,2,[3]];
  let arr9 = [4,5];
  let arr10= [10, ...arr8, 12, ...arr9];
  console.log(arr10);

  // Array.of

  let arr11 =  Array.of(12,13,...arr8,arr8); 
  console.log(arr11);
}
