<template>
  <div>
    <div class="bgImg">
      <!--    <img src="../assets/images/receipt.jpg">-->
      <div>
        <h3 style="position: absolute; top: 160px; left:450px; font-weight: 600; ">영수증</h3>
      </div>
      <div class="inputs">
        <hr style="margin: 10px; border-style: double; border-width:5px 0 0 0;">

        <label class="grey-text" style="margin:10px; font-weight: 400; color: black;">상호 명</label>
        <div class="input-line">
          <input v-model="shopName" type="text" class="form-control" placeholder=""/>
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
          <!--          <button style="margin-left: 130px;">-->

          <!--          </button>-->
        </p>
        <hr style="margin: 10px; border-width:5px 0 0 0;">
        <!--        <div class="input-line engNameInput">-->
        <!--          <input v-model="engName" type="text" class="form-control" placeholder="영어이름"/>-->
        <!--        </div>-->
        <select class="engNameInput" v-model="selectedName">
          <option disabled value="">멤버 선택</option>
          <option
              v-for="member in members"
              :key="member"
              v-text="member"
              :value="member">
          </option>
        </select>
        <div class="input-line menuInput">
          <input v-model="menu" type="text" class="form-control" placeholder="메뉴"/>
        </div>
        <div class="input-line priceInput">
          <input v-model="price" type="text" class="form-control" placeholder="가격"/>
        </div>
        <b-icon class="aniBtn" @click="receiptAdd(selectedName)" style="margin-left: 100px;" icon="plus-circle"
                aria-hidden="true"></b-icon>
      </div>
    </div>
  </div>
</template>

<script>


import DatePicker from 'vue2-datepicker';
import 'vue2-datepicker/index.css';
import {firebase} from "@/firebase/firebaseConfig";

export default {
  name: "ReceiptPg",
  components: {DatePicker},
  data() {
    return {
      selectedName: '',
      shopName: '',
      date: '',
      menu: '',
      engName: '',
      price: '',
      lists: [
        //initial data
        {engName: 'raina', menu: '돼지고기김치찜', price: 8000},
      ],
      groupInfo: [],
      total: 0,
      groupData: [],
      members: [],
      uids: [],
      curGroupUid: '',
      curReceiptUid: '',
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
      const self = this;
      const db = firebase.firestore();
      db.collection('group')
          .where('groupName', '==', localStorage.groupName)
          .get()
          .then((querySnapshot) => {
            if (querySnapshot.size === 0) {
              return
            }
            querySnapshot.forEach((doc) => {
              self.groupInfo = doc.data();
              self.curGroupUid = doc.id
              self.groupData.push(self.groupInfo.member);
              console.log('groupData', self.groupData)
              for (let i = 0; i < self.groupData.length; i++) {
                self.members.push(self.groupData[0][i].name);
                self.uids.push(self.groupData[0][i].uid);
                console.log('members', self.members)
              }
            });
          })
    },
    receiptAdd(selectedName) {
      const self = this;
      const db = firebase.firestore();
      const timestamp = new Date(self.date + " 00:00:00");
      const _data = {
        menu: self.menu,
        name: selectedName,
        price: self.price,
      }
      db.collection('receipt')
          .add({
            date: timestamp,
            who: firebase.firestore.FieldValue.arrayUnion(_data),
            groupUid: self.curGroupUid,
            resUid: '',
          })
          .then(() => {
            alert("저장되었습니다")
            location.reload();
          })
          .catch((e) => {          // 실패하면 catch가 실행된다. e는 errer의 약자
            console.log(e)
            alert("저장에 실패했습니다.")
          })
    },
  },
}
</script>


<style scoped>
.bgImg {
  background-image: url("../assets/images/receipt.jpg");
  /*height: 8px;*/
  width: 1000px;
  background-size: cover;
}

.input-line {
  display: flex;
  height: 38px;
  margin-left: 20px;
  width: 210px;
}

.inputs {
  position: absolute;
  width: 600px;
  height: 600px;
  top: 200px;
  left: 200px;
}

.shoplists {
  position: relative;
  width: 500px;
  height: 500px;
  display: block;
  float: right;
  /*top: 200px;*/
  /*left: 200px;*/
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
  left: 450px;
  margin-top: 10px;
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
  margin-left: 250px;
}

.priceInput {
  position: absolute;
  width: 120px;
  margin-left: 400px;
}

</style>