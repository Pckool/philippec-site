<template>
	<div class="">
		<heading :title="'Skills'"/>
		<div class="container-fluid">
			<div id="skills" class="row align-items-start w-75 min-vh-75 m-auto">
				<div class="col-12">
					<div class="content-1">
						<div class="container-fluid skills-cont">
							<div class="row">
								<div class="col-12">
									<h3 class="">languages & tech</h3>
								</div>
							</div>
							<div  v-for="skill in skills_webdev" :key="skill.title" class="row skill">
								<div class="col-sm">
									<b class="tag" data-level="10">{{ skill.title }}</b>
									<progress-bar :max="100" :value="skill.prof" />
								</div>                                
							</div>
						</div>
					</div>
					<div class="content-2">
						<div class="container-fluid skills-cont">
							<div class="row">
								<div class="col-12">
									<h3 class="">
										web building platforms
									</h3>
								</div>
							</div>
							<div v-for="skill in web_platforms" :key="skill.title" class="row skill">
								<div class="col-sm">
									<b class="tag" data-level="10">{{ skill.title }}</b>
									<progress-bar :max="100" :value="skill.prof" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import anime from 'animejs'
import pageNav from '@/assets/scripts/pageNav'

import Scroll from '@/components/Scroll.vue'
import Heading from '@/components/Heading.vue'
import ProgressBar from '@/components/StatusBar.vue'

export default {
	components: {Scroll, Heading, ProgressBar},
	data(){
		return {
			skills_webdev: [
				{
					title: 'HTML',
					prof: 100
				},
				{
					title: 'CSS',
					prof: 90
				},
				{
					title: 'JavaScript',
					prof: 90
				},
				{
					title: 'Node.JS',
					prof: 90
				},
			],
			web_platforms: [
				{
					title: 'WordPress',
					prof: 90
				},
				{
					title: 'Wix',
					prof: 80
				},
				{
					title: 'Weebly',
					prof: 40
				},
				{
					title: 'Squarespace',
					prof: 80
				},
				{
					title: 'Webflow',
					prof: 70
				}
			]
		}
	},
	
	mounted(){
		pageNav.cont1Anim()
		pageNav.titlesAnim()
	}
}
</script>

<style lang="scss">
#skills{
	padding-top: 3em;
	padding-bottom: 3em;
	[class^="content-"]{
		margin-top: 2em;
		margin-bottom: 2em;
		h3{
			position: relative;
			&::before{
				content: "";
				height: 1px;
				width: 0%;
				background: var(--mainBlack);

				position: absolute;
				top: 50%;
				left: 0;
				transform: translateY(-50%);

				transition: all 0.3s var(--easeing);
			}
			&:hover{
				&::before{
					width: 10%;
				}
			}
		}
	}
}
</style>
