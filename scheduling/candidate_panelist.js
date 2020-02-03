function setTime(user) {
    let userUTC=[];
    for (let iter = 0;iter <user.length;iter++) {
        userUTC[iter]=user[iter].getUTC();
    }
    return (userUTC)
}

function convertTime (i,j) {
    let hours,minutes;
    if (i==undefined) {
        return ("Not Free")
    }
    switch (j) {
        case 1:
            j="Today";
            break;
        case 2:
            j="Tomorrow";
            break;
    }
    minutes=(i%2)*30;
    hours=Math.floor(i/2);
    return (hours+":"+minutes+","+j)
}

function common_time(panelist,candidate) {
    let panelistUTC=[];
    panelistUTC = setTime(panelist);
    let candidateUTC=[];
    candidateUTC=setTime(candidate);
    let total = panelist.length + candidate.length;
    let candidateFlag ;
    let candidateFreeTime = [];
    let allFreeTime = [];
    let allFlag;
    let no=0;

    // Checking Candidate Time Table
    if (candidate.length>1)
    for (let time=0;time<48;time++) {
        candidateFlag = true ;                  //CandidateFlag == true meaning common candidate slot available
        for (no = 0; no < candidate.length;no++) {
            if (no+1<candidate.length) {
                if(candidate[no].availablity[candidateUTC[no].j][candidateUTC[no].i] === "Free" && candidateUTC[no].j !==0) {
                    if(candidate[no+1].availablity[candidateUTC[no+1].j][candidateUTC[no+1].i] === "Free" && candidateUTC[no+1].j !==0) {
                        candidateFlag=true && candidateFlag;
                        console.log(no,time,candidate[no].availablity[candidateUTC[no].j][candidateUTC[no].i],candidateUTC[0].j,candidateUTC[0].i)
                    } else {
                        candidateFlag=false
                    }
                } else {
                    candidateFlag=false
                }
            }
            candidateUTC[no].i +=1;
            if (candidateUTC[no].i==48){
                candidateUTC[no].j +=1;
                candidateUTC[no].i=0;
            }
        }
        if (candidateFlag ==true){
            candidateFreeTime.push(time);
        }
    }
    // console.log(candidateFreeTime);

    // Resetting Time
    candidateUTC=setTime(candidate);

    // Panelist Free Time
    if (candidate.length==1) {
        for (let time=0;time<48;time++) {
            allFlag = true ;                  //allFlag == true meaning common time for all candidate and atleast 1 panaelist available slot
            for (no = 0; no < panelist.length;no++) {
                if(candidate[0].availablity[candidateUTC[0].j][candidateUTC[0].i] === "Free" && candidateUTC[0].j !==0) {

                    if(panelist[no].availablity[panelistUTC[no].j][panelistUTC[no].i] === "Free" && panelistUTC[no].j !==0) {
                        allFlag=true && allFlag;
                        console.log(`Panelist ${no+1} ${panelist[no].availablity[panelistUTC[no].j][panelistUTC[no].i]} at ${convertTime(panelistUTC[no].i,panelistUTC[no].j)} Local Time / Candidate is also ${candidate[0].availablity[candidateUTC[0].j][candidateUTC[0].i]} at  ${convertTime(candidateUTC[0].i,candidateUTC[0].j)} Local Time`)
                    } else {
                        allFlag=false
                    }
                } else {
                    allFlag=false
                }
                panelistUTC[no].i +=1;
                if (panelistUTC[no].i==48){
                    panelistUTC[no].j +=1;
                    panelistUTC[no].i=0;
                }
            }
            candidateUTC[0].i +=1;
            if (candidateUTC[0].i==48){
                candidateUTC[0].j +=1;
                candidateUTC[0].i=0;
            }
            if (allFlag ==true) {
                allFreeTime.push(convertTime(time,1));
            }
        }
    } else {
        
    }
    if(!allFreeTime.length) allFreeTime = 'no common time in';
    console.log(`All Panelists and Candidates are free at ${allFreeTime} UTC`)
}

module.exports = common_time;