<template>
    <div class="start-quize">
        
        Start
        <!-- <div v-for="(quiz, index) in QUIZES" :key="index">
            <router-link :to="'/single-quize/' + quiz.id" tag="a">{{quiz.id}}</router-link>
        </div> -->
        <router-link :to="`/single-quize/1`">start</router-link>
    </div>
</template> 
<script>
// import {mapGetters} from 'vuex'
export default {
    name: 'StartQuize',
    data(){
        return{

        }
    },
    computed:{
        // ...mapGetters([
        //     'QUIZES'
        // ]),
        // quiz() {
        //         //необходимо привести к числу
        //     return this.$store.getters.quizById(+this.$route.params.id);
        //     }
        },
    methods: {
       
    },
   
}
</script> 