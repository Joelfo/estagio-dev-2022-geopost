import * as simulator from './functions.js';
import {drawFinals, drawGroups, drawFinal, drawWinner} from './draw.js';

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
    const metrics = {
        position: "-2000px",
        padding: "2px",
        rowGap: "40px",
        margin: "30px",
        width: "140px",
    };
    drawGroups(groups, groupMatches);
    drawFinals(matches8Finals, "eight", metrics);
    drawFinals(matches4Finals, "four", metrics);
    drawFinals(matchesSemiFinals, "semi", metrics);
    metrics.marginBottom = "60px";
    drawFinal(matchFinal[0], metrics);
    drawWinner(winner[0], metrics);
});


$(document).on("click", ".popup", function(){
    const id = $(this).attr('id');
    console.log(id);
    const popupId = 'popup-' + id;
    console.log(popupId);
    let popup = document.getElementById(popupId);
    popup.classList.toggle("show");
})
    
$(document).on("click", ".modalButton", function(){
    let id = $(this).attr('id');
    let modalId = 'modal-' + id;
    let modal = document.getElementById(modalId);
    //console.log(modal.style);
    modal.style.display = "block";
    //console.log(modal.style);

    let spanId = "close-" + modalId;
    //console.log(spanId);
    let span = document.getElementById(spanId);
    //console.log(span.attributes)
    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        //console.log(modal.style);
        modal.style.display = "none";
        console.log(modal.style.display);
        setTimeout(() => {console.log(modal.style.display);})
    }
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
          modal.style.display = "none";
        }
      }
})



