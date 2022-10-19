import {groupCompare, matchCompare} from './compare.js';

/** 
 * Receives an array of teams and just shuffles it using the fisher-yates
 * algorithm
 * @param {*} array The array of elements
 */
function shuffle(array){
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

/**
 * 
 * Receives an array of teams(expected 32 teams) and split them in four groups,
 * returning an array with them
 * @param {*} teams The array containing 32 teams
 * @returns An array object containing the 8 groups with 4 teams each. 
 * @author Joelfo <joellopessouza@id.uff.br>
 */
function generateGroups(teams){
    let groups = [];
    for(let i = 0; i < 32; i = i + 4){
        let group = [];
        for(let j = 0; j < 4; j++){
            const team = {
                info : teams[i + j],
                points : 0,
                goalsScore: 0
            };
            group.push(team); 
        }
        groups.push(group);
    }
    return groups;
}


/**
 * from stack overflow: 
 * https://stackoverflow.com/questions/64414816/can-you-return-n-choose-k-combinations-in-javascript-using-array-flatmap
 * @param {*} arr The "n" part of the combination
 * @param {*} k The "k" part of the combination
 * @param {*} prefix The array which will contain the possible combinations, default = []
 * @returns An array with the possible combinations sets.
 */
function choose(arr, k, prefix=[]) {
    if (k == 0) return [prefix];
    return arr.flatMap((v, i) =>
        choose(arr.slice(i+1), k-1, [...prefix, v])
    );
}

/**
 * 
 * Generate a set of matches given an array of teams, automatically defining the goals of each match.
 * @author Joelfo <joellopessouza@id.uff.br>
 * @param {*} teams 
 * @returns 
 */
function generateMatches(teams){
    let matches = [];
    //shuffle(teams);
    for(let i = 0; i < teams.length; i = i + 2){
        matches.push(generateMatch([teams[i], teams[i+1]]));
    }
    return matches;
}

/**
 * 
 * Uses the choose function to generate the full array of matches within each group;
 * @author Joelfo <joellopessouza@id.uff.br>
 * @param {*} groups The groups array
 * @returns Array containing all the matches in each group.
 */
function generateGroupMatches(groups){
    const matches = [];
    let teaminfos = [];
    for(let i = 0; i < 8; i++){
        matches.push(choose(groups[i], 2));
        for(let j = 0; j < matches[i].length; j++){
            matches[i][j] = generateMatch(matches[i][j]);
            setGoalsScore(matches[i][j]); 
            setPoints(matches[i][j]);
        }
    }
    return matches;
}

/**
 * 
 * Generate a match between two teams in a JSON format, with the goals already scored.
 * @author Joelfo <joellopessouza@id.uff.br>
 * @param {*} match An array containing two teams within a match
 * @returns {JSON} The match in JSON format.
 */
function generateMatch(match){
    const team1Info = match[0];
    const team2Info = match[1];
    match = {
        team1 : {
            info : team1Info,
            goals : runGoals(),
        },
        team2 : {
            info : team2Info,
            goals : runGoals(),
        } 
    };
    
    return match;
}

/**
 * @author Joelfo <joellopessouza@id.uff.br>
 * @param {*} match 
 */
function setGoalsScore(match){
    match.team1.info.goalsScore += match.team1.goals;
    match.team2.info.goalsScore += match.team2.goals;
}

/**
 * @author Joelfo <joellopessouza@id.uff.br>
 * @param {*} match 
 */
function setPoints(match){
    let team1 = match.team1;
    let team2 = match.team2;
    if (team1.goals > team2.goals){
        team1.info.points += 3;  
    } else if (team2.goals > team1.goals){
        team2.info.points += 3;
    } else {
        team1.info.points += 1;
        team2.info.points += 1;
    }
}

/**
 * @author Joelfo <joellopessouza@id.uff.br>
 * @param {*} groups 
 * @returns 
 */
function groupsClassify(groups){
    let classified = [];
    for(let i = 0; i < groups.length; i++){
        let group = groups[i];
        group.sort(groupCompare);
        group.reverse();
        classified.push(group[0]);
        classified.push(group[1]);
    }
    return classified;
}

/**
 * Classifies the teams to one final to another
 * 
 * Examples:
 * 
 * 16 finals -> 8 finals 
 * 
 * 8 finals -> 4 finals 
 * 
 * 4 finals -> semi-finals 
 * 
 * semi-finals -> finals.
 * @author Joelfo <joellopessouza@id.uff.br>
 * @param {*} matches An array containing all matches within the preceding finals.
 * @returns {array} An array containing the teams classified for the next finals.
 */
function finalsClassify(matches){
    let classified = [];
    for(let i = 0; i < matches.length; i++){
        const teams = [matches[i].team1, matches[i].team2];
        teams.sort(matchCompare);
        classified.push(teams[1].info);
    }
    return classified;
}


/**
 * Based in a random function found on stack overflow.
 * Returns a random number os goals(max of 7 goals).
 * @author Joelfo <joellopessouza@id.uff.br>
 * @param {*} team The team
 * @return A random number containing the goals.
 */
 function runGoals(){
    return Math.floor(Math.random() * 7);   
}

export {shuffle, generateGroups, choose, generateGroupMatches, groupsClassify, finalsClassify, generateMatches};