<template>
  <div class="backgroundImg">
    <div style="width: 750px; height: 100vh; margin: 0 auto">
      <div class = "title">
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

      <div>
        <div class="textLink">
          <P>아직</P>
           <router-link to="signUp" class="signUpLink">회원가입</router-link>
        </div>
      </div>
      <div class="white-bg">
        <p class="h4 text-center mb-4">Sign in</p>
        <label for="idIn" class="grey-text" >Your id</label>
        <input type="text" id="idIn" class="form-control" v-model = "id">
        <br />
        <label for="pwIn" class="grey-text">Your password</label>
        <input type="password" id="pwIn" class="form-control" v-model = "password" v-on:keypress.enter.prevent=login>
        <div class="text-center mt-4">
          <button class="btn btn-indigo" type="submit" @click="login" style="color: white;">Login</button>
          <button class="btn btn-indigo" type="submit" @click="goMain" style="color: white;">뒤로가기</button>
        </div>
        <!-- Default form login -->
      </div>



    </div>
  </div>
</template>

<script>
// import {firebase} from "@/firebase/firebaseConfig";

export default {
  name: 'login',
  data() {
    return {
      fbCollection: 'users',
    }
  },
  methods: {

  },
}
</script>

<style scoped>
.backgroundImg {
  background-image: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("../assets/images/startBg.jpg");
  height: 100vh;
  width: 100%;
  background-size: cover;
}
.white-bg {
  width: 35%;
  background-color:white;
  opacity: 0.5;
  border-radius: 8px;
  padding: 50px;
  position: absolute;
  top: 30%;
  left: 37%;
  margin: -50px 0 0 -50px;
}
a {
  text-decoration:none;
  color: white;
  font-weight: 600;

}
.title {
  position: absolute;
  /*width: 35%;*/
  /*height: 40%;*/
  /*left: 10px;*/
  top: 10vh;

  /*font-family: 'Roboto';*/
  font-style: normal;
  font-weight: 700;
  font-size: 500px;
  line-height: 59px;
  color: #FFFFFF;

  text-shadow: 0px 8px 4px rgba(0, 0, 0, 0.25);
}
.smallTitle  {
  position: relative;
  top: 6vh;
  padding-bottom: 30px;
  padding-top: 10px;
}
h2{
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
h3{
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
.text-red {
  color: rgba(105, 120, 168, 0.99);
}

.signUpLink {
  position: relative;
  font-size:23px;
  color: white;
  padding:15px;
  top: 65vh;
}

.textLink {
  position: relative;
  top: -4vh;
  text-align: center;
}
</style>

