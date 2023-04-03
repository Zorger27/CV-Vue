<script>
import {Options, Vue} from "vue-class-component";

@Options({components: {},})
export default class CalculatorView extends Vue {
//   // объявляем переменные (кнопки калькулятора)
//   input = document.querySelector('.input')
//   number = document.querySelectorAll('.numbers div')
//   operator = document.querySelectorAll(['.operators div','.specific'])
//   result = document.querySelector('.equal')
//   clear = document.querySelector('.clear')
//   resultDisplayed = false; //смотрим, что отображается
//
// // добавляем обработчик кликов к цифровым кнопкам
//   for( i = 0; i < number.length; i++){
//   number[i].addEventListener("click", function (e){
//     // сохраненим текущую входящую строку и её последний символ в переменных (используем позже)
//     let currentString = input.innerHTML;
//     let lastChar = currentString[currentString.length - 1];
//     // если результат не отображается, просто продолжаем добавлять
//     if (resultDisplayed === false){
//       input.innerHTML += e.target.innerHTML;
//     }
//     else if (resultDisplayed === true && lastChar === "+" || lastChar === "-" || lastChar === "×" || lastChar === "÷" || lastChar === "√" || lastChar === "^"){
//       // если в данный момент отображается результат и пользователь нажал оператор,
//       // то нам нужно продолжать добавлять в строку для следующей операции
//       resultDisplayed = false;
//       input.innerHTML += e.target.innerHTML;
//     }
//     else {
//       // если в данный момент отображается результат и пользователь нажал число
//       // нам нужно очистить входную строку и добавить новый ввод, чтобы начать новую операцию
//       resultDisplayed = false;
//       input.innerHTML = "";
//       input.innerHTML += e.target.innerHTML;
//     }
//   });
// }
// // добавляем обработчик кликов к операторным кнопкам
// for (let i = 0; i < operator.length; i++){
//   operator[i].addEventListener("click", function (e){
//     // сохраненим текущую входящую строку и её последний символ в переменных (используем позже)
//     let currentString = input.innerHTML;
//     let lastChar = currentString[currentString.length - 1];
//     // если последний введенный символ является оператором, заменим его текущим нажатием
//     if (lastChar === "+" || lastChar === "-" || lastChar === "×" || lastChar === "÷" || lastChar === "√" || lastChar === "^"){
//       input.innerHTML = currentString.substring(0, currentString.length - 1) + e.target.innerHTML;
//     }
//     else if (currentString.length === 0){
//       // если первая нажатая клавиша является оператором - ничего не делаем
//       console.log("Enter a number first!");
//     }
//     else {
//       // иначе просто добавим оператор нажатия
//       input.innerHTML += e.target.innerHTML;
//     }
//   });
// }
// // добавляем обработчик клика по нажатию на кнопку "равно"
// result.addEventListener("click", function (){
//   // это строка, которую мы будем обрабатывать, например: -40+26+33-56*34/22
//   let inputString = input.innerHTML;
//   // создаём массив чисел; например, для приведенной выше строки это будет: numbers = ["40", "26", "33", "56", "34", "22"]
//   let numbers = inputString.split(/[√÷×^\-+]/g);
//   // создаём массив операторов; для вышеуказанной строки это будет: operator = ["√" "÷", "*", "^", "-", "+"]
//   // сначала мы заменяем все числа и точки пустой строкой, а затем разделяем
//   let operators = inputString.replace(/\d|\./g, "").split("");
//
//   console.log(inputString);
//   console.log(operators);
//   console.log(numbers);
//   console.log("---------------------------");
//
//   // теперь мы перебираем массив и выполняем одну операцию за раз
//   // сначала делим, потом умножаем, потом вычитаем и потом складываем
//   // по мере движения мы меняем исходный массив чисел и операторов
//   // последний элемент, оставшийся в массиве, будет выводом
//
//   let square = operators.indexOf("√");
//   while (square !== -1){
//     numbers.splice(square, 2, numbers[square] ** (1/2));
//     operators.splice(square, 1);
//     square = operators.indexOf("√");
//   }
//   let divide = operators.indexOf("÷");
//   while (divide !== -1){
//     numbers.splice(divide, 2, numbers[divide] / numbers[divide + 1]);
//     operators.splice(divide, 1);
//     divide = operators.indexOf("÷");
//   }
//   let caret = operators.indexOf("^");
//   while (caret !== -1){
//     numbers.splice(caret, 2, numbers[caret] * numbers[caret]);
//     operators.splice(caret, 1);
//     caret = operators.indexOf("^");
//   }
//   let multiply = operators.indexOf("×");
//   while (multiply !== -1){
//     numbers.splice(multiply, 2, numbers[multiply] * numbers[multiply + 1]);
//     operators.splice(multiply, 1);
//     multiply = operators.indexOf("×");
//   }
//   let subtract = operators.indexOf("-");
//   while (subtract !== -1) {
//     numbers.splice(subtract, 2, numbers[subtract] - numbers[subtract + 1]);
//     operators.splice(subtract, 1);
//     subtract = operators.indexOf("-");
//   }
//   let add = operators.indexOf("+");
//   while (add !== -1){
//     // используем parseFloat, иначе это приведет к конкатенации строк
//     numbers.splice(add, 2, parseFloat(numbers[add]) + parseFloat(numbers[add +1]));
//     operators.splice(add, 1);
//     add = operators.indexOf("+");
//   }
//   input.innerHTML = numbers[0]; // отображение вывода
//   resultDisplayed = true; // меняем значение на true, если отображается результат
// });
//
// // очищаем поле ввода, при нажатии на кнопку очистки
// clear.addEventListener("click", function (){
//   input.innerHTML = "";
// });
}
</script>

