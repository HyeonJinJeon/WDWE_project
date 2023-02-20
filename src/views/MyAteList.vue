<template>
  <div class="bgImg">
    <div class="black-bg">
      <MainSideBar></MainSideBar>
      <i v-b-toggle.sidebar-1 id="sidebar_openBtn" class="fas fa-bars"
         style="margin-top: 30px; margin-left: 30px; color: white"></i>
      <div>
        <label for="example-datepicker" class="grey-text" style="margin: 10px; font-weight: 400;">시작일 선택</label> <br>
        <date-picker v-model="startDate" valueType="format" style="margin-left: 20px;"></date-picker>
        <label for="example-datepicker" class="grey-text" style="margin: 10px; font-weight: 400;">종료일 선택</label> <br>
        <date-picker v-model="finishDate" valueType="format" style="margin-left: 20px;"></date-picker>
      </div>
      <button class="confirmBtn" @click="getPriceDataSum">검색</button>
      <div class="tableDiv">
        <table class="table " border="1" style="margin-left: auto; margin-right: auto;">
          <thead>
          <tr>
            <th>날짜</th>
            <th>상호명</th>
            <th>이름</th>
            <th>메뉴명</th>
            <th>금액</th>
          </tr>
          </thead>
          <tbody>
          <template v-for="data in setDateMyData">
            <tr v-for="(cnt,index) in data" :key=index>
              <td>{{ dateFormat(new Date(cnt.date.seconds * 1000)) }}</td>
              <td>{{ cnt.shopName }}</td>
              <td>{{ cnt.name }}</td>
              <td>{{ cnt.menu }}</td>
              <td>{{ cnt.price }}원</td>
            </tr>
          </template>
          <tr>
            <td style="font-weight: bold; font-size: 20px;">총액</td>
            <td></td>
            <td></td>
            <td></td>
            <td style="font-weight: bold; font-size: 20px;">{{ setDateMyPrice }}원</td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import {firebase} from "@/firebase/firebaseConfig";
import DatePicker from 'vue2-datepicker';
import MainSideBar from '@/components/MainSideBar.vue';

export default {
  name: "MyAteList",
  components: {
    DatePicker, MainSideBar
  },
  data() {
    return {
      userName: this.$store.state.user.displayName,
      startDate: "",
      finishDate: "",
      setDateData: [],
      setDateMyData: [],
      setDateMyPrice: 0,
    }
  },
  methods: {
    dateFormat(date) {
      const dateFormat = date.getFullYear() + '-' + (date.getMonth() + 1) + '-'
          + date.getDate()
      return dateFormat
    },
    getPriceDataSum() {
      console.log(
          this.$store.state.user.displayName
      )
      this.setDateData = [];
      this.setDateMyData = [];
      this.setDateMyPrice = 0;
      if (this.startDate == "") {
        alert("시작일을 선택해주세요")
      } else {
        if (this.finishDate == '') {
          alert("종료일을 선택해주세요")
        }
      }
      let start = new Date(this.startDate)
      start.setHours(0, 0, 0, 0)
      console.log(start)
      let finish = new Date(this.finishDate);
      finish.setHours(23, 59, 59, 999)
      console.log(finish)
      const self = this;
      const db = firebase.firestore();
      db.collection("receipt")
          .where("date", '>=', start)
          .where("date", '<=', finish)
          .where("groupCode", "==", localStorage.groupCode)


          // .where("who.name", "==", self.userName)
          .get()
          .then(async (querySnapshot) => {
            if (querySnapshot.size === 0) {
              console.log("그동안 먹은거 없음")
              return
            }
            let i = 0
            querySnapshot.forEach((doc) => {
              const _data = doc.data();
              // _data.id = doc.id
              // const date = new Date(_data.date.seconds * 1000);
              // _data.date = getDate(date);
              self.setDateData.push(_data);
              console.log("설정한 그룹의 기간 내 모든 데이터", self.setDateData)
              self.setDateMyData.push(self.setDateData[i].who.filter((value) => value.name == self.userName))
              // [[{name: james, price: 10000},], [{name: james, price: 20000},{name: james, price: 12300}]]
              console.log("설정한 그룹의 기간 내 모든 나의 데이터", self.setDateMyData)

              for (let j = 0; j < self.setDateMyData[i].length; j++) {
                self.setDateMyPrice = self.setDateMyPrice + self.setDateMyData[i][j].price
              }
              console.log("설정한 그룹의 기간 내 내가 먹은 총 금액", self.setDateMyPrice)
              i++
            });
          })
    },
  }
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
.confirmBtn {
  width: 90px;
  height: 38px;
  color: white;
  background-color: #2c3e50;
  border-radius: 5px;
  font-weight: 700;
}

.tableDiv {
  position: absolute;
  /*float: right;*/
  width: 1300px;
  height: 80vh;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 7px;
  padding: 20px;
  right: 50px;
  top: 100px;
  overflow: auto;
  /*margin-right: 0;*/
}
</style>
