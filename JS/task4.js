
function calcEvenOrOdd(){
    alert("====== Even or Odd:======")
    var number = Number(prompt("Enter the Number : "));
    var out4= document.getElementById("Output4");
    if (number % 2==0)
        out4.innerHTML += (`The number ${number} is Even`);
    else if (number % 2 !=0)
        out4.innerHTML += (`The number ${number} is Odd`);
    else
        out4.innerHTML += (`The number ${number} Not even , Not odd`);

}

calcEvenOrOdd();
