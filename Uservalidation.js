function validateForm() {
     return validateformat()&& validateEmail() &&validatePassword();
     }

function validateformat() {
    let name = document.getElementById("Usrnm").value;
    if (name.trim() === "") {
        alert("Name field cannot be empty!");
        return false;
    }
    return true;
    }

function validateEmail() {
    let email = document.getElementById("em").value;
    let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(email)) {
        alert("Invalid email format!");
        return false;
        }
            return true;
        }

function validatePassword() {
    let password = document.getElementById("Passwrd").value;
    let regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
        if (!regex.test(password)) {
            alert("Password must be at least 8 characters, including a letter and a number.");
            return false;
        }
        return true;
    }