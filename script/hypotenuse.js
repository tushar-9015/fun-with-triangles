const base = document.querySelector("#base");
const height = document.querySelector("#height");
const buttonCalculateHypotenuse = document.querySelector("#calculate-hypotenuse");
const outputMessage = document.querySelector("#output-message");


function calculateHypotenuse () {
    if(Number(base.value)<=0 || Number(height.value) <= 0){
        outputMessage.innerText = "Sides can not be negative, zero, or empty";
    } else {
        let hypotenuse = (Number(base.value)**2 + Number(height.value)**2)**0.5;
    outputMessage.innerText = `The hypotenuse of this triangle is: ${hypotenuse.toFixed(2)}`;
    }   
}


buttonCalculateHypotenuse.addEventListener("click", calculateHypotenuse);