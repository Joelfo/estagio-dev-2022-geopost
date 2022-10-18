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

function putIntoGroups(teams){
    let groups = []
    for(let i = 0; i < 32; i = i + 4){
        let temp = [];
        for(let j = 0; j < 4; j++){
            temp.push(teams[i + j]); 
        }
        groups.push(temp);
    }
    return groups;
}

export {shuffle, putIntoGroups};