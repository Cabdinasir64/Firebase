const formSignUp = document.getElementById("form-signup");

const signup = async (e) => {
    e.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const message = document.getElementById("message");

    // Clear any previous messages
    message.textContent = "";
    message.classList.remove("text-red-500", "text-green-600");

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        message.textContent = "Please enter a valid email address!";
        message.classList.add("text-red-500");
        return;
    }

    // Validate password length
    if (password.length < 6) {
        message.textContent = "Password must be at least 6 characters!";
        message.classList.add("text-red-500");
        return;
    }

    try {
        // Create user with email and password
        const userCredential = await auth.createUserWithEmailAndPassword(email, password);
        const user = userCredential.user;

        // Send email verification
        await user.sendEmailVerification();

        message.textContent = "Signup successful! Please verify your email.";
        message.classList.add("text-green-600");

    } catch (error) {
        // Handle different Firebase errors
        if (error.code === "auth/email-already-in-use") {
            message.textContent = "This email is already in use. Try logging in.";
        } else if (error.code === "auth/invalid-email") {
            message.textContent = "The email address is invalid.";
        } else {
            message.textContent = error.message;
        }

        message.classList.add("text-red-500");
    }
};

formSignUp.addEventListener("submit", signup);