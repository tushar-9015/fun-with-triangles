const angles = document.querySelectorAll(".input-angles");
const buttonIsTriangle = document.querySelector("#check-btn");
const outputMessage = document.querySelector("#output");

console.log("js is on");

function sumAngles(angle1, angle2, angle3) {
    console.log(typeof(arguments));
    for (let angle of arguments) {
         console.log(angle);
        if (angle <= 0) {
            console.log(angle);
            return "wrong"
        }
    }

    const sum = angle1 + angle2 + angle3;
    return sum;
};


function isTriangle() {   
    var totalAngle = sumAngles(
        Number(angles[0].value),
        Number(angles[1].value),
        Number(angles[2].value)
      ); 

    console.log(totalAngle);

    if (totalAngle === "wrong") {
        outputMessage.innerText = "Angles can not be negative, zero, or empty";
    }
    else if (totalAngle === 180) {
        outputMessage.innerText = "This is a triangle.";
    } else {
        outputMessage.innerText = "This is not a triangle";
    }
};


buttonIsTriangle.addEventListener("click", isTriangle);