<template>
  <div class="timer">
    <span class="timer__box">{{CURRENT_TIME}}</span>
    <div class="timer__bar">
      <div class="timer__percent" :style="{ height: PERCENT + '%' }"></div>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
export default {
  name: "Timer",
  data() {
    return {
    };
  },
  computed:{
    ...mapGetters(['CURRENT_TIME', 'PERCENT', 'POINTS']),
  },
  methods: {
    ...mapActions(['startTimer', 'stopTimer']),
  },
  watch: {
    CURRENT_TIME(time) {
      if (time === 0) {
        this.stopTimer();
      }
    },
  },
  mounted() {
    this.startTimer();
  },
  destroyed() {
    this.stopTimer();
  },
};
</script>
<style lang="scss">
.timer{
  position: absolute;
  top: 5%;
  right: 5%;
  height: 85vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  &__box{
    width: 60px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 3px solid skyblue;
    border-radius: 50%;
    margin-bottom: 24px;
    color: white;
  }
  &__bar{
    position: relative;
    width: 30px;
    height: calc(100% - 84px);
    border-radius: 15px;
    transform: rotate(180deg);
    overflow: hidden;
    border-bottom: 1px solid #ddd;
    box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.4), 0 -1px 1px #fff, 0 1px 0 #fff;
  }
  &__percent {
    position: absolute;
    top: 1px;
    left: 1px;
    right: 1px;
    display: block;
    background-color: skyblue;
    background-size: 30px 30px;
    background-image: linear-gradient(
    135deg,
    rgba(0, 0, 0, 0.2) 25%,
    transparent 25%,
    transparent 50%,
    rgba(0, 0, 0, 0.2) 50%,
    rgba(0, 0, 0, 0.2) 75%,
    transparent 75%,
    transparent
  );
  animation: animate-stripes 3s linear infinite;
  }
    
}


@keyframes animate-stripes {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 60px 0;
  }
}
</style>