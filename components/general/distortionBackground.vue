<template>
    <div>
        <vgl-renderer>
            <vgl-scene>
                <vgl-mesh>
                    
                </vgl-mesh>
            </vgl-scene>
            <vgl-perspective-camera orbit-position="5 1 1" />
        </vgl-renderer>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import {VglRenderer, VglScene, VglPerspectiveCamera, VglMesh} from 'vue-gl'
export default Vue.extend({
    components: {VglRenderer, VglScene, VglPerspectiveCamera, VglMesh},
    
})
</script>

<style lang="scss">

</style>
