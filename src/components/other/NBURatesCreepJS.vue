<script lang="ts">
import {Options, Vue} from "vue-class-component";
import axios from "axios";

interface ExchangeRate {
  cc: string
  txt: string
  rate: number
  exchangedate: string
}
@Options({
  data() {
    return {
      rates: [] as ExchangeRate[],
      contentWidth: 0,
      marqueeWidth: 0,
      animationOffset: 0,
      isAnimating: false,
      animationFrameId: 0, // Идентификатор для requestAnimationFrame
    };
  },
  mounted() {
    this.fetchExchangeRates().then(() => {
      this.$nextTick(() => {
        const content = this.$refs.marquee.querySelector('.content');
        if (content) {
          const contentHTML = content.innerHTML;
          content.innerHTML += contentHTML;
          this.calculateWidths();
        }
      });
    });
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeUnmount() {
    if (this.animationFrameId) {
      cancelAnimationFrame(this.animationFrameId);
    }
    window.removeEventListener('scroll', this.handleScroll);
    window.removeEventListener('resize', this.calculateWidths);
  },
  watch: {
    speed(newSpeed: number) {
      // Обрабатываем изменение скорости
      this.updateAnimationSpeed(newSpeed);
    }
  },
  methods: {
    async fetchExchangeRates() {
      try {
        const response = await axios.get<ExchangeRate[]>("https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json");
        // Оставляем только выбранные валюты
        // let filteredRates = response.data.filter(rate => ["USD", "EUR", "GBP", "AED", "TRY", "XAU", "XAG", "XPT", "XPD"].includes(rate.cc));
        // this.rates = Array(8).fill(filteredRates).flat();

        this.rates = Array(8).fill(response.data).flat();
        await this.$nextTick(this.calculateWidths);
        this.setupAnimationListener();
      } catch (error) {
        console.error(error);
      }
    },
    calculateWidths() {
      const marquee = this.$refs.marquee as HTMLElement | null;
      const content = marquee?.querySelector(".content") as HTMLElement | null;
      if (marquee && content) {
        this.marqueeWidth = marquee.offsetWidth;
        this.contentWidth = content.offsetWidth;
        // Устанавливаем начальное смещение таким образом, чтобы вторая копия была частично видима в конце первой копии
        this.animationOffset = this.contentWidth;
      }
    },
    setupAnimationListener() {
      window.addEventListener("resize", this.calculateWidths);
      this.animateMarquee();
    },
    animateMarquee() {
      const step = () => {
        // Проверяем, проскроллена ли полностью первая копия содержимого
        if (this.animationOffset >= this.contentWidth) {
          // Если да, сбрасываем смещение на начало
          this.animationOffset = 0;
          // this.animationOffset -= this.contentWidth
        } else {
          // Иначе продолжаем анимацию
          this.animationOffset += this.speed;
        }
        const content = this.$refs.marquee?.querySelector(".content");
        if (content) {
          content.style.transform = `translateX(${-this.animationOffset}px)`;
        }
        if (this.isAnimating) {
          this.animationFrameId = requestAnimationFrame(step);
        }
      };
      this.isAnimating = true;
      requestAnimationFrame(step);
    },
    pauseAnimation() {
      // Приостановка анимации
      this.isAnimating = false;
      if (this.animationFrameId) {
        cancelAnimationFrame(this.animationFrameId);
      }
    },
    handleScroll() {
      const marqueeRect = this.$refs.marquee.getBoundingClientRect();
      if (marqueeRect.top < window.innerHeight && marqueeRect.bottom > 0) {
        if (!this.isAnimating) {
          this.animateMarquee();
        }
      } else {
        if (this.isAnimating) {
          this.pauseAnimation();
        }
      }
    },
    updateAnimationSpeed(newSpeed: number) {
      if (this.speed !== newSpeed) {
        this.speed = newSpeed; // Обновляем скорость в состоянии компонента
        // Перезапускаем анимацию с новой скоростью
        this.pauseAnimation();
        this.animateMarquee();
      }
    },
  },
  props: {
    cripView: {
      type: Boolean,
      required: true
    },
    speed: {
      type: Number,
      default: 1,
    },
  },
  components: {},
})
export default class NBURatesCreepJS extends Vue {}
</script>

<template>
  <div class="inner" v-show="cripView">
    <div ref="marquee" class="marquee">
      <div class="content">
        <div v-for="(rate, index) in rates" :key="`rate-${index}`" class="rates">
          <span class="name">{{ rate.txt }}</span><span class="eql">=</span><span class="price">{{ rate.rate.toFixed(2) }}</span><span class="uah">{{ $t('extra.exchange.uah') }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.inner {
  margin-bottom: 1rem;
  overflow: hidden;
  position: relative;
  .marquee {
    overflow: hidden;
    position: relative;
    .content {
      white-space: nowrap;
      display: inline-block;
      .rates {
        display: inline-flex;
        font-size: 2rem;
        font-style: italic;
        padding: 0.5rem;
        margin: 0.5rem 1rem;
        //border: 1px solid lightgrey;
        //border-radius: 5px;
        //background-color: #f1f1f1;
        .name {
          margin-right: 5px;
          color: black;
          //text-shadow: 4px 4px 8px dodgerblue;
        }
        .eql {
          color: goldenrod;
          font-weight: bold;
          //text-shadow: 2px 2px 4px goldenrod;
        }
        .price {
          margin-right: 5px;
          margin-left: 5px;
          color: black;
          font-weight: bold;
          text-shadow: 1px 1px 2px dodgerblue;
        }
        .uah {
          color: black;
          margin-left: 3px;
          //text-shadow: 2px 2px 4px green;
        }
      }
    }
  }
}

@media(max-width: 1020px) {
  .inner {
    .marquee {
      .content {
        .rates {
          font-size: 1.6rem;
          padding: 0.4rem;
        }
      }
    }
  }
}
@media (max-width: 768px) {
  .inner {
    margin-bottom: 0.5rem;
    .marquee {
      .content {
        .rates {
          font-size: 1.5rem;
          padding: 0.3rem;
        }
      }
    }
  }
}
</style>