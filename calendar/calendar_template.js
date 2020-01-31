// Calendar Template
class CalendarTemplate {
    constructor(role,timeInHr,availablity,off=new Date.getTimezoneOffset()) {
        this.role=role;
        this.timeInHr=timeInHr;          // Time in multiple of Half Hours
        this.availablity=availablity;
        this.timeoffest=off;//new Date().getTimezoneOffset();
        this.timeInUTC=[];
        for (let i=0;i<3;i++) {
            this.timeInUTC[i]=[];
        }
    }  
    
    getUTC() {
        for (let i in this.timeInHr) {
        // for (let i=0;i<3;i++) {
            for (let j in this.timeInHr[i]) {
            // for (let j=0;j<48;j++) {
                // console.log(this.timeInHr[i][j])
                this.timeInUTC[i].push(((((
                    this.timeInHr[i][j]*30
                    )+this.timeoffest
                    )/30
                    )//+48
                    )%48
                );
            }
        }
    }
}

module.exports = CalendarTemplate;