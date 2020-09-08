<template>
    <div :id="`heading-${title}`">
        <div class="background" :style="`background: var(${background}); color: var(${color})`">

        </div>
        <div class="txt">
            <h2 class="title-card title-card-l">{{title}}.</h2>
        </div>    
        
    </div>
</template>
<script>
import anime from 'animejs';
export default {
    props: {
        title: {
            type: String,
            default: '<PLACEHOLDER>'
        },
        background: {
            type: String,
            default: '--mainBlack'
        },
        color: {
            type: String,
            default: '--mainWhite'
        }
    },
    mounted(){
        anime({
            targets: document.querySelector('#heading .background'),
            translateX: ['-100%', '0%'],
            opacity: [0.2, 1.0],
            easing: 'easeInOutQuart',
            duration: 800,
            complete(){

            }
        })

    }
}
</script>

<style lang="scss">
[id^="heading-"]{
    position: relative;
    color: var(--mainWhite);
    z-index: 700;
    .background{
        position: absolute;
        background: var(--mainBlack);
        height: 100%;
        width: 78%;
    }
    .txt{
        position: relative;
        z-index: 710;
        padding: 1.5em 1.5em;
        font-family: 'Butler';
        h2{
            margin: 0;
            text-transform: uppercase;
            @media screen and (max-width: 500px){
                font-size: 1.9rem;
            }
        }
    }
    
}
</style>