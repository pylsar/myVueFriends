<template>
    <div class="quize">
        <div class="quize__box">
            <span class="quize__title">FRIENDS</span>
            <span class="quize__subtitle">Quiz Game</span>
            <span class="quize__from">Made By</span>
            <span class="quize__author">Alexey Kusov</span>
        </div>
        <router-link class="quize__start" :to="`/single-quize/1`"><span @click="startNewGame()">start</span></router-link>
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
<style lang="scss">
.quize{
    width: 100%;
    height: 100vh;
    background: linear-gradient(to right, #567599, #1f2e4b);
    font-family: 'GABRWFFR', sans-serif;
    &__box{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 48px;
    }
    &__title{
        font-size: 200px;
    }
    &__subtitle{
        font-size: 34px;
    }
    &__from{
        font-size: 20px;
    }
    &__author{
        font-size: 34px;
    }
    &__start{
        display: block;
        width: 320px;
        margin: 50px auto;
        font-size: 100px;
        color: darken( white, 30%);
        text-decoration: none;
        &:hover{
            color: white;
            text-shadow: 1px 1px 30px white;
        }
    }
}

</style>