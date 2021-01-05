<template>
    <div class="single-quize" :style="{backgroundImage: `url(${require('@/assets/img/' + quiz.src)})`}">
        <timer />
        <div class="single-quize__box">
            <div class="single-quize__question">
                <span class="single-quize__title">{{quiz.question}}</span>
            </div>
            <div class="single-quize__box-answer">
                <button 
                    class="single-quize__answer"
                    @click="chooseAnswer()"
                    :class="{ 'single-quize__sucsess' : isCorrect1}"
                >
                {{quiz.answer1}}
                </button>
                <button 
                    class="single-quize__answer"
                    @click="chooseAnswer()"
                    :class="{ 'single-quize__sucsess' : isCorrect2}"
                >
                {{quiz.answer2}}
                </button>
                <button 
                    class="single-quize__answer"
                    @click="chooseAnswer()"
                    :class="{ 'single-quize__sucsess' : isCorrect3}"
                >
                {{quiz.answer3}}
                </button>
                <button 
                    class="single-quize__answer"
                    @click="chooseAnswer()"
                    :class="{ 'single-quize__sucsess' : isCorrect4}"
                >
                {{quiz.answer4}}
                </button>
            </div>
            <div>
                <router-link :to="`/single-quize/${+this.$route.params.id +1}`"><span @click="clearAnswers()">next</span></router-link>
            </div>
        </div>
    </div>
</template> 
<script>
import {mapGetters, mapActions} from 'vuex';
import Timer from '../components/Timer';
export default {
    name: 'SingleQuize',
    components:{
        Timer
    },
    data(){
        return{
            isCorrect1: false,
            isCorrect2: false,
            isCorrect3: false,
            isCorrect4: false,
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
        ...mapActions(['stopTimer']),
        chooseAnswer(){
            if(this.quiz.answer == this.quiz.answer1){
                this.isCorrect1 = true;
            }else if(this.quiz.answer == this.quiz.answer2){
                this.isCorrect2 = true;
            }else if(this.quiz.answer == this.quiz.answer3){
                this.isCorrect3 = true;
            }else if(this.quiz.answer == this.quiz.answer4){
                this.isCorrect4 = true;
            }    
            this.stopTimer();

        },
        clearAnswers(){
            this.isCorrect1 = false;
            this.isCorrect2 = false;
            this.isCorrect3 = false;
            this.isCorrect4 = false; 
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
    &__wrong{
        background: red;
    }
}
</style>

