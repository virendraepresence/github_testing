//age calculater

const errorDiv = document.getElementById("error-holder");
const resultDiv = document.getElementById("result-holder");
        

function ageChange(event){
    //Get the value entered by the user
    // const inputAge= document.getElementById("")
    console.log("event is", event.target);
    const enteredValue=event.target.value;
    if(enteredValue<5){
        errorDiv.innerText="You need to be atleast 5";
        const submitButton=document.getElementById("age_submit");
        submitButton.setAttribute("disabled", true);
    }else{
        errorDiv.innerText="";
        const submitButton=document.getElementById("age_submit");
        submitButton.setAttribute("disabled", false);
    }

}

function handleSubmit(e){
    //when you submit a form do write the following line
    e.preventDefault();
    const ageEntered=Number(document.getElementById("q_age"))
    const phoneCheckBox = document.getElementById("q_owns_phone")
    // phoneCheckBox.checked gives true if box is checked
    if(ageEntered===0){
        errorDiv.innerText="please choose an age";
    }else{
        errorDiv.innerText=""
        if(ageEntered<13 && phoneCheckBox.checked===true){
            resultDiv.innerText="You are too young to have a phone!";
        }else if(phoneCheckBox.checked===false){
            resultDiv.innerText="You will get the phone soon";
        }else if(ageEntered>13 && phoneCheckBox.checked){
            resultDiv.innerText="Use your phone in moderation";
        }
    }
}