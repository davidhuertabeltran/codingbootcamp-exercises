const changeColor = () => {
    let redFinal = document.querySelector("#red-rgb").value;
    let greenFinal = document.querySelector("#green-rgb").value;
    let blueFinal = document.querySelector("#blue-rgb").value;
    let opacityFinal = document.querySelector("#a-rgb").value;

    let rgbFinal = "";

    if(opacityFinal) {
        rgbFinal = "rgb(" + redFinal + ", " + greenFinal + ", " + blueFinal + ", " + opacityFinal + ")";
    } else {
        rgbFinal = "rgb(" + redFinal + ", " + greenFinal + ", " + blueFinal + ")"
    }


    let newActual = document.querySelector("#actual");
    newActual.textContent = rgbFinal;

    let newBackground = document.querySelector("#container");

    if(opacityFinal < 0 || opacityFinal > 1) {
        alert("Please provide a valid opacity number (It has to be between 0 and 1)");
    } else if ((redFinal < 0 || redFinal > 255) || (greenFinal < 0 || greenFinal > 255) || (blueFinal < 0 || blueFinal > 255)) {
        alert("Please provide numbers between 0 and 255");
    } else {
        newBackground.style.backgroundColor = rgbFinal;
    }   
}