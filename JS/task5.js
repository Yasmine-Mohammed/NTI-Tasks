
function calcRoot(){
    alert("====== Root:======")
    var number = Number(prompt("Enter the number : "));
    var root = Number(prompt("Enter the root : ")) ;
    var out5 = document.getElementById("Output5");
    var result = (number)**(1/root)
    out5.innerHTML += (`Result = ${result}`);

}
calcRoot();