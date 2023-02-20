<template>
  <div>
        <div class="receiptDiv">
          <div class="main">
            <div class="title">영수증</div>
            <div class="editIcon" v-if="resInfo.length !== 0">
              <b-icon id="sidebar_openBtn" icon="pencil-fill" font-scale="1.5" class="editButton" @click="goEdit"></b-icon>
            </div>
            <!-- Add Items -->
            <!-- Item List -->
            <div class="item-list">
              <div v-if="resInfo.length !== 0">
                <p><span style="font-weight: bold; ">상호명: </span> {{resInfo[frontIndex].name}}</p>
                <p><span style="font-weight: bold; ">상호타입: </span> {{resInfo[frontIndex].type}}</p>
                <p><span style="font-weight: bold; ">전화번호: </span> {{resInfo[frontIndex].number}}</p>
                <p><span style="font-weight: bold; ">주소: </span> {{resInfo[frontIndex].address}}</p>
                <div class="horizontal-line"></div>
              </div>
              <div v-if="resInfo.length == 0">
                <p><span style="font-weight: bold; ">상호명: </span></p>
                <p><span style="font-weight: bold; ">상호타입: </span></p>
                <p><span style="font-weight: bold; ">전화번호: </span></p>
                <p><span style="font-weight: bold; ">주소: </span></p>
                <div class="horizontal-line"></div>
              </div>
              <div class="item" style="font-weight: bold; margin-top: 50px;">
                <div class="item_name"><p>이름</p></div>
                <div class="item_menu"><p>메뉴</p></div>
                <div class="item_price"><p>가격</p></div>
                <b-icon class="aniBtn" @click="addNum" style="margin-left: 10px;" icon="plus-circle"
                        aria-hidden="true"></b-icon>
              </div>
              <p>------------------------------------------------------------------------</p>
              <div v-if="edit==false">
                <div v-for="(whose,i) in whose[frontIndex]" :key="i" class="item">
                  <div class="item_name"><p>{{whose.name}}</p></div>
                  <div class="item_menu"><p>{{whose.menu}}</p></div>
                  <div class="item_price"><p>{{whose.price}}원</p></div>
                </div>
              </div>
              <div v-if="edit==true">
                <div v-for="(whose,i) in whose[frontIndex]" :key="i" class="item">
                  <div class="item_name"><p>{{whose.name}}</p></div>
                  <div class="item_menu"><p>{{whose.menu}}</p></div>
                  <div class="item_price"><p>{{whose.price}}원</p></div>
                  <b-icon class="aniBtn" @click="deleteRow(i-1)" icon="dash-circle"
                          aria-hidden="true"></b-icon>
                </div>
              </div>
            </div>

            <!-- Summary -->
            <div class="horizontal-line"></div>
            <div class="sum">
              <div class="sum_total">총 금액: {{sumAllOneResPrice}} </div>
              <div class="sum_checked-price">나의 금액: {{sumMyOneResPrice}}</div>
              <div class="sum_unchecked-price"></div>
            </div>
          </div>
        </div>
        <button style="margin-left: 110px; white-space:nowrap;" v-if="onPrev == true" class="btn" @click="prevPage">이전</button>
        <button style="margin-left: 230px; white-space:nowrap;" v-if="onNext == true" class="btn" @click="nextPage">다음</button>
  </div>
</template>

<script>
import vue from "vue";

export default {
  name: "MainReceipt",
  data(){
    return{
      pageNum: 0,
      frontIndex: 0,
      onPrev: false,
      onNext: false,
      totalPrice: 0,
      edit: false,
      // receiptNums: 1,
      selectedName: [],
    }
  },
  props: {
    whoCnt: Number,
    resInfo: [],
    whose: [],
    nullData: {

    },
    dataList: [],
    sumMyOneResPrice: Number,
    sumAllOneResPrice: Number
  },
  mounted() {
    this.onNextBtn();
  },
  methods: {
    addNum() {
      // this.whose[this.frontIndex].push(this.nullData)
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
    prevPage() {
      this.frontIndex--;
      this.onNext = true;
      if(this.frontIndex == 0){
        this.onPrev= false;
      }
      this.$parent.sumMyOneResDayPrice();
      this.$parent.sumAllOneResDayPrice();
    },
    nextPage() {
      this.frontIndex++;
      this.onPrev = true;
      console.log(this.resInfo.length)
      console.log(this.frontIndex+1)
      if (this.frontIndex + 1 == this.resInfo.length){
        this.onNext = false;
      }
      this.$parent.sumMyOneResDayPrice();
      this.$parent.sumAllOneResDayPrice();
    },
    onNextBtn(){
      if(this.whose.length == 0){
        this.onNext = false;
      }else{
          this.onNext = true;
      }
    },
    goEdit() {
      const self = this;
      self.edit = true;
      console.log(self.edit)
    },
    compEdit() {
      const self = this;
      self. edit = false;
    }
  },
}
</script>

<style scoped>
.calMain{
  background-color:rgba(255,255,255,0.7);

}
.receiptDiv{

  display: flex;
  /*float: left;*/
  /*margin-top: 130px;*/
  height: 66vh;
}

.main {
  position: relative;
  /*margin-top: 1px;*/
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 500px;
  background-color:rgba(255,255,255,0.1);

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
.editIcon {
  position: absolute;
  left: 550px;
}

.editButton:active {
  transform: scale(0.9);
}

.aniBtn:active {
  transform: scale(0.9);
}
</style>
