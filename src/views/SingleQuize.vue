<template>
    <div class="single-quize" :style="{backgroundImage: `url(${require('@/assets/img/' + quiz.src)})`}">
        <div class="single-quize__box">
            <div class="single-quize__question">
                <span class="single-quize__title">{{quiz.question}}</span>
            </div>
            <div class="single-quize__box-answer">
                <button 
                    class="single-quize__answer"
                    @click="chooseAnswer()"
                    :class="{ 'single-quize__sucsess' : isCorrect}"
                >
                {{quiz.answer1}}
                </button>
                <button 
                    class="single-quize__answer"
                    @click="chooseAnswer()"
                    :class="{ 'single-quize__sucsess' : isCorrect}"
                >
                {{quiz.answer2}}
                </button>
                <button 
                    class="single-quize__answer"
                    @click="chooseAnswer()"
                    :class="{ 'single-quize__sucsess' : isCorrect}"
                >
                {{quiz.answer3}}
                </button>
                <button 
                    class="single-quize__answer"
                    @click="chooseAnswer()"
                    :class="{ 'single-quize__sucsess' : isCorrect}"
                >
                {{quiz.answer4}}
                </button>
            </div>
            <div>
                <router-link :to="`/single-quize/${+this.$route.params.id +1}`">next</router-link>
            </div>
        </div>
    </div>
</template> 
<script>
import {mapGetters} from 'vuex'
export default {
    name: 'SingleQuize',
    data(){
        return{
            isCorrect: false
        }
    },
    computed:{
        ...mapGetters([
            'QUIZES'
        ]),
        quiz() {
            //необходимо привести к числу
            return this.$store.getters.quizById(+this.$route.params.id);
        },
    },
    methods: {
        chooseAnswer(){
            if(this.$store.state.answer !== this.$store.state.answer2){
                this.isCorrect = false;
            }else{
                this.isCorrect = true;
            }
        }
    }
}
</script> 
<style lang="scss">
.single-quize{
    width: 100%;
    height: 100vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    position: relative;
    &__box{
        width: 80%;
        position: absolute;
        bottom: 10%;
        left: 50%;
        transform: translateX(-50%);
        border: 1px solid red;
    }
    &__question{
        background: skyblue;
        text-align: center;
        color: #000;
        padding-top: 50px;
        padding-bottom: 50px;
    }
    &__box-answer{
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        border: 1px solid green;
    }
    &__answer{
        width: calc(50% - 50px);
        height: 50px;
        background: skyblue;
        outline: none;
        border: none;
        cursor: pointer;
    }
    &__sucsess{
        background: green;
    }
}
</style>

