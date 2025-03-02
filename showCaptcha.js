function waitCaptcha() {
    setTimeout(function() {
        document.getElementById('reCaptcha').style.display = 'block';
    }, 500);
}
function hideCaptcha() {
    const checkbox = document.getElementById('reCaptchaCheckbox');
    checkbox.addEventListener('change', function(){
        if(checkbox.checked){
            setTimeout(function() {
                document.getElementById('reCaptcha').style.display = 'none';
                incorrectWait();
            }, 100)
            setTimeout(function() {
                hideSpinner();
            }, 3400)
        }
    })
    
}
function incorrectWait(){
    document.getElementById('loadingScreen').style.display = 'block';
}
function hideSpinner(){
    document.getElementById('loadingScreen').style.display = 'none';
}
function showCaptcha() {
    waitCaptcha();
    hideCaptcha();

}