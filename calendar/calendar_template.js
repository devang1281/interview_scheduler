// Calendar Template
class CalendarTemplate {
    constructor(timeInHr,availablity) {
        this.timeInHr=timeInHr;          // Time in multiple of Half Hours
        this.availablity=availablity;
        this.timeoffest=-720//new Date().getTimezoneOffset();
        this.timeInUTC=[];
    }  
    
    getUTC() {
        for (let i in this.timeInHr) {
            this.timeInUTC.push(((((
                this.timeInHr[i]*30
                )+this.timeoffest
                )/30
                )//+48
                )%48
            );
        }
    }
}

module.exports = CalendarTemplate;