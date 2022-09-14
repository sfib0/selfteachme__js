
const today = new Date();
const birthday = new Date("October 20, 2022 00:00:00");

const milliToday = today.getTime();
const milliBirthday = birthday.getTime();

const milliDiff = milliBirthday - milliToday;
const dayDiff = Math.floor(milliDiff / (1000 * 60 * 60 * 24));

console.log(dayDiff);

if (dayDiff < 0) {
  console.log(
    'Days passed since birthday: ' +
    Math.abs(dayDiff)
  );
}

console.log('Days left till birthday: ' + dayDiff);

//
const msDiff = new Date("October 20, 2022 00:00:00").getTime() - new Date().getTime();
const daysTillBirthday = Math.floor(msDiff / (1000 * 60 * 60 * 24));

console.log('Days left till birthday: ', daysTillBirthday);

