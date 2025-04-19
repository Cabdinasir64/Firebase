const signUpForm = document.getElementById('signUpForm');

signUpForm.addEventListener("submit", (e) => {
    e.preventDefault();

    let signUpUsername = document.getElementById("signupUsername").value.trim();
    let signUpEmail = document.getElementById("signupEmail").value.trim();
    let signUpPassword = document.getElementById("signupPassword").value.trim();

    if (signUpUsername === "" || signUpEmail === "" || signUpPassword === "") {
        alert("Please fill all the fields");
        return;
    }

    let currentUser = null;

    firebase.auth().createUserWithEmailAndPassword(signUpEmail, signUpPassword)
        .then((userCredential) => {
            currentUser = userCredential.user;

            return currentUser.updateProfile({
                displayName: signUpUsername
            });
        })
        .then(() => {
            alert("User created successfully");
        })
        .catch((error) => {
            console.error(error);
        });
});
