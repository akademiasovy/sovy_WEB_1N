function setCurrentDate(){
    var currentDate=document.getElementById('currentDate');
    var today = new Date();
    currentDate.innerHTML=today.getDate()+"-"+(parseInt(today.getMonth())+1)+"-"+today.getFullYear();

    var currentTime=document.getElementById('currentTime');
    var strHours=today.getHours();
    if(strHours<10) strHours="0"+strHours;

    var strMinutes=today.getMinutes();
    strMinutes= strMinutes<10?"0"+strMinutes:strMinutes;

    var strSeconds=today.getSeconds();
    if(strSeconds<10) strSeconds="0"+strSeconds;

    currentTime.innerHTML=strHours+":"+strMinutes+":"+strSeconds;

    setInterval(setCurrentDate,1000);
}
