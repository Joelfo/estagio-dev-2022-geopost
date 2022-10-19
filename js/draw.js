function drawGroups(groups, groupMatches){
    $('.groups-container').append(`<div class="group-grid-container" id="group-container-1"> </div>`);
    for(let i = 0; i < groups.length / 2 ; i++){
        $(`#group-container-1`).append(`<div class="group-grid-item modalButton" id="group-grid-item-${i}"></div>`)

        $(`#group-grid-item-${i}`).append(`<div class="group-text"></div>`);
        for(let j = 0; j < groups[i].length ; j++){
            $(`#group-grid-item-${i} .group-text`).append(`<div class="group-grid-item-text"> ${groups[i][j].info.Name} </div>`);
        }
        $(`#group-grid-item-${i}`).append(`<div id="modal-group-grid-item-${i}" class="modal"> <div class="modal-content" id="modal-content-group-${i}"> <span class="close">&times;</span> </div> </div>`);
        for(let j = 0; j < groupMatches[i].length; j++){
            $(`#modal-content-group-${i}`).append(`<div class="group-match group-grid-item"> ${groupMatches[i][j].team1.info.Name}  ${groupMatches[i][j].team1.info.Name} </div>`);
        }
    
    }

    $('.groups-container').append(`<div class="group-grid-container" id="group-container-2"> </div>`);
    for(let i = groups.length - 1; i >= groups.length / 2; i--){
        $(`#group-container-2`).append(`<div class="group-grid-item modalButton" id="group-grid-item-${i}"></div>`)

        for(let j = 0; j < groups[i].length; j++){
            console.log('teste');
            $(`#group-grid-item-${i}`).append(`<div class="group-grid-item-text"> ${groups[i][j].info.Name} </div>`);
        }

        $(`#group-grid-item-${i}`).append(`<div id="modal-group-grid-item-${i}" class="modal"> <div class="modal-content" id="modal-content-group-${i}"> <span class="close">&times;</span> </div> </div>`);
        for(let j = 0; j < groupMatches[i].length; j++){
            $(`#modal-content-group-${i}`).append(`<div class="group-match group-grid-item"> ${groupMatches[i][j].team1.info.Name}  ${groupMatches[i][j].team1.info.Name} </div>`);
        }
    }

}

function drawFinals(matches, finalType, metrics){
    $(`.${finalType}-finals-container`).append(`<div class="${finalType}-finals-grid-container" id="${finalType}-finals-container-left"> </div>`);
    for(let i = 0; i < matches.length / 2; i++){
        $(`#${finalType}-finals-container-left`).append(`<div class="${finalType}-finals-item finals-item popup" id="${finalType}-finals-item-${i}"> <span class="popuptext" id="popup-${finalType}-finals-item-${i}">Resultado: ${matches[i].team1.info.info.Name}(${matches[i].team1.goals}) X (${matches[i].team2.goals})${matches[i].team2.info.info.Name}</span> </div>`);
        
        $(`#${finalType}-finals-item-${i}`).append(`<div class="${finalType}-finals-text"> ${matches[i].team1.info.info.Name} </div>`);
        $(`#${finalType}-finals-item-${i}`).append(`<div class="${finalType}-finals-text"> ${matches[i].team2.info.info.Name} </div>`)
    }

    $(`.${finalType}-finals-container`).append(`<div class="${finalType}-finals-grid-container" id="${finalType}-finals-container-right" > </div>`);
    for(let i = matches.length - 1; i >= matches.length / 2; i--){
        $(`#${finalType}-finals-container-right`).append(`<div class="${finalType}-finals-item finals-item popup" id="${finalType}-finals-item-${i}"> <span class="popuptext" id="popup-${finalType}-finals-item-${i}">Resultado: ${matches[i].team1.info.info.Name}(${matches[i].team1.goals}) X (${matches[i].team2.goals})${matches[i].team2.info.info.Name}</span>  </div>`);
        $(`#${finalType}-finals-item-${i}`).append(`<div class="${finalType}-finals-text"> ${matches[i].team1.info.info.Name} </div>`);
        $(`#${finalType}-finals-item-${i}`).append(`<div class="${finalType}-finals-text"> ${matches[i].team2.info.info.Name} </div>`);
    }

    $(`.${finalType}-finals-container`).css({
        "display":"flex",
        "justify-content": "space-between",
        "align-items": "center",
        "order" : "2"
    });
    $(`#${finalType}-finals-container-left`).css({
        "order" : "1",
        "margin-left" : metrics.margin
    });
    $(`#${finalType}-finals-container-right`).css({
        "order" : "3",
        "margin-right" : metrics.margin
    });
    $(`.${finalType}-finals-grid-container`).css({
            "display": "grid",
            "grid-template-columns": "auto",
            "padding": metrics.padding,
            "row-gap": metrics.rowGap
    });
}

function drawFinal(match, metrics){
    $(".final-container").append('<div class="final-grid-container" id="final-grid-container-left"> </div>');
    $("#final-grid-container-left").append(`<div class="final-grid-item finals-item final-item bottom popup" id="final-grid-item-left"> ${match.team1.info.info.Name} <span class="popuptext" id="popup-final-grid-item-left">Resultado: ${match.team1.info.info.Name}(${match.team1.goals}) X (${match.team2.goals})${match.team2.info.info.Name}</span> </div>`);
    $(".final-container").append('<div class="final-grid-container" id="final-grid-container-right"> </div>');
    $("#final-grid-container-right").append(`<div class="final-grid-item finals-item final-item popup" id="final-grid-item-right"> ${match.team2.info.info.Name} <span class="popuptext" id="popup-final-grid-item-right">Resultado: ${match.team1.info.info.Name}(${match.team1.goals}) X (${match.team2.goals})${match.team2.info.info.Name}</span> </div>`);
    $(`.final-container`).css({
        "display": "grid",
        "grid-template-columns": "auto auto",
        "padding": metrics.padding,
        "row-gap": metrics.rowGap,
        "order" : "2",
        "margin-bottom": metrics.marginBottom
    });

    $(".final-grid-container").css({
        "display": "grid",
        "grid-template-columns": "auto auto auto auto",
        "padding": metrics.padding,
        "row-gap": metrics.rowGap,
    });
    
    $(`#final-grid-container-left`).css({
        "margin-right": "10px",
        "margin-left" : metrics.margin,
        
    });
    $(`#final-grid-container-right`).css({
        "margin-right": "10px",
        "margin-right" : metrics.margin,
       
    });
}

function drawWinner(winner, metrics){
    $('.final-container').prepend(`<div class="winner-container finals-item final-item popup" id="winner-container"> ${winner.info.Name} </div>`)

    
}

export {drawFinals, drawGroups, drawFinal, drawWinner};