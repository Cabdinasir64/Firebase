let formSignUp = document.getElementById("form-signup");
const signup = async () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (email == '' || password == '') {
        alert('Please fill all the fields')
    }

};
formSignUp.addEventListener("submit", signup);