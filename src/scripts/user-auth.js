document.addEventListener("DOMContentLoaded", () => {
    const loginButton = document.querySelector(".login-button");
    const logoutButton = document.querySelector(".logout-button");

    // Ensure Firebase is loaded
    if (!window.auth || !window.provider) {
        console.error("Firebase not initialized!");
        return;
    }

    // Google Sign-In
    loginButton.addEventListener("click", async () => {
        try {
            const result = await window.auth.signInWithPopup(window.provider);
            console.log("User Logged In:", result.user);
            updateUI(result.user);
        } catch (error) {
            console.error("Login Failed", error);
        }
    });

    // Google Sign-Out
    logoutButton.addEventListener("click", async () => {
        try {
            await window.auth.signOut();
            console.log("User Logged Out");
            updateUI(null);
        } catch (error) {
            console.error("Logout Failed", error);
        }
    });

    // Detect if user is logged in
    window.auth.onAuthStateChanged(user => {
        updateUI(user);
    });

    // Function to update UI after login/logout
    function updateUI(user) {
        if (user) {
            loginButton.style.display = "none";
            document.querySelector(".username").textContent = user.displayName;
            document.querySelector(".user-email").textContent = user.email;
        } else {
            loginButton.style.display = "flex";
            document.querySelector(".username").textContent = "Guest";
            document.querySelector(".user-email").textContent = "Not Logged In";
        }
    }
});
