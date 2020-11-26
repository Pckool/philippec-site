<template>
    <div class="socials text-center">
        <a rel="noopener noreferrer" href="https://www.linkedin.com/in/philippe-clesca/" target="_blank" class="fab fa-linkedin-in pc-link" />
        <a rel="noopener noreferrer" href="https://github.com/Pckool" target="_blank" class="fab fa-github pc-link" />
        <a href="mailto:hello@philippec.me" target="_blank" class="fas fa-envelope  pc-link" />
        <a rel="noopener noreferrer" href="https://twitter.com/philippec_me" target="_blank" class="fab fa-twitter  pc-link" />
    </div>
</template>

<script>
import anime from 'animejs'
export default {
    props: {
        color: {
            default: "black",
            type: String,
        }
    },
    data(){
        return {
            mobile: false,
        }
    },
    
    mounted(){
            if (document.body.clientWidth <= 800) { 
                this.$data.mobile = true;
            }

            window.addEventListener('resize', e => {
                if (document.body.clientWidth <= 800) { this.$data.mobile = true; }
                else { this.$data.mobile = false; }
            })
        }
}
</script>

<style lang="scss">
.socials{
    margin: auto;
    display: flex;
    flex-flow: row nowrap;
    // width: 100%;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 500px){
        flex-flow: column nowrap;
        
    }
    
}
.pc-link{
    &:hover{
        color: var(--mainWhite);
        text-decoration: none;
    }
    color: var(--mainBlack);
    transition-duration: 0.2s;
    transition-property: all;
    margin: 0 1em;
    @media screen and (max-width: 500px){
        margin: 0.5em 0.3em;
    }
    
}

</style>
