<template>
  <div>
    <MainSideBar></MainSideBar>
    <div class="calendarDiv">
      <FullCalendar style="float: right; width:70%; margin-right: 120px; padding-left: 30px" :options="calendarOptions" />
    </div>
    <i v-b-toggle.sidebar-1 id="sidebar_openBtn" class="fas fa-bars" style="margin-top: 30px; margin-left: 30px;"></i>
    <div>
      <MainReceipt  ref="onNextBtn" :resInfo="resInfo" :whose="whose" :dataList="dataList" />
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

export default {
  name: "MainPg",
  components: {
    MainReceipt,
    FullCalendar, // make the <FullCalendar> tag available
    MainSideBar
  },
  mounted() {
    // this.getDatalist()
  },
  data() {
    return {
      calendarOptions: {
        plugins: [ dayGridPlugin, interactionPlugin ],
        initialView: 'dayGridMonth',
        dateClick: this.handleDateClick,
        events: [
          { title: 'event 1', date: '2019-04-01' },
          { title: 'event 2', date: '2019-04-02' }
        ]
      },
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
    }
  },
  methods: {
    handleDateClick: async function (arg) {
      this.dataList.splice(0, this.dataList.length)
      this.resInfo.splice(0, this.resInfo.length)
      this.whose.splice(0, this.whose.length);
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
    getDatalist(start, finish) {
      const self = this;
      const db = firebase.firestore();
      db.collection("receipt")
          .where("date",'>=', start)
          .where("date", '<=', finish )
          .get()
          .then((querySnapshot) => {
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
            for(let i=0; i<self.dataList.length; i++){
              self.getData(i);
              self.whose.push(self.dataList[i].who)
              console.log(self.whose[0][1])
            }
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
    getData(i) {
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
      this.$refs.onNextBtn.onNextBtn();
      // this.$refs.onNextBtn.sumPrice();
    },
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
