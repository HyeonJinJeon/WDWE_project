<template>
  <v-app>
    <v-main>
      <div class="bgImg">
        <div class="black-bg">
          <MainSideBar></MainSideBar>
          <i v-b-toggle.sidebar-1 id="sidebar_openBtn" class="fas fa-bars"
             style="position: absolute; z-index:3; margin-top: 30px; margin-left: 30px; color:white;"></i>
          <div class="inputs">
            <h3 style="margin-left:43%; font-weight: 600;">영수증</h3>
            <hr class="dashed-lind">
            <div style="margin-left: 10px;">
              <h5 class="grey-text" style=" font-weight: 400; color: black;">상호 정보</h5>
              <p><span style="font-weight: bold">상호명: </span> {{ shopInfo.name }}</p>
              <p><span style="font-weight: bold">상호타입: </span> {{ shopInfo.type }}</p>
              <p><span style="font-weight: bold">전화번호: </span> {{ shopInfo.number }}</p>
              <p><span style="font-weight: bold">주소: </span> {{ shopInfo.address }}</p>
            </div>
            <div>
              <label for="example-datepicker" class="grey-text" style="margin: 10px; font-weight: 400;">날짜 선택</label>
              <br>
              <date-picker v-model="date" valueType="format" style="margin-left: 20px;"></date-picker>
              <!--          <b-datepicker id="example-datepicker" v-model="date" class="mb-2 dateSelect"></b-datepicker>-->
            </div>
            <div>
              <star-rating
                  v-bind:increment="0.5"
                  v-model="rating">
              </star-rating>
            </div>
            <hr class="dashed-lind">
            <p style="font-weight: 400; font-size: 20px;">
              <span style="margin-left: 2%;">No.</span>
              <span style="margin-left: 10%;">이름</span>
              <span style="margin-left: 20%;">메뉴</span>
              <span style="margin-left: 20%;">가격</span>
              <b-icon class="aniBtn" @click="addNum" style="margin-left: 9%;" icon="plus-circle"
                      aria-hidden="true"></b-icon>
            </p>
            <hr class="dashed-lind">
            <div class="receiptAdd">
              <div v-for="index in receiptNums" :key="index" style="margin-bottom:5px; ">
                <p style="position: absolute; margin-left: 5px; margin-top: 5px;">{{ index }}</p>
                <b-select class="engNameInput" v-model="selectedName[index-1]">
                  <option disabled value="">멤버 선택</option>
                  <option
                      v-for="member in members"
                      :key="member"
                      v-text="member"
                      :value="member">
                  </option>
                </b-select>
                <div class="input-line">
                  <b-input v-model="menu[index-1]" type="text" class="form-control menuInput" placeholder=""/>
                  <b-input v-model="price[index-1]" type="number" min="0" class="form-control priceInput" placeholder=""
                           oninput="javascript: this.value = this.value.replace(/[^0-9]/, '');"/>
                  <b-icon class="aniBtn" @click="deleteRow(index-1)" icon="dash-circle"
                          aria-hidden="true" style="margin-left:90%;"></b-icon>
                </div>
              </div>
            </div>
          </div>
          <button class="confirmBtn" @click="getReceipt">등록</button>


          <!--    </div>-->

          <div class="shopList">
            <div>
              <h3 style="color:white; font-weight: 500;">식당 리스트<span>
      <b-icon style="margin-left: 10px;" icon="plus-square"
              aria-hidden="true" @click="addShop"></b-icon>
      </span></h3>
            </div>
            <RestaurantList @changeShop="shopInfo=$event"></RestaurantList>
          </div>
        </div>
      </div>
    </v-main>
  </v-app>

</template>

<script>


import DatePicker from 'vue2-datepicker';
import 'vue2-datepicker/index.css';
import {firebase} from "@/firebase/firebaseConfig";
import MainSideBar from "@/components/MainSideBar.vue";
import vue from "vue";
import RestaurantList from "@/components/RestaurantList.vue";
import StarRating from 'vue-star-rating'

