function waitCaptcha() {
    return new Promise((resolve) => {
        setTimeout(function() {
            document.getElementById('reCaptcha').style.display = 'block';
            resolve();
        }, 500);
    });
}

function hideCaptcha() {
    return new Promise((resolve) => {
        const checkbox = document.getElementById('reCaptchaCheckbox');
        checkbox.addEventListener('change', function(){
            if(checkbox.checked){
                setTimeout(function() {
                    document.getElementById('reCaptcha').style.display = 'none';
                    incorrectWait();
                    resolve();
                }, 100);
            }
        });
    });
}

function incorrectWait(){
    document.getElementById('loadingScreen').style.display = 'block';
}
function hideSpinner(){
    return new Promise((resolve) => {
        setTimeout(function() {
            document.getElementById('loadingScreen').style.display = 'none';
            resolve();
        }, 3400);
    });
}
function showCaptcha() {
    waitCaptcha()
        .then(hideCaptcha)
        .then(hideSpinner)
        .then(textCaptcha)
        .then(() => {
            createAds();
            document.getElementById('CTC').classList.remove('blur');
            document.getElementById('title').classList.remove('blur');
        });
        // .then(createAds)
        // .then(document.getElementById('CTC').classList.remove('blur'));
}



function textCaptcha() {
    return new Promise((resolve) => {
        let typed;
        const passwords = ["Td4eva","overlooks","I4n m4dd3n","R3d 40","Sam I Am","Y33 H4w","Teal Eel","Birb Runner","Scrap Yard"];
        setTimeout(function() {
            document.getElementById('textCaptcha').style.display = 'block';
            document.getElementById('textCaptcha').style.width = '80%';
            document.getElementById('textCaptcha').style.height = '60%';
            document.addEventListener('keyup', function(event){
                const key = event.key;
                let img = document.getElementById("textCaptchaImage");
                let number = parseInt(img.src.split("/").reverse()[0]);
                let cpass = passwords[number-1];
                if(key == "Enter") {
                    typed = document.getElementById("textCaptchaInput").value;
                    if(number >= 9) {
                        document.getElementById("textCaptcha").style.display = "none";
                        document.getElementById("textCaptchaInput").value = "";
                        document.getElementById("warning").innerText = "";
                        hideSpinner().then(resolve);
                    } 
                    else if((typed == cpass && number % 3 !== 1) || (typed !== cpass && number % 3 == 1)){
                        img.src = "textCaptchas/"+(number+1)+".png";
                        document.getElementById("textCaptchaInput").value = "";
                        document.getElementById("warning").innerText = "";
                    } else{
                        document.getElementById("warning").innerText = "Incorrect Captcha " + (number-1) + "/9 Completed";
                    }
                }
            });
        }, 0);
    });
}

function closeAd1() {
    document.getElementById('ad1').style.display = 'none';
    let randomX = Math.floor(Math.random() * window.innerWidth);
    let randomY = Math.floor(Math.random() * document.documentElement.scrollHeight);
    let randomDiv = Math.floor(Math.random() * divs.lengths);
    const newDiv1 = document.createElement('div');
    document.body.appendChild(div1);
    newDiv1.style.position = 'absolute';
    newDiv1.style.left = randomX + 'px';
    newDiv1.style.top = randomY + 'px';
    newDiv1.id = divs[randomDiv].id;
    newDiv1.innerHTML = `<img src="scamAds/${randomDiv}.png" alt="ad${randomDiv}" 
            width="300" height="200"><input type="button" value="x" class="button" onclick="document.getElementById('ad${randomDiv}').remove()">`;


    randomX = Math.floor(Math.random() * window.innerWidth);
    randomY = Math.floor(Math.random() * document.documentElement.scrollHeight);
    randomDiv = Math.floor(Math.random() * divs.lengths);
    const newDiv2 = document.createElement('div');
    document.body.appendChild(div2);
    newDiv2.style.position = 'absolute';
    newDiv2.style.left = randomX + 'px';
    newDiv2.style.top = randomY + 'px';
    newDiv2.id = divs[randomDiv].id;
    newDiv2.innerHTML = `<img src="scamAds/${randomDiv}.png" alt="ad${randomDiv}" 
            width="300" height="200"><input type="button" value="x" class="button" onclick="document.getElementById('ad${randomDiv}').remove()">`;
    
    // getElementById('divs')
}

