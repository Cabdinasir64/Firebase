let signInForm = document.getElementById("signInForm")

signInForm.addEventListener("submit", (e) => {
    e.preventDefault()
    let email = document.getElementById("loginEmail").value.trim()
    let password = document.getElementById("loginPassword").value.trim()

    if (email == "" || password == "") {
        alert("Please fill all the fields");
        return;
    }
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            if(userCredential){
                Dashbaord()
            }
        })
        .catch((error) => {
           console.log(error)
        })


})

const Dashbaord = () => {
    window.location.href = 'Dashboard.html'
}