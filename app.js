function fn1(){
    location.reload();
}
let u1 = Math.floor((Math.random())*6)+1;
let u2 = Math.floor((Math.random())*6)+1;
let img1 = "images/dice" + u1.toString() + ".png";
let img2 = "images/dice" + u2.toString() + ".png";
const r = document.getElementById("result");
document.getElementById("imag1").src = img1;
document.getElementById("imag2").src = img2;
if(u1>u2){
    r.innerHTML = "Player 1 Won";
}
else if(u2>u1){
    r.innerHTML = "Player 2 Won";
}
else{
    r.innerHTML = "It's Draw";
}