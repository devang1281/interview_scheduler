// Time-table

function getTime() {
    let time =[];

    // Creating 2D Array
    for (let i=0;i<3;i++) {
        time[i]=[];
    }

    for (let i=0;i<48;i++){
        for (let j=0;j<3;j++){
            time[j].push(i);
        }
    }
    return time;
}

// Dummy Values for testing

function getSchedule() {
    let avail =[];

    // Creating 2D Array
    for (let i=0;i<3;i++) {
        avail[i]=[];
    }

    for (let i =0;i<48;i++) {
        for (let j=0;j<3;j++) {
            avail[j].push((
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
        }
    }
    return avail
}

module.exports = {
    getTime: getTime,
    getSchedule: getSchedule
};