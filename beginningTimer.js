document.addEventListener('DOMContentLoaded', (event) => {
    beginningTimer();
});

function beginningTimer() {
    console.log("Timer started");
    setTimeout(function() {
        console.log("Waited for 3 seconds");
        alert("HELLOO FELLOW HUMAN");
    }, 3000);
}