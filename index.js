let time=Date();
console.log(time)
const display=()=>{
    let dateAndTime=new Date();
    let hour=dateAndTime.getHours();
    let min=dateAndTime.getMinutes();
    let sec=dateAndTime.getSeconds();
    let session='AM';
    if(hour==0){
        hour=12
    }
    if(hour>12){
        hour=hour-12;
        session='PM';
    }
    hour=(hour<10)? '0'+hour:hour;
    min=(min<10)? '0'+min:min;
    sec=(sec<10)? '0'+sec:sec;
   document.getElementById('time').innerHTML=hour+':'+min+':'+sec+' '+session
    

   
}
setInterval(display,1000)