function closeAd2() {
    document.getElementById('ad2').style.display = 'none';
    let randomX = Math.floor(Math.random() * window.innerWidth);
    let randomY = Math.floor(Math.random() * document.documentElement.scrollHeight);
    let randomDiv = Math.floor(Math.random() * divs.lengths);
    const newDiv1 = document.createElement('div');
    document.body.appendChild(div1);
    newDiv1.style.position = 'absolute';
    newDiv1.style.left = randomX + 'px';
    newDiv1.style.top = randomY + 'px';
    newDiv1.id = divs[randomDiv].id;
    newDiv1.innerHTML = `<img src="scamAds/${randomDiv}.png" alt="ad${randomDiv}" 
            width="300" height="200"><input type="button" value="x" class="button" onclick="document.getElementById('ad${randomDiv}').remove()">`;


    randomX = Math.floor(Math.random() * window.innerWidth);
    randomY = Math.floor(Math.random() * document.documentElement.scrollHeight);
    randomDiv = Math.floor(Math.random() * divs.lengths);
    const newDiv2 = document.createElement('div');
    document.body.appendChild(div2);
    newDiv2.style.position = 'absolute';
    newDiv2.style.left = randomX + 'px';
    newDiv2.style.top = randomY + 'px';
    newDiv2.id = divs[randomDiv].id;
    newDiv2.innerHTML = `<img src="scamAds/${randomDiv}.png" alt="ad${randomDiv}" 
            width="300" height="200"><input type="button" value="x" class="button" onclick="document.getElementById('ad${randomDiv}').remove()">`;
    
    // getElementById('divs')
}

function closeAd3() {
    document.getElementById('ad3').style.display = 'none';
    let randomX = Math.floor(Math.random() * window.innerWidth);
    let randomY = Math.floor(Math.random() * document.documentElement.scrollHeight);
    let randomDiv = Math.floor(Math.random() * divs.lengths);
    const newDiv1 = document.createElement('div');
    document.body.appendChild(div1);
    newDiv1.style.position = 'absolute';
    newDiv1.style.left = randomX + 'px';
    newDiv1.style.top = randomY + 'px';
    newDiv1.id = divs[randomDiv].id;
    newDiv1.innerHTML = `<img src="scamAds/${randomDiv}.png" alt="ad${randomDiv}" 
            width="300" height="200"><input type="button" value="x" class="button" onclick="document.getElementById('ad${randomDiv}').remove()">`;


    randomX = Math.floor(Math.random() * window.innerWidth);
    randomY = Math.floor(Math.random() * document.documentElement.scrollHeight);
    randomDiv = Math.floor(Math.random() * divs.lengths);
    const newDiv2 = document.createElement('div');
    document.body.appendChild(div2);
    newDiv2.style.position = 'absolute';
    newDiv2.style.left = randomX + 'px';
    newDiv2.style.top = randomY + 'px';
    newDiv2.id = divs[randomDiv].id;
    newDiv2.innerHTML = `<img src="scamAds/${randomDiv}.png" alt="ad${randomDiv}" 
            width="300" height="200"><input type="button" value="x" class="button" onclick="document.getElementById('ad${randomDiv}').remove()">`;
    
    // getElementById('divs')
}

function closeAd4() {
    document.getElementById('ad4').style.display = 'none';
    let randomX = Math.floor(Math.random() * window.innerWidth);
    let randomY = Math.floor(Math.random() * document.documentElement.scrollHeight);
    let randomDiv = Math.floor(Math.random() * divs.lengths);
    const newDiv1 = document.createElement('div');
    document.body.appendChild(div1);
    newDiv1.style.position = 'absolute';
    newDiv1.style.left = randomX + 'px';
    newDiv1.style.top = randomY + 'px';
    newDiv1.id = divs[randomDiv].id;
    newDiv1.innerHTML = `<img src="scamAds/${randomDiv}.png" alt="ad${randomDiv}" 
            width="300" height="200"><input type="button" value="x" class="button" onclick="document.getElementById('ad${randomDiv}').remove()">`;


    randomX = Math.floor(Math.random() * window.innerWidth);
    randomY = Math.floor(Math.random() * document.documentElement.scrollHeight);
    randomDiv = Math.floor(Math.random() * divs.lengths);
    const newDiv2 = document.createElement('div');
    document.body.appendChild(div2);
    newDiv2.style.position = 'absolute';
    newDiv2.style.left = randomX + 'px';
    newDiv2.style.top = randomY + 'px';
    newDiv2.id = divs[randomDiv].id;
    newDiv2.innerHTML = `<img src="scamAds/${randomDiv}.png" alt="ad${randomDiv}" 
            width="300" height="200"><input type="button" value="x" class="button" onclick="document.getElementById('ad${randomDiv}').remove()">`;
    
    // getElementById('divs')
}

