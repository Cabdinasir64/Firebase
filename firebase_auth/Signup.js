
const formSignUp = document.getElementById("form-signup");

const signup = async (e) => {
    e.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const message = document.getElementById("message");

    if (email === '' || password === '') {
        alert('Please fill all the fields');
        return;
    }

    try {
        const userCredential = await auth.createUserWithEmailAndPassword(email, password);
        const user = userCredential.user;
        console.log("User signed up:", user);
        message.textContent = "Signup successful!";
        message.classList.remove("text-red-500");
        message.classList.add("text-green-600");
    } catch (error) {
        console.error("Signup error:", error.message);
        message.textContent = error.message;
        message.classList.remove("text-green-600");
        message.classList.add("text-red-500");
    }
};

formSignUp.addEventListener("submit", signup);