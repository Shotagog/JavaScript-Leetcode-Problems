function minCost(startPos, homePos, rowCosts, colCosts) {
    let totalCosts = 0;
    if(startPos[0] < homePos[0]){
        for(let i = startPos[0] + 1; i <= homePos[0]; i++){
            totalCosts += rowCosts[i];
        }
    }else if(startPos[0] > homePos[0]){
        for(let i = homePos[0]; i < startPos[0]; i++){
            totalCosts += rowCosts[i];
        }
    }
    if(startPos[1] < homePos[1]){
        for(let i = startPos[1] + 1; i <= homePos[1]; i++){
            totalCosts += colCosts[i];
        }
    }else if(startPos[1] > homePos[1]){
        for(let i = homePos[1]; i < startPos[1]; i++){
            totalCosts += colCosts[i];
        }
    }
    return totalCosts;
}

// console.log(minCost([1, 0], [2, 3], [5, 4, 3], [8, 2, 6, 7]));
// console.log(minCost([0, 0], [0, 0], [5], [26]));