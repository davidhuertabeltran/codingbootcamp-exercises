function calcSalary() {
    let hourPay = document.querySelector("#hourPay");
    let hours = document.querySelector("#hours");
    let days = document.querySelector("#days");

    let finalHourPay = hourPay.value;
    let finalHours = hours.value;
    let finalDays = days.value;

    let finalSalary = finalHourPay * finalHours * finalDays;

    let message = document.querySelector("#yourSalary");

    if (finalSalary > 0 ){
        message.textContent = "Your salary is " + finalSalary;
    } else {
        message.textContent = "There is an error, make sure you are only entering numbers";
    }
    
}