import { functions } from "./resources/scripts/functions.js";

let round = 0;
let count = 0;
let level = 1;
let levelTime = 2000;

const welcomeText = 'Hello, This is the Ball Click game, you need to be fast! Click at the OK button and When you are ready click Start!';
let score = `Level: ${level} Points: ${count}`;
let endInfo = `Game Over!! ${(count * 100) / 45}`

$(document).ready(() => {

    //Statistics
    $('#counter').text(`${count}`);
    $('#level').text(`${level}`);
    $('#round').text(`${round}`);

    functions.stopToInfo(welcomeText);

    //start btn
    $('#start-btn').on('click', () => { 
        
        round++

        if (round < 4) {
            $('#round').text(`${round}`);
            functions.callTheBall(levelTime, count);
        }
        if (round === 4 && level === 3) {
            functions.stopToInfo(endInfo);
        }
        if (round === 4 && level < 3) {
            level ++;
            $('#level').text(`${level}`);
            round = 0;
            $('#round').text(`${round}`);
            functions.stopToInfo(score);
            
        }
    });
});

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