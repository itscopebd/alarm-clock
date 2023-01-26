let menu= document.querySelectorAll("select");
let time__show = document.querySelector(".time__show");
let alarmBtn=document.querySelector(".set__alarm");
let reset_Alarm= document.querySelector(".reset__alarm");

let alarm;

ringtone= new Audio("./img/clock.mp3")
// create hour menu 

for (let i = 12; i > 0; i--) {
    i= i< 10 ? "0" + i : i;
    let option=`<option value="${i}">${i}</option>`;
    menu[0].firstElementChild.insertAdjacentHTML("afterend",option);
}
// create minute menu 

for (let i = 59; i > 0; i--) {
    i= i< 10 ? "0" + i : i;
    let option=`<option value="${i}">${i}</option>`;
    menu[1].firstElementChild.insertAdjacentHTML("afterend",option);
}

// create Post meridiem &  Ante meridiem menu 

for (let i = 2; i > 0; i--) {
    let ampm = i == 1 ? "AM" : "PM";
    let option=`<option value="${ampm}">${ampm}</option>`;
    menu[2].firstElementChild.insertAdjacentHTML("afterend",option);
}



// alarm button 
alarmBtn.addEventListener("click", function(){
   let time= `${menu[0].value}:${menu[1].value} ${menu[2].value}`; 
   if(menu[0].value=='hour' || menu[1].value=='minute' || menu[2].value =='AM/PM'){
   return alert("Please Select Your Alarming time...");
   }
   alarm=time;
   show_reset_btn()
});

// reset button show 
function show_reset_btn(){

    alarmBtn.style.display="none";
    reset_Alarm.style.display="block";
    
}

// reset all 

function reset_btn(){
    location.reload();
}


reset_Alarm.addEventListener("click",reset_btn);
// timing function 

function timming() {

    let date = new Date();
    h = date.getHours();
    m = date.getMinutes();
    s = date.getSeconds();
    let ampm = "AM"

    if (h > 12) {
        h = h - 12;
        ampm = "PM"
    }
    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;
    time__show.innerHTML = `${h}:${m}:${s} ${ampm}`;
    if (alarm == `${h}:${m} ${ampm}`) {

        ringtone.play();
       ringtone.loop=true
        
    }
}

setInterval(timming, 1000)