const sides = document.querySelectorAll(".inputHandB");
const buttonCalculateArea = document.querySelector("#area-btn");
const outputMessage = document.querySelector("#output");

function findPerimeter(sides) {
    let sum = 0;
    for(let side of sides) {
        sum = sum + Number(side.value);
    }
    return sum;
};

function substract(perimeter, side) {
    const sub = perimeter - side;
    // console.log("sub", sub );
    return sub;
};

function checkSides (sidesList) {
    for (let side of sidesList) {
        if (Number(side.value) <= 0) {
            return false;
        }
    }
    return true;
}


function calculateArea(sides) {    
    const perimeter = findPerimeter(sides)
    let area = 0;
    let temp = 1
    for(let side of sides) {
        temp = Math.abs(temp*substract(perimeter/2, Number(side.value)));
        // console.log("temp", temp);
    }
    if(temp > 0) {
        area = Math.pow(((perimeter/2)*temp), 0.5);
    }
    // console.log(area);
    outputMessage.innerText = `The area of your triangle is ${area.toFixed(2)}`;
};



buttonCalculateArea.addEventListener("click", function() {
    let sidesGood = checkSides(sides);
    console.log(sidesGood);
    if (sidesGood) {
        calculateArea(sides);
    } else {
        outputMessage.innerText = "Sides can not be negative, zero, or empty";
    }
});