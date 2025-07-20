function submitForm() {
    var pass = document.getElementById("pass").value;
    var cpass = document.getElementById("cpass").value;
    clearErr();
    if (pass) {
        if (cpass) {
            if (pass === cpass) {
                document.getElementById("form2").style.display = "block";
                var gender = document.querySelector('input[name="gender"]:checked').value;
                var studentType = document.querySelector('input[name="stype"]:checked').value;
                var course = document.getElementById("course").value;
                var interests = [];
                document.querySelectorAll('input[name="interest"]:checked').forEach(function(checkbox) {interests.push(checkbox.id);});
                var commentSection = document.querySelector('textarea[name="section"]').value;
                
                document.getElementById("name").value = document.getElementById("fname").value + " " + document.getElementById("mname").value + " " + document.getElementById("lname").value
                document.getElementById("uname2").value = document.getElementById("uname").value
                document.getElementById("sn2").value = document.getElementById("sn").value
                document.getElementById("gender").value = gender;
                document.getElementById("interest").value = interests.join(", ");
                document.getElementById("stype").value = studentType;
                document.getElementById("course").value = course;
                document.getElementById("course2").value = course;
                document.getElementById("section").value = commentSection;
                document.getElementById("form1").style.display = "none";
            } else {
                alert ("Password doesn't match");
                document.getElementById("cpass").parentElement.lastElementChild.style = "color:red;font-size:10px;";
                document.getElementById("cpass").parentElement.lastElementChild.innerHTML = "Password doesn't match";
            }
        } else {
            alert("Please input password");
            document.getElementById("cpass").parentElement.lastElementChild.style = "color:red;font-size:10px;";
            document.getElementById("cpass").parentElement.lastElementChild.innerHTML = "Please input password";
        }
    } else {
        alert ("Please input password");
        document.getElementById("cpass").parentElement.lastElementChild.style = "color:red;font-size:10px;";
        document.getElementById("cpass").parentElement.lastElementChild.innerHTML = "Please input password";
    }
}


function cancelForm() {
    document.getElementById("form1").style.display = "block";
    document.getElementById("name").value = "";
    document.getElementById("form2").style.display = "none";
    document.getElementById("pass").parentElement.lastElementChild.innerHTML = "";

}
function clearForm() {
    document.getElementById("fname").value = "";
    document.getElementById("mname").value = "";
    document.getElementById("lname").value = "";
    document.getElementById("uname").value = "";
    document.getElementById("pass").value = "";
    document.getElementById("cpass").value = "";
    document.getElementById("pass").parentElement.lastElementChild.innerHTML = "";
    document.getElementById("cpass").parentElement.lastElementChild.innerHTML = "";
}
function clearErr() {
    document.getElementById("pass").parentElement.lastElementChild.innerHTML = "";
    document.getElementById("cpass").parentElement.lastElementChild.innerHTML = "";
}
function getgender(gender){
    document.getElementById(submit).value = gender;
}
function getstudenttype(stype){
    document.getElementById(submit).value = stype;
}