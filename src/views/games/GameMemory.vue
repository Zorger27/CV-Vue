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
    }
  }
})
export default class GameMemory extends Vue {
}
</script>

<template>
  <div class="memory">
    <h1>
      <router-link class="back" to="/extra/games" title="Back to Games page"><i class="fa fa-arrow-circle-left"></i>
      </router-link>
      {{ $t('extra.game.name') }}
    </h1>
    <line></line>
    <h2 @click="showRules = !showRules" class="rules">{{ $t('extra.game.rules-h2') }}<i style="color: red"
                                                                                        class="fas fa-hand-pointer"></i></h2>
    <p v-if="showRules">{{ $t('extra.game.rules') }}</p>
    <h2 style="color: deeppink; margin: 0.5rem">{{ $t('extra.game.luck') }}</h2>
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