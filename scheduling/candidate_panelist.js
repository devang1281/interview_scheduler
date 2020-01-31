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
    console.log(panelistUTC[0],panelistUTC[1])
    console.log(candidateUTC[0])
    let total = panelist.length + candidate.length;
    let candidateFlag = true;
    let allFlag = true;

}

module.exports = common_time;