let btnElement = document.getElementById("myBtn");
console.log(btnElement);

window.onload = function (event) {
  console.log("Hello");
  let btnElement = document.getElementById("myBtn");
  btnElement.onclick = submitBtnClick;
  let persons = [];
  localStorage.setItem("persons", JSON.stringify(persons));

  let formData = {
    username: '',
    email: '',
    password: ''
  }
  localStorage.setItem("formData",JSON.stringify(formData));
};

function submitBtnClick(event) {
  // console.log(event);
  // console.log(event.target);
  // console.log(event.target.id);
  // console.log(event.target.onclick);

  let firstNameElement = document.getElementById("firstName");
  // console.log(firstNameElement);
  // console.log(firstNameElement.value);

  let personStr = localStorage.getItem("persons");
  let persons = JSON.parse(personStr);

  persons.push({ firstName: firstNameElement.value });

  localStorage.setItem("persons", JSON.stringify(persons));

  console.log(persons);
  firstNameElement.value = "";

  // saveArray();

  displayList();


 //spliceArr();

}

function spliceArr()
{
  let arr=[2,3,4,5,6,7];
  console.log(arr);
  arr.splice(3,1);
  console.log(arr);
}

function displayList() {
  let contentElement = document.getElementById("content");

  contentElement.innerText = "";

  let personStr = localStorage.getItem("persons");
  let persons = JSON.parse(personStr);

  for (let index in persons) {

    let person = persons[index];
    console.log(person.firstName);

    let rowElement = document.createElement("div");
    rowElement.id = "row" + index;
    contentElement.append(rowElement);

    let spanElement = document.createElement("span");
    spanElement.innerText = person.firstName;

    let btnElement = document.createElement("button");
    btnElement.id = index;
    btnElement.textContent = "Remove";
    btnElement.onclick = removeItem;

    rowElement.append(spanElement);
    rowElement.append(btnElement);
  }
}

function removeItem(event)
{
  let btnIdAsIndex = event.target.id;

  console.log(btnIdAsIndex);
  let rowId = "row"+btnIdAsIndex;
  let divRow = document.getElementById(rowId);
  divRow.remove();
  console.log(rowId);

  let persons = JSON.parse(localStorage.getItem("persons"));
  persons.splice(btnIdAsIndex, 1);
  console.log(persons);
  localStorage.setItem("persons",  JSON.stringify(persons));

}

function saveArray() {
  let students = [{ name: "Sachin" }];

  console.log(students[0].name);
  localStorage.setItem("myStudents", JSON.stringify(students));

  let studentsFromStorage = localStorage.getItem("myStudents");

  console.log(typeof studentsFromStorage);
  studentsFromStorage = JSON.parse(studentsFromStorage);
  console.log(studentsFromStorage[0].name);
}


function userNameOnKeyup(event)
{
  console.log(event.target.value);

  let formData = JSON.parse(localStorage.getItem("formData"));
  formData.username = event.target.value;
  console.log(formData);

  localStorage.setItem("formData", JSON.stringify(formData));
}