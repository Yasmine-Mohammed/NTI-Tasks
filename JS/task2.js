
function calcMax_Min(){
    alert("======Max & Min:======")
    var num1= Number(prompt("Enter Number1 : "));
    var num2= Number(prompt("Enter Number2 : "));
    var num3= Number(prompt("Enter Number3 : "));
    var max = num1;
    var min = num2;
    var out2 = document.getElementById("Output2");

    if(num2 > max)
        out2.innerHTML += (`Tha maximum number is : ${num2} `);
    else if(num3 > max)
        out2.innerHTML += (`Tha maximum number is : ${num3} `);
    else
        out2.innerHTML += (`Tha maximum number is : ${num1} `);

    if(num2 < num1)
        out2.innerHTML += (`Tha minimum number is : ${num2} `);
    else if(num3 < num1)
        out2.innerHTML += (`Tha minimum number is : ${num3} `);
    else 
        out2.innerHTML += (`Tha minimum number is : ${num1} `);
}
calcMax_Min();