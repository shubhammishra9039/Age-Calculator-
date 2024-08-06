var showyear = document.querySelector("#showyear");
var showmonth = document.querySelector("#showmonth");
var showday = document.querySelector("#showday");
let year = 00,
  month = 00,
  day = 00;

function AgeCalculate() {
  var dob = document.getElementById("date").value;
  var userdob = new Date(dob);
  var today = new Date();

  if (today.getFullYear() < userdob.getFullYear()) {
    alert("Pleased Enter Correct Date of Broth");
  } else if (
    today.getFullYear() == userdob.getFullYear() &&
    today.getMonth() >= userdob.getMonth() &&
    today.getDate() >= userdob.getDate()
  ) {
    year = today.getFullYear() - userdob.getFullYear();
    month =
      today.getMonth() > userdob.getMonth()
        ? today.getMonth() - userdob.getMonth()
        : userdob.getMonth() - today.getMonth();
    day =
      today.getDate() > userdob.getDate()
        ? today.getDate() - userdob.getDate()
        : userdob.getDate() - today.getDate();
  } else if (today.getFullYear() > userdob.getFullYear()) {
    year = today.getFullYear() - userdob.getFullYear();
    month =
      today.getMonth() > userdob.getMonth()
        ? today.getMonth() - userdob.getMonth() - 1
        : userdob.getMonth() - today.getMonth() - 1;
    day =
      today.getDate() > userdob.getDate()
        ? today.getDate() - userdob.getDate()
        : userdob.getDate() - today.getDate();
  } else {
    alert("Pleased Enter Correct Date of Broth");
  }
  showyear.innerHTML = year;
  showmonth.innerHTML = month;
  showday.innerHTML = day;
}
