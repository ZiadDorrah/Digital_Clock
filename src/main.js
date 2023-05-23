document.querySelector("body").onload = initClock();
function updateClock() {
  let now = new Date();
  let dname = now.getDay();
  let mo = now.getMonth();
  let dnum = now.getDate();
  let yr = now.getFullYear();
  let hou = now.getHours();
  let min = now.getMinutes();
  let sec = now.getSeconds();
  let pe = "AM";
  if (hou == 0) {
    hou = 12;
  } else if (hou > 12) {
    hou = hou - 12;
    pe = "PM";
  }
  if (hou < 10) hou = "0" + hou;
  //   Number.prototype.pad = function (digits) {
  //     for (let n = this.toString(); n.length < digits; n = 0 + n);
  //     return n;
  //   };
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let week = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wensday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let ids = [
    "dayname",
    "month",
    "daynum",
    "year",
    "hour",
    "minutes",
    "seconds",
    "period",
  ];

  let values = [week[dname], months[mo], dnum, yr, hou, min, sec, pe];

  for (let i = 0; i < ids.length; i++) {
    document.getElementById(ids[i]).firstChild.nodeValue = values[i];
  }
}
function initClock() {
  updateClock();
  window.setInterval("updateClock()", 1);
}
