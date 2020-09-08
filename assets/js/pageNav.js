import anime from 'animejs'

class PageNav{
    titlesAnim(){     
        anime({
            targets: '.title-card',
            duration: 400,
            easing: 'easeOutQuart',
            opacity: [0, 1],
            delay: 1000,
            paddingRight: '0px'
        })
    }

    cont1Anim(){
        anime({
            targets: '.content-1',
            duration: 400,
            easing: 'easeOutQuart',
            opacity: [0, 1],
            delay: 1500,
            paddingLeft: '0px'
        })
    }
}
export default new PageNav()
