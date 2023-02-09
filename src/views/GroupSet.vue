<template>
  <v-app>
    <v-main>
      <div class="backgroundImg">
        <div class="black-bg">
          <div class = "center">
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
            <div class="white-bg">
              <p class="h4 text-center mb-4" style="color: black">그룹 설정 <span><i class="fas fa-utensils"></i></span></p>
              <hr>
              {{userInfo}}
              <div style="margin-top:50px;">
                <h3 class="h4 mb-4" style="color: black;"> <b-icon icon="circle-fill" font-scale="0.5"></b-icon>그룹 생성</h3>
<!--                <label for="defaultFormRegisterEmailEx" class="grey-text">그룹 이름</label>-->
                <div class="input-line">
                  <input v-model="groupName" type="text" class="form-control" @change="validateId(groupName)" placeholder="생성할 그룹 이름을 입력해주세요" />
                  <button class="confirmBtn" type="submit">등록</button>
                </div>
              </div>

              <div style="margin-top: 100px;">
                <h3 class="h4 mb-4" style="color: black;"> <b-icon icon="circle-fill" font-scale="0.5"></b-icon>기존 그룹이 있다면</h3>
<!--                <label for="defaultFormRegisterEmailEx" class="grey-text">입장 코드</label>-->
                <div class="input-line">
                  <input v-model="enterCode" type="text" class="form-control" @change="validateId(enterCode)" placeholder="입장코드를 입력해주세요."/>
                  <button class="confirmBtn" type="submit">등록</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </v-main>
  </v-app>
</template>

<script>
import {firebase} from "@/firebase/firebaseConfig";

export default {
  name: "groupSet",
  data(){
    return {
      fbCollection: "users",
      groupName: "",
      enterCode: "",
      userInfo: [],
    }
  },
  mounted() {
    const self = this;
    self.init();
  },
  methods: {
    init() {
      const self = this;
      self.getData();
    },
    getData() {
      console.log(self.$store.state.user.uid)
      const self = this;
      const db = firebase.firestore();
      db.collection(self.fbCollection)
          .doc(self.$store.state.user.uid)
          .get()
          .then((snapshot) => {
            self.userInfo = snapshot.data();
          })
    },
  },

}
</script>

<style scoped>
.backgroundImg {
  background-image: url("../assets/images/startBg.jpg");
  background-color:rgba(0, 0, 0, 0.5);
  height: 100vh;
  width: 100%;
  background-size: cover;
}
.black-bg {
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  padding: 50px;
}
.center {
  /*position: absolute;*/
  width: 700px;
  margin: auto;
  /*text-align: center;*/
}
.title {
  /*text-align: center;*/
  font-style: normal;
  font-weight: 700;
  font-size: 1000px;
  line-height: 59px;
  color: #FFFFFF;

  text-shadow: 0px 8px 4px rgba(0, 0, 0, 0.25);
}
.white-bg {
  max-width: 700px;
  align: center;
  background: white;
  border-radius: 8px;
  padding: 50px;
  position: relative;
  /*top: 25%;*/
  /*left: 24vh;*/
  margin: 0 auto;
}
/*.ImButton {*/
/*  height: 38px !important;*/
/*  white-space: nowrap;*/
/*  margin: 0 0 0 10px !important;*/
/*  display: flex;*/
/*  align-items: center;*/
/*}*/
.input-line {
  display: flex;
  height: 38px;
}
.confirmBtn{
  font-weight: 500;
  font-size: 15px;
  width: 110px;
  height: 38px;
  border: none;
  background-color: #2c3e50;
  border-radius: 2px;
  color: white;
}
</style>
