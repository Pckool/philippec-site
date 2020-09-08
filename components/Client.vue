<template>
    <div class="project-card" @click="goTo">
        <div class="project-img">
            <img :src="img" :alt="`${name} Image`">
        </div>
        <div class="info-card">
            <h4>{{ tag }}</h4>
            <small>{{ type }}: {{ name }}</small>
        </div>
    </div>
</template> 

<script>
    export default {
        data(){
            return {
                
            }
        },
        props: {
            img: {
                default: '/media/projects/topos/topos-asset.jpeg',
                type: String
            },
            tag: {
                default: 'Tea With Purpose',
                type: String
            },
            name: {
                default: 'Topos Teas',
                type: String
            },
            type: {
                default: 'Client',
                type: String
            },
            link: {
                type: String,
                default: 'https://google.com'
            }
        },
        methods: {
            goTo(){
                window.open(this.$props.link)
            }
        }
    }
</script>

<style lang="scss">
.project-card{
    position: relative;
    margin: auto;
    width: 40%;
    height: 30em;
    margin-bottom: 10em;
    @media screen and (max-width: 1000px){
        width: 100%;
    }
    color: var(--mainWhite);
    cursor: pointer;
    
    .project-img{
        overflow: hidden;
        height: 100%;
        
        img{
            display: block;
            position: relative;
            left: 50%;
            top: 50%;
            width: 100%;
            transform: translate(-50%, -50%) scale(1.2);
            transition: all 0.2s var(--easeing);
            filter: grayscale(0.5);
            
        }
    }
    &:hover > .project-img img{
        filter: grayscale(0);
        transform: translate(-50%, -50%) scale(1);
    }
    .info-card:before{
        content: "";
        position: absolute;
        height: 1px;
        width: 40px;
        background-color: var(--mainHighlight); 
        transition: all 0.3s var(--easeing); 
    }
    &:hover > .info-card:before{
        width: 120px;
    }
    .info-card{
        position: absolute;
        margin: auto;
        display: flex;
        height: 35%;
        width: 60%;
        // background: radial-gradient(circle at var(--x) var(--y), $mainGrey 0%, $mainBlack 100%);
        background: var(--mainBlack);
        top: 100%;
        left: 50%;
        transform: translate(-50%, -50%);
        padding: 1em;
        flex-direction: column;
        justify-content: space-between;
        h4{
            pointer-events: none;
            margin-top: 0.5em; 
        }
        small{
            pointer-events: none;
        }
    }
}
</style>