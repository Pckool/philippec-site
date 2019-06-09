function image1(){
    $("#philippe-pic").css('padding-left', '1000px');
    $("#philippe-pic").css('opacity', '0');
    anime({
        targets: '#philippe-pic',
        duration: 1500,
        easing: 'easeOutQuart',
        opacity: 1,
        delay: 1500,
        paddingLeft: '0px',
        opacity: '1',
        complete: oop
    });
}
image1();


$('.skill-level path').css('opacity', 0);

function oop(){
    $('.skill-level').each((i, el) => {
        var r = $(el).data('percent') //  change to a value between (0 - 1)

        // var length = el.getTotalLength();
        console.log(r);
        
        var elm = $(el, 'path').get(1) 
        console.log(elm);
            
        anime({
            targets: elm,
            strokeDashoffset: [anime.setDashoffset, (2634 - (2634 * r))],
            easing: 'easeOutQuart',
            duration: 1500,
            delay: 2,
            begin: function(){
                $('.skill-level path').css('opacity', 1);
            }
            // delay: function(el, i) { return i * 2500 },
        });
        
    });
    
}
