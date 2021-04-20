<template>
	<div class="full-size align-items-center barz">
		<div id="home" class="">
			<div class="title-card">
				<h1 class="name">
					<span class="first">PHILIPPE</span> <span class="last">CLESCA</span>
				</h1>
				<div class="subtitle">
					<p>
						Under Construction...
					</p>
				</div>
			</div>
			<div class="socials-cont">
				<socials color="white" />
			</div>
		</div>
	</div>
</template>
<script lang="ts">
import {defineComponent, nextTick, onMounted, ref} from '@nuxtjs/composition-api'
import anime from 'animejs'
import pageNav from '@/assets/scripts/pageNav'
import socials from '~/components/Socials.vue';
import overlayChoices from '~/components/main/overlayChoice.vue'

export default defineComponent({
	components: {socials, overlayChoices},
	
	setup(){
		const posx = ref<number>()
		const posy = ref<number>()
		const mousePosition = (e) => {
			const posX = e.clientX;
			const posY = e.clientY;
			const maxY = document.body.clientHeight;
			const maxX = document.body.clientWidth;
			const minY = 0;
			const minX = 0;

			posx.value = posX;
			posy.value = posY;
			const titleCard = document.querySelector<HTMLElement>('.title-card')
			if (titleCard){
				titleCard.style.setProperty('--x', `${posX}px`)
				titleCard.style.setProperty('--xi', `-${posX}px`)
			}
		}
		const hideName = () => {
			const titleCard = document.querySelector<HTMLElement>('.title-card')
			const subTitle = document.querySelector<HTMLElement>('.sub-title')
			if (titleCard){
				titleCard.classList.add('hidden')
				subTitle.style.opacity = '0'
			}
		}
		const showName = () => {
			const titleCard = document.querySelector<HTMLElement>('.title-card')
			const subTitle = document.querySelector<HTMLElement>('.sub-title')
			if (titleCard){
				titleCard.classList.remove('hidden')
				subTitle.style.opacity = '0'
			}
		}
		onMounted(() => {
			nextTick(() => {
				anime.timeline({
					delay: 1000,
					// duration: 600,
					easing: 'easeOutQuad',
					begin: () => {
						console.log('lmao')
					}
				}).add({
					targets: '.title-card .first',
					translateY: ['100%', '0%'],
					
				}, 0).add({
					targets: '.title-card .last',
					translateY: ['100%', '0%'],
					
				}, 200).add({
					targets: '.title-card .subtitle p',
					translateY: ['200%', '0%'],
					
				}, 600)
			})
			
			// window.onmousemove = mousePosition;
			pageNav.cont1Anim()
			pageNav.titlesAnim()
		})
		onMounted(() => {
			nextTick(() => {
				const color = document.body.style.getPropertyValue('--mainBlack')
				console.log('lol', color)
				document.querySelector<HTMLElement>('#main-cont').style.background = `var(--mainBlack)${color}`
			})
		})
		return {
			mousePosition,
			posy,
			posx,
			hideName,
			showName
		}
	},
})
</script>

<style lang="scss">
#home{
	// background: var(--mainBlack);
	// background: radial-gradient(circle at var(--x) var(--y), $mainGrey 0%, $mainBlack 100%);
	// background: linear-gradient(45deg, var(--color1), var(--color2));
	height: 100%;
	width: 100%;
	transition: all 1s cubic-bezier(0.55, 0.04, 0, 0.99);
	color: var(--mainWhite);
	.title-card{
		position: fixed;
		top: 0px;
		letter-spacing: 5px;
		overflow: hidden;
		display: flex;
		flex-flow: column;
		justify-content: center;
		align-items: center;
		white-space: nowrap;
		height: 100%;
		width: 100%;
		padding: 0;
		.name{
			text-transform: uppercase;
			font-size: 10vw;
			text-align: justify;
			overflow: hidden;
			position: relative;
			.first, .last {
				display: inline-block;
			}
			margin-bottom: 2rem;
		}
		.subtitle{
			width: 100%;
			margin-right: 4rem;
			display: flex;
			text-align: right;
			justify-content: flex-end;
			font-size: 12px;
			overflow: hidden;
			p{
				margin: 0;
			}
		}
		overflow: hidden;

		.name-sect{
			display: inline-block;
			font-size: 400px;
			white-space: nowrap;
			overflow:visible;
			transition: all 1s cubic-bezier(0.55, 0.04, 0, 0.99);
			color: #1f1f1f;
		}
		&.hidden{
			.name-sect{
				color: white;
				&:nth-child(2n){
					// animation: switchSlide 1s cubic-bezier(0.55, 0.04, 0, 0.99);  
					transform: translateX(-100%);
				}
				&:nth-child(2n-1){
					transform: translateX(100%);
				}
			}
		}
	}
	@keyframes switchSlide {
		0%{
			
		}
		89%{
			transform: translateX(-100%);
		}
		99%{
			
		}

	}
	@keyframes switchSlide_inv {
		
	}
	.sub-title{
		position: absolute;
		bottom: calc(50% - 20%);
		z-index: 3;
		// font-family: 'Butler';
		font-family: 'scillaregular';
		font-size: 14px;
		right: 50%;
		transform: translateX(50%);

	}
	.row{
		pointer-events: none;
	}
	.modern-link{
		pointer-events: all;
	}
	
	.break{
		color: var(--mainHighlight);
	}
	.socials-cont{
		width: 100%;
		display: flex;
		justify-content: center;
		position: fixed;
		bottom: 0;
		left: 0;
		padding: 2em;
		z-index: 12;
		.socials{
			a{
				color: var(--lightGrey);
				&:hover{
					color: var(--mainWhite)
				}
			}
			
		}
		
	}
	
}
</style>
