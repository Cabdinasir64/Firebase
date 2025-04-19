// DOM Elements
const signInBtn = document.getElementById('signInBtn');
const signUpBtn = document.getElementById('signUpBtn');
const signInModal = document.getElementById('signInModal');
const signUpModal = document.getElementById('signUpModal');
const closeSignIn = document.getElementById('closeSignIn');
const closeSignUp = document.getElementById('closeSignUp');

// Event Listeners
signInBtn.addEventListener('click', () => {
    signInModal.classList.remove('hidden');
});

signUpBtn.addEventListener('click', () => {
    signUpModal.classList.remove('hidden');
});

closeSignIn.addEventListener('click', () => {
    signInModal.classList.add('hidden');
});

closeSignUp.addEventListener('click', () => {
    signUpModal.classList.add('hidden');
});

// Close modals when clicking outside
window.addEventListener('click', (e) => {
    if (e.target === signInModal) {
        signInModal.classList.add('hidden');
    }
    if (e.target === signUpModal) {
        signUpModal.classList.add('hidden');
    }
});

