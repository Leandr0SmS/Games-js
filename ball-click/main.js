$(document).ready(() => {

    let count = 0;
    $('#counter').text(`${count}`);

    let round = 3;
    $('#round').text(`${round}`);

    $('.ball').on('click', (event) => {
        $(event.currentTarget).css('backgroundColor', 'green').addClass('animate__animated animate__hinge');
        setTimeout(() => {
            $(event.currentTarget)
                .css('visibility', 'hidden')
                .css('top', '0')
                .css('left', '0')
                .css('backgroundColor', 'brown')
                .removeClass('animate__animated animate__hinge animate__backInUp');
        }, 3000)
        count ++;
        $('#counter').text(`${count}`);
    })

    $('#start-btn').on('click', () => { 
        round --;
        $('#round').text(`${round}`);

        setTimeout(() => {
            $('#ball-1')
                .css('visibility', 'visible')
                .css('left', `calc(${Math.floor(Math.random() * 94)}%)`)
                .css('top', `calc(${Math.floor(Math.random() * 60)}% + 15rem) `)
                .addClass('animate__animated animate__backInUp');
            setTimeout(() => {
                $('#ball-1')
                .css('visibility', 'hidden')
                .css('top', '0')
                .css('left', '0')
                .css('backgroundColor', 'brown')
                .removeClass('animate__animated animate__hinge animate__backInUp');
            }, 2000)
        }, 1000);
        
        setTimeout(() => {
            $('#ball-2')
                .css('visibility', 'visible')
                .css('left', `calc(${Math.floor(Math.random() * 94)}%)`)
                .css('top', `calc(${Math.floor(Math.random() * 60)}%  + 15rem)`)
                .addClass('animate__animated animate__backInUp');
            setTimeout(() => {
                $('#ball-2')
                .css('visibility', 'hidden')
                .css('top', '0')
                .css('left', '0')
                .css('backgroundColor', 'brown')
                .removeClass('animate__animated animate__hinge animate__backInUp');
            }, 2000)
        }, 2000);

        setTimeout(() => {
            $('#ball-3')
                .css('visibility', 'visible')
                .css('left', `calc(${Math.floor(Math.random() * 94)}%)`)
                .css('top', `calc(${Math.floor(Math.random() * 60)}%  + 15rem)`)
                .addClass('animate__animated animate__backInUp');
            setTimeout(() => {
                $('#ball-3')
                .css('visibility', 'hidden')
                .css('top', '0')
                .css('left', '0')
                .css('backgroundColor', 'brown')
                .removeClass('animate__animated animate__hinge animate__backInUp');
            }, 2000)
        }, 3000);

        setTimeout(() => {
            $('#ball-4')
                .css('visibility', 'visible')
                .css('left', `calc(${Math.floor(Math.random() * 94)}%)`)
                .css('top', `calc(${Math.floor(Math.random() * 60)}%  + 15rem)`)
                .addClass('animate__animated animate__backInUp');
            setTimeout(() => {
                $('#ball-4')
                .css('visibility', 'hidden')
                .css('top', '0')
                .css('left', '0')
                .css('backgroundColor', 'brown')
                .removeClass('animate__animated animate__hinge animate__backInUp');
            }, 2000)
        }, 4000);
    })
})