function closeAd5() {
    document.getElementById('ad5').style.display = 'none';
    let randomX = Math.floor(Math.random() * window.innerWidth);
    let randomY = Math.floor(Math.random() * document.documentElement.scrollHeight);
    let randomDiv = Math.floor(Math.random() * divs.lengths);
    const newDiv1 = document.createElement('div');
    document.body.appendChild(div1);
    newDiv1.style.position = 'absolute';
    newDiv1.style.left = randomX + 'px';
    newDiv1.style.top = randomY + 'px';
    newDiv1.id = divs[randomDiv].id;
    newDiv1.innerHTML = `<img src="scamAds/${randomDiv}.png" alt="ad${randomDiv}" 
            width="300" height="200"><input type="button" value="x" class="button" onclick="document.getElementById('ad${randomDiv}').remove()">`;


    randomX = Math.floor(Math.random() * window.innerWidth);
    randomY = Math.floor(Math.random() * document.documentElement.scrollHeight);
    randomDiv = Math.floor(Math.random() * divs.lengths);
    const newDiv2 = document.createElement('div');
    document.body.appendChild(div2);
    newDiv2.style.position = 'absolute';
    newDiv2.style.left = randomX + 'px';
    newDiv2.style.top = randomY + 'px';
    newDiv2.id = divs[randomDiv].id;
    newDiv2.innerHTML = `<img src="scamAds/${randomDiv}.png" alt="ad${randomDiv}" 
            width="300" height="200"><input type="button" value="x" class="button" onclick="document.getElementById('ad${randomDiv}').remove()">`;
    
    // getElementById('divs')
}

function closeAd6() {
    document.getElementById('ad6').style.display = 'none';
    let randomX = Math.floor(Math.random() * window.innerWidth);
    let randomY = Math.floor(Math.random() * document.documentElement.scrollHeight);
    let randomDiv = Math.floor(Math.random() * divs.lengths);
    const newDiv1 = document.createElement('div');
    document.body.appendChild(div1);
    newDiv1.style.position = 'absolute';
    newDiv1.style.left = randomX + 'px';
    newDiv1.style.top = randomY + 'px';
    newDiv1.id = divs[randomDiv].id;
    newDiv1.innerHTML = `<img src="scamAds/${randomDiv}.png" alt="ad${randomDiv}" 
            width="300" height="200"><input type="button" value="x" class="button" onclick="document.getElementById('ad${randomDiv}').remove()">`;


    randomX = Math.floor(Math.random() * window.innerWidth);
    randomY = Math.floor(Math.random() * document.documentElement.scrollHeight);
    randomDiv = Math.floor(Math.random() * divs.lengths);
    const newDiv2 = document.createElement('div');
    document.body.appendChild(div2);
    newDiv2.style.position = 'absolute';
    newDiv2.style.left = randomX + 'px';
    newDiv2.style.top = randomY + 'px';
    newDiv2.id = divs[randomDiv].id;
    newDiv2.innerHTML = `<img src="scamAds/${randomDiv}.png" alt="ad${randomDiv}" 
            width="300" height="200"><input type="button" value="x" class="button" onclick="document.getElementById('ad${randomDiv}').remove()">`;
    
    // getElementById('divs')
}

function closeAd7() {
    document.getElementById('ad7').style.display = 'none';
    let randomX = Math.floor(Math.random() * window.innerWidth);
    let randomY = Math.floor(Math.random() * document.documentElement.scrollHeight);
    let randomDiv = Math.floor(Math.random() * divs.lengths);
    const newDiv1 = document.createElement('div');
    document.body.appendChild(div1);
    newDiv1.style.position = 'absolute';
    newDiv1.style.left = randomX + 'px';
    newDiv1.style.top = randomY + 'px';
    newDiv1.id = divs[randomDiv].id;
    newDiv1.innerHTML = `<img src="scamAds/${randomDiv}.png" alt="ad${randomDiv}" 
            width="300" height="200"><input type="button" value="x" class="button" onclick="document.getElementById('ad${randomDiv}').remove()">`;


    randomX = Math.floor(Math.random() * window.innerWidth);
    randomY = Math.floor(Math.random() * document.documentElement.scrollHeight);
    randomDiv = Math.floor(Math.random() * divs.lengths);
    const newDiv2 = document.createElement('div');
    document.body.appendChild(div2);
    newDiv2.style.position = 'absolute';
    newDiv2.style.left = randomX + 'px';
    newDiv2.style.top = randomY + 'px';
    newDiv2.id = divs[randomDiv].id;
    newDiv2.innerHTML = `<img src="scamAds/${randomDiv}.png" alt="ad${randomDiv}" 
            width="300" height="200"><input type="button" value="x" class="button" onclick="document.getElementById('ad${randomDiv}').remove()">`;
    
    // getElementById('divs')
}

