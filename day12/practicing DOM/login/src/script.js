function checkPassword() {
    let user = document.querySelector("#username");
    let password = document.querySelector("#password");
    let correctUser = user.value;
    let correctPassword = password.value;
    let message = document.querySelector("#welcome");

    if(correctUser === "david" && correctPassword === "hello123") {
        message.textContent = "Welcome amigo!";
    } else {
        message.textContent = "Wrong credentials, try again!";
    }
}