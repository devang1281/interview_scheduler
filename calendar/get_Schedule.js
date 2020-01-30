// Time-table

function getTime() {
    let time =[];
    for (let i=0;i<48;i++){
        time.push(i);
    }
    return time;
}

// Dummy Values for testing

function getSchedule() {
    let avail =[];
    for (let i =0;i<48;i++)
        avail.push((
            () => {
            switch(Math.floor(Math.random() * 3)) {
                case 0: 
                    return ('Free');
                    break;
                case 1:
                    return ('Available'); // Busy but can rescheduled
                    break;
                case 2:
                    return ('Busy');
                    break;
            }  
        })
        ());
    return avail
}

module.exports = {getTime: getTime,
    getSchedule: getSchedule}