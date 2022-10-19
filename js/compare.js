function matchCompare(x, y){
    return x.goals - y.goals;
}

function groupCompare(x, y){
    let result = x.points - y.points;
    if(result != 0){
        return result;  
    }
    result = x.goalsScore - y.goalsScore;
    if(result != 0){
        return result;  
    }
    result = [-1, 1]
    let pos = Math.floor(Math.random() * 2);
    return result[pos];
}


export {groupCompare, matchCompare}
