const CalendarTemplate = require('./calendar/calendar_template')
let schedule = require('./calendar/get_Schedule')

let panelist1 = new CalendarTemplate(schedule.getTime(), schedule.getSchedule());
let panelist2 = new CalendarTemplate(schedule.getTime(), schedule.getSchedule());
let candidate1 = new CalendarTemplate(schedule.getTime(), schedule.getSchedule());
// console.log(panelist1);
// console.log(panelist2);
// console.log(candidate1);
panelist1.getUTC();
console.log(panelist1.timeInUTC);
