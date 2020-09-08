<template>
    <div class="align-items-center barz">
        <heading :title="'PROJECTS'" />
        <div id="projects" class="container-fluid content">
            <div class="row align-items-start">
                <div class="col-12 project-card-cont px-0">
                    <client-card 
					v-for="client in clients" 
					:key="client.name" 
                    :name="client.name" 
                    :img="client.img" 
                    :tag="client.tag"
                    :type="client.type"
                    :link="client.link"
					/>
                </div>
            </div>
        </div>

        <scroll />
    </div>
</template>
<script>

import anime from 'animejs'

// components
import pageNav from '@/assets/js/pageNav'
import ClientCard from '@/components/Client.vue'
import Scroll from '@/components/Scroll.vue'
import Heading from '@/components/Heading.vue'

export default {
	name: 'Projects',
	components: {ClientCard, Scroll, Heading},
    data(){
        return {
            clients: [
                {
                    name: 'Topos Teas',
                    tag: 'Tea With Purpose',
                    type: 'Client',
                    img: '/media/projects/topos/topos-asset.jpeg',
                    link: 'https://toposteas.com'
                },
                {
                    name: 'TDefton',
                    tag: 'Web Presense For a Youtuber',
                    type: 'Client',
                    img: '/media/projects/tdefton/Channel_art.png'
                },
                {
                    name: 'Loxly',
                    tag: 'Building Digital Business Solutions',
                    type: 'Project',
                    img: '/media/projects/loxly/logo.png'
                },
                {
                    name: 'CÉLÈBRE',
                    tag: 'Premium Jewlery embracing Womenhood',
                    type: 'Client',
                    img: '/media/images/projects/celebre/DSC_1950-EditSmaller.jpg',
                    link: 'https://youarecelebrated.com'
                },

            ]
        }
    },
	
	mounted(){
        pageNav.cont1Anim()
        pageNav.titlesAnim()
    },
    methods: {
        goTo(pageName){
            this.$router.push({name: pageName});
        }
    },
    
}
</script>

<style lang="scss">
#projects{
    // background-color: var(--mainWhite);
    background: white;
    color: var(--mainBlack);
}
</style>
