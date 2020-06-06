//defining buttons as a variable
const dataNumber = document.querySelectorAll(".data-number");
const dataOperation = document.querySelectorAll(".data-operation");
const equalsButton = document.querySelector(".data-equals");
const deleteButton = document.querySelector(".delete-btn");
const allClearButton = document.querySelector(".all-clear-btn");
document.querySelector(".screen").style.fontSize="57px";
var firstOperand;
//Adding Event Listener to the buttons
for (let i = 0; i < dataNumber.length; i++) {
  dataNumber[i].addEventListener("click", (event) => {
    buttonAnimation(dataNumber[i].classList[2]);
    Display(document.querySelector("."+dataNumber[i].classList[2]).innerText);
  });
}


for (let i = 0; i < dataOperation.length; i++) {
  dataOperation[i].addEventListener("click", (event) => {
    buttonAnimation(dataOperation[i].classList[1]);
      Display(document.querySelector("."+dataOperation[i].classList[1]).innerText);
  });
}
equalsButton.addEventListener("click", (event) => {
  buttonAnimation(equalsButton.classList[1]);
    Display(document.querySelector("."+equalsButton.classList[1]).innerText);
});
allClearButton.addEventListener("click", (event) => {
  buttonAnimation(allClearButton.classList[1]);
  Display(document.querySelector("."+allClearButton.classList[2]).innerText);
});
deleteButton.addEventListener("click", (event) => {
  buttonAnimation(deleteButton.classList[1]);
    Display(document.querySelector("."+deleteButton.classList[2]).innerText);
});


//function for  ButtonAnimation
function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed")
  setTimeout(function() {
    activeButton.classList.remove("pressed")
  }, 100);
}

//display on screen while clicking
function Display(key)
{
  const prev=document.querySelector(".screen").innerText;
  switch (key) {
    //inputing the numbers in screen
    case "1":
    case "2":
    case "3":
    case "4":
    case "5":
    case "6":
    case "7":
    case "8":
    case "9":
    case "0":
    case ".":
    if(prev.length>33)
    {
    document.querySelector(".screen").style.fontSize=parseInt(document.querySelector(".screen").style.fontSize)-2+"px"
    }
    document.querySelector(".screen").innerText=prev+key;
    break;
    //clearing the screen
    case "AC":
    document.querySelector(".screen").innerText="";
    break;

    case "DEL":
    document.querySelector(".screen").innerText=document.querySelector(".screen").innerText.slice(0,prev.length-1);
   break;

   case "/":
   case "*":
   case "+":
   case "-":
   if(prev.length>33)
   {
   document.querySelector(".screen").style.fontSize=parseInt(document.querySelector(".screen").style.fontSize)-2+"px"
   }
   firstOperand=prev;
   document.querySelector(".screen").innerText=prev+key;
   break;

   case "=":
   if(prev.length>33)
   {
   document.querySelector(".screen").style.fontSize=parseInt(document.querySelector(".screen").style.fontSize)-2+"px"
   }
    const operator=document.querySelector(".screen").innerText.slice(firstOperand.length,firstOperand.length+1);
    const lastOperand=document.querySelector(".screen").innerText.slice(firstOperand.length+1,document.querySelector(".screen").innerText.length);
    const finalResult=math_it_up[operator](parseFloat(firstOperand),parseFloat(lastOperand));
    document.querySelector(".screen").innerText=""+finalResult;
   break;
    default:
      alert("Press the buttom below");
      break;
  }
  }


//for converting the string operator to a normal operator
  var math_it_up = {
    "+":function(x,y){return x+y},
    "-":function(x,y){return x-y},
    "*":function(x,y){return x*y},
    "/":function(x,y){return x/y}
  };
