<script lang="ts">
import {Options, Vue} from "vue-class-component";

@Options({components: {},})
export default class LoginPage extends Vue {
}
</script>

<template>
  <div class="login">
    <h2>{{$t ('login.h1')}}</h2>
    <line></line>
    <!--    <h3>Иконка "вход": <i class="fas fa-sign-in-alt"></i></h3>-->
    <!--    <h3>Иконка "выход": <i class="fas fa-sign-out-alt"></i></h3>-->
    <!--    <h1>Login, please...</h1>-->
    <div class="container">
      <div class="inner">
        <h1>{{$t ('login.title')}}</h1>
        <form action="" onsubmit="">
          <div class="input_field">
            <label>{{$t ('login.email')}}<input type="email" placeholder="E-mail, ex.: info@gmail.com"/></label>
          </div>
          <div class="input_field">
            <label>{{$t ('login.password')}}<input type="password" placeholder="Password, min. 5 symbols"/></label>
          </div>
          <button class="submit" type="submit">{{$t ('login.submit')}}</button>
        </form>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.login {
  flex: 1 0 auto;
.container {
  display: flex;
  justify-content: center;
  margin: 5% 0 auto 0;
}
  .inner {
    //position: absolute;
    //top: 50%;
    //left: 50%;
    //transform: translate(-50%, -50%);
    max-width: 420px;
    width: 100%;
    background: #fff;
    padding: 2rem;
    border: 1px solid #ddd;
    border-radius: 5px;
    box-shadow: 4px 4px 10px lightgrey;

    input:active,:focus{
      outline: 1px solid lightskyblue;
      outline-offset: 0;
      box-shadow: 3px 3px 4px 0 lightgrey;
    }

    .input_field {
      margin-bottom: 0.6rem;
      label {
        font-weight: bold;
        color: dodgerblue;
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
      background-color:hsla(0, 100%, 50%, 1);
      background-image:
          radial-gradient(at 40% 20%, hsla(28,100%, 74%,1) 0px, transparent 50%),
          radial-gradient(at 80% 0%, hsla(189,100%,56%,1) 0px, transparent 50%),
          radial-gradient(at 0% 50%, hsla(355,100%, 93%, 1) 0px, transparent 50%),
          radial-gradient(at 76% 52%, hsla(340,100%,76%, 1) 0px, transparent 50%),
          radial-gradient(at 0% 100%, hsla(22,100%, 77%, 1) 0px, transparent 50%),
          radial-gradient(at 79% 100%, hsla(242, 100%, 70%, 1) 0px, transparent 50%),
          radial-gradient(at 0% 0%, hsla(343,100%, 76%, 1) 0px, transparent 50%);
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
    @media (max-width: 768px) {
      max-width: 240px;
      .input_field {
        input[type="email"], input[type="password"] {
          border: 1px solid #e0e0e0;
          font-size: medium;
          border-radius: 5px;
          width: 93%;
          padding: 0.6rem;
        }
      }
    }
  }
}
</style>