<template>
  <div class="calculator">
    <h1>
      <router-link class="back" to="/extra" title="Back to Extra page"><i class="fa fa-arrow-circle-left"></i>
      </router-link>
      {{ $t('extra.h1m.calculator') }}
    </h1>
    <line></line>
    <div class="body">
      <div class="calculator">
        <div class="input"></div>
        <div class="buttons">
          <div class="operators">
            <div>+</div>
            <div>-</div>
            <div>&times;</div>
            <div>&divide;</div>
          </div>
          <div class="leftPanel">
            <div class="numbers">
              <div>7</div>
              <div>8</div>
              <div>9</div>
            </div>
            <div class="numbers">
              <div>4</div>
              <div>5</div>
              <div>6</div>
            </div>
            <div class="numbers">
              <div>1</div>
              <div>2</div>
              <div>3</div>
            </div>
            <div class="numbers">
              <div>0</div>
              <div>.</div>
              <div class="clear" title="Очистить поле ВВОДА">C</div>
            </div>
          </div>
          <div class="rightPanel">
            <div class="specific" title="Квадратный корень из числа">&radic;</div>
            <div class="specific" title="Число в квадратной степени">&Hat;</div>
            <!--            Если продолжить, то можно создать инженерный калькулятор! :)) -->
            <div class="equal">=</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.calculator {
  flex: 1 0 auto;
  .back {
    display: none;
    @media (max-width: 768px) {
      display: inline-flex;
      text-decoration: none;
      margin-right: 0.1rem;
    }
  }
  .body{
    width: 505px;
    margin: 2% auto;
    letter-spacing: 5px;
    font-size: 1.8rem;
  }
  .calculator{
    padding: 20px;
    box-shadow: 0 1px 4px 0 lightgrey;
    border-radius: 3px;
  }
  .input{
    border: 1px solid #ddd;
    border-radius: 3px;
    height: 60px;
    padding-right: 15px;
    padding-top: 10px;
    text-align: right;
    margin-right: 6px;
    font-size: 2.5rem;
    overflow-x: auto;
    transition: all .2s ease-in-out;
  }
  .input:hover{
    border: 1px solid #bbb;
    box-shadow: inset 0 1px 4px 0 lightgrey;
  }
  .buttons{}
  .operators{}
  .operators div{
    display: inline-block;
    border: 1px solid lightsteelblue;
    border-radius: 3px;
    width: 80px;
    text-align: center;
    padding: 10px;
    margin: 20px 4px 10px 0;
    cursor: pointer;
    background-color: lightsteelblue;
    transition: border-color .2s ease-in-out, background-color .2s, box-shadow .2s;
  }
  .operators div:hover{
    background-color: lightskyblue;
    box-shadow: 3px 3px 4px 0 lightgrey;
    border-color: lightskyblue;
  }
  .operators div:active{
    font-weight: bold;
  }
  .leftPanel{
    display: inline-block;
  }
  .numbers div{
    display: inline-block;
    border: 1px solid #ddd;
    border-radius: 3px;
    width: 80px;
    text-align: center;
    padding: 10px;
    margin: 10px 4px 10px 0;
    cursor: pointer;
    background-color: #f9f9f9;
    transition: border-color .2s ease-in-out, background-color .2s, box-shadow .2s;
  }
  .numbers div:hover{
    background-color: #f1f1f1;
    box-shadow: 3px 3px 4px 0 lightgrey;
    border-color: #bbb;
  }
  .numbers div:active{
    font-weight: bold;
  }
  .rightPanel{
    display: inline-block;
    vertical-align: top;
  }
  .rightPanel div{
    border: 1px solid darkred;
    border-radius: 3px;
    width: 80px;
    text-align: center;
    padding: 10px;
    margin: 10px 4px 10px 0;
    cursor: pointer;
    color: #FFF;
    background-color: darkred;
    transition: all .2s ease-in-out;
  }
  .rightPanel div:hover{
    background-color: lightcoral;
    box-shadow: 3px 3px 4px 0 lightgrey;
    border-color: lightcoral;
  }
  .rightPanel div:active{
    font-weight: bold;
    /*box-shadow: -3px -3px 4px 0 lightgrey;*/
  }
  .rightPanel div:nth-child(1){
    margin-bottom: 20px;
  }
  div.equal{
    display: inline-block;
    border: 1px solid darkblue;
    border-radius: 3px;
    /*width: 17%;*/
    text-align: center;
    padding: 50px 10px;
    margin: 10px 4px 10px 0;
    cursor: pointer;
    color: #FFF;
    background-color: darkblue;
    transition: all .2s ease-in-out;
  }
  div.equal:hover{
    background-color: mediumblue;
    box-shadow: 3px 3px 4px 0 lightgrey;
    border-color: mediumblue;
  }
  div.equal:active {
    font-weight: bold;
  }
  div.clear{
    color: #FFF;
    background-color: lightseagreen;
    transition: all .2s ease-in-out;
  }
  div.clear:hover{
    background-color: #4bd2ca;
    border-color: #4bd2ca;
  }
  @media (max-width: 768px) {
    .body{
      width: 305px;
      margin: 4% auto;
      font-size: 1.2rem;
    }
    .calculator{
      padding: 0.5rem;
    }
    .input{
      height: 30px;
      padding-right: 15px;
      padding-top: 10px;
      text-align: right;
      margin-right: 6px;
      font-size: 1.5rem;
      overflow-x: auto;
      transition: all .2s ease-in-out;
    }
    .buttons{}
    .operators{}
    .operators div{
      width: 40px;
      padding: 10px;
      margin: 10px 4px 5px 0;
    }
    .leftPanel{
      display: inline-block;
    }
    .numbers div{
      width: 40px;
      padding: 10px;
      margin: 5px 4px 5px 0;
    }
    .rightPanel div{
      width: 40px;
      padding: 10px;
      margin: 5px 4px 5px 0;
    }
    .rightPanel div:nth-child(1){
      margin-bottom: 10px;
    }
    div.equal{
      padding: 39px 10px;
      margin: 5px 4px 5px 0;
    }
  }
}
</style>