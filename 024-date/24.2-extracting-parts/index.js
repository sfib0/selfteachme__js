const date = new Date();

const currentYear = date.getFullYear();
const currentMonth = date.getMonth();
const currentDate = date.getDate();
const currentHours = date.getHours();
const currentMins = date.getMinutes();
const currentSeconds = date.getSeconds();
const milliSeconds = date.getMilliseconds();
const millsSincePast = date.getTime();

console.log(
  `Year: ` + currentDate,
  `Month: ` + currentMonth,
  `Date: ` + currentDate,
  `Hours: ` + currentHours,
  `Minutes: ` + currentMins,
  `Seconds: ` + currentSeconds,
  `Milliseconds: ` + milliSeconds,
  `Seconds passed since 1970: ` + millsSincePast
);