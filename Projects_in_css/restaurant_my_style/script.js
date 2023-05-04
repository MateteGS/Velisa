const btn = document.getElementById("btn");

const filet = document.getElementById("filet");
const lobster = document.getElementById("lobster")
const wrapper = document.getElementById("wrapper");

const filetPrice = 10;
const lobsterPrice = 30;
const steakPrice = 25;
const velvetPrice = 5;

const redwinePrice = 10;
const shampagnePrice = 90;
const whiskyPrice = 150;
const sider = 4;

btn.addEventListener("click",()=> {
    let amount = parseFloat(document.getElementById("amount").value);
    if(filet.checked){
        wrapper.innerHTML = `hey ${amount - 90}`
    }
       
    
});

function validate() {
    let name = document.forms["myform"]["name"].value;
    let number = document.forms["myform"]["number"].value;
    let feedback = document.forms["myform"]["number"].value;

    if(name =="") {
        alert("Name must not be blank ");
	return false;
	}

    if(number.length !== 10) {
        alert("Contact no must be 10 digits");
        return false;
    } else if(isNaN(number)){
        alert("Please enter number")
        return false;
    }

    if(feedback == ""){
        alert("Please give us your feedback");
        return false;
    } else {
        alert("Your data is successfully submitted")
        return false;
    }
}