export default {
  name: "ReceiptPg",
  components: {RestaurantList, DatePicker, MainSideBar, StarRating},
  data() {
    return {
      selectedName: [],
      shopName: '',
      date: '',
      menu: [],
      shopInfo: [],
      engName: '',
      price: [],
      list: [],
      groupInfo: [],
      total: 0,
      groupData: [],
      members: [],
      uids: [],
      curGroupUid: '',
      curReceiptUid: '',
      curShop: '',
      receiptNums: 1,
      rating: 0,
      allStar: [],
      sumStar: 0,
      avrStar: 0,
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
      // self.getReceipt();
    },
    getData() {
      const self = this;
      const db = firebase.firestore();
      db.collection('group')
          .where('enterCode', '==', localStorage.groupCode)
          .get()
          .then((querySnapshot) => {
            if (querySnapshot.size === 0) {
              return
            }
            querySnapshot.forEach((doc) => {
              self.groupInfo = doc.data();
              // self.curGroupUid = doc.id
              self.groupData.push(self.groupInfo.member);
              for (let i = 0; i < self.groupInfo.member.length; i++) {
                self.members.push(self.groupData[0][i].name);
                self.uids.push(self.groupData[0][i].uid);
                // console.log('members', self.members)
                // console.log('uids', self.uids)
              }
            });
          })
    },
    getReceipt() {
      const self = this;
      self.allStar = [];
      const intAry = self.price.map(Number);
      const timestamp = new Date(self.date + " 00:00:00");
      for (let i = 0; i < self.menu.length; i++) {
        self.list.push({
          name: self.selectedName[i],
          menu: self.menu[i],
          price: intAry[i],
          date: timestamp,
          shopName: self.shopInfo.name,
        });
      }
      console.log(self.list.menu);
      self.receiptAdd();
    },
    receiptAdd() {
      const self = this;
      const db = firebase.firestore();
      if ((self.shopInfo.name != '') && (self.shopInfo.type != '') && (self.shopInfo.number != '') && (self.shopInfo.address != '') && (self.date != '') && (self.rating != '') && (self.selectedName != '') && (self.menu != '') && (self.price[0] != null)) {
        const timestamp = new Date(self.date + " 00:00:00");
        db.collection('receipt')
            .add({
              shopName: self.shopInfo.name,
              date: timestamp,
              who: self.list,
              groupCode: self.groupInfo.enterCode,
              resUid: self.shopInfo.id,
              star: self.rating,
            })
            .then(async () => {
              await self.getReceiptStar()
              console.log(self.allStar)
              // await self.getAvrStar()
              // console.log(self.sumStar)
              // console.log(self.avrStar)
              // await self.changeResStar()
              alert("등록되었습니다.")
              self.F5();
            })
            .catch((e) => {          // 실패하면 catch가 실행된다.
              console.log(e)
              alert("저장에 실패했습니다.")
            })
      } else {
        alert("모든 항목을 입력해주세요")
        self.list = [];
        // return false
      }


    },
    F5() {
      this.$router.push("/mainPg")
    },
    getReceiptStar() {
      const self = this;
      const db = firebase.firestore();
      db.collection('receipt')
          .where("resUid", "==", self.shopInfo.id)
          .get()
          .then(async (querySnapshot) => {
            if (querySnapshot.size === 0) {
              return
            }
            querySnapshot.forEach((doc) => {
              const _data = doc.data();
              self.allStar.push(_data.star)
              console.log("allStar length ", self.allStar.length)
              self.getAvrStar()
            });
          })
    },
    getAvrStar() {
      const self = this;
      self.sumStar = 0;
      for (let i = 0; i < self.allStar.length; i++) {
        self.sumStar = self.sumStar + self.allStar[i]
        console.log("for문 돌아가니?", self.allStar[i])
      }
      console.log("총합", self.sumStar)
      self.avrStar = self.sumStar / self.allStar.length
      console.log("평균", self.avrStar)
      self.avrStar = self.avrStar.toFixed(2);
      self.changeResStar()
    },
    changeResStar() {
      const self = this;
      const db = firebase.firestore();
      db.collection('restaurant')
          .doc(self.shopInfo.id)
          .set({
            star: self.avrStar
          }, {merge: true})
          .then(() => {
          })
          .catch((e) => {          // 실패하면 catch가 실행된다.
            console.log(e)
            alert("수정에 실패했습니다.")
          })
    },
    addNum() {
      this.receiptNums += 1;
      console.log(this.receiptNums);
    },
    deleteRow(index) {
      console.log(index)
      vue.delete(this.selectedName, index);
      vue.delete(this.menu, index);
      vue.delete(this.price, index);
      // self.selectedName.splice(index);
      // self.menu.splice(index);
      // self.price.splice(index, 1);
      this.receiptNums -= 1;
    },
    addShop() {
      this.$router.push('add/restaurant')
    },

  },
}
</script>


<style scoped>
.bgImg {
  background-image: url("../assets/images/startBg.jpg");
  background-color: rgba(0, 0, 0, 0.5);
  height: 100vh;
  width: 100%;
  background-size: cover;
}

.black-bg {
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.7);
  position: fixed;
}

.dashed-lind {
  border-style: dashed;
}

.input-line {
  display: flex;
  height: 38px;
  /*margin-left: 20px;*/
  /*width: 200px;*/
  overflow: auto;
}

.inputs {
  position: absolute;
  background-color: white;
  width: 30%;
  height: 80vh;
  top: 10%;
  left: 15%;
  border-radius: 15px;
  padding: 12px;
}

/* Summary */
.horizontal-line {
  /*width: 90%;*/
  height: 2px;
  margin: 10px;
  background-color: black;
}

.aniBtn {
  position: absolute;
  z-index: 3;
  margin-top: 5px;
}

.aniBtn:active {
  transform: scale(0.9);
}

.engNameInput {
  position: absolute;
  width: 25%;
  margin-left: 10%;
  /*margin-top: 5px;*/
}

.menuInput {
  position: absolute;
  width: 25%;
  margin-left: 36%;
}

.priceInput {
  position: absolute;
  width: 25%;
  margin-left: 62%;
}

.confirmBtn {
  position: absolute;
  width: 90px;
  height: 38px;
  margin-left: 38%;
  color: white;
  background-color: #2c3e50;
  border-radius: 5px;
  font-weight: 700;
  top: 91vh;
}

.shopList {
  position: relative;
  background-color: rgba(255, 255, 255, 0.2);
  float: right;
  width: 500px;
  height: 80vh;
  right: 200px;
  top: 10%;
  overflow: auto;
  padding: 20px;
  border-radius: 15px;
}

.receiptAdd {
  position: absolute;
  overflow: auto;
  left: 15px;
  /*top: 575px;*/
  width: 98%;
  height: 18vh;
}

</style>
