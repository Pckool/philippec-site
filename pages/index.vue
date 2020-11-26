<template>
    <div class="full-size align-items-center barz">
        <div id="home" class="container-fluid h-100">
            <div class="row align-items-center h-100">
                <div class="container-fluid w-75">
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
                        
                    </div>
                </div>

            <overlay-choices />
            <div class="socials-cont">
                <socials color="white"/>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import Vue from 'vue';
import anime from 'animejs'
import pageNav from '@/assets/scripts/pageNav'
import socials from '~/components/Socials.vue';
import overlayChoices from '~/components/main/overlayChoice.vue'
export default Vue.extend({
    components: {socials, overlayChoices},
    
    data(){
        return {
            
        }
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
        },
        
    }
})
</script>

<style lang="scss">
#home{
    background: var(--mainBlack);
    // background: radial-gradient(circle at var(--x) var(--y), $mainGrey 0%, $mainBlack 100%);
    color: var(--mainWhite); 
    .title-card, .sub-title{
        position: relative;
        z-index: 2;
    }
    .title-card{
        top: -310px;
        font-size: 51px;
        text-transform: lowercase;
    }
    .sub-title{
        bottom: -300px;
        font-family: 'Butler';
        font-size: 14px;
        right: -160px;
    }
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
    .socials-cont{
        width: 100%;
        display: flex;
        justify-content: center;
        position: fixed;
        bottom: 0;
        left: 0;
        padding: 2em;
        z-index: 12;
        .socials{
            a{
                color: #4b4b4b;
                &:hover{
                    color: var(--mainWhite)
                }
            }
            
        }
        
    }
    
}
</style>
