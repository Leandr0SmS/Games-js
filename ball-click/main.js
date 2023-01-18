import { functions } from "./resources/scripts/functions.js";
import {count, level, levelTime, round, welcomeText, score} from "./resources/scripts/variables.js";

$(document).ready(() => {

    //Statistics
    $('#counter').text(`${count}`);
    $('#level').text(`${level}`);
    $('#round').text(`${round}`);

    functions.stopToInfo(welcomeText);

    /*
        - function to open infoBoard with insructions
            (adjust size of infoBoard)
        -block star buttom
        - press button of infoBoard to start     

        if (round > 0 $$ level < 3) {
            -enable button
            -click-start()
        } else if () {

        }
    */


    //infoBoard with instructio and welcome

   /* $('.infoBoard')
        .css('visibility', 'visible');
    $('.infoBoard-div')
        .append(welcomeText);*/
    
        

    //start btn
    $('#start-btn').on('click', () => { 
        functions.callTheBall(levelTime, count);
    });
});