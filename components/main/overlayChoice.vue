<template>
	<div class="overlay-choices" ref="el">
		<div class="background">
			<!-- <img src="/" alt=" "/> -->
		</div>
		<div class="overlay">
			<div class="photography hover-card">
				<nuxt-link class="con" to="#" type="photography">
					<h1 :class="active?'hidden':''">PHOTOGRAPHY</h1>
				</nuxt-link>
			</div>
			<div class="webdev hover-card">
				<nuxt-link class="con" to="#" type="webdev">
					<h1 :class="active?'hidden':''">WEB DEVELOPMENT</h1>
				</nuxt-link>
			</div>
			<!-- <three /> -->
		</div>
	</div>
	
</template>

<script lang="ts">
import {defineComponent, nextTick, onBeforeUnmount, onMounted, ref} from '@nuxtjs/composition-api'
// @ts-ignore
import defaultImg from '~/static/media/images/home/default.jpg';
// @ts-ignore
import photoPhotography from '~/static/media/images/home/photography.jpg';
// @ts-ignore
import photoWebdev from '~/static/media/images/home/webdev.jpg';
import '~/static/fonts/ButlerJSON/Regular.json'
import Three from '~/assets/scripts/three'
import { TouchTexture } from '~/assets/scripts/touchTexture'
import { WaterEffect } from '~/assets/scripts/waterEffect'
import { WaveShader } from '~/assets/scripts/waveShader'
let timeout = null;
export default defineComponent({
	setup(props, ctx){
		const three = ref<Three>();
		const active = ref<boolean>(false);
		const el = ref<HTMLElement>()
		onMounted(() => {
			nextTick(() => {
				const hovCons = el.value.querySelectorAll('.con');
				const touchTexture = new TouchTexture({debug: false})
				three.value = <Three> new Three(el.value.querySelector('.background'));
				three.value.addEffect(new WaterEffect(touchTexture.texture))
				three.value.addEffect(new WaveShader(touchTexture.texture).material)
				// this.three.addText(0, 0, "Philippe Clesca", 'fonts/ButlerJSON/Regular.json')
				changeBackground("default");
				Array.from(hovCons).forEach((el: HTMLElement) => {
					el.addEventListener("mouseenter", (e) => {
						el.querySelector("h1").style.color = "var(--mainWhite)";
						el.style.padding = "2.5em";
						ctx.emit("mouseenter", el.getAttribute('type'));
						changeBackground(el.getAttribute('type'));
						active.value = true;
						document.querySelector<HTMLElement>('#home')?.style.setProperty('background', '#FF2E00');
						// document.querySelector<HTMLElement>('#home')?.style.setProperty('--color1', '#FF0045')
						// document.querySelector<HTMLElement>('#home')?.style.setProperty('--color2', '#00FF45')
						// ctx.emit('')
					})
					el.addEventListener("mouseleave", (e) => {
						el.querySelector("h1").style.color = "";
						el.style.padding = "";
						ctx.emit("mouseleave");
						changeBackground("default");
						closeBackground(el);
						active.value = false;
						document.querySelector<HTMLElement>('#home')?.style.setProperty('background', '');
						// document.querySelector<HTMLElement>('#home')?.style.setProperty('--color1', 'gray')
						// document.querySelector<HTMLElement>('#home')?.style.setProperty('--color2', 'gray')
					})
					
				})
			})
			
		})
		const changeBackground = (type) => {
			// const bgimg: HTMLElement = this.$el.querySelector('.overlay-choices .background img');
			if (timeout) {
				clearTimeout(timeout);
			}
			switch (type) {
				case "photography":
					three.value.setBackground(photoPhotography)
					// bgimg.setAttribute("src", photoPhotography)
					break
				case "webdev":
					three.value.setBackground(photoWebdev)
					// bgimg.setAttribute("src", photoWebdev)
					break
				default:
					three.value.setBackground(defaultImg)
					// three.value.hideBackground()
					// bgimg.setAttribute("src", photoWebdev)
					break
			}
			
			// this.$el.querySelector('.overlay-choices .background').style.opacity = "1";
		}
		const closeBackground = (el?: HTMLElement) => {
			// const bgimg: HTMLElement = this.$el.querySelector('.overlay-choices .background img');
			// this.$el.querySelector('.overlay-choices .background').style.opacity = "0";
			if (el !== undefined) {
				const td: string = getComputedStyle(el)['transition-duration']
				Number()
				timeout = setTimeout(() => {
					// bgimg.setAttribute("src", "#")
				}, Number(td.match(/\d+\.?(\d+)?/g)[0]) * 1000)
			} else {
				// bgimg.setAttribute("src", "#")
			}
		}
		onBeforeUnmount(() => {
			three.value.dispose()
		})
		
		return {
			three,
			active,
			closeBackground,
			changeBackground,
			el
		}
	},
	methods: {
		
	},
	beforeDestroy(){
		
	}
})
</script>

<style lang="scss">
.overlay-choices{
	.background{
		position: absolute;
		z-index: 0;
		top: 0;
		left: 0;
		height: 100%;
		width: 100%;
		pointer-events: none;
		overflow: hidden;
		// opacity: 0;
		transition: all 0.35s ease-in-out;
		display: flex;
		align-items: center;
		img{
			width: 100%;
			// width: auto;

			height: auto;
		}
	}
	.overlay{
		position: fixed;
		height: 100%;
		width: 100vw;
		display: flex;
		top: 0;
		left: 0;
		z-index: 11;
		
		.hover-card{
			
			flex-grow: 1;
			display: flex;
			align-items: center;
			padding: 6em;
			position: relative;
			z-index: 3;
			
			a{
				text-decoration: none;
			}
			h1{
				font-weight: 400;
				font-family: 'Butler';
				color: var(--lightGrey);
				transition: all 0.2s ease;
				font-size: 14px;
				// letter-spacing: 1px;
				text-decoration: none;
				opacity: 1;
				text-transform: lowercase;

				&.hidden{
					opacity: 0;
				}

			}
			.con{
				display: inline-flex;
				align-items: center;
				// justify-content: center;
				height: 100%;
				cursor: pointer;
				transition: all 0.35s ease-in-out;
				flex-grow: 0;
			}
			&.photography{
				height: 100%;
				flex-flow: row;
				.con{
					justify-content: flex-start;
					&:hover{
						flex-grow: 1;
					}
				}
				
			}
			&.webdev{
				flex-flow: row-reverse;
				.con{
					justify-content: flex-end;
					&:hover{
						flex-grow: 1;
					}
				}
				
			}
		}
	}
}
</style>
