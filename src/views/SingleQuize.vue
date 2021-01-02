<template>
    <div class="single-quize">
        SingleQuize
        <span>{{quiz.question}}</span>
        <router-link :to="`/single-quize/${+this.$route.params.id +1}`">next</router-link>
    </div>
</template> 
<script>
import {mapGetters} from 'vuex'
export default {
    name: 'SingleQuize',
    computed:{
        ...mapGetters([
            'QUIZES'
        ]),
        quiz() {
            //необходимо привести к числу
            return this.$store.getters.quizById(+this.$route.params.id);
        },
        // nextQuiz(){
        //     return this.$store.getters.quizById(+this.$route.params.id +1);
        // }
    },
}
</script> 