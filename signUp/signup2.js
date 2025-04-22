const formSignUp = document.getElementById("form-signup");

const signup = async (e) => {
    e.preventDefault();

    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const message = document.getElementById("message");

    message.textContent = "";
    message.classList.remove("text-red-500", "text-green-600");

    if (!username) {
        message.textContent = "Please enter a username!";
        message.classList.add("text-red-500");
        return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        message.textContent = "Please enter a valid email address!";
        message.classList.add("text-red-500");
        return;
    }

    if (password.length < 6) {
        message.textContent = "Password must be at least 6 characters!";
        message.classList.add("text-red-500");
        return;
    }

    try {
        const userCredential = await auth.createUserWithEmailAndPassword(email, password);
        const user = userCredential.user;


        await user.updateProfile({
            displayName: username
        });

        await user.sendEmailVerification();

        message.textContent = "Signup successful! Please verify your email.";
        message.classList.add("text-green-600");

        await auth.signOut();

    } catch (error) {
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
