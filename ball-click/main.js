import { functions } from "./resources/scripts/functions.js";
import { welcomeText, endInfo } from "./resources/scripts/variables.js"

$(document).ready(() => {

    //Statistics
    let count = 0;
    let level = 0;
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
                level = 0
                $('#level').text(`${level}`);
                count = 0;
                $('#counter').text(`${count}`);
            } else {
                functions.callTheBall(count, level);
                $('#level').text(`${level}`);
            }
        });
    } 
});
