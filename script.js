// RANDOM NUMBER GENERATOR
const myButton = document .getElementById("myButton");
const labell = document. getElementById("label1");
const label2 = document. getElementById("label2");
const label3 = document. getElementById("label3");
const min = 1;
const max = 6;
let randomNuml;
let randomNum2;
let randomNum3;
myButton.onclick = function(){
    randomNum1 = Math. floor (Math.random() * max) + min;
    randomNun2 = Math. floor (Math.random() * max) + min;
    randomNum3 = Math. Floor (Math.random() * max) + min;
    labell. textContent = randomNum1;
    label2. textContent = randomNum2;
    label3. textcontent = randomNum3;
}