

function noButtonResult() {
    const newButton1 = document.createElement('button');
    const newButton2 = document.createElement('button');
    const newButton3 = document.createElement('button');
    const newButton4 = document.createElement('button');

    newButton1.id = "yesButton";
    newButton2.id = "yesButton";
    newButton3.id = "yesButton";
    newButton4.id = "yesButton";

    newButton1.textContent = "Yes";
    newButton2.textContent = "Yes";
    newButton3.textContent = "Yes";
    newButton4.textContent = "Yes";

    // newButton1.addEventListener('click', yesButtonResult);
    // newButton2.addEventListener('click', yesButtonResult);
    // newButton3.addEventListener('click', yesButtonResult);
    // newButton4.addEventListener('click', yesButtonResult);

    document.body.appendChild(newButton1);
    document.body.appendChild(newButton2);
    document.body.appendChild(newButton3);
    document.body.appendChild(newButton4);

    const maxHeight = window.screen.height;
    const maxWidth = window.screen.width;

    let randomX = Math.floor(Math.random() * maxWidth);
    let randomY = Math.floor(Math.random() * maxHeight);

    let randomSize = Math.floor(Math.random() * 200 + 1);

    newButton1.style.position = 'absolute';
    newButton1.style.left = randomX + 'px';
    newButton1.style.top = randomY + 'px';
    newButton1.style.fontSize = randomSize + 'px';
    
    randomX = Math.floor(Math.random() * maxWidth);
    randomY = Math.floor(Math.random() * maxHeight);
    randomSize = Math.floor(Math.random() * 200 + 1);
    
    newButton2.style.position = 'absolute';
    newButton2.style.left = randomX + 'px';
    newButton2.style.top = randomY + 'px';
    newButton2.style.fontSize = randomSize + 'px';
    
    randomX = Math.floor(Math.random() * maxWidth);
    randomY = Math.floor(Math.random() * maxHeight);
    randomSize = Math.floor(Math.random() * 200 + 1);
    
    newButton3.style.position = 'absolute';
    newButton3.style.left = randomX + 'px';
    newButton3.style.top = randomY + 'px';
    newButton3.style.fontSize = randomSize + 'px';
    
    randomX = Math.floor(Math.random() * maxWidth);
    randomY = Math.floor(Math.random() * maxHeight);
    randomSize = Math.floor(Math.random() * 200 + 1);
    
    newButton4.style.position = 'absolute';
    newButton4.style.left = randomX + 'px';
    newButton4.style.top = randomY + 'px';
    newButton4.style.fontSize = randomSize + 'px';
}