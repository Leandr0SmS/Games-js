$(document).ready(() => {

    let count = 0;
    let level = 1;
    let levelTime = 2000;
    let round = 3;

    //Statistics
    $('#counter').text(`${count}`);
    $('#level').text(`${level}`);
    $('#round').text(`${round}`);

    //hit the ball logic
    $('.ball').on('click', (event) => {
        $(event.currentTarget).css('backgroundColor', 'green').addClass('animate__animated animate__hinge');
        setTimeout(() => {
            $(event.currentTarget)
                .css('visibility', 'hidden')
                .css('bottom', '0')
                .css('left', '0')
                .css('backgroundColor', 'brown')
                .removeClass('animate__animated animate__hinge animate__backInUp');
        }, 3000)
        count ++;
        $('#counter').text(`${count}`);
    })
    

    //start btn
    $('#start-btn').on('click', () => { 
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
                
                $('.ball').on('click', (event) => {
                    $(event.currentTarget).css('backgroundColor', 'green').addClass('animate__animated animate__hinge');
                    setTimeout(() => {
                        $(event.currentTarget)
                            .css('visibility', 'hidden')
                            .css('bottom', '0')
                            .css('left', '0')
                            .css('backgroundColor', 'brown')
                            .removeClass('animate__animated animate__hinge animate__backInUp');
                    }, 2000)
                    
                    $('#counter').text(`${count}`);
                })

                setTimeout(() => {
                    $(`#ball-${i}`)
                    .css('visibility', 'hidden')
                    .css('bottom', '0')
                    .css('left', '0')
                    .css('backgroundColor', 'brown')
                    .removeClass('animate__animated animate__hinge animate__backInUp');
                }, levelTime)
            }, (i * 1000));
        }
        
    })
})