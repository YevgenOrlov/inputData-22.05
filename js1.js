let inputIn = document.querySelector(".input-in");
let button = document.querySelector("button");
let div = document.querySelector(".out");

button.onclick = function () {
  console.log("working");
  //console.log(inputIn.value); // "велью"   это то, что введено в инпут
  let b = +inputIn.value; // "+"  переводит инпут в числовой формат
  console.log(b + 10);
  div.innerHTML = b; // присвоить значение "в" диву ; в = +inputIn.value
  inputIn.value = " "; //clean   form  input
};