function closeAd8() {
    document.getElementById('ad8').style.display = 'none';
    let randomX = Math.floor(Math.random() * window.innerWidth);
    let randomY = Math.floor(Math.random() * document.documentElement.scrollHeight);
    let randomDiv = Math.floor(Math.random() * divs.lengths);
    const newDiv1 = document.createElement('div');
    document.body.appendChild(div1);
    newDiv1.style.position = 'absolute';
    newDiv1.style.left = randomX + 'px';
    newDiv1.style.top = randomY + 'px';
    newDiv1.id = divs[randomDiv].id;
    newDiv1.innerHTML = `<img src="scamAds/${randomDiv}.png" alt="ad${randomDiv}" 
            width="300" height="200"><input type="button" value="x" class="button" onclick="document.getElementById('ad${randomDiv}').remove()">`;


    randomX = Math.floor(Math.random() * window.innerWidth);
    randomY = Math.floor(Math.random() * document.documentElement.scrollHeight);
    randomDiv = Math.floor(Math.random() * divs.lengths);
    const newDiv2 = document.createElement('div');
    document.body.appendChild(div2);
    newDiv2.style.position = 'absolute';
    newDiv2.style.left = randomX + 'px';
    newDiv2.style.top = randomY + 'px';
    newDiv2.id = divs[randomDiv].id;
    newDiv2.innerHTML = `<img src="scamAds/${randomDiv}.png" alt="ad${randomDiv}" 
            width="300" height="200"><input type="button" value="x" class="button" onclick="document.getElementById('ad${randomDiv}').remove()">`;
    
    // getElementById('divs')
}

function closeAd9() {
    document.getElementById('ad9').style.display = 'none';
    let randomX = Math.floor(Math.random() * window.innerWidth);
    let randomY = Math.floor(Math.random() * document.documentElement.scrollHeight);
    let randomDiv = Math.floor(Math.random() * divs.lengths);
    const newDiv1 = document.createElement('div');
    document.body.appendChild(div1);
    newDiv1.style.position = 'absolute';
    newDiv1.style.left = randomX + 'px';
    newDiv1.style.top = randomY + 'px';
    newDiv1.id = divs[randomDiv].id;
    newDiv1.innerHTML = `<img src="scamAds/${randomDiv}.png" alt="ad${randomDiv}" 
            width="300" height="200"><input type="button" value="x" class="button" onclick="document.getElementById('ad${randomDiv}').remove()">`;


    randomX = Math.floor(Math.random() * window.innerWidth);
    randomY = Math.floor(Math.random() * document.documentElement.scrollHeight);
    randomDiv = Math.floor(Math.random() * divs.lengths);
    const newDiv2 = document.createElement('div');
    document.body.appendChild(div2);
    newDiv2.style.position = 'absolute';
    newDiv2.style.left = randomX + 'px';
    newDiv2.style.top = randomY + 'px';
    newDiv2.id = divs[randomDiv].id;
    newDiv2.innerHTML = `<img src="scamAds/${randomDiv}.png" alt="ad${randomDiv}" 
            width="300" height="200"><input type="button" value="x" class="button" onclick="document.getElementById('ad${randomDiv}').remove()">`;
    
    // getElementById('divs')
}

