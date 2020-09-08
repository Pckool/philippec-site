<template>
    <div id="scroll-down" class="scroll-vertical">
        <div>
            <p>S</p>
        </div>
        <div>
            <p>C</p>
        </div>
        <div>
            <p>R</p>
        </div>
        <div>
            <p>O</p>
        </div>
        <div>
            <p>L</p>
        </div>
        <div>
            <p>L</p>
        </div>
        <div>
            <i class="fas fa-long-arrow-alt-down"></i>
        </div>
    </div>
</template>

<script>
import anime from 'animejs';
const $ = require("jquery");

export default {
    data(){
        return {
            scrollAnimation_sideText: undefined
        }
    },
    mounted(){
        this.scrollAnimation_sideText = anime({
            targets: '#scroll-down', 
            filter: ["blur(0px)", "blur(2px)"],
            opacity: [1, 0],
            marginRight: ['2em', '0em'],
            // easing: 'easeOutExpo',
            delay: 50,
            duration: 300,
            autoplay: false
        })
        $(document).on('wheel', this.scroll);
        $(document).on('touchmove', this.scroll);
    },
    methods: {
        
        scroll(e) {
            const docHeight = $(document).outerHeight()

            const scrollTop = $(document).scrollTop()

            const scrollPercent = (scrollTop) / (docHeight)
            
            const overpass = $('#content').outerHeight()
            const percent = scrollTop / overpass
            
            const rounded = Math.round(percent * 100)

            // console.log((rounded/100) * scrollAnimation.duration);
            this.scrollAnimation_sideText.seek((rounded / 100) * this.$data.scrollAnimation_sideText.duration)

            if (e.deltaY < 0) {
                console.log('scrolling up')
            }
            if (e.deltaY > 0) {
                console.log('scrolling down')
            }
        }
    },
    
}
</script>