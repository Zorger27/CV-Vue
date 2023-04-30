<script lang="ts">
import {Options, Vue} from "vue-class-component";
import {Store, mapGetters, mapActions} from "vuex";
import loginStore from "@/store/modules/service/loginStore";
import {IState} from "@/store/types";
import Extra from "@/views/extra/ExtraView.vue";

@Options({
  computed: {
    loginStore() {
      return loginStore
    },
  },
  created() {
    const email = localStorage.getItem('email');
    const password = localStorage.getItem('password');

    if (email && password) {
      this.login({email, password});
    }
  },
  components: {Extra},
  methods: {
    ...mapGetters(["isAuthenticated", "getCurrentUser"]),
    currentUser() {
      return this.getCurrentUser || {};
    },
    ...mapActions(["login"])
  }
})
export default class LoginPage extends Vue {
  $store!: Store<IState>; // добавляем тип
  email = "";
  password = "";
  emailError = "";
  passwordError = "";
  showPassword = false;
  checkPassword() {
    if (this.password.length < 5) {
      this.passwordError = `${this.$t('login.passwordError')}`;
    } else {
      this.passwordError = "";
    }
  }
  checkEmail() {
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.email)) {
      this.emailError = `${this.$t('login.emailError')}`;
    } else {
      this.emailError = "";
    }
  }
  handleSubmit() {
    // Проверяем, есть ли ошибки ввода данных
    if (!this.emailError && !this.passwordError) {
      // Отправка данных в хранилище
      this.$store.dispatch('login', {email: this.email, password: this.password});
      // Если авторизация прошла успешно, сохраняем данные пользователя
    } else
      console.log('Ошибка в e-mail и/или password');

    const expiration = new Date().getTime() + 24 * 60 * 60 * 1000; // время через 1 день

    // если пользователь авторизован, перенаправляем на страницу extra
    if (this.$store.getters.isAuthenticated) {
      console.log("Пользователь авторизован");
      // сохраняем email и password в локальном хранилище с временной меткой
      localStorage.setItem('email', this.email);
      localStorage.setItem('password', this.password);
      localStorage.setItem('expiration', expiration.toString());
      this.$router.push('/extra');
      // this.$emit('show-extra-content', true) // вызов события
    } else {
      console.log("Ошибка авторизации");
    }

    // устанавливаем таймер для удаления данных из локального хранилища
    setTimeout(() => {
      localStorage.removeItem('email');
      localStorage.removeItem('password');
      localStorage.removeItem('expiration');
      location.reload();
    }, 48 * 60 * 60 * 1000);
  }
};
</script>

<template>
  <div class="login">
    <h1 v-if="!loginStore.state.isAuthenticated">{{ $t('login.h2') }}</h1>
    <line v-if="!loginStore.state.isAuthenticated"></line>
    <div v-if="!loginStore.state.isAuthenticated" class="container">
      <div class="inner">
        <h1>{{ $t('login.title') }}</h1>
        <form @submit.prevent="handleSubmit">
          <div class="input_field">
            <label>{{ $t('login.email') }}
              <input
                v-model="email"
                type="email"
                @input="checkEmail"
                :placeholder="$t('login.email-plc')"
              />
            </label>
          </div>
          <p v-if="emailError" class="error-message">{{ emailError }}</p>
          <div class="input_field">
            <label>{{ $t('login.password') }}
              <input
                v-model="password"
                :type="showPassword ? 'text' : 'password'"
                @input="checkPassword"
                :placeholder="$t('login.password-plc')"
              />
              <span @click="showPassword = !showPassword">
                <i :class="showPassword ? 'far fa-eye' : 'far fa-eye-slash'"></i>
              </span>
            </label>
          </div>
          <p v-if="passwordError" class="error-message">{{ passwordError }}</p>
          <button class="submit" type="submit">{{ $t('login.submit') }}</button>
        </form>
      </div>
    </div>
    <div v-else>
      <Extra></Extra>
<!--      <h1>-->
<!--        {{ $t('login.h3') }}-->
<!--        <span class="currentUser">-->
<!--          {{ loginStore.state.currentUser.name }} {{ loginStore.state.currentUser.surname }}-->
<!--        </span>!!!-->
<!--      </h1>-->
<!--      <line></line>-->
    </div>
  </div>
</template>

