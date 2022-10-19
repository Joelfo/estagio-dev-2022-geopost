import * as simulator from './functions.js';
import {drawFinals, drawGroups} from './draw.js';

function sendResult(matchFinal){
    const url = 'https://estagio.geopostenergy.com/WorldCup/InsertFinalResult';
    const postData = {
        equipeA : matchFinal.team1.info.info.Token,
        equipeB : matchFinal.team2.info.info.Token,
        golsEquipeA : matchFinal.team1.goals,
        golsEquipeB : matchFinal.team2.goals
    }
    $.ajax(url, {
        method: 'post',
        headers: {
            'git-user' : 'Joelfo'
        },
        contentType: 'application/json',
        dataType : 'json',
        data : JSON.stringify(postData)
    }).done(function(response){
        console.log(response);
        console.log(JSON.stringify(postData));
    });
}



const url = "https://estagio.geopostenergy.com/WorldCup/GetAllTeams";
$.ajax(url, {
    method: 'get',
    headers: {
        'git-user' : 'Joelfo'
    },
    dataType: 'json',
}).done(({Result}) => {
    console.log('ALL TEAMS-------------------------');
    simulator.shuffle(Result);
    console.log(Result);

    console.log('GROUPS-------------------------');
    const groups = simulator.generateGroups(Result);
    console.log(groups);
    

    console.log('GROUP MATCHES-------------------------');
    const groupMatches = simulator.generateGroupMatches(groups);
    console.log(groupMatches);

    console.log('8 FINALS TEAMS-------------------------');
    const teams8Finals = simulator.groupsClassify(groups);
    console.log(teams8Finals);

    console.log('8 FINALS MATCHES-------------------------');
    const matches8Finals = simulator.generateMatches(teams8Finals); 
    console.log(matches8Finals);
    //draw8Finals(matches8Finals);

    console.log('4 FINALS TEAMS-------------------------');
    const teams4Finals = simulator.finalsClassify(matches8Finals);
    console.log(teams4Finals);

    console.log('4 FINALS MATCHES-------------------------');
    const matches4Finals = simulator.generateMatches(teams4Finals);
    console.log(matches4Finals);

    console.log('SEMI-FINALS TEAMS------------------------');
    const teamsSemiFinals = simulator.finalsClassify(matches4Finals);
    console.log(teamsSemiFinals);

    console.log('SEMI-FINALS MATCHES------------------------');
    const matchesSemiFinals = simulator.generateMatches(teamsSemiFinals);
    console.log(matchesSemiFinals);

    console.log('FINAL TEAMS------------------------------')
    const teamsFinal = simulator.finalsClassify(matchesSemiFinals);
    console.log(teamsFinal);

    console.log('FINAL MATCH-----------------------------')
    const matchFinal = simulator.generateMatches(teamsFinal);
    console.log(matchFinal);

    console.log('WINNER----------------------------');
    const winner = simulator.finalsClassify(matchFinal);
    console.log(winner);

    sendResult(matchFinal[0]);

    drawGroups(groups);
    drawFinals(matches8Finals, "eight");
    drawFinals(matches4Finals, "four");
    drawFinals(matchesSemiFinals, "semi");
});


