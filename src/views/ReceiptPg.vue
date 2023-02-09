<template>
  <div>
    <div class="bgImg">
      <!--    <img src="../assets/images/receipt.jpg">-->
      <div>
        <h3 style="position: absolute; top: 160px; left:450px; font-weight: 600; ">영수증</h3>
      </div>
      <div class="inputs">
        <hr style="margin: 10px; border-style: double; border-width:5px 0 0 0;">

        <label class="grey-text" style="margin:10px; font-weight: 400;">상호 명</label>
        <div class="input-line">
          <input v-model="shopName" type="text" class="form-control" placeholder=""/>
        </div>
        <div>
          <label for="example-datepicker" class="grey-text" style="margin: 10px; font-weight: 400;">날짜 선택</label> <br>
          <date-picker v-model="date" valueType="format" style="margin-left: 20px;"></date-picker>
          <!--          <b-datepicker id="example-datepicker" v-model="date" class="mb-2 dateSelect"></b-datepicker>-->
        </div>
        <hr style="margin: 10px; border-style: double; border-width:5px 0 0 0;">
        <p>
          <span>메뉴</span>
        </p>
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
      members: [],
    }
  },
}
</script>

<style scoped>
.bgImg {
  background-image: url("../assets/images/receipt.jpg");
  height: 1000px;
  width: 1000px;
  background-size: cover;
}

.input-line {
  /*display: flex;*/
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
</style>