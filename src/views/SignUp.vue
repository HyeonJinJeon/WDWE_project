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
                <span style="font-size:50px;">at</span>
              </p>
            </div>
            <div class="white-bg">
              <p class="h4 text-center mb-4">회원가입 하기</p>
              <div>
                <label for="defaultFormRegisterNameEx" class="grey-text">이름</label>
                <input v-model="name" type="text" id="defaultFormRegisterNameEx" class="form-control" maxlength=10
                       @change="validateName(name)"/>
              </div>
              <div>
                <label for="defaultFormRegisterNameEx" class="grey-text">영어 이름</label>
                <input v-model="engName" type="text" id="defaultFormRegisterNameEx" class="form-control" maxlength="10"
                       @change="validateEngName(engName)"/>
              </div>
              <div>
                <label for="defaultFormRegisterEmailEx" class="grey-text">아이디</label>
                <div class="input-line">
                  <input v-bind:disabled="closeInput==true" v-model="id" type="text" id="defaultFormRegisterEmailEx"
                         class="form-control" @change="validateId(id)" placeholder="영문자+숫자 조합"/>
                  <button class="btn btn-indigo" type="submit" @click="overlapCheckId(id)"
                          style="color: white; width: 90px; height: 35px;">중복확인
                  </button>
                </div>
              </div>
              <div>
                <label for="defaultFormRegisterConfirmEx" class="grey-text">비밀번호</label>
                <input v-model="password" type="password" id="defaultFormRegisterConfirmEx" class="form-control"
                       @change="validatePw(password)" placeholder="영문자+숫자+특수문자 조합"/>
              </div>
              <div>
                <label for="defaultFormRegisterPasswordEx" class="grey-text">비밀번호 확인</label>
                <input v-model="comparePassword" type="password" id="defaultFormRegisterPasswordEx" class="form-control"
                       @change="passwordConfirm" v-on:keypress.enter.prevent=signup>
                <h10>{{ compare }}</h10>
              </div>
              <div class="text-center mt-4">
                <button class="btn btn-indigo" type="submit" @click="signup" style="color: white;">회원가입</button>
                <button class="btn btn-indigo" type="submit" @click="goMain" style="color: white;">뒤로가기</button>
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
  name: "SignUp",
  data() {
    return {
      fbCollection: "users",
      name: "",
      engName: "",
      // phoneNum: '',
      id: '',
      password: '',
      comparePassword: '',
      // autoHyphen: '',
      compare: '',
      openBtn: false,
      closeInput: false,
      // randomStr: Math.random().toString(36).substring(2, 12)
    }
  },
  methods: {
    signup() {
      const self = this;
      const db = firebase.firestore();
      if ((self.name != '') && (self.engName != '') && (self.id != '') && (self.password != '') && (self.comparePassword != '')) {
        if (self.closeInput == true) {
          firebase.auth().createUserWithEmailAndPassword(this.id + '@wdweproject.co.kr', this.password)
              .then((result) => {
                let user = result.user;
                db.collection(self.fbCollection)
                    .doc(result.user.uid)
                    .set({
                      name: self.name,
                      engName: self.engName,
                      id: self.id,
                    })
                alert('회원가입 완료!');
                user.updateProfile({displayName: self.name})
                // firebase.auth().signOut()
                this.$router.push('/groupSet');
              }).catch(err => {
            console.error(err);
            alert('에러 : ' + err.message)
          })
        } else {
          alert('아이디 중복을 확인해주세요')
          return false
        }
      } else {
        alert('모든 항목을 입력해주세요.')
        return false
      }
    },
    overlapCheckId(id) {
      const self = this;
      const db = firebase.firestore();
      db.collection(self.fbCollection)
          .where("id", "==", id)
          .get()
          .then((querySnapshot) => {
            console.log(querySnapshot.size)
            if (querySnapshot.size >= 1) {
              alert('중복된 아이디가 있습니다')
              self.id = ''
              self.openBtn = false
              self.closeInput = false
            } else {
              if (this.validateId(id) == false) {
                self.openBtn = false
                self.closeInput = false
              } else {
                alert('사용 가능합니다')
                self.openBtn = true
                self.closeInput = true
              }
            }
          })
    },
    validateName(name) {
      const nameRegExp = /^[가-힣]{2,4}$/;
      if (!nameRegExp.test(name)) {
        alert("이름이 올바르지 않습니다.");
        this.name = ''
        return false;
      } else {
        return true; //확인이 완료되었을 때
      }
    },
    validateEngName(engName) {
      const engNameRegExp = /[a-zA-Z]{2,20}$/;
      if (!engNameRegExp.test(engName)) {
        alert("이름이 올바르지 않습니다.");
        this.engName = ''
        return false;
      } else {
        return true; //확인이 완료되었을 때
      }
    },
    validateId(id) {
      let checkId = /[ㄱ-ㅎㅏ-ㅣ가-힣~₩!@#$%^&*()+._=,/?"':;'><]/
      if (id.length < 6) {
        alert("아이디는 최소 6자리 이상입니다.")
        this.id = ''
        return false
      } else if (id.search(/\s/) !== -1) {
        alert("아이디에 공백은 불가능합니다.")
        this.id = ''
        return false
      } else if (checkId.test(id)) {
        alert("올바른 아이디 형식이 아닙니다.");
        this.id = ''
        return false;
      } else {
        return true
      }
    },
    validatePw(pw) {
      let number = pw.search(/[0-9]/g);
      let english = pw.search(/[a-z]/ig);
      let specialCharacter = pw.search(/[`~!@@#$%^&*|₩₩₩'₩";:₩/?]/gi);
      if (pw.length < 8 || pw.length > 20) {
        alert("8자리 ~ 20자리 이내로 입력해주세요.");
        this.password = ''
        return false;
      } else if (pw.search(/\s/) !== -1) {
        alert("비밀번호는 공백 없이 입력해주세요.");
        this.password = ''
        return false;
      } else if (number < 0 || english < 0 || specialCharacter < 0) {
        alert("영문,숫자, 특수문자를 혼합하여 입력해주세요.");
        this.password = ''
        return false;
      } else {
        console.log("통과");
        return true;
      }
    },
    passwordConfirm() {
      if (this.password === this.comparePassword) {
        this.compare = '비밀번호가 일치합니다.'
        return true
      } else {
        this.compare = '비밀번호 일치하지 않습니다.'
        this.comparePassword = ''
      }
    },
    goMain() {
      this.$router.push('/')
    }
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
</style>
