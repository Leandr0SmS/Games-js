export const functions = {
    okBtn () {
        $('#start-btn')
            .prop("disabled", false)
            .css('cursor', 'pointer');
        $('.infoBoard').css('visibility', 'hidden');
    },
    
    stopToInfo (info) {
        $('#start-btn')
            .prop("disabled", true)
            .css('cursor', 'not-allowed')
        $('.infoBoard').css('visibility', 'visible');
        $('.infoBoard-div').append(info);
        $('#ok-btn').on('click', () => {
            this.okBtn();
        });
    },
    
    callTheBall (levelTime, count) {
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
}
