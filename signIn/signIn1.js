const form = document.getElementById("login-form");
const message = document.getElementById("message");

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    message.textContent = "";
    message.classList.remove("text-green-600", "text-red-500");

    // ✅ 1. Check empty inputs
    if (!email || !password) {
        message.textContent = "Please fill in both email and password.";
        message.classList.add("text-red-500");
        return;
    }

    // ✅ 2. Check email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        message.textContent = "Please enter a valid email address.";
        message.classList.add("text-red-500");
        return;
    }

    try {
        // ✅ 3. Try to sign in
        const userCredential = await auth.signInWithEmailAndPassword(email, password);
        const user = userCredential.user;
        await user.reload();

        if (user.emailVerified) {
            window.location.href = "dashboard.html";
        } else {
            await auth.signOut();
            message.textContent = "Please verify your email before logging in.";
            message.classList.add("text-red-500");
        }

    } catch (error) {
        if (error === 'auth/user-not-found') {
            message.textContent = "Email address not found.";
        } else if (error === 'auth/wrong-password') {
            message.textContent = "Incorrect password.";
        } else {
            message.textContent = error.message;
        }
    }
});