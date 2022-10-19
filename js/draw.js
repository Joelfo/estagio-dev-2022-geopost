function drawGroups(groups){
    $('.groups-container').append(`<div class="group-grid-container" id="group-container-1"> </div>`);
    for(let i = 0; i < groups.length / 2 ; i++){
        $(`#group-container-1`).append(`<div class="group-grid-item" id="group-grid-item-${i}"></div>`)

        $(`#group-grid-item-${i}`).append(`<div class="group-text"></div>`);
        for(let j = 0; j < groups[i].length ; j++){
            $(`#group-grid-item-${i} .group-text`).append(`<div class="group-grid-item-text"> ${groups[i][j].info.Name} </div>`);
        }
    }

    $('.groups-container').append(`<div class="group-grid-container" id="group-container-2"> </div>`);
    for(let i = groups.length - 1; i >= groups.length / 2; i--){
        $(`#group-container-2`).append(`<div class="group-grid-item" id="group-grid-item-${i}"></div>`)
        for(let j = 0; j < groups[i].length; j++){
            console.log('teste');
            $(`#group-grid-item-${i}`).append(`<div class="group-grid-item-text"> ${groups[i][j].info.Name} </div>`);
        }
    }

}

function drawFinals(matches, finalType, metrics){
    $(`.${finalType}-finals-container`).append(`<div class="${finalType}-finals-grid-container" id="${finalType}-finals-container-left"> </div>`);
    for(let i = 0; i < matches.length / 2; i++){
        $(`#${finalType}-finals-container-left`).append(`<div class="${finalType}-finals-item" id="${finalType}-finals-item-${i}"> </div>`);
        
        $(`#${finalType}-finals-item-${i}`).append(`<div class="${finalType}-finals-text"> ${matches[i].team1.info.info.Name} </div>`);
        $(`#${finalType}-finals-item-${i}`).append(`<div class="${finalType}-finals-text"> ${matches[i].team2.info.info.Name} </div>`)
    }

    $(`.${finalType}-finals-container`).append(`<div class="${finalType}-finals-grid-container" id="${finalType}-finals-container-right" > </div>`);
    for(let i = matches.length - 1; i >= matches.length / 2; i--){
        $(`#${finalType}-finals-container-right`).append(`<div class="${finalType}-finals-item" id="${finalType}-finals-item-${i}"> </div>`);
        $(`#${finalType}-finals-item-${i}`).append(`<div class="${finalType}-finals-text"> ${matches[i].team1.info.info.Name} </div>`);
        $(`#${finalType}-finals-item-${i}`).append(`<div class="${finalType}-finals-text"> ${matches[i].team2.info.info.Name} </div>`);
    }

    $(`.${finalType}-finals-container`).css({
        "display":"flex",
        "justify-content": "space-between",
        "align-items": "center"
    });
    $(`#${finalType}-finals-container-left`).css({
        "position": "relative",
        "left": metrics.leftRightSpace
    });
    $(`#${finalType}-finals-container-right`).css({
        "position": "relative",
        "left": leftRightSpace
    });
    $(`.${finalType}-finals-grid-container`).css({
            "display": "grid",
            "grid-template-columns": "auto",
            "padding": metrics.padding,
            "row-gap": metrics.rowGap
    });
    {   "border": "0.5px solid #FFFAFA",
        "border-radius": "5px";
        "font-size": "20px";
        "padding": "2px";
        "font-family": "sans-serif";
        "color":#D8BFD8;
        "background-color": #483D8B;
        "display":"flex";
        "flex-direction": "column";
        "justify-content": "space-between";}

    
}

export {drawFinals, drawGroups};