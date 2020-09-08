<template>
    <div class="p-bar-cont">
        <div class="p-bar-fill">

        </div>
    </div>
</template>

<script>
import anime from 'animejs';
export default {
    props: {
        max: {
            type: Number,
            default: 100,
        },
        value: {
            type: Number,
            default: 50
        },
        color: {
            type: String,
            default: 'var(--mainWhite)'
        }
    },
    computed: {
        percentage(){
            return (this.$props.value/this.$props.max)*100;
        }
    },
    mounted(){
        let app = this;
        anime({
            targets: app.$el.querySelector('.p-bar-fill'),
            easing: 'easeInOutQuad',
            width: ['0%', `${app.percentage}%`]
        })
    }
}
</script>

<style lang="scss">
.p-bar-cont{
    position: relative;
    border-left: 1.5px solid var(--mainBlack);
    border-right: 1.5px solid var(--mainBlack);
    min-height: 20px;
    &::before{
        content: "";
        position: absolute;
        height: 1.5px;
        width: 100%;
        top: 50%;
        transform: translateY(-50%);
        left: 0;
        background: var(--mainBlack);
    }
    .p-bar-fill{
        position: absolute;
        left: 0;
        top: 0;
        height: 100%;
        background: var(--mainBlack);
    }
}  
</style>