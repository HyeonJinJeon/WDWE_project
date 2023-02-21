<template>
  <v-app>
    <v-main>
      <div class="backgroundImg">
        <div class="black-bg">
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
                <span style="font-size:50px;">at </span>
                <i class="fas fa-utensils fa-3x"></i>
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
      userInfo: [],
      userGroups: [],
    }
  },
  methods: {
    login() {
      const self = this;
      firebase.auth().signInWithEmailAndPassword(self.id + '@wdweproject.co.kr', self.pw)
          .then(() => {
            self.setStartGroup()
            // self.$router.push('/mainPg')
          })
          .catch((error) => {
            alert(error)
          })
    },
    goSignUp() {
      this.$router.push('/signUp')
    },
    setStartGroup() {
      const self = this;
      console.log("?")
      const db = firebase.firestore();
      db.collection("users")
          .where("id", '==', self.id)
          .get()
          .then((querySnapshot) => {
            if (querySnapshot.size === 0) {
              return
            }
            querySnapshot.forEach((doc) => {
              self.userInfo = doc.data();
              // self.curGroupUid = doc.id
              self.userGroups = self.userInfo.groups;
              // console.log('userGroups 첫번째', self.userGroups[0].enterCode)
            });
            if (self.userInfo.groups == '') {
              alert('그룹이 존재하지 않습니다. 그룹설정 페이지로 이동합니다.')
              this.$router.push('/groupSet')
            } else {
              delete localStorage.groupCode
              localStorage.groupCode = self.userGroups[0].enterCode;
              localStorage.groupName = self.userGroups[0].groupName;
              alert('로그인 완료')
              self.$router.push('/mainPg')
            }
          })
          .catch((error) => {
            alert(error)
          })
    },

  },
}
</script>

<style scoped>
.backgroundImg {
  background-image: url("../assets/images/startBg.jpg");
  background-color: rgba(0, 0, 0, 0.5);
  height: 100vh;
  width: 100%;
  background-size: cover;
  /*padding-top: 30vh;*/
}
.black-bg {
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  padding: 50px;
}
.white-bg {
  position: relative;
  max-width: 400px;
  align: center;
  background: white;
  border-radius: 8px;
  padding: 50px;
  top: 50%;
  /*left: 24vh;*/
  margin: 0 auto;
}

a {
  text-decoration: none;
  color: white;
  font-weight: 600;
}

.title {
  /*text-align: center;*/
  /*padding-top: 10%;*/
  font-style: normal;
  font-weight: 700;
  font-size: 1000px;
  line-height: 59px;
  color: #FFFFFF;

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


