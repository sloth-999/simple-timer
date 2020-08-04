
function countDownFunction() {
var timeleft = 10;
var downloadTimer = setInterval(function(){
timeleft--;
document.getElementById("showscs").textContent = timeleft;
if(timeleft <= 0)
    clearInterval(downloadTimer);
},1000);}