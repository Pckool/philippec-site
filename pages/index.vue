<template>
    <div class="full-size align-items-center barz">
        <div id="home" class="container-fluid h-100">
            <div class="row align-items-center h-100">
                <div class="container-fluid w-75">
                    <div class="row">
                        <div class="col-12">
                            <h1 class="title-card">
                                <div class="name-sect">
                                    <span>P</span>
                                    <span>H</span>
                                    <span>I</span>
                                    <span>L</span>
                                    <span>I</span>
                                    <span>P</span>
                                    <span>P</span>
                                    <span>E</span>
                                </div>
                                
                                <span class="break">|</span>
                                <div class="name-sect">
                                    <span>C</span>
                                    <span>L</span>
                                    <span>E</span>
                                    <span>S</span>
                                    <span>C</span>
                                    <span>A</span>
                                </div>
                            </h1>
                            <small class="sub-title">how may I help you?</small>
                        </div>
                        <div class="col text-center">
                            <nuxt-link to="about-me" class=" go-down btn modern-link fill m-x-auto">
                                CONTINUE
                            </nuxt-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="oi">
            <div class="oi-right">
                <img id="philippe-pic" src="/media/me_transparent_flip.png" alt="Picture of Philippe" class="side-image">
            </div>
        </div>
    </div>
</template>
<script>
import anime from 'animejs'
import pageNav from '@/assets/js/pageNav'

export default {
    return(){

    },
    mounted(){
        anime({
            targets: '#philippe-pic',
            duration: 1500,
            easing: 'easeOutQuart',
            opacity: [0, 1],
            delay: 1500,
            paddingLeft: ['100%', '0%'],
            filter: ["blur(15px)", "blur(0px)"]
            // complete: showPerc
        });
        anime({
            targets: '.title-card span',
            duration: 500,
            opacity: [0, 1],
            right: [70, 0],

            delay: anime.stagger(50, {start: 1000}),
            
            easing: 'easeOutElastic(1, 0.8)'
        })
        pageNav.cont1Anim()
        pageNav.titlesAnim()
    },
    methods: {
        goTo(pageName){
            this.$router.push({name: pageName});
        }
    }
}
</script>

<style lang="scss">
#home{
    background: var(--mainBlack);
    // background: radial-gradient(circle at var(--x) var(--y), $mainGrey 0%, $mainBlack 100%);
    color: var(--mainWhite); 
    .row{
        pointer-events: none;
    }
    .modern-link{
        pointer-events: all;
    }
    
        .name-sect{
            display: inline-block;
        }
        span{
            position: relative;
            letter-spacing: 0px;
        }
        .break{
            color: var(--mainHighlight);
        }
    
}
</style>