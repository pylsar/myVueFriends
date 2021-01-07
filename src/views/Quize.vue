<template>
    <div class="quize">
        Quize
        <router-link :to="`/single-quize/1`"><span @click="startNewGame()">start</span></router-link>
    </div>
</template> 
<script>
export default {
    name: 'Quize',
    methods:{
        startNewGame(){
            this.$store.state.total = 0;
        }
    }
}
</script> 