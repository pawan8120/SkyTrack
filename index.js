
document.getElementsByClassName("location")[0].innerText="Delhi";

const date1 = new Date();
const days1=["MON", "TUE", "WED","THUR","FRI","SAT","SUN"];
var current_day=days1[date1.getDay()-1];
// to update date time
// console.log(current_day);
var current_date=date1.getDate();
// console.log(current_date);
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var current_month=months[date1.getMonth()];
// console.log(current_month);
var current_hour=date1.getHours()+1;
// console.log(current_hour);
var current_minutes=date1.getMinutes();
var current_year=date1.getFullYear();

// console.log(current_minutes);
// console.log(current_year);
document.getElementById("date").innerText=`${current_date} ${current_month} ${current_hour}:${current_minutes}`;
    

// to update temp;
document.getElementsByClassName("temp")[0].innerText;
// to update min max temp;
document.getElementsByClassName("tempmin_max")[0].innerText;