function closeAd10() {
    document.getElementById('ad10').style.display = 'none';
    let randomX = Math.floor(Math.random() * window.innerWidth);
    let randomY = Math.floor(Math.random() * document.documentElement.scrollHeight);
    let randomDiv = Math.floor(Math.random() * divs.lengths);
    const newDiv1 = document.createElement('div');
    document.body.appendChild(div1);
    newDiv1.style.position = 'absolute';
    newDiv1.style.left = randomX + 'px';
    newDiv1.style.top = randomY + 'px';
    newDiv1.id = divs[randomDiv].id;
    newDiv1.innerHTML = `<img src="scamAds/${randomDiv}.png" alt="ad${randomDiv}" 
            width="300" height="200"><input type="button" value="x" class="button" onclick="document.getElementById('ad${randomDiv}').remove()">`;


    randomX = Math.floor(Math.random() * window.innerWidth);
    randomY = Math.floor(Math.random() * document.documentElement.scrollHeight);
    randomDiv = Math.floor(Math.random() * divs.lengths);
    const newDiv2 = document.createElement('div');
    document.body.appendChild(div2);
    newDiv2.style.position = 'absolute';
    newDiv2.style.left = randomX + 'px';
    newDiv2.style.top = randomY + 'px';
    newDiv2.id = divs[randomDiv].id;
    newDiv2.innerHTML = `<img src="scamAds/${randomDiv}.png" alt="ad${randomDiv}" 
            width="300" height="200"><input type="button" value="x" class="button" onclick="document.getElementById('ad${randomDiv}').remove()">`;
    
    // getElementById('divs')
}

function closeAd11() {
    document.getElementById('ad11').style.display = 'none';
    let randomX = Math.floor(Math.random() * window.innerWidth);
    let randomY = Math.floor(Math.random() * document.documentElement.scrollHeight);
    let randomDiv = Math.floor(Math.random() * divs.lengths);
    const newDiv1 = document.createElement('div');
    document.body.appendChild(div1);
    newDiv1.style.position = 'absolute';
    newDiv1.style.left = randomX + 'px';
    newDiv1.style.top = randomY + 'px';
    newDiv1.id = divs[randomDiv].id;
    newDiv1.innerHTML = `<img src="scamAds/${randomDiv}.png" alt="ad${randomDiv}" 
            width="300" height="200"><input type="button" value="x" class="button" onclick="document.getElementById('ad${randomDiv}').remove()">`;


    randomX = Math.floor(Math.random() * window.innerWidth);
    randomY = Math.floor(Math.random() * document.documentElement.scrollHeight);
    randomDiv = Math.floor(Math.random() * divs.lengths);
    const newDiv2 = document.createElement('div');
    document.body.appendChild(div2);
    newDiv2.style.position = 'absolute';
    newDiv2.style.left = randomX + 'px';
    newDiv2.style.top = randomY + 'px';
    newDiv2.id = divs[randomDiv].id;
    newDiv2.innerHTML = `<img src="scamAds/${randomDiv}.png" alt="ad${randomDiv}" 
            width="300" height="200"><input type="button" value="x" class="button" onclick="document.getElementById('ad${randomDiv}').remove()">`;
    
    // getElementById('divs')
}

function closeAd12() {
    document.getElementById('ad12').style.display = 'none';
    let randomX = Math.floor(Math.random() * window.innerWidth);
    let randomY = Math.floor(Math.random() * document.documentElement.scrollHeight);
    let randomDiv = Math.floor(Math.random() * divs.lengths);
    const newDiv1 = document.createElement('div');
    document.body.appendChild(div1);
    newDiv1.style.position = 'absolute';
    newDiv1.style.left = randomX + 'px';
    newDiv1.style.top = randomY + 'px';
    newDiv1.id = divs[randomDiv].id;
    newDiv1.innerHTML = `<img src="scamAds/${randomDiv}.png" alt="ad${randomDiv}" 
            width="300" height="200"><input type="button" value="x" class="button" onclick="document.getElementById('ad${randomDiv}').remove()">`;


    randomX = Math.floor(Math.random() * window.innerWidth);
    randomY = Math.floor(Math.random() * document.documentElement.scrollHeight);
    randomDiv = Math.floor(Math.random() * divs.lengths);
    const newDiv2 = document.createElement('div');
    document.body.appendChild(div2);
    newDiv2.style.position = 'absolute';
    newDiv2.style.left = randomX + 'px';
    newDiv2.style.top = randomY + 'px';
    newDiv2.id = divs[randomDiv].id;
    newDiv2.innerHTML = `<img src="scamAds/${randomDiv}.png" alt="ad${randomDiv}" 
            width="300" height="200"><input type="button" value="x" class="button" onclick="document.getElementById('ad${randomDiv}').remove()">`;
    
    // getElementById('divs')
}

