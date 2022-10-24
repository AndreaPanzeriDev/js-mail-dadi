


//array with emails
let emails = ["tizio@gmail.com", "caio@gmail.com", "sempronio@gmail.com", "chip@gmail.com", "chop@gmail.com"];


//function to find the email into the array
function Research(){
    let check = document.getElementById("inputMail").value;
    //
    console.log(check);
    //variable
    let variable = 0;
    //check if the user actually type something
    if (check.length == 0) {
        alert("Inserire un'email");
    } else {
        //check for a match in the array
        for (let i = 0;i < emails.length; i++) {
            if(check == emails[i]){
                variable = 1;  //if the mail is in the array i change the variable
            }
        }
        //show the result
        if(variable == 1){
            //printing that the mail is INTO the array
            document.getElementById("outputResult").innerHTML = "L'email è presente nell'array";
            document.getElementById("outputResult").style.color = "green";
        }else{
            //printing that the mail is NOT INTO the array
            document.getElementById("outputResult").innerHTML = "L'email non è presente nell'array";
            document.getElementById("outputResult").style.color = "red";
        }

    }

}