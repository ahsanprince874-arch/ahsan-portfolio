function validateForm() {
    let name = document.getElementById("name").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let message = document.getElementById("message").value.trim();

    if (name === "" || phone === "" || message === "") {
        alert("🚨 Please fill all fields");
        return false;
    }

    // Sirf numbers check karne ke liye Regex
    let phonePattern = /^[0-9]+$/;
    if (phone.length < 11 || !phonePattern.test(phone)) {
        alert("📞 Please enter a valid 11-digit phone number");
        return false;
    }

    alert("✅ Form submitted successfully!");
    return true; // Agar server pe bhejna hai toh true karein
}

function searchProduct() {
    let input = document.getElementById("search").value.toLowerCase();
    let cards = document.querySelectorAll(".card");

    cards.forEach(card => {
        let text = card.innerText.toLowerCase();
        // "" rakhne se original CSS (flex) wapas aa jati hai
        card.style.display = text.includes(input) ? "" : "none";
    });
}
function buyNow(productName) {
    // Aap yahan alert ki jagah redirect bhi laga sakte hain
    alert("Thank you! You have selected: " + productName + ". Proceeding to checkout...");
    
    // Example: Agar checkout page par bhejna ho
    // window.location.href = "checkout.html?product=" + productName;
}