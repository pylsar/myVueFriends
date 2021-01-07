<template>
    <div class="points">
        <span class="points__sum">{{TOTAL}}</span>
        <span class="points__text">Ваши Баллы</span>
    </div>
</template>
<script>
import {mapGetters} from 'vuex';
export default {
    name: 'ThePoints',
    computed:{
        ...mapGetters([
            'TOTAL'
        ]),
        
    }
}
</script>  
<style lang="scss">
 .points{
    position: absolute;
    left: 5%;
    top: 5%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 1;
    &__sum{
        width: 60px;
        height: 60px;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 3px solid skyblue;
        border-radius: 50%;
        color: white;
    }
    &__text{
        display: block;
        white-space: nowrap;
        font-size: 24px;
        color: white;
        margin-top: 12px;
    }
 }
</style>