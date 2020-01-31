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
    let candidateFlag = true;
    let allFlag = true;
    for (let iter2=0;iter2<48;iter2++) {
        candidateFlag = true && candidateFlag;
        for (let iter = 0; iter < candidate.length;iter++) { 
            if (iter+1<candidate.length) {
                if(candidate[iter].availablity[candidateUTC[iter].j][candidateUTC[iter].i] === "Free") {
                    if(candidate[iter].availablity[candidateUTC[iter].j][candidateUTC[iter].i]===candidate[iter+1].availablity[candidateUTC[iter+1].j][candidateUTC[iter+1].i]) {
                        candidateFlag=true;
                        console.log(iter,iter2,candidate[iter].availablity[candidateUTC[iter].j][candidateUTC[iter].i])
                        // break;
                    } else {
                        candidateFlag=false
                    }
                }
            }
        }
        if (candidateFlag ==true){
            console.log(iter2,candidate[0].availablity[candidateUTC[0].j][candidateUTC[0].i]);
            break;
        } /* else {
            candidateFlag==true;
        } */
    }

}

module.exports = common_time;