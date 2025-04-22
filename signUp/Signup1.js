const formSignUp = document.getElementById("form-signup");

const signup = async (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const message = document.getElementById("message");

  // Clear message
  message.textContent = "";
  message.classList.remove("text-red-500", "text-green-600");

  // Basic form validation
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

    // Send verification email
    await user.sendEmailVerification();

    console.log("User signed up:", user);
    message.textContent = "Signup successful! Please verify your email.";
    message.classList.add("text-green-600");

  } catch (error) {
    console.error("Signup error:", error.message);

    // Handle specific Firebase errors
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
