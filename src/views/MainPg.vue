<template>
  <div>
    <div class="calendarDiv">
      <FullCalendar style="float: right; width:70%; margin-right: 120px; padding-left: 30px" :options="calendarOptions" />
    </div>
    <v-app>
      <v-main>
    <div class="receiptDiv">
      <div class="main">
      <div class="title">영수증</div>
      <!-- Add Items -->
      <div class="add">
        <input type="add_text">
        <input type="number" class="add_price">
        <i class="add_add-button fas fa-plus-circle"></i>
      </div>
      <!-- Item List -->
      <div class="item-list">
        <p>상호명(데이터바인딩)</p>
        <p>가게 타입(데이터바인딩)</p>
        <p>전화번호(데이터바인딩)</p>
        <p>주소(데이터바인딩)</p>

        <div class="horizontal-line"></div>


        <div class="item">
          <div class="item_name"></div>
          <p>{{dataList}}</p>
          <div class="item_menu">menu(데이터바인딩)</div>
          <div class="item_price">price(데이터바인딩)</div>
        </div>

        <div class="item">
          <div class="item_name">name</div>
          <div class="item_menu">menu</div>
          <div class="item_price">price</div>
        </div>

        <div class="item">
          <div class="item_name">name</div>
          <div class="item_menu">menu</div>
        <div class="item_price">price</div>
      </div>
      </div>
      <!-- Summary -->
      <div class="horizontal-line"></div>
      <div class="sum">
        <div class="sum_total">총 금액: (데이터바인딩) </div>
        <div class="sum_checked-price">나의 금액: (데이터바인딩) </div>
        <div class="sum_unchecked-price"></div>
      </div>
    </div>
    </div>
      </v-main>
    </v-app>
  </div>
</template>

<script>
import {firebase} from "@/firebase/firebaseConfig";
import FullCalendar from '@fullcalendar/vue'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
export default {
  name: "MainPg",
  components: {
    FullCalendar // make the <FullCalendar> tag available
  },
  mounted() {
    this.getDatalist()
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
      dataList: [],
      resName: "",
      resType: "",
      resNumber: "",
      resGeo: "",
      who: [{name: "", menu: "", price: ""}],
      resUid: "",
      groupUid: "",
    }
  },
  methods: {
    handleDateClick: function(arg) {
      // alert('date click! ' + arg.dateStr)
      console.log(arg.dateStr)
      // arg.dateStr.setHours(0,0,0,0)
      console.log(arg.date)



      this.getDatalist(arg)
    },
    getDatalist(arg) {
      const self = this;
      const db = firebase.firestore();
      db.collection("receipt")
          .where("date",'==', arg.dateStr + "00:00:00")
          .get()
          .then((querySnapshot) => {
            if (querySnapshot.size === 0) {
              console.log("111")
              return
            }
            querySnapshot.forEach((doc) => {
              const _data = doc.data();
              _data.id = doc.id
              // const date = new Date(_data.date.seconds * 1000);
              // _data.date = getDate(date);
              self.dataList.push(_data);
              console.log(_data)
              // console.log(self.memore)
            });
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
  }
}
</script>

<style scoped>
.calendarDiv{
  width: 70%;
  float: right;
  margin-top: 130px;
}

.receiptDiv{
  width: 30%;
  float: left;
  background-image: url("../assets/images/receipt.jpg");
  margin-top: 130px;
}
.receipt_top {
  display: block;
  margin: auto;
  width: 500px;
}

.main {
  margin: auto;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 500px;
}

/* Title */
/*.title {*/
/*  font-size: var(--font-large);*/
/*  padding: 10px;*/
/*}*/

/*!* Add Items *!*/
/*.add_button {*/
/*  width: 90%;*/
/*  font-size: var(--font-medium);*/
/*  text-align: right;*/
/*  margin-bottom: 3px;*/
/*}*/

/*.add {*/
/*  width: 90%;*/
/*  font-size: var(--font-regular);*/
/*  margin-bottom: 5px;*/
/*}*/

/*.add_input {*/
/*  height: 30px;*/
/*  width: 47%;*/
/*  border-top: none;*/
/*  border-right: none;*/
/*  border-bottom: 2px solid black;*/
/*  border-left: none;*/
/*  font-size: var(--font-regular);*/
/*}*/

/* Item List */
.item-list {
  display: flex;
  flex-direction: column;
  width: 90%;
  margin-top: 5px;
}

.item-list button {
  width: fit-content;
  border: 2px solid black;
  /*border-radius: var(--size-border-radius);*/
  background-color: transparent;
  /*font-size: var(--font-regular);*/
  margin-bottom: 5px;
}

.item {
  display: flex;
  justify-content: space-between;
}

.item_checkbox {
  margin-right: 10px;
}

.item_name {
  width: 40%;
}
.item_menu{
  width: 30%
}
.item_price {
  width: 20%;
  text-align: right;
  margin-right: 10px;
}

/* Summary */
.horizontal-line {
  width: 90%;
  height: 2px;
  margin: 10px 0;
  background-color: black;
}

.sum {
  display: flex;
  flex-direction: column;
  width: 90%;
}

.sum_item {
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
}

/* Receipt Layout */
.receipt_bottom {
  display: block;
  margin: auto;
  transform: rotate(180deg);
  width: 500px;
}
</style>