function closeAd13() {
    document.getElementById('ad13').style.display = 'none';
    let randomX = Math.floor(Math.random() * window.innerWidth);
    let randomY = Math.floor(Math.random() * document.documentElement.scrollHeight);
    let randomDiv = Math.floor(Math.random() * divs.lengths);
    const newDiv1 = document.createElement('div');
    document.body.appendChild(div1);
    newDiv1.style.position = 'absolute';
    newDiv1.style.left = randomX + 'px';
    newDiv1.style.top = randomY + 'px';
    newDiv1.id = divs[randomDiv].id;
    newDiv1.innerHTML = `<img src="scamAds/${randomDiv}.png" alt="ad${randomDiv}" 
            width="300" height="200"><input type="button" value="x" class="button" onclick="document.getElementById('ad${randomDiv}').remove()">`;


    randomX = Math.floor(Math.random() * window.innerWidth);
    randomY = Math.floor(Math.random() * document.documentElement.scrollHeight);
    randomDiv = Math.floor(Math.random() * divs.lengths);
    const newDiv2 = document.createElement('div');
    document.body.appendChild(div2);
    newDiv2.style.position = 'absolute';
    newDiv2.style.left = randomX + 'px';
    newDiv2.style.top = randomY + 'px';
    newDiv2.id = divs[randomDiv].id;
    newDiv2.innerHTML = `<img src="scamAds/${randomDiv}.png" alt="ad${randomDiv}" 
            width="300" height="200"><input type="button" value="x" class="button" onclick="document.getElementById('ad${randomDiv}').remove()">`;
    
    // getElementById('divs')
}

function closeAd14() {
    document.getElementById('ad14').style.display = 'none';
    let randomX = Math.floor(Math.random() * window.innerWidth);
    let randomY = Math.floor(Math.random() * document.documentElement.scrollHeight);
    let randomDiv = Math.floor(Math.random() * divs.lengths);
    const newDiv1 = document.createElement('div');
    document.body.appendChild(div1);
    newDiv1.style.position = 'absolute';
    newDiv1.style.left = randomX + 'px';
    newDiv1.style.top = randomY + 'px';
    newDiv1.id = divs[randomDiv].id;
    newDiv1.innerHTML = `<img src="scamAds/${randomDiv}.png" alt="ad${randomDiv}" 
            width="300" height="200"><input type="button" value="x" class="button" onclick="document.getElementById('ad${randomDiv}').remove()">`;


    randomX = Math.floor(Math.random() * window.innerWidth);
    randomY = Math.floor(Math.random() * document.documentElement.scrollHeight);
    randomDiv = Math.floor(Math.random() * divs.lengths);
    const newDiv2 = document.createElement('div');
    document.body.appendChild(div2);
    newDiv2.style.position = 'absolute';
    newDiv2.style.left = randomX + 'px';
    newDiv2.style.top = randomY + 'px';
    newDiv2.id = divs[randomDiv].id;
    newDiv2.innerHTML = `<img src="scamAds/${randomDiv}.png" alt="ad${randomDiv}" 
            width="300" height="200"><input type="button" value="x" class="button" onclick="document.getElementById('ad${randomDiv}').remove()">`;
    
    // getElementById('divs')
}

function closeAd15() {
    document.getElementById('ad15').style.display = 'none';
    let randomX = Math.floor(Math.random() * window.innerWidth);
    let randomY = Math.floor(Math.random() * document.documentElement.scrollHeight);
    let randomDiv = Math.floor(Math.random() * divs.lengths);
    const newDiv1 = document.createElement('div');
    document.body.appendChild(div1);
    newDiv1.style.position = 'absolute';
    newDiv1.style.left = randomX + 'px';
    newDiv1.style.top = randomY + 'px';
    newDiv1.id = divs[randomDiv].id;
    newDiv1.innerHTML = `<img src="scamAds/${randomDiv}.png" alt="ad${randomDiv}" 
            width="300" height="200"><input type="button" value="x" class="button" onclick="document.getElementById('ad${randomDiv}').remove()">`;


    randomX = Math.floor(Math.random() * window.innerWidth);
    randomY = Math.floor(Math.random() * document.documentElement.scrollHeight);
    randomDiv = Math.floor(Math.random() * divs.lengths);
    const newDiv2 = document.createElement('div');
    document.body.appendChild(div2);
    newDiv2.style.position = 'absolute';
    newDiv2.style.left = randomX + 'px';
    newDiv2.style.top = randomY + 'px';
    newDiv2.id = divs[randomDiv].id;
    newDiv2.innerHTML = `<img src="scamAds/${randomDiv}.png" alt="ad${randomDiv}" 
            width="300" height="200"><input type="button" value="x" class="button" onclick="document.getElementById('ad${randomDiv}').remove()">`;
    
    // getElementById('divs')
}

