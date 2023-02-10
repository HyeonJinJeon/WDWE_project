<template>
  <div>
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
              <div v-if="resInfo.length !== 0">
                <p><span style="font-weight: bold">상호명: </span> {{resInfo[frontIndex].name}}</p>
                <p><span style="font-weight: bold">상호타입: </span> {{resInfo[frontIndex].type}}</p>
                <p><span style="font-weight: bold">전화번호: </span> {{resInfo[frontIndex].number}}</p>
                <p><span style="font-weight: bold">주소: </span> {{resInfo[frontIndex].geo}}</p>
              </div>
              <div class="horizontal-line"></div>
              <div class="item" style="font-weight: bold">
                <div class="item_name"><p>이름</p></div>
                <div class="item_menu"><p>메뉴</p></div>
                <div class="item_price"><p>가격</p></div>
              </div>
              <div v-for="(whose,i) in whose[frontIndex]" :key="i" class="item">
                <div class="item_name"><p>{{whose.name}}</p></div>
                <div class="item_menu"><p>{{whose.menu}}</p></div>
                <div class="item_price"><p>{{whose.price}}원</p></div>
              </div>
            </div>
            <!-- Summary -->
            <div class="horizontal-line"></div>
            <div class="sum">
              <div class="sum_total">총 금액: {{totalPrice}} </div>
              <div class="sum_checked-price">나의 금액: (데이터바인딩) </div>
              <div class="sum_unchecked-price"></div>
            </div>
          </div>
          <button style="margin-left: 130px; white-space:nowrap;" v-if="onPrev == true" class="btn" @click="prevPage">이전</button>
          <button style="margin-left: 270px; white-space:nowrap;" v-if="onNext == true" class="btn" @click="nextPage">다음</button>
        </div>
        <div class="pagingBtn">

        </div>
      </v-main>
    </v-app>
  </div>
</template>

<script>
export default {
  name: "MainReceipt",
  data(){
    return{
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
  },
  mounted() {
    this.onNextBtn();
  },
  methods: {
    prevPage() {
      this.frontIndex--;
      this.onNext = true;
      if(this.frontIndex == 0){
        this.onPrev= false;
      }
    },
    nextPage() {
      this.frontIndex++;
      this.onPrev = true;
      console.log(this.resInfo.length)
      console.log(this.frontIndex+1)
      if (this.frontIndex + 1 == this.resInfo.length){
        this.onNext = false;
      }
    },
    onNextBtn(){
      if(this.whose.length == 0){
        this.onNext = false;
      }else{
          this.onNext = true;
      }
    },
    sumPrice(){
      for(let i=0; i < this.whose[this.frontIndex].length; i++){
        this.totalPrice = this.totalPrice + this.whose[this.frontIndex].price;
        console.log(this.totalPrice)
      }
    }
  },
}
</script>

<style scoped>

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
