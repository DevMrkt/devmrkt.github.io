document.getElementById("surveyForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let languages = document.getElementById("languages").value;
    let info = document.getElementById("info").value;

    let data = {
        name: name,
        email: email,
        phone: phone,
        languages: languages,
        info: info
    };

    // Send order info to Discord webhook
    fetch('https://discord.com/api/webhooks/1359365061176594562/SMQXSKt4aTK28wg8p_8Mzo1y5ol6-cjIN22ek-kgR1AEncHQW6e4GSUt4jnntyxGvxLk', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            content: `Order request: \nName: ${data.name}\nEmail: ${data.email}\nPhone: ${data.phone}\nLanguages: ${data.languages}\nInfo: ${data.info}`
        })
    }).then(response => {
        if (response.ok) {
            alert("Order submitted successfully!");
        } else {
            alert("Error submitting order. Please try again.");
        }
    });
});
