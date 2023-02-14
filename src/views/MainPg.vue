<template>
  <div>
    <div>
      <label for="example-datepicker" class="grey-text" style="margin: 10px; font-weight: 400;">날짜 선택</label> <br>
      <date-picker v-model="startDate" valueType="format" style="margin-left: 20px;"></date-picker>
    </div>
    <div>
      <label for="example-datepicker" class="grey-text" style="margin: 10px; font-weight: 400;">날짜 선택</label> <br>
      <date-picker v-model="finishDate" valueType="format" style="margin-left: 20px;"></date-picker>
    </div>
    <button class="confirmBtn" @click="getPriceDataSum">등록</button>

    <MainSideBar></MainSideBar>
    <div class="calendarDiv">
      <FullCalendar style="float: right; width:70%; margin-right: 120px; padding-left: 30px"
                    :options="calendarOptions"/>
    </div>
    <i v-b-toggle.sidebar-1 id="sidebar_openBtn" class="fas fa-bars" style="margin-top: 30px; margin-left: 30px;"></i>
    <div>
      <MainReceipt ref="onNextBtn" :resInfo="resInfo" :whose="whose" :dataList="dataList" :sumMyPrice="sumMyPrice" :sumMyOneResPrice="sumMyOneResPrice" :sumAllOneResPrice="sumAllOneResPrice" />
    </div>
    <div>
      <p>내가 먹은 총 금액</p>
      <h3>{{setDateMyPrice}}</h3>
    </div>
  </div>
</template>

<script>
import {firebase} from "@/firebase/firebaseConfig";
import FullCalendar from '@fullcalendar/vue'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import MainReceipt from '@/components/MainReceipt.vue';
import MainSideBar from "@/components/MainSideBar.vue";
import DatePicker from 'vue2-datepicker';

