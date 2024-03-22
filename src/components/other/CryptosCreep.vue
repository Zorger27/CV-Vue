<script lang="ts">
import {Options, Vue} from "vue-class-component";
import axios from "axios";

interface CryptoResponse {
  [id: string]: {
    usd: number;
  };
}
@Options({
  data() {
    return {
      cryptos: [
        { id: 'bitcoin', name: 'Bitcoin', price: 0 },
        { id: 'ethereum', name: 'Ethereum', price: 0 },
        { id: 'litecoin', name: 'Litecoin', price: 0 },
        { id: 'tether', name: 'Tether', price: 0 },
        { id: 'avalanche-2', name: 'Avalanche', price: 0 },
        { id: 'filecoin', name: 'Filecoin', price: 0 },
        { id: 'bitcoin-cash', name: 'Bitcoin Cash', price: 0 },
        { id: 'binancecoin', name: 'BNB', price: 0 },
        { id: 'dogecoin', name: 'Dogecoin', price: 0 },
        { id: 'ripple', name: 'XRP', price: 0 },
        { id: 'cardano', name: 'Cardano', price: 0 },
        { id: 'polkadot', name: 'Polkadot', price: 0 },
        { id: 'chainlink', name: 'Chainlink', price: 0 },
        { id: 'stellar', name: 'Stellar', price: 0 },
      ],
      contentWidth: 0,
      marqueeWidth: 0,
      animationOffset: 0,
      isAnimating: false,
      animationFrameId: 0, // Идентификатор для requestAnimationFrame
    };
  },
  mounted() {
    this.fetchCryptoRates().then(() => {
      this.$nextTick(() => {
        const content = this.$refs.marquee.querySelector('.content');
        if (content) {
          // Дублируем содержимое
          const contentHTML = content.innerHTML;
          content.innerHTML += contentHTML;
          // Пересчитываем ширину после дублирования
          this.calculateWidths();
        }
      });
    });
    // Следим за событием прокрутки, чтобы приостанавливать и возобновлять анимацию
    window.addEventListener('scroll', this.handleScroll);

    // document.addEventListener('touchstart', this.handleDocumentTouch, { passive: false });
    // document.addEventListener('touchmove', this.handleDocumentTouch, { passive: false });
    // document.addEventListener('touchend', this.handleDocumentTouch, { passive: false });
    // document.addEventListener('touchcancel', this.handleDocumentTouch, { passive: false });
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
    async fetchCryptoRates() {
      try {
        const response = await axios.get<CryptoResponse>('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,litecoin,tether,avalanche-2,filecoin,bitcoin-cash,binancecoin,dogecoin,ripple,cardano,polkadot,chainlink,stellar&vs_currencies=usd');

        // Преобразуем ответ от API в массив данных о криптовалютах
        const cryptoArray = Object.keys(response.data).map((id: string) => ({
          id,
          name: this.cryptos.find((c: { id: string; }) => c.id === id)?.name || '',
          price: response.data[id].usd,
        }));

        // this.cryptos = cryptoArray;
        // Умножаем данные, создавая новый массив из 8 копий каждого элемента
        this.cryptos = [];
        for (let i = 0; i < 8; i++) {
          this.cryptos = this.cryptos.concat(cryptoArray.map((crypto: { id: string; name: string; price: number }) => ({
            ...crypto,
          })));
        }

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
    // handleDocumentTouch(event: TouchEvent) {
    //   // Если событие касания произошло внутри вашего элемента бегущей строки, предотвращаем его воздействие
    //   const marqueeElement = this.$refs.marquee as HTMLElement;
    //   if (marqueeElement && marqueeElement.contains(event.target as Node)) {
    //     // event.stopPropagation();
    //     event.preventDefault();
    //   }
    // },
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
export default class CryptosCreep extends Vue {}
</script>

<template>
  <div class="inner" v-show="cripView">
    <div ref="marquee" class="marquee">
      <div class="content">
        <div v-for="(crypto) in cryptos" :key="crypto.id" class="crypto">
          <span class="name">{{ crypto.name }}</span><span class="eql">=</span><span class="price">{{ crypto.price }}</span><span class="usd">{{ $t('extra.exchange.usd') }}</span>
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
      .crypto {
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
          text-shadow: 1px 1px 2px green;
        }
        .usd {
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
        .crypto {
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
        .crypto {
          font-size: 1.5rem;
          padding: 0.3rem;
        }
      }
    }
  }
}
</style>