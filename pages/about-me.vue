<template>
    <div class="align-items-center barz">
        <heading :title="'ABOUT ME'" />
        <div id="about-me" class="container-fluid content">
            <div class="oi">
                <div class="oi-right" data-bkrnd="./src/media/me_transparent_flip.png">
                </div>
            </div>
            <div id="about-me-1" class="row align-items-center justify-content-center w-75 min-vh-75 mx-auto mb-5">
                <div class="col-12">
                    <div class="content-1">
                        <!-- <p class="text">What drives me is my curiosity to figure out why and how things work. Since a young age, I was passionate about DIYing. As I grew up, I discovered my talents, realizing there’s no limitation for what I can create. I went from putting together LEGO cars to assembling computers, programming, websites, and designing graphics, to name a few.</p>
                        <p class="text">My mentality is to strive for strategic solutions to roadblocks. I believe no task is too daunting with my entrepreneurial spirit and repertoire of skills. While I do not know everything, I am willing to work at the best of my ability to quickly learn new concepts. My ultimate goal is to deliver quality work and build genuine relationships with my clients.</p>
                        <p class="text">My motto is producing work we’ll all be proud of.</p>
                        <p class="text">When I’m not working you’ll find me bonding with my Shih Tzu Sultan, producing content for my YouTube Channel, and making music.</p> -->

                        <p class="text">
                            I am a fullstack web developer based in Northern New Jersey.
                        </p>
                        <p class="text">
                            What drives me is curiosity. My goal is to achieve elegant and efficient solutions. My product is work we’ll be proud of. 
                        </p>
                        <h5>Let’s get to work.</h5>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import anime from 'animejs'
import pageNav from '@/assets/js/pageNav'

import Scroll from '@/components/Scroll.vue'
import Heading from '@/components/Heading.vue'
import NavBar from '@/components/NavBar.vue'
import ProgressBar from '@/components/StatusBar.vue'
const $ = require("jquery")

export default {
	name: 'about-me',
	components: {Scroll, Heading, NavBar},
    data(){
        return {
            
        }
    },
    
    mounted(){
        pageNav.cont1Anim();
        pageNav.titlesAnim();

        const skills_animate = anime({
            targets: '.skills-cont .skill', 
            marginRight: ["7em", "0em"],
            opacity: [ 0, 1],
            delay: anime.stagger(400, {start: 3500}),
            easing: 'easeOutExpo',
            duration: 300,
            elasticity: 23,
            autoplay: false
        })

        const scrollAnimation = anime({
            targets: '#content', 
            color: 'rgba(240, 240, 240, 1)',
            background: 'rgba(12, 12, 12, 1)',
            easing: 'easeOutExpo',
            delay: 250,
            duration: 400,
            autoplay: false,
        })

        let onSkills = false;

        $(document).on('wheel', function(e) {
            const docHeight = $(document).outerHeight()

            const scrollTop = $(document).scrollTop()

            const scrollPercent = (scrollTop) / (docHeight)
            
            const overpass = $('#about-me-1').outerHeight()
            const percent = scrollTop / overpass
            
            const rounded = Math.round(percent * 100);

            // console.log((rounded/100) * scrollAnimation.duration);
            scrollAnimation.seek((rounded / 100) * scrollAnimation.duration)
            
            skills_animate.seek(skills_animate.duration * (rounded / 100))

            if (e.deltaY < 0) {
                console.log('scrolling up')
            }
            if (e.deltaY > 0) {
                console.log('scrolling down')  
            }
        })
        $(document).on('touchmove', function(e) {
            const docHeight = $(document).outerHeight()

            const scrollTop = $(document).scrollTop()

            const scrollPercent = (scrollTop) / (docHeight)
            
            const overpass = $('#about-me-1').outerHeight()
            const percent = scrollTop / overpass
            
            const rounded = Math.round(percent * 100)

            // console.log((rounded/100) * scrollAnimation.duration);
            scrollAnimation.seek((rounded / 100) * scrollAnimation.duration)
            
            skills_animate.seek(skills_animate.duration * (rounded / 100))
        })
	},
	methods: {
        goTo(pageName){
            this.$router.push({name: pageName});
        }
    },
}
</script>

<style lang="scss">
#about-me-1{
    min-height: 50vh;
    padding-top: 1em;
    padding-bottom: 1em;
    .text{
        letter-spacing: 1pt;
        
        line-height: 2.4em;
        margin-top: 1em;
        margin-bottom: 1.4em;
        font-weight: 400;

        font-size: 1.25rem;
        @media screen and (max-width: 500px){
            font-size: 1.05rem;
        }
    }
}

.tag{
    font-weight: 400;
    font-size: 1.5rem;
    // margin-right: 1em;
    padding-bottom: 0.7em;
}
.p-bar-cont{
    margin: 0.7em 0;
}
</style>
