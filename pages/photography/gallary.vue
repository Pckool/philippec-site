<template>
    <div id="photo-gallary">
        <horizontal-grid />
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import horizontalGrid from '~/components/photography/horizontalGrid.vue'
export default Vue.extend({
    components: {horizontalGrid},

})
</script>

<style lang="scss">
#photo-gallary{

}
</style>
