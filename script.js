
document.addEventListener("DOMContentLoaded", function() {
    var myVar = setInterval(function(){ myTimer() }, 1000);
    var secondlimit = 5;

    // Call myTimer once to initialize the display
    myTimer();

    function myTimer() {
        if(secondlimit == 0) {
            myStopFunction();
        }

        document.getElementById("safeTimerDisplay").innerHTML = '00:' + zeroPad(secondlimit, 2);
        secondlimit = secondlimit - 1;
    }

    function myStopFunction() {
        clearInterval(myVar);
    }

    function zeroPad(num, places) {
        var zero = places - num.toString().length + 1;
        return Array(+(zero > 0 && zero)).join("0") + num;
    }
});