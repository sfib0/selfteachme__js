//
let presentDate = new Date();
console.log(presentDate);

//
presentDate = presentDate.toString();
console.log(typeof presentDate, presentDate);

//
const presentDay = new Date().getDay();
console.log(presentDay);

//
const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const now = new Date();
const day = now.getDay();
const dayName = days[day];
console.log(dayName);