document.getElementById("login-form").addEventListener("submit", async (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    try {
        await auth.signInWithEmailAndPassword(email, password);
        window.location.href = "dashboard.html";
    } catch (error) {
        document.getElementById("login-message").textContent = error.message;
    }
});

document.getElementById("google-login").addEventListener("click", async () => {
    const provider = new auth.GoogleAuthProvider();
    try {
        await auth.signInWithPopup(provider);
        window.location.href = "dashboard.html";
    } catch (error) {
        document.getElementById("login-message").textContent = error.message;
    }
});