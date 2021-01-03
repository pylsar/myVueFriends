import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    quizes: [
      {
      "id": 1,
      "question": "В каком году вышла первая серия друзей?",
      "answer1": "2000",
      "answer2": "1994",
      "answer3": "пвоарыф",
      "answer4": 1755,
      "src": "1.jpg",
      "answer": "1994"
      },
      {
        "id": 2,
        "question": "Как звали девушку из ксерокопии?",
        "answer1": "Джанин",
        "answer2": "Зоуи",
        "answer3": "Хлоя",
        "answer4": "Лиза",
        "src": "2.jpg",
        "answer": "Хлоя"
      },
      {
        "id": 3,
        "question": "Почему Бонни подстриглась на лысо?",
        "answer1": "+Рейтчел посоветовала",
        "answer2": "Заболела вшами",
        "answer3": "Поклоница Винна Дизеля",
        "answer4": "Закончился шампунь",
        "src": "3.jpg"
      },
      {
        "id": 4,
        "question": "Сколько эпизодов в сериале?",
        "answer1": "238",
        "answer2": "+236",
        "answer3": "234",
        "answer4": "280",
        "src": "4.jpg"
      },
      {
        "id": 5,
        "question": "Какую еду принес Бред Питт на день благодарения",
        "answer1": "Рататуй",
        "answer2": "+Батат",
        "answer3": "Борщ",
        "answer4": "Чипсы",
        "src": "5.jpg"
      },
      {
        "id": 6,
        "question": "Как звали девушку, с которой застрял Чендлер в вестибюле банка",
        "answer1": "Хлоя Зоуи",
        "answer2": "Джесика Молдберг",
        "answer3": "Элизабет Стоун",
        "answer4": "+Джил Гудвейкер",
        "src": "6.jpeg"
      },
      {
        "id": 7,
        "question": "Чью задницу играл Джоуи?",
        "answer1": "+Роберт де Ниро",
        "answer2": "Кевин Костнер",
        "answer3": "Патрик Свейзи",
        "answer4": "Тимати",
        "src": "7.jpg"
      },
      {
        "id": 8,
        "question": "Какое второе имя Чендлера",
        "answer1": "Френсис",
        "answer2": "Мюрриэль",
        "answer3": "Франко",
        "answer4": "Блекберн",
        "src": "8.jpg"
      },
      {
        "id": 9,
        "question": "Как называлось пиво из англии которое понравилось Джоуи?",
        "answer1": "Duff",
        "answer2": "Манчестер",
        "answer3": "Пилсен",
        "answer4": "+Бадингтон",
        "src": "9.jpg"
      },
      {
        "id": 10,
        "question": "Родом из какого штата была девушка, которая отдала детей Чендлеру и Монике?",
        "answer1": "Массачусетс",
        "answer2": "+Оклахома",
        "answer3": "Тенесси",
        "answer4": "Огайо",
        "src": "10.jpg"
      },
      {
        "id": 11,
        "question": "От кого Рейчел узнала про измену Росса?",
        "answer1": "Фиби",
        "answer2": "растаман из ксерокопии",
        "answer3": "Гантер",
        "answer4": "экстрасенс с тнт",
        "src": "11.jpg"
      },
      {
        "id": 12,
        "question": "Во время родов Фиби, какой сериал смотрел врач?",
        "answer1": "Дни нашей жизни",
        "answer2": "Во все тяжкие",
        "answer3": "Счастливые дни",
        "answer4": "Альф",
        "src": "12.jpg"
      },
      {
        "id": 13,
        "question": "Какой мебельный магазин ненавидела Фиби",
        "answer1": "+Поттери барн",
        "answer2": "Икеа",
        "answer3": "Шатура мебель",
        "answer4": "Хофф",
        "src": "13.jpg"
      },
      {
        "id": 14,
        "question": "Моника готовила еду и уронила ноготь. Что она готовила?",
        "answer1": "резотто",
        "answer2": "блинчики",
        "answer3": "лазанью",
        "answer4": "запеканку",
        "src": "14.jpg"
      },
      {
        "id": 15,
        "question": "у кого из героев было 3 соска и 19 пальцев?",
        "answer1": "Гантер",
        "answer2": "Пауло",
        "answer3": "Урсула",
        "answer4": "Чендлер",
        "src": "15.jpg"
      },
      {
        "id": 16,
        "question": "В какой штат переехал Чендлер работать?",
        "answer1": "Массачусетс",
        "answer2": "+Оклахома",
        "answer3": "Тенесси",
        "answer4": "Огайо",
        "src": "16.jpg"
      },
      {
        "id": 17,
        "question": "когда ограбили Джоуи и Чендлера, Джоу подумал что грабитель забрал 1 карту из колоды. что это была за карта?",
        "answer1": "6 пик",
        "answer2": "7 черви",
        "answer3": "король крести",
        "answer4": "джокер",
        "src": "17.jpg"
      },
      {
        "id": 18,
        "question": "как звали обеьяну Росса?",
        "answer1": "Леон",
        "answer2": "Марсель",
        "answer3": "Париж",
        "answer4": "Анфиса",
        "src": "18.jpeg"
      },
      {
        "id": 19,
        "question": "как звали персонажа Брусса Уилисса?",
        "answer1": "Пол Джонс",
        "answer2": "Джон Полс",
        "answer3": "Стив Полсен",
        "answer4": "Пол Стивенс",
        "src": "19.jpg"
      },
      {
        "id": 20,
        "question": "Кто последним положил ключи на стол, в последней серии друзей, прощаясь с квартирой",
        "answer1": "Фиби",
        "answer2": "Росс",
        "answer3": "Рейчел",
        "answer4": "Чендлер",
        "src": "20.jpg"
      }
          ]
  },
  mutations: {
  },
  actions: {
    
  },
  getters: {
    QUIZES(state){
      return state.quizes
    },
    quizById: (state) => (id) => state.quizes.find((quiz) => quiz.id === id),
  },
  modules: {
  }
})
