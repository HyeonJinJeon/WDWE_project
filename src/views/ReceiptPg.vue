<template>
  <div>
    <MainSideBar></MainSideBar>
    <i v-b-toggle.sidebar-1 id="sidebar_openBtn" class="fas fa-bars"
       style="position: absolute; z-index:3; margin-top: 30px; margin-left: 30px;"></i>
    <!--    <div class="bgImg">-->
    <img class="receiptImg" src="../assets/images/receipt.jpg">

    <div class="inputs">
      <h3 style="margin-left:240px; font-weight: 600;">영수증</h3>
      <hr style=" margin: 10px; border-style: double; border-width:5px 0 0 0;">
      <div style="margin-left: 10px;">
        <h5 class="grey-text" style=" font-weight: 400; color: black;">상호 정보</h5>
        <p><span style="font-weight: bold">상호명: </span> {{ shopInfo.name }}</p>
        <p><span style="font-weight: bold">상호타입: </span> {{ shopInfo.type }}</p>
        <p><span style="font-weight: bold">전화번호: </span> {{ shopInfo.number }}</p>
        <p><span style="font-weight: bold">주소: </span> {{ shopInfo.geo }}</p>
      </div>
      <div>
        <label for="example-datepicker" class="grey-text" style="margin: 10px; font-weight: 400;">날짜 선택</label> <br>
        <date-picker v-model="date" valueType="format" style="margin-left: 20px;"></date-picker>
        <!--          <b-datepicker id="example-datepicker" v-model="date" class="mb-2 dateSelect"></b-datepicker>-->
      </div>
      <hr style="margin: 10px; border-width:5px 0 0 0;">
      <p style="font-weight: 400; font-size: 20px; margin-left: 20px;">
        <span>No.</span>
        <span style="margin-left: 70px;">이름</span>
        <span style="margin-left: 110px;">메뉴</span>
        <span style="margin-left: 120px;">가격</span>
        <b-icon class="aniBtn" @click="addNum" style="margin-left: 100px;" icon="plus-circle"
                aria-hidden="true"></b-icon>
      </p>
      <hr style="margin: 10px; border-width:5px 0 0 0;">

      <button class="confirmBtn" @click="getReceipt">등록</button>
    </div>

    <div class="receiptAdd">
      <div v-for="index in receiptNums" :key="index" style="margin-bottom:10px; ">
        <p style="position: absolute;margin-left: 30px; margin-top: 5px;">{{ index }}</p>
        <select class="engNameInput" v-model="selectedName[index-1]">
          <option disabled value="">멤버 선택</option>
          <option
              v-for="member in members"
              :key="member"
              v-text="member"
              :value="member">
          </option>
        </select>
        <div class="input-line">
          <input v-model="menu[index-1]" type="text" class="form-control menuInput" placeholder="메뉴"/>
          <input v-model="price[index-1]" type="number" min="0" class="form-control priceInput" placeholder="가격"
                 oninput="javascript: this.value = this.value.replace(/[^0-9]/, '');"/>
          <b-icon class="aniBtn" @click="deleteRow(index-1)" icon="dash-circle"
                  aria-hidden="true"></b-icon>
        </div>
      </div>
    </div>
    <!--    </div>-->

    <div class="shopList">
      <div>
        <h3>식당 리스트<span>
      <b-icon style="margin-left: 10px;" icon="plus-square"
              aria-hidden="true" @click="addShop"></b-icon>
      </span></h3>
      </div>

      <RestaurantList @changeShop="shopInfo=$event"></RestaurantList>
    </div>
  </div>
</template>

<script>


import DatePicker from 'vue2-datepicker';
import 'vue2-datepicker/index.css';
import {firebase} from "@/firebase/firebaseConfig";
import MainSideBar from "@/components/MainSideBar.vue";
import vue from "vue";
import RestaurantList from "@/components/RestaurantList.vue";

export default {
  name: "ReceiptPg",
  components: {RestaurantList, DatePicker, MainSideBar},
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
              console.log('groupData 길이', self.groupData.length)
              console.log('groupInfo.member', self.groupInfo.member.length)
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
      const intAry = self.price.map(Number);
      for (let i = 0; i < self.menu.length; i++) {
        self.list.push({
          name: self.selectedName[i],
          menu: self.menu[i],
          price: intAry[i],
        });
      }
      console.log(self.list);
      self.receiptAdd();
    },
    receiptAdd() {
      const self = this;
      const db = firebase.firestore();
      const timestamp = new Date(self.date + " 00:00:00");
      db.collection('receipt')
          .add({
            shopName: self.shopInfo.name,
            date: timestamp,
            who: self.list,
            groupCode: self.groupInfo.enterCode,
            resUid: self.shopInfo.id,
          })
          .then(() => {
            alert("등록되었습니다.")
            this.$router.go();
          })
          .catch((e) => {          // 실패하면 catch가 실행된다.
            console.log(e)
            alert("저장에 실패했습니다.")
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
.receiptImg {
  /*background-image: url("../assets/images/receipt.jpg");*/
  position: absolute;
  left: 20px;
  height: 1000px;
  width: 950px;
  background-size: cover;
}

.input-line {
  display: flex;
  height: 38px;
  margin-left: 20px;
  width: 210px;
  overflow: auto;
}

.inputs {
  position: absolute;
  width: 600px;
  height: 700px;
  top: 150px;
  left: 200px;
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
  left: 450px;
  margin-top: 10px;
  margin-left: 100px;
}

.aniBtn:active {
  transform: scale(0.9);
}

.engNameInput {
  position: absolute;
  width: 90px;
  margin-left: 110px;
  margin-top: 5px;
}

.menuInput {
  position: absolute;
  width: 120px;
  margin-left: 210px;
}

.priceInput {
  position: absolute;
  width: 120px;
  margin-left: 360px;
}

.confirmBtn {
  position: absolute;
  width: 90px;
  height: 38px;
  margin-left: 500px;
  color: white;
  background-color: #2c3e50;
  border-radius: 5px;
  font-weight: 700;
  top: 780px;
}

.shopList {
  position: relative;
  float: right;
  width: 500px;
  height: 800px;
  right: 200px;
  top: 100px;
  overflow: auto;
}

.receiptAdd {
  position: absolute;
  overflow: auto;
  left: 200px;
  top: 580px;
  width: 600px;
  height: 300px;
}

</style>