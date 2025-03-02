function yesButtonResult() {
    const elements = document.getElementsByClassName('button');
    while(elements.length > 0)
    {
        elements[0].remove();
    }
    const container = document.getElementById('cookiePopUp');
    container.remove();
} 