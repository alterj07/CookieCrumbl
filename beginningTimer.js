document.addEventListener('DOMContentLoaded', (event) => {
    beginningTimer();
});

function beginningTimer() {
    document.getElementById('cookiePopUp').style.display = 'none';
    setTimeout(function() {
        document.getElementById('cookiePopUp').style.display = 'block';
        document.getElementById('CTC').classList.add('blur');
        document.getElementById('title').classList.add('blur');
    }, 3000);
}