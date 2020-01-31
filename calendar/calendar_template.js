// Calendar Template
class CalendarTemplate {
    constructor(role,availablity,off=new Date.getTimezoneOffset()) {
        this.role=role;
        // this.timeInHr=timeInHr;          // Time in multiple of Half Hours
        this.availablity=availablity;
        this.timeOffset=off/30;//new Date().getTimezoneOffset();
        // this.timeInUTC;
        /* for (let i=0;i<3;i++) {
            this.timeInUTC[i]=[];
        } */
    }  
    
    getUTC() {
            let j=1;
            let i=0;
            if (this.timeOffset<0) {
                j= 0;
                i= 48+this.timeOffset;
            } else {
                j= 1;
                i= this.timeOffset;
            }
            return ({i:i,j:j})
        
    }
}

module.exports = CalendarTemplate;