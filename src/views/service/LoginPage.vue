<script lang="ts">
import {Options, Vue} from "vue-class-component";
import {Store, mapActions} from "vuex";
import loginStore from "@/store/modules/service/loginStore";

interface IState {
  isAuthenticated: boolean;
}

@Options({
  computed: {
    loginStore() {
      return loginStore
    },
    isAuthenticated() {
      return this.$store.state.isAuthenticated;
    },
  },
  components: {},
  methods: {
    ...mapActions(["login"])
  }
})
export default class LoginPage extends Vue {
  email = "";
  password = "";
  // $store!: Store<any>; // добавляем тип
  $store!: Store<IState>; // добавляем тип
  handleSubmit() {
    this.$store.commit("setUserCredentials", {email: this.email, password: this.password});
    this.$store.dispatch("login", {email: this.email, password: this.password});
    this.$store.commit("IsAuthenticated", true);
    localStorage.setItem('email', this.email);
    this.$router.push('/extra');
    // localStorage.setItem('password', this.password);
    this.$forceUpdate(); // принудительно обновляем компонент
    // this.$router.push('/extra');
    // if (this.$store.state.isAuthenticated) {
    //   console.log("Пользователь авторизован");
    // } else {
    //   console.log("Ошибка авторизации");
    // }
  }
}
</script>

<template>
  <div class="login">
    <h2>{{ $t('login.h1') }}<br>{{ $t('login.h2') }}</h2>
<!--    <h2>{{ $t('login.h2') }}</h2>-->
    <line></line>
    <div v-if="!loginStore.state.isAuthenticated" class="container">
      <!--    <div class="container">-->
      <div class="inner">
        <h1>{{ $t('login.title') }}</h1>
        <form @submit.prevent="handleSubmit">
          <div class="input_field">
            <label>{{ $t('login.email') }}<input v-model="email" type="email"
                                                 placeholder="E-mail, ex.: info@gmail.com"/></label>
          </div>
          <div class="input_field">
            <label>{{ $t('login.password') }}<input v-model="password" type="password"
                                                    placeholder="Password, min. 5 symbols"/></label>
          </div>
          <button class="submit" type="submit">{{ $t('login.submit') }}</button>
        </form>
      </div>
    </div>
    <div v-else>
      <!--      <router-link v-else to="/extra">{{ $t('header.extra') }}</router-link>-->
      <!--      <h1>Hello {{ // loginStore.state.loginStore[0].user }}!!!</h1>-->
      <h1>Hello my dear user!!!</h1>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.login {
  flex: 1 0 auto;

  .container {
    display: flex;
    justify-content: center;
    margin: 1.5rem 0 auto 0;
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

      label {
        font-weight: bold;
        color: dodgerblue;
        font-size: large;
      }

      input[type="email"], input[type="password"] {
        border: 1px solid #e0e0e0;
        font-size: large;
        border-radius: 5px;
        width: 93%;
        padding: 0.6rem;
      }
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
      //text-transform: uppercase;
      //letter-spacing: 2px;
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

        input[type="email"], input[type="password"] {
          border: 1px solid #e0e0e0;
          font-size: medium;
          border-radius: 5px;
          width: 93%;
          padding: 0.6rem;
        }
      }

      .submit {
        font-size: medium;
      }
    }
  }

  @media (max-width: 768px) {
    .inner {
      max-width: 60%;

      h1 {
        font-size: x-large;
      }

      .input_field {
        label {
          font-size: small;
        }

        input[type="email"], input[type="password"] {
          border: 1px solid #e0e0e0;
          font-size: small;
          border-radius: 5px;
          width: 93%;
          padding: 0.6rem;
        }
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
</style>