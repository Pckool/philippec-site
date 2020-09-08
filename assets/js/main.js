import anime from 'animejs'

const navBColor = "#0C0C0C"


class Main {
    navOpen(){
        anime({
            targets: '#full-menu',
            backgroundColor: navBColor,
            opacity: ['0', '1'],
            easing: 'easeOutQuint',
            top: `0px`,
            begin(anim){
                const fullMenu = document.querySelector('#full-menu')
                fullMenu.classList.remove('hidden-item')
            }
        })

        anime({
            targets: "#nav-bar",
            // bottom: `-${navBarHeight}px`,
            opacity: ['0', '1'],
            delay: 700,
            easing: 'easeInOutQuad'
        })
    }

    navClose(){
        const viewHeight = document.body.offsetHeight
        anime({
            targets: '#full-menu',
            opacity: [1, 0],
            easing: 'easeInQuint',
            top: `-${viewHeight}px`,
            delay: 700,
            complete(anim){
                const fullMenu = document.querySelector('#full-menu')
                fullMenu.classList.add('hidden-item')
            }
        })
        
        anime({
            targets: "#nav-bar",
            // bottom: `-${navBarHeight}px`,
            opacity: ['1', '0'],
            easing: 'easeInOutQuad'
        })
    }
}

export default new Main()
