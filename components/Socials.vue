<template>
    <div class="socials text-center">
        <a href="https://www.linkedin.com/in/philippe-clesca/" target="_blank" class="fab fa-linkedin-in fa-2x pc-link"></a>
        <a href="https://github.com/Pckool" target="_blank" class="fab fa-github fa-2x pc-link"></a>
        <a href="mailto:hello@philippec.me" target="_blank" class="fas fa-envelope fa-2x pc-link"></a>
    </div>
</template>

<script>
import anime from 'animejs';
export default {
    data(){
        return {
            mobile: false,
        }
    },
    mounted(){
            var app = this;
            if(document.body.clientWidth <= 800) this.$data.mobile = true;

            window.addEventListener('resize', e => {
                if(document.body.clientWidth <= 800) this.$data.mobile = true;
                else this.$data.mobile = false;
            })
            

        }
}
</script>

<style lang="scss">
.socials{
    margin: auto;
    display: flex;
    flex-flow: row nowrap;
    width: 100%;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 500px){
        flex-flow: column nowrap;
        
    }
}
.pc-link{
    color: var(--mainBlack);
    transition-duration: 0.2s;
    transition-property: all;
    margin: 0 1em;
    @media screen and (max-width: 500px){
        margin: 0.5em 0.3em;
    }
    &:hover{
        color: var(--mainHighlight);
        text-decoration: none;
    }
}

</style>