<template>
  <v-app>
    <v-main>
      <div class="backgroundImg">
        <!--        <div style="width: 750px; height: 100vh; margin: 0 auto">-->
        <div class="center">
          <div class="title">
            <p>
              <span style="font-size:100px;">W</span>
              <span style="font-size:50px;">hat </span>
              <span style="font-size:100px;">D</span>
              <span style="font-size:50px;">o </span>
              <span style="font-size:100px;">W</span>
              <span style="font-size:50px;">e </span>
              <span style="font-size:100px;">E</span>
              <span style="font-size:50px;">at</span>
            </p>
          </div>

          <div class="white-bg">
            <p class="h4 text-center mb-4">Sign in</p>
            <label for="idIn" class="grey-text">Your id</label>
            <input type="text" id="idIn" class="form-control" v-model="id">
            <br/>
            <label for="pwIn" class="grey-text">Your password</label>
            <input type="password" id="pwIn" class="form-control" v-model="pw" v-on:keypress.enter.prevent=login>
            <div class="text-center mt-4">
              <button class="btn btn-indigo" type="submit" @click="login" style="color: white;">Login</button>
              <button class="btn btn-indigo" type="submit" @click="goSignUp" style="color: white;">sign up</button>
            </div>
            <!-- Default form login -->
          </div>
        </div>
      </div>

      <!--      </div>-->
    </v-main>
  </v-app>
</template>

<script>
import {firebase} from "@/firebase/firebaseConfig";

export default {
  name: 'Login',
  data() {
    return {
      fbCollection: 'users',
      id: '',
      pw: '',
    }
  },
  methods: {
    login() {
      const self = this;
      firebase.auth().signInWithEmailAndPassword(self.id + '@wdweproject.co.kr', self.pw)
          .then(() => {
            alert('로그인 완료')
            self.$router.push('/mainPg')
          })
          .catch((error) => {
            alert(error)
          })
    },
    goSignUp() {
      this.$router.push('/signUp')

    },

  },
}
</script>

<style scoped>
.backgroundImg {
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("../assets/images/startBg.jpg");
  height: 100vh;
  width: 100%;
  background-size: cover;
  /*padding-top: 30vh;*/
}

.white-bg {
  /*opacity: 0.5;*/
  max-width: 600px;
  align: center;
  background: white;
  border-radius: 8px;
  padding: 60px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: 0 auto;
}

a {
  text-decoration: none;
  color: white;
  font-weight: 600;
}

.title {
  position: fixed;
  top: 25%;
  left: 35%;
  /*left: 35%;*/
  /*top: 10vh;*/
  font-family: 'Roboto';
  font-style: normal;
  color: #FFFFFF;
  text-align: center;
  text-shadow: 0px 8px 4px rgba(0, 0, 0, 0.25);
}

.center {
  /*position: absolute;*/
  width: 700px;
  margin: auto;
  /*text-align: center;*/
}

h2 {
  font-style: normal;
  font-weight: 700;
  font-size: 75px;
  line-height: 59px;
}

hr {
  position: relative;
  top: 30vh;
  height: 3px;
  color: #ffffff;
  float: right;
}

h3 {
  position: relative;
  top: 29vh;
  font-style: normal;
  font-weight: 500;
  font-size: 27px;
  color: white;
  line-height: 59px;
  float: right;
  padding-right: 15px;
}

</style>