function closeAd16() {
    document.getElementById('ad16').style.display = 'none';
    let randomX = Math.floor(Math.random() * window.innerWidth);
    let randomY = Math.floor(Math.random() * document.documentElement.scrollHeight);
    let randomDiv = Math.floor(Math.random() * divs.lengths);
    const newDiv1 = document.createElement('div');
    document.body.appendChild(div1);
    newDiv1.style.position = 'absolute';
    newDiv1.style.left = randomX + 'px';
    newDiv1.style.top = randomY + 'px';
    newDiv1.id = divs[randomDiv].id;
    newDiv1.innerHTML = `<img src="scamAds/${randomDiv}.png" alt="ad${randomDiv}" 
            width="300" height="200"><input type="button" value="x" class="button" onclick="document.getElementById('ad${randomDiv}').remove()">`;


    randomX = Math.floor(Math.random() * window.innerWidth);
    randomY = Math.floor(Math.random() * document.documentElement.scrollHeight);
    randomDiv = Math.floor(Math.random() * divs.lengths);
    const newDiv2 = document.createElement('div');
    document.body.appendChild(div2);
    newDiv2.style.position = 'absolute';
    newDiv2.style.left = randomX + 'px';
    newDiv2.style.top = randomY + 'px';
    newDiv2.id = divs[randomDiv].id;
    newDiv2.innerHTML = `<img src="scamAds/${randomDiv}.png" alt="ad${randomDiv}" 
            width="300" height="200"><input type="button" value="x" class="button" onclick="document.getElementById('ad${randomDiv}').remove()">`;
    
    // getElementById('divs')
}

function closeAd17() {
    document.getElementById('ad17').style.display = 'none';
    let randomX = Math.floor(Math.random() * window.innerWidth);
    let randomY = Math.floor(Math.random() * document.documentElement.scrollHeight);
    let randomDiv = Math.floor(Math.random() * divs.lengths);
    const newDiv1 = document.createElement('div');
    document.body.appendChild(div1);
    newDiv1.style.position = 'absolute';
    newDiv1.style.left = randomX + 'px';
    newDiv1.style.top = randomY + 'px';
    newDiv1.id = divs[randomDiv].id;
    newDiv1.innerHTML = `<img src="scamAds/${randomDiv}.png" alt="ad${randomDiv}" 
            width="300" height="200"><input type="button" value="x" class="button" onclick="document.getElementById('ad${randomDiv}').remove()">`;


    randomX = Math.floor(Math.random() * window.innerWidth);
    randomY = Math.floor(Math.random() * document.documentElement.scrollHeight);
    randomDiv = Math.floor(Math.random() * divs.lengths);
    const newDiv2 = document.createElement('div');
    document.body.appendChild(div2);
    newDiv2.style.position = 'absolute';
    newDiv2.style.left = randomX + 'px';
    newDiv2.style.top = randomY + 'px';
    newDiv2.id = divs[randomDiv].id;
    newDiv2.innerHTML = `<img src="scamAds/${randomDiv}.png" alt="ad${randomDiv}" 
            width="300" height="200"><input type="button" value="x" class="button" onclick="document.getElementById('ad${randomDiv}').remove()">`;
    
    // getElementById('divs')
}

function closeAd18() {
    document.getElementById('ad18').style.display = 'none';
    let randomX = Math.floor(Math.random() * window.innerWidth);
    let randomY = Math.floor(Math.random() * document.documentElement.scrollHeight);
    let randomDiv = Math.floor(Math.random() * divs.lengths);
    const newDiv1 = document.createElement('div');
    document.body.appendChild(div1);
    newDiv1.style.position = 'absolute';
    newDiv1.style.left = randomX + 'px';
    newDiv1.style.top = randomY + 'px';
    newDiv1.id = divs[randomDiv].id;
    newDiv1.innerHTML = `<img src="scamAds/${randomDiv}.png" alt="ad${randomDiv}" 
            width="300" height="200"><input type="button" value="x" class="button" onclick="document.getElementById('ad${randomDiv}').remove()">`;


    randomX = Math.floor(Math.random() * window.innerWidth);
    randomY = Math.floor(Math.random() * document.documentElement.scrollHeight);
    randomDiv = Math.floor(Math.random() * divs.lengths);
    const newDiv2 = document.createElement('div');
    document.body.appendChild(div2);
    newDiv2.style.position = 'absolute';
    newDiv2.style.left = randomX + 'px';
    newDiv2.style.top = randomY + 'px';
    newDiv2.id = divs[randomDiv].id;
    newDiv2.innerHTML = `<img src="scamAds/${randomDiv}.png" alt="ad${randomDiv}" 
            width="300" height="200"><input type="button" value="x" class="button" onclick="document.getElementById('ad${randomDiv}').remove()">`;
    
    // getElementById('divs')
}

