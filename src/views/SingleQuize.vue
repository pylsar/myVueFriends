<template>
    <div class="single-quize" >
        <timer />
        <div class="single-quize__gallary" :style="{backgroundImage: `url(${require('@/assets/img/' + quiz.src)})`}">
        </div>
        <the-points />
        <div class="single-quize__box">
            <div class="single-quize__question">
                <span class="single-quize__title">{{quiz.question}}</span>
                <span class="single-quize__numbers"><sup>{{quiz.id}}</sup>/<sub>{{QUIZES.length}}</sub></span>
            </div>
            <div class="single-quize__box-answer">
                <button 
                    class="single-quize__answer"
                    @click="chooseAnswer1()"
                    :class="[{'single-quize__sucsess' : isCorrect1}, {'single-quize__error': isError1}]"
                >
                {{quiz.answer1}}
                </button>
                <button 
                    class="single-quize__answer"
                    @click="chooseAnswer2()"
                    :class="[{'single-quize__sucsess' : isCorrect2}, {'single-quize__error': isError2}]"
                >
                {{quiz.answer2}}
                </button>
                <button 
                    class="single-quize__answer"
                    @click="chooseAnswer3()"
                    :class="[{'single-quize__sucsess' : isCorrect3}, {'single-quize__error': isError3}]"
                >
                {{quiz.answer3}}
                </button>
                <button 
                    class="single-quize__answer"
                    @click="chooseAnswer4()"
                    :class="[{'single-quize__sucsess' : isCorrect4}, {'single-quize__error': isError4}]"
                >
                {{quiz.answer4}}
                </button>
            </div>
            <transition name="slide-fade">  
                <div v-show="ISNEXT" class="single-quize__next">
                    <router-link v-if="quiz.id < 20" :to="`/single-quize/${+this.$route.params.id +1}`"><span @click="clearAnswers()">Следующий вопрос</span></router-link>
                    <router-link v-else to="/">
                    <span>Вернуться в начало</span><br>
                    <span>Ваш результат: {{TOTAL}}</span>
                    </router-link>
                </div>
            </transition>
        </div>
    </div>
</template> 
<script>
import {mapGetters, mapActions} from 'vuex';
import ThePoints from '../components/ThePoints.vue';
import Timer from '../components/Timer';
export default {
    name: 'SingleQuize',
    components:{
        Timer,
        ThePoints
    },
    data(){
        return{
            isCorrect1: false,
            isCorrect2: false,
            isCorrect3: false,
            isCorrect4: false,
            isError1: false,
            isError2: false,
            isError3: false,
            isError4: false,
        }
    },
    computed:{
        ...mapGetters([
            'QUIZES', 'TOTAL', 'ISNEXT'
        ]),
        quiz() {
            //необходимо привести к числу
            return this.$store.getters.quizById(+this.$route.params.id);
        },
        
    },
    methods: {
        ...mapActions(['stopTimer', 'startTimer']),
        pointsPlus(){
            this.$store.state.points = this.$store.state.currentTime;
            this.$store.state.total += this.$store.state.points;
        },
        pointsZero(){
            this.$store.state.points = 0;
            this.$store.state.total += this.$store.state.points;
        },
        chooseAnswer1(){
            if(this.quiz.answer == this.quiz.answer1){
                this.isCorrect1 = true;
                this.pointsPlus();
            }else{
                this.isError1 = true;
                this.pointsZero();
            }
            this.stopTimer();
        },
        chooseAnswer2(){
            if(this.quiz.answer == this.quiz.answer2){
                this.isCorrect2 = true;
                this.pointsPlus();
            }else{
                this.isError2 = true;
                this.pointsZero();
            }
            this.stopTimer();
        },
        chooseAnswer3(){
            if(this.quiz.answer == this.quiz.answer3){
                this.isCorrect3 = true;
                this.pointsPlus();
            }else{
                this.isError3 = true;
                this.pointsZero();
            }
            this.stopTimer();
        },
        chooseAnswer4(){
            if(this.quiz.answer == this.quiz.answer4){
                this.isCorrect4 = true;
                this.pointsPlus();
            }else{
                this.isError4 = true;
                this.pointsZero();
            }
            this.stopTimer();
        },
        clearAnswers(){
            this.stopTimer();
            this.isCorrect1 = false;
            this.isCorrect2 = false;
            this.isCorrect3 = false;
            this.isCorrect4 = false; 
            this.isError1 = false;
            this.isError2 = false;
            this.isError3 = false;
            this.isError4 = false;
            this.$store.state.currentTime = 20;
            this.$store.state.percent = 100;
            this.startTimer();
        }
    }
}
</script> 
<style lang="scss">
.single-quize{
    width: 100%;
    height: 100vh;
    position: relative;
    background: linear-gradient(to right, #567599, #1f2e4b);
    &__box{
        width: 70%;
        position: absolute;
        bottom: 10%;
        left: 50%;
        transform: translateX(-50%);
    }
    &__question{
        background: skyblue;
        text-align: center;
        color: #000;
        padding-top: 50px;
        padding-bottom: 50px;
        margin-bottom: 24px;
        border-radius: 50px;
        box-shadow: 9px 6px 70px 32px rgba(34, 60, 80, 0.21);
        font-size: 24px;
        position: relative;
    }
    &__box-answer{
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }
    &__answer{
        width: calc(50% - 60px);
        height: 80px;
        background: skyblue;
        outline: none;
        border: none;
        cursor: pointer;
        border-radius: 50px;
        margin-bottom: 24px;
        box-shadow: 9px 6px 70px 32px rgba(34, 60, 80, 0.21);
        font-size: 24px;
        &:hover{
            text-shadow: 1px 1px 2px black;
            background: darken(skyblue, 10%);
        }
        &:nth-child(3){
            margin-bottom: 0;
        }
        &:nth-child(4){
            margin-bottom: 0;
        }
    }
    &__sucsess{
        background: green;
    }
    &__error{
        background: red;
    }
    &__numbers{
        position: absolute;
        bottom: 10%;
        right: 3%;
    }
    &__gallary{
        width: 600px;
        height: 400px;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        position: absolute;
        top: 5%;
        left: 50%;
        transform: translateX(-50%);
    }
    &__next{
        background: black;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 50px;
        opacity: .8;
        border-radius: 50px 49px 39px 39px;
        & a {
            color: white;
            text-decoration: none;
            &:hover{
                text-shadow: 1px 1px 2px white;
            }
        }
    }
}

.slide-fade-enter-active{
  transition: all 2s ease;
}
.slide-fade-leave-active{
  transition: all .5s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to{
  transform: translateX(30px);
  opacity: 0;
}
</style>

