import { functions } from "./resources/scripts/functions.js";

let count = 0;
let level = 0;

const welcomeText = 'Hello, This is the Ball Click game, you need to be fast! Click at the OK button and When you are ready click Start!';
let endInfo = `Game Over!!`

$(document).ready(() => {

    //Statistics
    $('#counter').text(`${count}`);
    $('#level').text(`${level}`);

    functions.stopToInfo(welcomeText);

    if (level < 4) {
        $('#start-btn').on('click', () => {
            count = 0;
            $('#counter').text(`${count}`);
            level ++;
            if (level === 4) {
                functions.stopToInfo(endInfo);
            } else {
                functions.callTheBall(count, level);
                $('#level').text(`${level}`);
            }
        });
    } 
    //start btn
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