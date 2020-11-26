<template>
<!-- <div v-if="mobile" id="mobile-nav">
    <span id="nav-open-btn" @click="navOpen">
        <i id="nav-open-front" class="fas fa-bars" />

        <i id="nav-open-back" class="fas fa-bars" />
    </span>

    <div id="full-menu" class="full-menu hidden-item container-fluid">
        <i id="nav-close" class="fas fa-times" @click="navClose" />

        <div class="row nav-background align-items-center">
            <div class="col-sm">
                <h1 id="nav-title" @click="goTo('home')">
					PHILIPPE CLESCA
				</h1>
            </div>
        </div>

        <nav id="nav-bar" class="menu-bar container-fluid fixed-bottom">
            <div class="row menu-row1 justify-content-around">
                
                <div class="col-auto menu-item">
                    <nuxt-link id="nav-about-me" :to="{name:'about-me'}" class="menu-link" >
						about
					</nuxt-link>
                </div>
            </div>
        </nav>
    </div>
</div> -->

<div id="desktop-nav">
    <div class="background"></div>
    <nav id="nav-bar" class="menu-bar">
        <div class="row menu-row1 justify-content-around">
            <div class="col-auto menu-item">
                <nuxt-link id="nav-about-me" :to="{name:'about-me'}" class="menu-link" >
					about
				</nuxt-link>
            </div>
        </div>

    </nav>
</div>
    
</template>

<script>
import anime from 'animejs';
import main from '@/assets/scripts/main';
    
export default {
	data(){
		return {
			mobile: false,
			navBColor: "#0C0C0C",
			navBarHeight: undefined,
			viewHeight: undefined
		}
	},
	mounted(){
		if (document.body.clientWidth <= 800) { this.mobile = true }

		window.addEventListener('resize', e => {
            if (document.body.clientWidth <= 800) { 
                this.mobile = true 
            } else { this.mobile = false }
		})

		// anime({
		//     targets: app.$el.querySelector('.background'),
		//     translateX: ['100%', '0%'],
		//     opacity: [0.5, 1.0],
		//     easing: 'easeInOutQuart',
		//     duration: 800,
		//     complete(){
		//         app.$el.querySelector('.background').style.cssText = '';
		//     }
		// })

		this.viewHeight = document.body.offsetHeight;
		this.navBarHeight = document.querySelector('.menu-row1').offsetHeight;            

		this.$router.afterEach(() => {
			this.navClose()
		})
	},
	methods: {
		goTo(pageName){
			this.$router.push({name: pageName});
		},
		announce(){
			console.log('YUP!')
		},
		navOpen(){
			if (!this.$data.mobile) { return }

			anime({
				targets: '#full-menu',
				backgroundColor: this.$data.navBColor,
				opacity: ['0', '1'],
				easing: 'easeOutQuint',
				top: `0px`,
				begin: (anim) => {
					document.querySelector('#full-menu').classList.remove('hidden-item')
				}
			});
			anime({
				targets: "#nav-bar",
				// bottom: `-${navBarHeight}px`,
				opacity: ['0', '1'],
				delay: 700,
				easing: 'easeInOutQuad'
			});
		},
		navClose(){
			if (!this.mobile){ return }
			anime({
				targets: '#full-menu',
				opacity: [1, 0],
				easing: 'easeInQuint',
				top: `-${this.viewHeight}px`,
				delay: 700,
				complete: (anim) => {
					document.querySelector('#full-menu').classList.add('hidden-item');
				}
			});
			anime({
				targets: "#nav-bar",
				// bottom: `-${navBarHeight}px`,
				opacity: ['1', '0'],
				easing: 'easeInOutQuad'
			})
		}
	},
	
}
</script>

<style lang="scss">

#mobile-nav{
    position: fixed;
    z-index: 940;
    #nav-open-btn{
        #nav-open-front{
            mix-blend-mode: difference;
            z-index: 20;
            cursor: pointer;
            position: fixed;
            right: 1em;
            top: 1em;
            transition-duration: 0.3s;
            transition-property: all;
            color: var(--mainGrey);
            font-size: 1.5em;
        }
        #nav-open-front:hover{
            color: var(--mainWhite);
            & + #nav-open-back{
                padding-right: 0.5em;
            }
        }
        #nav-open-back{
            z-index: 19;
            position: fixed;
            right: 1em;
            top: 1em;
            transition-duration: 0.3s;
            transition-property: all;
            transition-timing-function: ease-in;
            color: var(--mainGrey);
            font-size: 1.5em;
            pointer-events: none;
        }
    }
    
    .full-menu{
        position: fixed;
        z-index: 900;
        width: 100vw;
        height: 100vh;
        top: -100vh;
        background-color: var(--mainBlack);
        color: white;
    }
    .menu-bar{
        background-color: #111111;
        z-index: 25;
        opacity: 0;
    }
    .menu-row1{
        padding: 1em 0;
    }
    .menu-link{
    color: #808080;
    height: 100%;
    width: 100%;
    font-weight: 400;
    transition: 0.3s all;
    text-align: center;
    text-transform: uppercase;
    cursor: pointer;
    font-family: 'Butler';
    // font-family: 'Nunito';
    font-weight: 400;
        &:hover {
            color: var(--mainHighlight);
            text-decoration: none;
        }
    }
    .menu-item{
        text-align: center;
        margin: 1em 0;
    }
    .side-nav{
        position: fixed;
        max-height: 100vh;
        height: 100vh;
        top: 0;
        right: 0;
        display: flex;
        flex-flow: column wrap;
        justify-content: space-between;
        background: var(--mainBlack);
        border-left: 1px solid var(--mainGrey);
        z-index: 500;
        .menu-item-v{
            padding: 0.7em 1.5em;
        }
        
        .name-icon{
            height: 5rem;
            width: 100%;
            background: black;
        }
    }

    .list-v{
        display: flex;
        flex-direction: column;
    }
}
    
#desktop-nav{
    position: fixed;
    top: 0;
    right: 0;
    z-index: 940;
    .router-link-exact-active{
        text-decoration: line-through;
    }
    
    .background{
        position: absolute;
        transition: 0.3s all cubic-bezier(1, 0.06, 0.44, 0.99);
        height: 100%;
        width: 100%;
        background: var(--darkGrey);
        transform: translateX(100%);
    }
    #nav-bar{
        color: white;
        position: relative;
        z-index: 950;
        padding: 1.5em 2em;
        .menu-link{
            font-family: 'Butler';
            transition: 0.3s all cubic-bezier(1, 0.06, 0.44, 0.99);
            color: var(--lightGrey);
            padding: 0 1em;
            position: relative;
            
            // mix-blend-mode: difference;
            &::after{
                content: "";
                height: 1.5px;
                transition: 0.3s all cubic-bezier(1, 0.06, 0.44, 0.99);
                background: var(--lightGrey);
                width: 100%;
                position: absolute;
                top: 50%;
                left: 0;
                transform: scale(0);
            }
            &:hover{
                text-decoration: none;
                &::after{
                    transform: scale(1);
                }
            }
        }
    }
    &:hover{
        .background{
            transform: translateX(0%);
        }
        #nav-bar{
            .menu-link{
                color: var(--mainWhite);
            }
        }
    }
}
</style>
