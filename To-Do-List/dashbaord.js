const FirebaseInfo = () => {
    firebase.auth().onAuthStateChanged((user) => {
        let welcomeMessage = document.getElementById("welcomeMessage");
        if (user) {
            welcomeMessage.innerHTML = `Welcome Back ${user.displayName}`;

        }
    });
}

const LogOut = () => {
    firebase.auth().signOut().then(() => {
        window.location.href = "TodoList.html";
    }).catch((error) => {
        console.log(error);
    });
}

FirebaseInfo();


const logoutBtn = document.getElementById("logoutBtn");
if (logoutBtn) {
    logoutBtn.addEventListener("click", LogOut);
}

