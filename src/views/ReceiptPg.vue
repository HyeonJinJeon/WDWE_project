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
          <b-icon class="aniBtn" style="margin-left: 100px;" icon="plus-circle" aria-hidden="true"></b-icon>
          <!--          </button>-->
        </p>
        <hr style="margin: 10px; border-width:5px 0 0 0;">
        <div class="input-line" v-for="(list,num) in lists" :key="num">
          <p style="margin-left: 30px;">{{ num + 1 }}</p>
<!--          <select v-modal="selected">-->
<!--            <option-->
<!--              v-for="(name, index) in "-->
<!--          </select>-->
          <input class="underline" v-model="list.menu">
          <input class="underline" v-model="list.price">
        </div>
      </div>
    </div>

    <div style="position: absolute; float: right">
      <div class="shoplists">

      </div>
    </div>

  </div>
</template>

<script>


import DatePicker from 'vue2-datepicker';
import 'vue2-datepicker/index.css';

export default {
  name: "ReceiptPg",
  components: {DatePicker},
  data() {
    return {
      shopName: '',
      date: '',
      lists: [
        //initial data
        {engName: 'raina', menu: '돼지고기김치찜', price: 8000},
      ],
      total: 0,
      selected: null,
    }

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

.aniBtn:active {
  transform: scale(0.9);
}

</style>