<style lang="scss" scoped>
.login {
  flex: 1 0 auto;

  .container {
    display: flex;
    justify-content: center;
    margin: 1rem 0 auto 0;
  }

  .inner {
    max-width: 33rem;

    h1 {
      font-size: xxx-large;
    }

    width: 100%;
    background: #fff;
    padding: 2rem;
    border: 1px solid #ddd;
    border-radius: 5px;
    box-shadow: 4px 4px 10px lightgrey;

    input:active, :focus {
      outline: 1px solid lightskyblue;
      outline-offset: 0;
      box-shadow: 3px 3px 4px 0 lightgrey;
    }

    .input_field {
      margin-bottom: 0.6rem;
      position: relative;

      label {
        font-weight: bold;
        color: dodgerblue;
        font-size: large;
      }

      input[type="email"], input[type="password"], input[type="text"] {
        border: 1px solid lightskyblue;
        font-size: large;
        border-radius: 5px;
        //background-clip: text;
        width: 93%;
        padding: 0.6rem;
      }

      span {
        position: absolute;
        top: 50%;
        right: 1.2rem;
        color: darkred;
        //transform: translateY(-50%);
        cursor: pointer;
      }
    }

    .error-message {
      font-size: medium;
      font-style: italic;
      color: red;
      margin: -0.2rem auto 1rem auto;
    }

    .submit {
      border: 1px solid darkred;
      margin-top: 1rem;
      margin-left: 0.6rem;
      padding: 0.6rem 0;
      text-align: center;
      width: 43%;
      outline: none;
      background-color: hsla(0, 100%, 50%, 1);
      background-image: radial-gradient(at 40% 20%, hsla(28, 100%, 74%, 1) 0px, transparent 50%),
      radial-gradient(at 80% 0%, hsla(189, 100%, 56%, 1) 0px, transparent 50%),
      radial-gradient(at 0% 50%, hsla(355, 100%, 93%, 1) 0px, transparent 50%),
      radial-gradient(at 76% 52%, hsla(340, 100%, 76%, 1) 0px, transparent 50%),
      radial-gradient(at 0% 100%, hsla(22, 100%, 77%, 1) 0px, transparent 50%),
      radial-gradient(at 79% 100%, hsla(242, 100%, 70%, 1) 0px, transparent 50%),
      radial-gradient(at 0% 0%, hsla(343, 100%, 76%, 1) 0px, transparent 50%);
      color: white;
      font-weight: bold;
      font-size: large;
      border-radius: 25px;
      cursor: pointer;
    }

    .submit:hover {
      box-shadow: none;
      background: linear-gradient(to bottom, rgba(253, 253, 253, 0.5), rgba(72, 72, 171, 0.5));
      color: darkblue;
      border: 1px solid darkslateblue;
      outline: none;
    }
  }

  @media(max-width: 1020px) {
    .inner {
      max-width: 50%;

      h1 {
        font-size: xx-large;
      }

      .input_field {
        label {
          font-size: medium;
        }

        input[type="email"], input[type="password"], input[type="text"] {
          font-size: medium;
          width: 93%;
          padding: 0.6rem;
        }

        span {
          top: 52%;
          right: 1rem;
          font-size: large;
        }
      }

      .error-message {
        font-size: small;
        margin: -0.2rem auto 1rem auto;
      }

      .submit {
        font-size: medium;
      }
    }
  }

  @media (max-width: 768px) {
    .inner {
      max-width: 75%;
      h1 {
        font-size: x-large;
      }

      .input_field {
        label {
          font-size: small;
        }

        input[type="email"], input[type="password"], input[type="text"] {
          font-size: small;
          width: 93%;
          padding: 0.6rem;
        }

        span {
          top: 55%;
          right: 0.5rem;
          font-size: medium;
        }
      }

      .error-message {
        font-size: x-small;
        margin: -0.2rem auto 1rem auto;
      }

      .submit {
        font-size: small;
      }
    }
    //<!--    <h3>Иконка "вход": <i class="fas fa-sign-in-alt"></i></h3>-->
    //<!--    <h3>Иконка "выход": <i class="fas fa-sign-out-alt"></i></h3>-->
    //<!--    <h1>Login, please...</h1>-->
  }
}

//.fa-eye-slash::before, .fa-eye::before {
//  transform: translateZ(0);
//  color: green;
//}

</style>