<template>
    <div id="heading-sub" >
        <div class="background rellax" data-rellax-speed="20">

        </div>
        <div class="text">
            <h2 class="title-card title-card-l rellax" data-rellax-speed="2">{{title}}</h2>
        </div>
    </div>
</template>
<script>
import Rellax from 'rellax';
export default {
    props: {
        title: {
            type: String,
            default: ''
        }
    },
    mounted(){
        var rellax = new Rellax('.rellax');
    }
}
</script>

<style lang="scss">
#heading-sub{
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    height: 60vh;
    .background{
        background: var(--mainBlack);
        height: 100%;
        width: 100%;
        position: absolute;
    }   
    .text{
        padding-left: 1rem; 
        padding-right: 1rem; 
        color: var(--mainWhite);
        z-index: 400;
    }
}
</style>