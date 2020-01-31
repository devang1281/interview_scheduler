const CalendarTemplate = require('./calendar/calendar_template')
let schedule = require('./calendar/get_Schedule')
let common_time = require('./scheduling/candidate_panelist')

let noOfPanelist=1;
let noOfCandidate=3;
let panelist=[];
let candidate=[];

for(let i = 0 ; i<noOfPanelist ; i++){
    panelist[i] = new CalendarTemplate("panelist"+`${i+1}`, schedule.getSchedule(),-330);
}
for(let i = 0 ; i<noOfCandidate ; i++){
    candidate[i] = new CalendarTemplate("candidate"+`${i+1}`, schedule.getSchedule(),360);
}
// let panelist1 = new CalendarTemplate("panelist",schedule.getTime(), schedule.getSchedule(),-330);
// let panelist2 = new CalendarTemplate("panelist",schedule.getTime(), schedule.getSchedule(),330);
// let candidate1 = new CalendarTemplate("candidate",schedule.getTime(), schedule.getSchedule(),0);


/* for(let i = 0 ; i<noOfPanelist ; i++) {
    // panelist[i].getUTC()
    // console.log(JSON.stringify(panelist[i].timeInUTC));
    console.log(JSON.stringify(panelist[i].availablity));
} */

/* for(let i = 0 ; i<noOfCandidate ; i++) {
    // candidate[i].getUTC()
    // console.log(candidate[i].timeInUTC);
} */
// console.log(JSON.stringify(panelist[0].timeInUTC));
// console.log(JSON.stringify(panelist[1].timeInUTC));
// console.log(JSON.stringify(candidate[0].timeInUTC));
common_time(panelist,candidate);
