

function clacNegOrPos(){
    alert("====== Negative or Positive:======")
    var number = Number(prompt("Enter the Number : "));
    var out3 = document.getElementById("Output3");

    if (number > 0)
        out3.innerHTML+= (`The number ${number} is positive`)  ;
    else if (number < 0)
        out3.innerHTML+= (`The number ${number} is Negative`)  ;
    else
        out3.innerHTML+= (`The number ${number} Not positive , Not negative`)  ;
}
clacNegOrPos();