<template>
    <div id="notify" @click="dismiss">
        <div class="background"></div>
        <div class="message">
            <p class="text">{{msg}}</p>
        </div>
    </div>
</template>

<script>
import anime from 'animejs';
export default {
    data(){
        return {

        }
    },
    props: {
        msg: {
            type: String,
            default: 'Nothing to see here.'
        }
    },
    methods: {
        dismiss(){
            this.close().then(() => {
                // this.$el.style.display='none';
                this.$emit('closed');
            });
        },
        close(){
            
            return new Promise((resolve, reject) => {
                anime({
                    targets: '#notify .background',
                    easing: 'easeInOutQuad',
                    translateY: ['0%', '-100%'],
                    duration: 600,
                    complete(){
                        resolve();
                    }
                })
                anime({
                    targets: '#notify .message',
                    easing: 'easeInOutQuad',
                    startDelay: 200,
                    opacity: [1, 0],
                    translateY: ['0%', '-100%'],
                    duration: 300,
                    complete(){
                        // resolve();
                    }
                })
            })
            
        },
        open(){
            var app = this;
            return new Promise((resolve, reject) => {
                anime({
                    targets: '#notify .background',
                    easing: 'easeInOutQuad',
                    opacity: [0, 1],
                    duration: 600,
                    begin(){
                        app.$el.style.display='';
                    },
                    complete(){
                        resolve();
                    }
                })
                anime({
                    targets: '#notify .message',
                    easing: 'easeInOutQuad',
                    startDelay: 200,
                    opacity: [0, 1],
                    translateY: ['-100%', '0%'],
                    duration: 300,
                    complete(){
                        // resolve();
                    }
                })
            })
            
        }
    },
    watch: {
        msg(){
            this.open().then(() => {
                this.$emit('opened');
            });
        }
    },
    mounted(){
        // this.$el.style.display = 'none';
        this.open().then(() => {
            this.$emit('opened');
        });
        setTimeout(this.dismiss, 4000);
    }
}
</script>

<style lang="scss">
#notify{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    height: 100%;
    width: 100%;
    z-index: 960;

    display: flex;
    justify-content: center;
    align-items: center;

    .background{
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        background: var(--mainBlack);
        z-index: inherit;
    }
    .message{
        position: relative;
        color: var(--mainWhite);
        z-index: inherit;
        
    }

}
</style>