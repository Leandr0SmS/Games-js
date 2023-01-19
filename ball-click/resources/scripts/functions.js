
export const functions = {

    starBtnToggle (boolen) {
        boolen 
            ?$('#start-btn')
                .prop("disabled", false)
                .css('cursor', 'pointer')
            :$('#start-btn')
            .prop("disabled", true)
            .css('cursor', 'not-allowed');
    },

    okBtn () {
        this.starBtnToggle(true);
        $('.infoBoard-div').empty();
        $('.infoBoard').css('visibility', 'hidden');
    },
    
    stopToInfo (addInfo) {
        this.starBtnToggle(false);
        $('.infoBoard').css('visibility', 'visible');
        $('.infoBoard-div').append(addInfo);
        $('#ok-btn').on('click', () => {
            this.okBtn();
        });
    },
    
    callTheBall (count, level) {
        for (let i = 1; i < 6; i ++) {
            let numOfBalls = 0;
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
                    count ++;
                    $('#counter').text(`${count}`);
                    $(this).data('clicked', true);
                    $(event.currentTarget).css('backgroundColor', 'green').addClass('animate__animated animate__hinge');
                    setTimeout(() => {
                        $(event.currentTarget).remove();
                    }, 2000)
                })
    
                setTimeout(() => {
                    $(`#ball-${i}`).remove();
                }, (4 - level) * 1000)
            }, (i * 1000));
        }
    }
}
