
function calcGrades(){
    alert("======Grades:======")
    var gradeOfPhysics = Number(prompt("Enter the grade of physics : "));
    var gradeOfChemistry = Number(prompt("Enter the grade of Chemistry : "));
    var gradeOfBiology = Number(prompt("Enter the grade of Biology : "));
    var gradeOfMathematics = Number(prompt("Enter the grade of Mathematics : "));
    var gradeOfComputer = Number(prompt("Enter the grade of Computer : "));
    var totalScore=gradeOfPhysics + gradeOfChemistry + gradeOfBiology + gradeOfMathematics + gradeOfComputer;
    var totalMarks = 100;
    var percentage = (totalScore/totalMarks) * 100;

    var out = document.getElementById("Output");

    out.innerHTML += "Grade of Chemistry : "+gradeOfChemistry +"<br>";
    out.innerHTML += "Grade of Biology : "+gradeOfBiology + "<br>";
    out.innerHTML += "Grade of Mathematics : "+gradeOfMathematics + "<br>";
    out.innerHTML += "Grade of Computer : "+gradeOfComputer + "<br>";
    out.innerHTML += `Total score : ${totalScore} from ${totalMarks}` + "<br>";
    out.innerHTML += `Percentage : ${percentage} %` + "<br>";

    if(percentage >= 90)
        out.innerHTML += "Grade : A";
    else if(percentage>=80)
        out.innerHTML += "Grade : B";
    else if(percentage>=70)
        out.innerHTML += "Grade : C";
    else if(percentage>=60)
        out.innerHTML += "Grade : D";
    else if(percentage>=40)
        out.innerHTML += "Grade : E";
    else
        out.innerHTML += "Grade : F";
}

calcGrades();
