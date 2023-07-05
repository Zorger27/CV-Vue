<script lang="ts">
import {Options, Vue} from "vue-class-component";

@Options({
  data() {
    return {
      screen: '0',
      error: 'ERROR',
      operator: ['+', '-', '*', '/', '.'],
      finished: false,
      result: null  // добавляем новое свойство для хранения результата
    };
  },
  methods: {
    calc() {
      let res;
      try {
        res = eval(this.screen);
      } catch (err) {
        res = this.error;
      }
      this.result = res % 1 === 0 ? res.toString() : res.toFixed(2);
      this.finished = true;  // Устанавливаем this.finished в true после вычислений

      if (res.toString().length <= 11) {
        this.$refs.screenRef.classList.remove('small-font');
      }
    },
    push(event) {
      const symbol = event.target.innerText.trim(); // Убираем пробелы вокруг символа

      if (this.screen.length > 11) {
        this.screen = this.screen.substring(0, 48);
        this.$refs.screenRef.classList.add('small-font');  // Добавление класса для уменьшения шрифта
      } else {
        this.$refs.screenRef.classList.remove('small-font');  // Удаление класса уменьшения шрифта
      }

      if (this.screen === this.error) {
        this.screen = '0';
      }

      if (symbol === "=") {
        this.calc();
        this.finished = true;
        this.screen = this.result;
        return;
      }

      switch (symbol) {
        case "AC":
          this.clearDisplay();
          break;
        default:
          if (
            this.operator.indexOf(symbol) > -1 &&
            this.operator.indexOf(this.screen[this.screen.length - 1]) > -1
          ) {
            this.screen = this.screen.substring(0, this.screen.length - 1);
          }
          if (this.finished) {
            this.screen = 0;
            this.finished = false;
          }
          if (this.screen == 0) {
            if (symbol !== "*" && symbol !== "/") {
              this.screen = symbol;
            } else {
              this.screen = 0;
            }
          } else {
            this.screen += symbol;
          }
          if (this.result !== null) {
            this.screen = this.result + symbol;
            this.result = null;
          }
      }
    },
    clearDisplay() {
      this.screen = '0';
    },
  },
  components: {},
})
export default class CalculatorFinance extends Vue {
}
</script>

<template>
  <div class="container">
    <div class="calculator">
      <div class="display" :class="{ 'small-font': screen.length > 11 }" ref="screenRef">{{ screen }}</div>
      <div class="btns">
        <div class="btn numbers" @click="push">1</div>
        <div class="btn numbers" @click="push">2</div>
        <div class="btn numbers" @click="push">3</div>
        <div class="btn numbers" @click="push">4</div>
        <div class="btn numbers" @click="push">5</div>
        <div class="btn numbers" @click="push">6</div>
        <div class="btn numbers" @click="push">7</div>
        <div class="btn numbers" @click="push">8</div>
        <div class="btn numbers" @click="push">9</div>
        <div class="btn null numbers" style="grid-area: null" @click="push">0</div>
        <div class="btn equal" style="grid-area: equal" @click="push">=</div>
        <div class="btn minus" style="grid-area: minus" @click="push">-</div>
        <div class="btn plus" style="grid-area: plus" @click="push">+</div>
        <div class="btn mult" style="grid-area: mult" @click="push">*</div>
        <div class="btn div" style="grid-area: div" @click="push">/</div>
        <div class="btn dot" style="grid-area: dot" @click="push">.</div>
        <div class="btn clean" style="grid-area: clean" @click="push">AC</div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  .calculator {
    margin: 1rem auto;
    font-size: 2.2rem;
    width: 400px;
    background-color: white;
    padding: 1.5rem;
    //border: 1px solid #bfbfbf;
    border-radius: 3px;
    //box-shadow: 0 1px 4px 0 lightgrey;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.7);

    .display {
      height: 4.2rem;
      border: 1px solid #ddd;
      text-align: right;
      box-sizing: border-box;
      font-size: 2.5rem;
      font-weight: bold;
      padding: 0.4rem 0.75rem;
      word-break: break-all;  // Перенос символов на новую строку
      white-space: normal;  // Обычное отображение пробелов и переносов строк
    }
    .small-font {
      font-size: 1.4rem;
      font-weight: normal;
      color: darkblue;
    }

    .btns {
      margin-top: 1rem;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      grid-template-rows: auto;
      grid-template-areas:
    ". . . plus"
    ". . . minus"
    ". . . mult"
    "dot null clean div"
    "equal equal equal equal";

      grid-column-gap: 0.5rem;

      .btn {
        display: grid;
        cursor: pointer;
        font-size: 2rem;
        background-color: #f9f9f9;
        border: 1px solid #ddd;
        border-radius: 3px;
        margin: 10px 4px 10px 0;
        padding: 0.4rem 0.6rem;
        text-align: center;
        position: relative;
        transition: border-color .2s ease-in-out, background-color .2s, box-shadow .2s;

        &:active {
          background-color: #f1f1f1;
          box-shadow: 3px 3px 4px 0 lightgrey;
          font-weight: bold;
        }
      }
      .numbers {
        background-image: url("@/assets/background/background19.jpg");
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
      }

      .equal {
        border-color: darkblue;
        background-color: darkblue;
        color: white;

        &:active {
          box-shadow: 3px 3px 4px 0 lightgrey;
          background-color: mediumblue;
          border-color: mediumblue;
          font-weight: bold;
        }
      }

      .minus, .plus, .div, .mult, .clean, .dot {
        border-color: lightsteelblue;
        background-color: lightsteelblue;
        color: white;

        &:active {
          box-shadow: 3px 3px 4px 0 lightgrey;
          background-color: lightskyblue;
          border-color: lightskyblue;
          font-weight: bold;
        }
      }

      .clean {
        background-color: lightseagreen;
        border-color: lightseagreen;
        color: black;

        &:active {
          box-shadow: 3px 3px 4px 0 lightgrey;
          background-color: #4bd2ca;
          border-color: #4bd2ca;
          color: white;
          font-weight: bold;
        }
      }

      .dot {
        border-color: steelblue;
        background-color: steelblue;
        color: white;

        &:active {
          box-shadow: 3px 3px 4px 0 lightgrey;
          background-color: deepskyblue;
          border-color: deepskyblue;
          font-weight: bold;
        }
      }
    }
  }

  @media (max-width: 768px) {
    .calculator {
      width: auto;
      max-width: 400px;
      margin: 0.5rem auto;
      padding: 0.6rem;
      font-size: 1.8rem;

      .display {
        margin-bottom: 0.3rem;
      }

      .btns {
        margin-top: 0.1rem;
        grid-column-gap: 0.3rem;

        .btn {
          padding: 0.2rem 0.3rem;
          margin: 5px 2px 5px 0;
        }
      }
    }
  }
}
</style>