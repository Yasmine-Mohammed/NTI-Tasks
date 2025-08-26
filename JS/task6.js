
function calculator(){
    alert("====== Calculator:======")
    var num1 = Number(prompt("Enter number1 : "))
    var num2 = Number(prompt("Enter number2 : "))
    var operation = prompt("Enter the operation (+ , - , * , / , % ) : ")
    var result = 0;

    var out6 = document.getElementById("Output6");

    switch (operation){
        case "+" :
            result = num1 + num2 ;
            break;
        case "-" :
            result = num1 - num2 ;
            break;
        case "*" :
            result = num1 * num2 ;
            break;
        case "/" :
            result = num1 / num2 ;
            break;
        case "%" :
            result = num1 % num2 ;
            break;
        default:
            result = "Invalid Operation . "
    }

    out6.innerHTML= (`Result = ${num1} ${operation} ${num2} = ${result}`)
}

calculator();