document.addEventListener('DOMContentLoaded', (event) => {
    beginningTimer();
});

function noButtonResult() {
    const newButton1 = document.createElement('button');
    const newButton2 = document.createElement('button');
    const newButton3 = document.createElement('button');
    const newButton4 = document.createElement('button');

    newButton1.class = "noButton";
    newButton2.class = "noButton";
    newButton3.class = "noButton";
    newButton4.class = "noButton";

    newButton1.textContent = "No";
    newButton2.textContent = "No";
    newButton3.textContent = "No";
    newButton4.textContent = "No";

    newButton1.addEventListener('onclick', noButtonResult);
    newButton2.addEventListener('onclick', noButtonResult);
    newButton3.addEventListener('onclick', noButtonResult);
    newButton4.addEventListener('onclick', noButtonResult);


    const maxHeight = window.screen.height;
    const maxWidth = window.screen.width;

    const randomX = Math.floor(Math.random() * maxWidth);
    const randomY = Math.floor(Math.random() * maxHeight);

    button1.style.left = randomX + 'px';
    button1.style.top = randomY + 'px';
    
    randomX = Math.floor(Math.random() * maxWidth);
    randomY = Math.floor(Math.random() * maxHeight);
    
    button2.style.left = randomX + 'px';
    button2.style.top = randomY + 'px';
    
    randomX = Math.floor(Math.random() * maxWidth);
    randomY = Math.floor(Math.random() * maxHeight);
    
    button3.style.left = randomX + 'px';
    button3.style.top = randomY + 'px';
    
    randomX = Math.floor(Math.random() * maxWidth);
    randomY = Math.floor(Math.random() * maxHeight);
    
    button4.style.left = randomX + 'px';
    button4.style.top = randomY + 'px';
}