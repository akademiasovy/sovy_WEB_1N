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


}
function run(){
    setInterval(setCurrentDate,1000);
}

function changedBirthDate(){
   var birthDate=document.getElementById('birth');
   var objectDate=new Date(birthDate.value);

   var day=  objectDate.getDate();
   var month= objectDate.getMonth()+1;
   var year = objectDate.getFullYear();

   var today=new Date();
   var currDay=today.getDate();
   var currMonth=today.getMonth()+1;
   var currYear=today.getFullYear();
   if(today<objectDate){
      document.getElementById('errorBirthDate').innerHTML=" Invalid birth date !";
      document.getElementById('age').innerHTML="";
      document.getElementById('dayOfTheWeek').innerHTML="";
      return;
    }
   else
      document.getElementById('errorBirthDate').innerHTML="";

   var age;
   if(currMonth>month)
      age = currYear-year;
   if(currMonth<month)
      age=currYear-year-1;
   if(currMonth==month){
     if(day>currDay)
        age=currYear-year-1;
     else
        age=currYear-year;
    console.log ("age"+age);
    document.getElementById('age').innerHTML="You are "+age+" years old.";

    var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    var dayOfTheWeek=days[objectDate.getDay()];
    document.getElementById('dayOfTheWeek').innerHTML="You were born on "+dayOfTheWeek;
   }





}
