<script lang="ts">
import {Options, Vue} from "vue-class-component";

@Options({
  data() {
    return {
      current: "",
      previous: null,
      operator: null,
      operatorClicked: false
    };
  },
  methods: {
    clear() {
      this.current = "";
    },
    sign() {
      this.current =
          this.current.charAt(0) === "-"
              ? this.current.slice(1)
              : `-${this.current}`;
    },
    percent() {
      this.current = `${parseFloat(this.current) / 100}`;
    },
    append(number) {
      if (this.operatorClicked) {
        this.current = "";
        this.operatorClicked = false;
      }
      this.current = `${this.current}${number}`;
    },
    dot() {
      if (this.current.indexOf(".") === -1) {
        this.append(".");
      }
    },
    setPrevious() {
      this.previous = this.current;
      this.operatorClicked = true;
    },
    divide() {
      this.operator = (a, b) => {
        if (b === 0) {
          return "🧐😉🙃😂🤣";
        }
        return a / b;
      };
      this.setPrevious();
    },
    times() {
      this.operator = (a, b) => a * b;
      this.setPrevious();
    },
    minus() {
      this.operator = (a, b) => a - b;
      this.setPrevious();
    },
    add() {
      this.operator = (a, b) => a + b;
      this.setPrevious();
    },
    sqrt() {
      // this.current = `${Math.sqrt(parseFloat(this.current))}`;
      this.current = parseFloat(this.current) ** (1 / 2);
    },
    equal() {
      this.current = `${this.operator(parseFloat(this.previous), parseFloat(this.current))}`;
      this.previous = null;
    }
  },
  computed: {},
  components: {},
})
export default class Calculator extends Vue {
}
</script>

<template>
  <div class="body">
    <div class="calculator">
      <div class="display">{{ current || "0" }}</div>
      <div @click="clear" class="btn clear">AC</div>
      <div @click="sign" class="btn">+/-</div>
      <div @click="percent" class="btn">%</div>
      <div @click="divide" class="btn operator">÷</div>
      <div @click="append('7')" class="btn">7</div>
      <div @click="append('8')" class="btn">8</div>
      <div @click="append('9')" class="btn">9</div>
      <div @click="times" class="btn operator">x</div>
      <div @click="append('4')" class="btn">4</div>
      <div @click="append('5')" class="btn">5</div>
      <div @click="append('6')" class="btn">6</div>
      <div @click="minus" class="btn operator">-</div>
      <div @click="append('1')" class="btn">1</div>
      <div @click="append('2')" class="btn">2</div>
      <div @click="append('3')" class="btn">3</div>
      <div @click="add" class="btn operator">+</div>
      <div @click="append('0')" class="btn zero">0</div>
      <div @click="dot" class="btn">.</div>
      <div @click="equal" class="btn operator equal">=</div>
      <div @click="sqrt" class="btn operator sqrt">√</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.body {
  display: flex;
  align-items: center;
  justify-content: center;

  .calculator {
    text-align: center;
    width: 400px;
    margin: 1rem auto;
    padding: 1.5rem;
    font-size: 2.2rem;
    border-radius: 3px;
    display: grid;
    background-color: white;
    grid-template-columns: repeat(4, 1fr);
    //grid-auto-rows: minmax(50px, auto);
    grid-column-gap: 0.5rem;
    box-shadow: 0 1px 4px 0 lightgrey;

    .display {
      grid-column: 1 / 5;
      border: 1px solid #ddd;
      border-radius: 3px;
      font-size: 2.7rem;
      font-weight: bold;
      padding: 0.5rem 0.75rem;
      margin-bottom: 1rem;
      text-align: right;
      overflow-x: auto;
      transition: all .2s ease-in-out;
    }

    .display:hover {
      border: 1px solid #bbb;
      box-shadow: inset 0 1px 4px 0 lightgrey;
    }

    .btn {
      background-color: #f9f9f9;
      border: 1px solid #ddd;
      border-radius: 3px;
      text-align: center;
      padding: 0.2rem;
      margin: 10px 4px 10px 0;
      cursor: pointer;
      transition: border-color .2s ease-in-out, background-color .2s, box-shadow .2s;
    }

    .btn:hover {
      background-color: #f1f1f1;
      box-shadow: 3px 3px 4px 0 lightgrey;
    }

    .btn:active {
      font-weight: bold;
    }

    //.zero {
    //  grid-column: 1 / 3;
    //}

    .operator {
      border-color: lightsteelblue;
      background-color: lightsteelblue;
      color: white;
    }

    .operator:hover {
      background-color: lightskyblue;
      border-color: lightskyblue;
    }

    .clear {
      background-color: lightseagreen;
      border-color: lightseagreen;
      transition: all .2s ease-in-out;
    }

    .clear:hover {
      background-color: #4bd2ca;
      border-color: #4bd2ca;
    }

    .equal {
      border-color: darkblue;
      background-color: darkblue;
      transition: all .2s ease-in-out;
    }

    .equal:hover {
      background-color: mediumblue;
      border-color: mediumblue;
    }

    .sqrt {
      border-color: darkred;
      background-color: darkred;
    }

    .sqrt:hover {
      background-color: lightcoral;
      border-color: lightcoral;
    }
  }

  @media (max-width: 768px) {
    .calculator {
      margin: 0.5rem auto;
      padding: 0.8rem;
      font-size: 1.8rem;
      grid-column-gap: 0.3rem;

      .display {
        font-size: 2rem;
        margin-bottom: 0.3rem;
      }

      .btn {
        margin: 5px 2px 5px 0;
      }

    }
  }
}
</style>