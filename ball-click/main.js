$(document).ready(() => {

    let count = 0;
    let level = 1;
    let round = 3;
    let playing = false;

    //Statistics
    $('#counter').text(`${count}`);
    $('#level').text(`${level}`);
    $('#round').text(`${round}`);

    //start btn function
        $('#start-btn').on('click', () => { 
            
            playing = true;
            
            if (round > 0 ) {

                round --;
                $('#round').text(`${round}`);

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
                        }, 4000 - (level * 1000))
                    }, (i * 1000));
                }
            } else {
                playing = false;
                level ++
                $('#level').text(`${level}`);
                round = 3;
            }
            
        });
})