<template>
    <div class="points">
        <span>Всего очков</span>
        <span class="points__sum">{{TOTAL}}</span>
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
    &__sum{
        width: 60px;
        height: 60px;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 3px solid green;
        border-radius: 50%;
    }
 }
</style>