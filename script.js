
function calculateEMI() {
    let p = Number(document.getElementById("amount").value);
    let r = Number(document.getElementById("rate").value) / 1200;
    let n = Number(document.getElementById("years").value) * 12;

    if (p <= 0 || r < 0 || n <= 0) {
        document.getElementById("result").innerText = "Enter valid details.";
        return;
    }

    let emi = r === 0 ? p / n :
        p * r * Math.pow(1+r,n) / (Math.pow(1+r,n)-1);

    document.getElementById("result").innerText =
        "Monthly EMI: ₹" + emi.toFixed(2);
}

document.getElementById("contactForm")?.addEventListener("submit", function(e) {
    e.preventDefault();
    document.getElementById("contactResult").innerText =
        "Thank you! Your demo message has been received.";
    this.reset();
});

document.getElementById("loginForm")?.addEventListener("submit", function(e) {
    e.preventDefault();
    document.getElementById("loginResult").innerText =
        "Demo login successful!";
    this.reset();
});
