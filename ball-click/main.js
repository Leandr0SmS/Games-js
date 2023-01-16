$(document).ready(() => {

    let count = 0;
    let level = 1;
    let round = 3;
    let playing = false;

    //Statistics
    $('#counter').text(`${count}`);
    $('#level').text(`${level}`);
    $('#round').text(`${round}`);

    if (round > 0 ) {

        $('#start-btn')
            .css('cursor', 'pointer')
            .prop('disabled', false);

        //start btn function
        $('#start-btn').on('click', () => { 

            playing = true;

            for (let i = 1; i < 6; i ++) {
                $('#start-btn')
                .css('cursor', 'not-allowed')
                .prop('disabled', true);
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
                    }, 4000 - (level * 1000))
                }, (i * 1000));
            }

            round --;
            $('#round').text(`${round}`);


            if (round > 0 ) {

                $('#start-btn')
                .css('cursor', 'pointer')
                .prop('disabled', false);

            } else {
                $('.scoreboard').css('visibility', 'visible');
            
                playing = false;
            
                level ++
                $('#level').text(`${level}`);
            
            
                round = 3;
                $('#round').text(`${round}`);
            }
            
        });

    } else {
        $('.scoreboard').css('visibility', 'visible');

        $('#start-btn')
        .css('cursor', 'not-allowed')
        .prop('disabled', true);
            
        playing = false;
    
        level ++
        $('#level').text(`${level}`);
    
    
        round = 3;
        $('#round').text(`${round}`);
    }
    
})