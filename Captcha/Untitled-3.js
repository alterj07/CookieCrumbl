const passwords = ["Td4eva","overlooks","I4n m4dd3n","R3d 40","Sam I Am","Y33 H4w","Teal Eel","Birb Runner","Scrap Yard"]

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
        img.src = (number+1)+".png"
    }
}