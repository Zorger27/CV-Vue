<script lang="ts">
import {Options, Vue} from "vue-class-component";

interface Card {
  fruit: string;
  image: string;
  flipped: boolean;
  matched: boolean;
}

@Options({
  data() {
    return {
      cards: [
        {fruit: 'apple', image: '/assets/memory/Apple.png', flipped: false, matched: false},
        // {fruit: 'apple', image: require('@/assets/memory/Apple.svg'), flipped: false, matched: false},
        // {fruit: 'apple', image: require('@/assets/memory/Apple.svg'), flipped: false, matched: false},
        {fruit: 'apple', image: '/assets/memory/Apple.png', flipped: false, matched: false},
        {fruit: 'banana', image: '/assets/memory/Banana.png', flipped: false, matched: false},
        {fruit: 'banana', image: '/assets/memory/Banana.png', flipped: false, matched: false},
        {fruit: 'grape', image: '/assets/memory/Grape.png', flipped: false, matched: false},
        {fruit: 'grape', image: '/assets/memory/Grape.png', flipped: false, matched: false},
        {fruit: 'lychee', image: '/assets/memory/Lychee.png', flipped: false, matched: false},
        {fruit: 'lychee', image: '/assets/memory/Lychee.png', flipped: false, matched: false},
        {fruit: 'pineapple', image: '/assets/memory/Pineapple.png', flipped: false, matched: false},
        {fruit: 'pineapple', image: '/assets/memory/Pineapple.png', flipped: false, matched: false},
        {fruit: 'strawberry', image: '/assets/memory/Strawberry.png', flipped: false, matched: false},
        {fruit: 'strawberry', image: '/assets/memory/Strawberry.png', flipped: false, matched: false},
      ],
      flippedCards: [] as Card[],
      shuffledCards: [] as Card[],
      isBlocked: false,
      showRules: false,
    }
  },
  mounted() {
    this.shuffledCards = this.shuffleCards();
  },
  methods: {
    startNewGame() {
      // Перемешать карты
      this.shuffledCards = this.shuffleCards();
      // Переворачиваем все карты рубашкой вниз
      for (let card of this.cards) {
        card.flipped = false;
        card.matched = false;
      }
      // Сбрасываем переменные, отвечающие за открытые карты
      this.flippedCards = [];
    },
    shuffleCards() {
      return [...this.cards].sort(() => Math.random() - 0.5);
    },
    flipCard(index: number): void {
      if (this.isBlocked) {
        return;
      }

      const card = this.shuffledCards[index];

      if (card.flipped || card.matched) {
        return;
      }

      card.flipped = true;
      this.flippedCards.push(card);

      if (this.flippedCards.length === 2) {
        this.isBlocked = true;
        const [firstCard, secondCard] = this.flippedCards;

        if (firstCard.fruit === secondCard.fruit) {
          firstCard.matched = true;
          secondCard.matched = true;
          this.flippedCards = [];

          // разблокировать поле после совпадения пары
          this.isBlocked = false;
        } else {
          setTimeout(() => {
            firstCard.flipped = false;
            secondCard.flipped = false;
            this.flippedCards = [];

            // разблокировать поле после несовпадения пары
            this.isBlocked = false;
          }, 500);
        }
      }
      // Check if all cards are matched
      const allMatched = this.shuffledCards.every((card) => card.matched);
      if (allMatched) {
        // const playAgain = window.confirm('Congratulations! You won! 🎉🥳🎊\nDo you want to play again? 🤠😉😁');
        const playAgain = confirm(this.$t('extra.game.memory.playAgain'));
        if (playAgain) {
          this.startNewGame();
        }
      }
    }
  }
})
export default class GameMemory extends Vue {}
</script>

<template>
  <div class="memory">
    <h1>
      <router-link class="back" to="/extra/games" title="Back to Games page"><i class="fa fa-arrow-circle-left"></i>
      </router-link>
      {{ $t('extra.game.memory.name') }}
    </h1>
    <line></line>
    <h2 @click="showRules = !showRules" class="rules">{{ $t('extra.game.memory.rules-h2') }}<i style="color: red"
                                                                                        class="fas fa-hand-pointer"></i></h2>
    <p v-if="showRules">{{ $t('extra.game.memory.rules') }}</p>
      <h2 style="color: deeppink; margin: 0.5rem">{{ $t('extra.game.memory.luck') }}</h2>
      <button @click="startNewGame">{{ $t('extra.game.memory.newGame') }}</button>
    <line></line>
    <div class="memory-game">
      <div class="memory-card" v-for="(card, index) in shuffledCards" :key="index" :data-fruit="card.fruit" @click="flipCard(index)"
           :class="{ 'flipped': card.flipped, 'matched': card.matched }">
        <img :src="card.image" :alt="card.fruit" class="front-face">
        <img src="/assets/memory/Card.png" alt="Back face" class="back-face">
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.memory {
  flex: 1 0 auto;

  .back {
    display: inline-flex;
    text-decoration: none;
    margin-right: 0.1rem;
  }

  h2, h3, p {
    margin: 0;
    padding: 0;
  }
  button {
    background-color: mediumvioletred;
    color: white;
    font-size: 1.4rem;
    border: 1px solid darkmagenta;
    border-radius: 5px;
    padding: 0.4rem 1rem;
    margin-bottom: 0.5rem;
    box-shadow: 3px 3px 4px 0 lightgrey;
    text-align: center;
    cursor: pointer;
    transition: border-color .2s ease-in-out, background-color .2s, box-shadow .2s;
  }
  button:hover {
    color: white;
    border: 1px solid mediumseagreen;
    background-color: lightseagreen;
    box-shadow: 3px 3px 4px 0 lightgrey;
  }
  //button:active {
  //  font-weight: bold;
  //}

  .rules {
    display: inline-flex;
    color: lightseagreen;
    cursor: pointer;
    border: 1px solid transparent;
  }

  .rules:hover, :focus {
    border-bottom: 1px solid lightseagreen;
  }

  .memory-game {
    display: grid;
    margin: 0.5rem auto;
    grid-template-columns: repeat(4, 1fr);
    grid-column-gap: 0.5rem;
    width: 50%;
    justify-content: center;
  }

  .memory-card {
    position: relative;
    width: 12rem;
    height: 12rem;
    margin: 0.4rem;
  }

  .memory-card .front-face,
  .memory-card .back-face {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    transform: scale(1);
    transition: transform 0.5s;
    transform-style: preserve-3d;
  }

  .memory-card .front-face {
    transform: rotateY(180deg);
  }

  .memory-card.flipped .front-face {
    transform: rotateY(0deg);
  }

  .memory-card.flipped .back-face {
    transform: rotateY(-180deg);
  }

  .memory-card.matched {
    opacity: 0.5;
  }

  .front-face,
  .back-face {
    border-radius: 3px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  }

  .front-face {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .back-face {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media(max-width: 1020px) {
    .memory-game {
      margin: 0.4rem auto;
      grid-column-gap: 0.4rem;
      width: 50%;
    }

    .memory-card {
      width: 10rem;
      height: 10rem;
      margin: 0.3rem;
    }
  }

  @media (max-width: 768px) {
    .memory-game {
      margin: 0.3rem auto;
      grid-template-columns: repeat(3, 1fr);
      grid-column-gap: 0.3rem;
      width: 30%;
    }
    .memory-card {
      width: 7rem;
      height: 7rem;
      margin: 0.2rem;
    }
  }
}
</style>