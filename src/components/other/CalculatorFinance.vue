<script lang="ts">
import {Options, Vue} from "vue-class-component";

@Options({
  data() {
    return {
      screen: '0',
      error: 'ERROR',
      operator: ['+', '-', '*', '/', '.'],
      finished: false
    };
  },
  methods: {
    calc(){
      let res;
      try {
        res = eval(this.screen);
      } catch (err) {
        res = this.error;
      }
      this.screen = res
    },
    push(event){
      const symbol = event.target.innerText;
      if(this.screen.length > 11) {
        this.screen = this.error;
        return;
      }
      if(this.screen === this.error) {
        this.screen = 0;
      }
      switch(symbol) {
        case 'C':
          this.screen = 0;
          break;
        case '=':
          this.calc();
          this.finished = true;
          break;
        default:
          if(this.operator.indexOf(symbol) > -1 && this.operator.indexOf(this.screen[this.screen.length - 1]) > -1 ) {
            this.screen = this.screen.substring(0, this.screen.length - 1);
          }
          if(this.finished) {
            this.screen = 0;
            this.finished = false;
          }
          if(this.screen == 0){
            if(symbol !== '*' && symbol !== '/') {
              this.screen = symbol;
            } else {
              this.screen = 0;
            }
          } else {
            this.screen += symbol;
          }
      }
    },
    clear(){
      this.screen = '0';
    }
  },
  components: {},
})
export default class CalculatorFinance extends Vue {
}
</script>

<template>
  <div class="container">
    <div class="calculator">
      <div class="display">{{screen}}</div>
      <div class="btns">
        <div class="btn">
          <button v-on:click="push($event)">1</button>
        </div>
        <div class="btn">
          <button v-on:click="push($event)">2</button>
        </div>
        <div class="btn">
          <button v-on:click="push($event)">3</button>
        </div>
        <div class="btn">
          <button v-on:click="push($event)">4</button>
        </div>
        <div class="btn">
          <button v-on:click="push($event)">5</button>
        </div>
        <div class="btn">
          <button v-on:click="push($event)">6</button>
        </div>
        <div class="btn">
          <button v-on:click="push($event)">7</button>
        </div>
        <div class="btn">
          <button v-on:click="push($event)">8</button>
        </div>
        <div class="btn">
          <button v-on:click="push($event)">9</button>
        </div>
        <div class="btn null" style="grid-area: null">
          <button v-on:click="push($event)">0</button>
        </div>
        <div class="btn equal" style="grid-area: equal">
          <button v-on:click="push($event)">=</button>
        </div>
        <div class="btn minus" style="grid-area: minus">
          <button v-on:click="push($event)">-</button>
        </div>
        <div class="btn plus" style="grid-area: plus">
          <button v-on:click="push($event)">+</button>
        </div>
        <div class="btn mult" style="grid-area: mult">
          <button v-on:click="push($event)">*</button>
        </div>
        <div class="btn div" style="grid-area: div">
          <button v-on:click="push($event)">/</button>
        </div>
        <div class="btn dot" style="grid-area: dot">
          <button v-on:click="push($event)">.</button>
        </div>
        <div class="btn clean" style="grid-area: clean">
          <button v-on:click="push($event)">C</button>
        </div>
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
    box-shadow: 0 1px 4px 0 lightgrey;
    .display {
      border: 1px solid #ddd;
      text-align: right;
      box-sizing: border-box;
      font-size: 2.5rem;
      font-weight: bold;
      padding: 0.4rem 0.75rem;
    }
    .btns {
      margin-top: 1rem;
      display: grid;
      grid-template-columns: auto auto auto auto;
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
        button {
          cursor: pointer;
          font-size: 2rem;
          background-color: #f9f9f9;
          border: 1px solid #ddd;
          border-radius: 3px;
          margin: 10px 4px 10px 0;
          padding: 0.6rem;
          text-align: center;
          position: relative;
          transition: border-color .2s ease-in-out, background-color .2s, box-shadow .2s;
          &:active {
            background-color: #f1f1f1;
            box-shadow: 3px 3px 4px 0 lightgrey;
          }
        }
      }
      .equal {
        button {
          border-color: darkblue;
          background-color: darkblue;
          color: white;
          &:active {
            box-shadow: 3px 3px 4px 0 lightgrey;
            background-color: mediumblue;
            border-color: mediumblue;
          }
        }
      }
      .minus, .plus, .div, .mult, .clean, .dot {
        button {
          border-color: lightsteelblue;
          background-color: lightsteelblue;
          color: white;
          &:active {
            box-shadow: 3px 3px 4px 0 lightgrey;
            background-color: lightskyblue;
            border-color: lightskyblue;
          }
        }
      }
    }
  }
  @media (max-width: 768px) {
    .calculator {
      display: grid;
      //width: 330px;
      width: auto;

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
          button {
            padding: 0.3rem;
            margin: 5px 2px 5px 0;
          }
        }
      }
    }
  }
}
</style>