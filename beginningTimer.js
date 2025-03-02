document.addEventListener('DOMContentLoaded', (event) => {
    beginningTimer();
});

function beginningTimer() {
    document.getElementById('cookiePopUp').style.display = 'none';
    setTimeout(function() {
        document.getElementById('cookiePopUp').style.display = 'block';
    }, 3000);
}