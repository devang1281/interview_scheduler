function common_time(panelist,candidate) {
    let panelistUTC=[];
    let candidateUTC=[];
    for (let iter = 0;iter <panelist.length;iter++) {
        panelistUTC[iter]=panelist[iter].getUTC();
        // console.log(panelist[iter].timeOffset)
    }
    for (let iter = 0;iter <candidate.length;iter++) {
        candidateUTC[iter]=candidate[iter].getUTC();
        // console.log(candidate[iter].timeOffset)
    }
    // console.log(panelistUTC[0],panelistUTC[1])
    // console.log(candidateUTC[0])
    let total = panelist.length + candidate.length;
    let candidateFlag ;
    let candidateFreeTime = [];
    let allFlag = true;
    let no=0;

    // Checking Candidate Time Table
    if (candidate.length>1)
    for (let time=0;time<48;time++) {
        candidateFlag = true ;                  //CandidateFlag == true meaning common candidate slot available
        for (no = 0; no < candidate.length;no++) {
            if (no+1<candidate.length) {
                if(candidate[no].availablity[candidateUTC[no].j][candidateUTC[no].i] === "Free") {
                    if(candidate[no+1].availablity[candidateUTC[no+1].j][candidateUTC[no+1].i]==="Free") {
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
            // console.log(time,candidate[0].availablity[candidateUTC[0].j][candidateUTC[0].i-1],candidateUTC[0].j,candidateUTC[0].i-1);
            // break;
            candidateFreeTime.push(time);
        }
    }
    console.log(candidateFreeTime);
}

module.exports = common_time;