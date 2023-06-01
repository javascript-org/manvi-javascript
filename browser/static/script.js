
let btnElement = document.getElementById("myBtn");
console.log(btnElement)

window.onload = function(event)
{
  console.log('Hello');
  let btnElement = document.getElementById("myBtn");
  btnElement.onclick = submitBtnClick;
}

function submitBtnClick(event)
{
  console.log(event.target.id);
  console.log(event.target.onclick);
  let firstNameElement = document.getElementById('firstName');
  console.log(firstNameElement);
  console.log(firstNameElement.value);
  let persons = [{firstName: 'John'},{firstName: 'Alex'}];
  persons.push({firstName: firstNameElement.value});
  console.log(persons);
  firstNameElement.value = '';
}