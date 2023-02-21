<template>
  <div>
    <!--    <v-app>-->
    <!--      <v-main class="calMain">-->
    <div class="receiptDiv">
      <div class="main">
        <div class="title">영수증
          <span class="editIcon" v-if="resInfo.length !== 0">
            <b-icon id="sidebar_openBtn" icon="pencil-fill" font-scale="1.5" class="editButton"
                    @click="goEdit"></b-icon>
          </span>
        </div>


        <!-- Add Items -->
        <!-- Item List -->
        <div class="item-list">
          <div v-if="resInfo.length !== 0">
            <p><span style="font-weight: bold; ">상호명: </span> {{ resInfo[frontIndex].name }}</p>
            <p><span style="font-weight: bold; ">상호타입: </span> {{ resInfo[frontIndex].type }}</p>
            <p><span style="font-weight: bold; ">전화번호: </span> {{ resInfo[frontIndex].number }}</p>
            <p><span style="font-weight: bold; ">주소: </span> {{ resInfo[frontIndex].address }}</p>
            <hr>
          </div>
          <div v-if="resInfo.length == 0">
            <p><span style="font-weight: bold; ">상호명: </span></p>
            <p><span style="font-weight: bold; ">상호타입: </span></p>
            <p><span style="font-weight: bold; ">전화번호: </span></p>
            <p><span style="font-weight: bold; ">주소: </span></p>
            <hr>
          </div>
            <div class="item" style="font-weight: bold; margin-top: 5px;">
              <div class="item_name"><p>이름</p></div>
              <div class="item_menu"><p>메뉴</p></div>
              <div class="item_price"><p>가격</p></div>
            </div>
          <div class="receiptScroll" style="overflow: auto; height: 50%;">
            <div v-for="(whose,i) in whose[frontIndex]" :key="i" class="item">
              <div class="item_name"><p>{{ whose.name }}</p></div>
              <div class="item_menu"><p>{{ whose.menu }}</p></div>
              <div class="item_price"><p>{{ whose.price }}원</p></div>
            </div>
          </div>
        </div>
        <!-- Summary -->
        <hr>
        <div class="sum">
          <div class="sum_total">총 금액: {{ sumAllOneResPrice }}</div>
          <div class="sum_checked-price">나의 금액: {{ sumMyOneResPrice }}</div>
          <div class="sum_unchecked-price"></div>
        </div>
      </div>
    </div>
    <div style="position: absolute; top: 90%; height: 10%; width: 50%" v-if="editModal == true">
      <button class="btn" style="position: absolute; margin-left: 20%; white-space:nowrap;" @click="deleteReceipt">삭제하기</button>
      <button class="btn" style="position:absolute; margin-left: 100%; white-space:nowrap;" @click="cancelDelete">취소하기</button>
    </div>
    <div style="position: absolute; top: 90%; width: 50%" v-if="editModal == false">
      <button style="margin-left: 30%; white-space:nowrap;" v-if="onPrev == true" class="btn" @click="prevPage">이전
      </button>
      <button style="margin-left: 100%; white-space:nowrap;" v-if="onNext == true" class="btn" @click="nextPage">다음
      </button>
    </div>
    <!--      </v-main>-->
    <!--    </v-app>-->
  </div>
</template>

<script>
import {firebase} from "@/firebase/firebaseConfig";

export default {
  name: "MainReceipt",
  data() {
    return {
      editModal: false,
      pageNum: 0,
      frontIndex: 0,
      onPrev: false,
      onNext: false,
      totalPrice: 0,
    }
  },
  props: {
    whoCnt: Number,
    resInfo: [],
    whose: [],
    dataList: [],
    sumMyOneResPrice: Number,
    sumAllOneResPrice: Number
  },
  mounted() {
    this.onNextBtn();
  },
  methods: {
    goEdit() {
      this.editModal = true;
    },
    deleteReceipt() {
      const self = this;
      const db = firebase.firestore();
      db.collection("receipt")
          .doc(self.dataList[self.frontIndex].id)
          .delete()
          .then(() => {
            alert("삭제 완료")
            self.$router.go();
          })
    },
    cancelDelete() {
      this.editModal = false;
    },
    prevPage() {
      this.frontIndex--;
      this.onNext = true;
      if (this.frontIndex == 0) {
        this.onPrev = false;
      }
      this.$parent.sumMyOneResDayPrice();
      this.$parent.sumAllOneResDayPrice();
    },
    nextPage() {
      this.frontIndex++;
      this.onPrev = true;
      console.log(this.resInfo.length)
      console.log(this.frontIndex + 1)
      if (this.frontIndex + 1 == this.resInfo.length) {
        this.onNext = false;
      }
      this.$parent.sumMyOneResDayPrice();
      this.$parent.sumAllOneResDayPrice();
    },
    onNextBtn() {
      if (this.whose.length == 0) {
        this.onNext = false;
      } else {
        this.onNext = true;
      }
    },
  },
}
</script>

<style scoped>
.calMain {
  background-color: rgba(255, 255, 255, 0.7);
}

.receiptDiv {
  display: flex;
  /*float: left;*/
  /*margin-top: 130px;*/
  height: 66vh;
}

.main {
  position: relative;
  /*margin-top: 1px;*/
  margin: 0 auto;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 500px;
  background-color: rgba(255, 255, 255, 0.1);
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

.item_menu {
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
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 90%;
  top: 80%;
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

.editButton {
  position: absolute;
  left: 98%;
}
</style>