export default {
  name: "MainPg",
  components: {
    MainReceipt,
    FullCalendar, // make the <FullCalendar> tag available
    MainSideBar,
    DatePicker,
  },
  mounted() {
    // this.getDatalist()
  },
  data() {
    return {
      userName: this.$store.state.user.displayName,
      calendarOptions: {
        plugins: [dayGridPlugin, interactionPlugin],
        initialView: 'dayGridMonth',
        dateClick: this.handleDateClick,
        events: [
          {title: this.sumMyPrice, date: '2023-02-09'},
          {title: 'event 2', date: '2019-04-02'}
        ]
      },
      eventsArray: Array.from({length: 31}, () => 0),
      dataList: [],  //getDatalist()에서 _data를 push한 값
      resInfo: [],
      resName: "",
      resType: "",
      resNumber: "",
      resGeo: "",
      resUid: "",
      groupUid: "",
      whose: [], //getDatalist()에서 _data의 who만 push한 값
      whoCnt: 0,
      sumMyPrice: 0,
      sumMyOneResPrice: 0,
      sumAllOneResPrice: 0,

      startDate: "",
      finishDate: "",
      setDateData: [],
      setDateMyData: [],
      setDateMyPrice: 0,
    }
  },
  methods: {
    handleDateClick: async function (arg) {
      this.dataList.splice(0, this.dataList.length)
      this.resInfo.splice(0, this.resInfo.length)
      this.whose.splice(0, this.whose.length);
      this.sumMyOneResPrice = 0;
      this.sumAllOneResPrice = 0;
      this.$refs.onNextBtn.frontIndex = 0;
      this.$refs.onNextBtn.onNext = false;
      this.$refs.onNextBtn.onPrev = false;
      this.sumMyPrice = 0;

      // alert('date click! ' + arg.dateStr)
      // console.log(arg.dateStr)
      const date = arg.dateStr;
      const da = new Date();
      console.log(da)
      let start = new Date(date);
      start.setHours(0, 0, 0, 0)
      let finish = new Date(date);
      finish.setHours(23, 59, 59, 999)
      console.log(start)
      console.log(finish)


      await this.getDatalist(start, finish)
      // await this.$refs.onNextBtn.onNextBtn()
      console.log(this.resInfo.length)

    },
    getPriceDataSum() {
      this.setDateData = [];
      this.setDateMyPrice = 0;
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
              console.log(self.setDateData)
              self.setDateMyData.push(self.setDateData[i].who.filter((value) => value.name == self.userName))
              console.log(self.setDateMyData)
              self.setDateMyPrice = self.setDateMyPrice + self.setDateMyData[i][0].price
              console.log(self.setDateMyPrice)
              i++
            });
          })
    },
    getDatalist(start, finish) {
      const self = this;
      const db = firebase.firestore();
      db.collection("receipt")
          .where("date", '>=', start)
          .where("date", '<=', finish)
          .where("groupCode", "==", localStorage.groupCode)
          .get()
          .then(async (querySnapshot) => {
            if (querySnapshot.size === 0) {
              console.log("111")
              self.who = [];
              this.$refs.onNextBtn.onPrev = false;
              this.$refs.onNextBtn.onNext = false;
              return
            }
            querySnapshot.forEach((doc) => {
              const _data = doc.data();
              _data.id = doc.id
              // const date = new Date(_data.date.seconds * 1000);
              // _data.date = getDate(date);
              self.dataList.push(_data);
              console.log(self.dataList)
            });
            for (let i = 0; i < self.dataList.length; i++) {
              await self.getData(i);
              self.whose.push(self.dataList[i].who)
              console.log(self.whose.length)
            }
            await this.sumMyDayPrice();
            console.log(this.sumMyPrice)
            this.sumMyOneResDayPrice();
            this.sumAllOneResDayPrice();
          })
      // const getDate = (date, separated = '-', notFullYear = false) => {
      //   if (date instanceof Date) {
      //     let year = date.getFullYear()
      //     let month = date.getMonth() + 1
      //     let day = date.getDate()
      //
      //     if (notFullYear) year = year.toString().slice(2, 4)
      //     if (month < 10) month = `0${month}`
      //     if (day < 10) day = `0${day}`
      //
      //     return `${year}${separated}${month}${separated}${day}`
      //   } else return '';
      // }
    },
    async getData(i) {
      const self = this;
      const db = firebase.firestore();
      db.collection("restaurant")
          .doc(self.dataList[i].resUid)
          .get()
          .then((snapshot) => {
            self.resInfo.push(snapshot.data());
            console.log(self.resInfo)
          })
      console.log()
      console.log(this.whose.length)
      self.$refs.onNextBtn.onNextBtn();
      // await this.sumMyDayPrice();
      setTimeout(function () {
      }, 3);
    },
    sumMyDayPrice() {
      for (let i = 0; i < this.whose.length; i++) {
        for (let j = 0; j < this.whose[i].length; j++) {
          if (this.whose[i][j].name === this.userName) {
            this.sumMyPrice = this.sumMyPrice + this.whose[i][j].price;
          }
        }
      }
    },
    sumMyOneResDayPrice(){
      this.sumMyOneResPrice = 0;
      const frontIndex = this.$refs.onNextBtn.frontIndex;
      console.log("frontIndex.len", this.whose[frontIndex].length)
      for (let i = 0; i < this.whose[frontIndex].length; i++) {
        if (this.whose[frontIndex][i].name === this.userName) {
          console.log('whose.name',this.whose[frontIndex][i].name)
          this.sumMyOneResPrice = this.sumMyOneResPrice + this.whose[frontIndex][i].price;
          console.log('sumMyOneResPrice',this.sumMyOneResPrice)
        }
      }
    },
    sumAllOneResDayPrice() {
      this.sumAllOneResPrice = 0;
      const frontIndex = this.$refs.onNextBtn.frontIndex;
      console.log("frontIndex.len", this.whose[frontIndex].length)
      for (let i = 0; i < this.whose[frontIndex].length; i++) {
        this.sumAllOneResPrice = this.sumAllOneResPrice + this.whose[frontIndex][i].price;
      }
    }
    // getSumMyDayPrice(start, finish){
    //   const self = this;
    //   const db = firebase.firestore();
    //   console.log("123");
    //   db.collection("receipt")
    //       .where("date",'>=', start)
    //       .where("date", '<=', finish )
    //       // .where("who[]", "==", self.$store.state.user.displayName)
    //       .get()
    //       .then((querySnapshot) => {
    //         if (querySnapshot.size === 0) {
    //           console.log("나의 가격정보 없음")
    //           return
    //         }
    //         querySnapshot.forEach((doc) => {
    //           const _data = doc.data();
    //           _data.id = doc.id
    //           // let i = 0
    //           self.priceList.push(_data.who[1].price);
    //           console.log(self.priceList)
    //           // i++;
    //         });
    //     });
    // },
  }
}
</script>

<style scoped>
.calendarDiv {
  width: 70%;
  float: right;
  margin-top: 130px;
}

</style>
