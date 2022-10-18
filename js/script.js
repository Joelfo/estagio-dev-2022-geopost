import * as functions from './functions.js';

const url = "https://estagio.geopostenergy.com/WorldCup/GetAllTeams";
$.ajax(url, {
    method: 'get',
    headers: {
        'git-user' : 'Joelfo'
    },
    dataType: 'json',
}).done(({Result}) => {
    functions.shuffle(Result);
    console.log(Result);
    const groups = functions.putIntoGroups(Result);
    console.log(groups);
});


