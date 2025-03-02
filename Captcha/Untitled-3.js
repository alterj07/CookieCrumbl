const passwords = ["Td4eva","overlooks","I4n m4dd3n","R3d 40","Sam I Am","Y33 H4w","Teal Eel","Birb Runner","Scrap Yard"]
let colorArr = ["#f26419","#FF0000","#f4acb7","R3d 40","#0b6e4f","#133e8e","#5fa8d3","#1d1d1d","Scrap Yard"]
let typed; 


document.getElementById("submit").onclick = function(){
    let img = document.getElementById("captchaimg2")
    console.log(img.src)
    let number = parseInt(img.src.split("/").reverse()[0])
    console.log("num is" + number)
    let cpass = passwords[number-1]
    typed = document.getElementById("pass").value;
    console.log(typed);
    console.log(cpass);
    if(typed == cpass){
        document.getElementById("cap2").innerHTML = "Captcha" + " " + (number+1);
        img.src = (number+1)+".png";
        let colorThing = colorArr[number];
        let bodyBg = document.getElementById("bodycolor").style="background-color:"+colorThing;
        console.log(bodyBg);
        console.log("colorthing is" + colorThing);
        bodyBg.style.color=colorThing;
    }
}