function closeAd19() {
    document.getElementById('ad19').style.display = 'none';
    let randomX = Math.floor(Math.random() * window.innerWidth);
    let randomY = Math.floor(Math.random() * document.documentElement.scrollHeight);
    let randomDiv = Math.floor(Math.random() * divs.lengths);
    const newDiv1 = document.createElement('div');
    document.body.appendChild(div1);
    newDiv1.style.position = 'absolute';
    newDiv1.style.left = randomX + 'px';
    newDiv1.style.top = randomY + 'px';
    newDiv1.id = divs[randomDiv].id;
    newDiv1.innerHTML = `<img src="scamAds/${randomDiv}.png" alt="ad${randomDiv}" 
            width="300" height="200"><input type="button" value="x" class="button" onclick="document.getElementById('ad${randomDiv}').remove()">`;


    randomX = Math.floor(Math.random() * window.innerWidth);
    randomY = Math.floor(Math.random() * document.documentElement.scrollHeight);
    randomDiv = Math.floor(Math.random() * divs.lengths);
    const newDiv2 = document.createElement('div');
    document.body.appendChild(div2);
    newDiv2.style.position = 'absolute';
    newDiv2.style.left = randomX + 'px';
    newDiv2.style.top = randomY + 'px';
    newDiv2.id = divs[randomDiv].id;
    newDiv2.innerHTML = `<img src="scamAds/${randomDiv}.png" alt="ad${randomDiv}" 
            width="300" height="200"><input type="button" value="x" class="button" onclick="document.getElementById('ad${randomDiv}').remove()">`;
    
    // getElementById('divs')
}

function closeAd20() {
    document.getElementById('ad20').style.display = 'none';
    let randomX = Math.floor(Math.random() * window.innerWidth);
    let randomY = Math.floor(Math.random() * document.documentElement.scrollHeight);
    let randomDiv = Math.floor(Math.random() * divs.lengths);
    const newDiv1 = document.createElement('div');
    document.body.appendChild(div1);
    newDiv1.style.position = 'absolute';
    newDiv1.style.left = randomX + 'px';
    newDiv1.style.top = randomY + 'px';
    newDiv1.id = divs[randomDiv].id;
    newDiv1.innerHTML = `<img src="scamAds/${randomDiv}.png" alt="ad${randomDiv}" 
            width="300" height="200"><input type="button" value="x" class="button" onclick="document.getElementById('ad${randomDiv}').remove()">`;


    randomX = Math.floor(Math.random() * window.innerWidth);
    randomY = Math.floor(Math.random() * document.documentElement.scrollHeight);
    randomDiv = Math.floor(Math.random() * divs.lengths);
    const newDiv2 = document.createElement('div');
    document.body.appendChild(div2);
    newDiv2.style.position = 'absolute';
    newDiv2.style.left = randomX + 'px';
    newDiv2.style.top = randomY + 'px';
    newDiv2.id = divs[randomDiv].id;
    newDiv2.innerHTML = `<img src="scamAds/${randomDiv}.png" alt="ad${randomDiv}" 
            width="300" height="200"><input type="button" value="x" class="button" onclick="document.getElementById('ad${randomDiv}').remove()">`;
    // getElementById('divs')
}

function createAds() {
    for(let i = 0; i < 2000; i++)
    {
        setTimeout(function() {
            let randomX = Math.floor(Math.random() * window.innerWidth);
            let randomY = Math.floor(Math.random() * document.documentElement.scrollHeight);
            let randomDiv = Math.floor(Math.random() * 20) + 1;
            const div1 = document.createElement('div');
            div1.id = 'ad' + randomDiv;
            div1.className = 'ad';
            document.body.appendChild(div1);
            div1.style.position = 'absolute';
            div1.style.left = randomX + 'px';
            div1.style.top = randomY + 'px';
            div1.innerHTML = `<img src="scamAds/${randomDiv}.png" alt="ad${randomDiv}" 
            width="300" height="200"><input type="button" value="x" class="button" style="Transform: translate(-2em, -14em)" onclick="document.getElementById('ad${randomDiv}').remove()">`;
        }, Math.random() * 150 * i)
    }

}