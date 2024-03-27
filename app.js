let input = document.querySelector("#input");
let btn = document.querySelectorAll("button");
let arr = Array.from(btn);
let string = "";
let clickedButton;
function allClear() {
  string = "";
  input.value = string;
}

function deleteLast() {
  string = string.slice(0, length - 1);
  input.value = string;
}

function calculate() {
  try {
    string = input.value.toString()
    string = string.replace("%", "/100");
    string = eval(string).toString();
    input.value = string;
    
    

  } catch (error) {
    string = "";
    input.value = 'ERROR'
  }
  
}

arr.forEach((button) => {
  button.addEventListener("click", function (e) {
    
    if(clickedButton == '=' && e.srcElement.className == 'number'){
      allClear();
      string += e.target.innerHTML;
      input.value = string;
      clickedButton = e.target.innerHTML;
    }
    else if (input.value == "0" && e.srcElement.className == "number") {
      //Do Nothing!
    } else if (
      (string[string.length - 1] == "/" ||
        string[string.length - 1] == "*" ||
        string[string.length - 1] == "+" ||
        string[string.length - 1] == "-" ||
        string[string.length - 1] == ".") &&
      e.srcElement.className == "operator"
    ) {
      //Do Nothing!
    } else if (string.includes(".") == true && e.target.innerHTML == ".") {
      //Do Nothing!
    } else if (e.target.innerHTML == "AC") {
      allClear();
    } else if (e.target.innerHTML == "DEL") {
      deleteLast();
    } else if (e.target.innerHTML == "=") {
      calculate();
      clickedButton = e.target.innerHTML;
    } else {
      string += e.target.innerHTML;
      input.value = string;
      clickedButton = e.target.innerHTML;
      
    }
  });
});
