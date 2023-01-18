//variables

let count = 0;
let level = 1;
let levelTime = 2000;
let round = 3;

const welcomeText = 'Hello, This is the Ball Click game, you need to be fast! Click at the OK button and When you are ready click Start!';
const score = `Level: ${level} \n Points: ${count}`;

const okBtn = function  () {
    $('#start-btn')
        .prop("disabled", false)
        .css('cursor', 'pointer');
    $('.infoBoard').css('visibility', 'hidden');
}

const stopToInfo = function (info) {
    $('#start-btn')
        .prop("disabled", true)
        .css('cursor', 'not-allowed')
    $('.infoBoard').css('visibility', 'visible');
    $('.infoBoard-div').append(info);
    $('#ok-btn').on('click', () => {
        okBtn();
    });
}

const callTheBall = function () {
    for (let i = 1; i < 6; i ++) {
        setTimeout(() => {
            $('.play-zone')
                .append($("<div></div>")
                .addClass("ball")
                .attr('id', `ball-${i}`)
                .append(`${i}`)
                .css('visibility', 'visible')
                .css('left', `${Math.floor(Math.random() * 90)}%`)
                .css('bottom', `${Math.floor(Math.random() * 24)}rem`)
                .addClass('animate__animated animate__backInUp')
            );
            
            $(`#ball-${i}`).on('click', (event) => {
                $(this).data('clicked', true);
                count ++
                $('#counter').text(`${count}`);
                $(event.currentTarget).css('backgroundColor', 'green').addClass('animate__animated animate__hinge');
                setTimeout(() => {
                    $(event.currentTarget).remove();
                }, 2000)
            })

            setTimeout(() => {
                $(`#ball-${i}`).remove();
            }, levelTime)
        }, (i * 1000));
    }
}

$(document).ready(() => {

    //Statistics
    $('#counter').text(`${count}`);
    $('#level').text(`${level}`);
    $('#round').text(`${round}`);

    stopToInfo(welcomeText);

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
        if (round ==0) {
            callTheBall()
            stopToInfo(score);
        } else {
            callTheBall()
        }
        round --;
        $('#round').text(`${round}`);
    })

})