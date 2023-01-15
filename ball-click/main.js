$(document).ready(() => {

    let count = 0;
    let level = 1;
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

        setTimeout(() => {
            $('#ball-1')
                .css('visibility', 'visible')
                .css('left', `${Math.floor(Math.random() * 90)}%`)
                .css('bottom', `${Math.floor(Math.random() * 24)}rem`)
                .addClass('animate__animated animate__backInUp');
            setTimeout(() => {
                $('#ball-1')
                .css('visibility', 'hidden')
                .css('bottom', '0')
                .css('left', '0')
                .css('backgroundColor', 'brown')
                .removeClass('animate__animated animate__hinge animate__backInUp');
            }, 2000)
        }, 1000);
        
        setTimeout(() => {
            $('#ball-2')
                .css('visibility', 'visible')
                .css('left', `${Math.floor(Math.random() * 90)}%`)
                .css('bottom', `${Math.floor(Math.random() * 24)}rem`)
                .addClass('animate__animated animate__backInUp');
            setTimeout(() => {
                $('#ball-2')
                .css('visibility', 'hidden')
                .css('bottom', '0')
                .css('left', '0')
                .css('backgroundColor', 'brown')
                .removeClass('animate__animated animate__hinge animate__backInUp');
            }, 2000)
        }, 2000);

        setTimeout(() => {
            $('#ball-3')
                .css('visibility', 'visible')
                .css('left', `${Math.floor(Math.random() * 90)}%`)
                .css('bottom', `${Math.floor(Math.random() * 24)}rem`)
                .addClass('animate__animated animate__backInUp');
            setTimeout(() => {
                $('#ball-3')
                .css('visibility', 'hidden')
                .css('bottom', '0')
                .css('left', '0')
                .css('backgroundColor', 'brown')
                .removeClass('animate__animated animate__hinge animate__backInUp');
            }, 2000)
        }, 3000);

        setTimeout(() => {
            $('#ball-4')
                .css('visibility', 'visible')
                .css('left', `${Math.floor(Math.random() * 90)}%`)
                .css('bottom', `${Math.floor(Math.random() * 24)}rem`)
                .addClass('animate__animated animate__backInUp');
            setTimeout(() => {
                $('#ball-4')
                .css('visibility', 'hidden')
                .css('bottom', '0')
                .css('left', '0')
                .css('backgroundColor', 'brown')
                .removeClass('animate__animated animate__hinge animate__backInUp');
            }, 2000)
        }, 4000);
    })
})