var showyear = document.querySelector("#showyear");
var showmonth = document.querySelector("#showmonth");
var showday = document.querySelector("#showday");
let year = 0,
  month = 0,
  day = 0;

function AgeCalculate() {
  var dob = document.getElementById("date").value;
  var userdob = new Date(dob);
  var today = new Date();

  if (today < userdob) {
    alert("Please Enter a Correct Date of Birth");
    return;
  }

  year = today.getFullYear() - userdob.getFullYear();
  month = today.getMonth() - userdob.getMonth();
  day = today.getDate() - userdob.getDate();

  if (month < 0) {
    year--;
    month += 12;
  }

  if (day < 0) {
    month--;
    var lastMonth = new Date(today.getFullYear(), today.getMonth(), 0);
    day += lastMonth.getDate();
  }

  showyear.innerHTML = year;
  showmonth.innerHTML = month;
  showday.innerHTML = day;
}
