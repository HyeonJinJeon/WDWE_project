<template>
  <div class="bgImg">
    <div class="black-bg">
      <MainSideBar></MainSideBar>
      <i v-b-toggle.sidebar-1 id="sidebar_openBtn" class="fas fa-bars"
         style="position: absolute; z-index:3; margin-top: 30px; margin-left: 30px; color:white;"></i>
      <i class="fas fa-utensils"></i>
      <h1 class="title"> 상호 정보 <i class="fas fa-utensils"></i></h1>

      <div class="left">
      <div v-if="edit == false" class="editShop">
        <div v-if="shopInfo.length !=0">
          <b-icon id="sidebar_openBtn" icon="pencil-fill" font-scale="1.5" class="editButton" @click="goEdit"></b-icon>
        </div>
        <div>
          <div style="margin-top: 100px;">
            <!--            <h5 class="grey-text" style=" font-weight: 400; color: black;">상호 정보</h5>-->
            <p class="lines"><span style="font-weight: bold">상호명: </span> {{ shopInfo.name }}</p>
            <p class="lines"><span style="font-weight: bold">상호타입: </span> {{ shopInfo.type }}</p>
            <p class="lines"><span style="font-weight: bold">전화번호: </span> {{ shopInfo.number }}</p>
            <p class="lines"><span style="font-weight: bold">주소: </span> {{ shopInfo.address }}</p>
            <p class="lines"><span style="font-weight: bold">별점: </span> {{ shopInfo.star }}</p>
            <star-rating
                v-bind:increment="0.01"
                v-bind:read-only="true"
                v-model="shopInfo.star">
            </star-rating>

          </div>
          <!--          {{ shopInfo }}-->
        </div>
      </div>
      <div v-if="edit == true" class="editShop">
        <div>
          <div style="margin-top: 100px;">
            상호명: <input v-model="shopInfo.name" type="text" class="form-control shopInput" placeholder="싱호명"/>
            <!--        <input  v-model="memory.title" type="text" id="title" class="form-control inputTag1" >-->
            상호 타입: <input v-model="shopInfo.type" type="text"  class="form-control shopInput" placeholder="상호 타입"/>
            전화 번호: <input v-model="shopInfo.number" type="text"  class="form-control shopInput" placeholder="전화 번호"/>


          </div>
          <button class="no btn-mdb-color" @click="endEdit">취소</button>
          <button class="ok btn-mdb-color" @click="confirm">수정</button>
        </div>

      </div>
</div>
      <div class="right">
        <div class="list">
          <RestaurantList @changeShop="shopInfo=$event" :setRest="setRest = true"></RestaurantList>
  <!--        <button v-if="deleteCheck == false" @click="onCheck" class="selcBtn">선택</button>-->
  <!--        <button v-if="deleteCheck == true" class="delBtn">삭제</button>-->
  <!--        <button v-if="deleteCheck == true" @click="offCheck" class="endBtn">취소</button>-->
        </div>
    </div>
    </div>
  </div>
</template>

<script>
import RestaurantList from "@/components/RestaurantList.vue";
import {firebase} from "@/firebase/firebaseConfig";
import MainSideBar from '@/components/MainSideBar.vue';
import StarRating from 'vue-star-rating'


export default {
  name: "SetRestaurantList",
  components: {RestaurantList, MainSideBar, StarRating},
  data() {
    return {
      shopInfo: [],
      edit: false,
      deleteNum: [],
      deleteCheck: false,
      arr: [],
      setRest: true,
    }
  },
  props: {
    // arr: Array,
  },
  methods: {
    goEdit() {    //edit 버튼 눌렀을때 true로 바꿔주고 수정 화면으로 전환
      this.edit = true
    },
    endEdit() {   //취소 버튼 누르면 false로 바꾸고 상호 보는 화면으로 전환
      this.edit = false
    },
    confirm() {
      const self = this;
      const db = firebase.firestore();
      db.collection('restaurant')
          .doc(self.shopInfo.id)
          .set({
            shopName: self.shopInfo.name,
            groupCode: self.groupInfo.enterCode,
            resUid: self.shopInfo.id,
          }, {merge: true})
          .then(() => {
            alert("수정되었습니다.")
            location.reload();
          })
          .catch((e) => {          // 실패하면 catch가 실행된다.
            console.log(e)
            alert("수정에 실패했습니다.")
          })
    },
    // onCheck() {
    //   this.deleteCheck = true;
    // },
    // offCheck() {
    //   this.deleteCheck = false;
    //   // this.arr.splice(0);
    // },
    // deleteList() {
    //   const self = this;
    //   const db = firebase.firestore();
    //   const batch = db.batch()
    //   // const ref2 = db.collection("a").doc()
    //   // batch.set(ref2,{},{merge:true})
    //   //
    //   // const ref3 = db.collection("v").doc()
    //   // batch.set(ref3,{},{merge:true})
    //
    //   for (let i = 0; i < this.arr.length; i++) {
    //     const ref = db.collection("memory").doc(this.arr[i])
    //     batch.delete(ref)
    //   }
    //   batch.commit()
    //       .then(() => {
    //         alert("삭제 완료")
    //         self.$router.go();
    //       })
    // },

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

.list {
  position: relative;
  background-color: rgba(255, 255, 255, 0.2);
  float: right;
  width: 35%;
  height: 65vh;
  top: 120px;
  padding: 20px;
  right: 10%;
  border-radius: 15px;
}

.editShop {
  position: absolute;
  background-color: white;
  width: 55vh;
  height: 65vh;
  border-radius: 15px;
  top: 200px;
  left: 13%;
  padding: 20px;

}

.title {
  position: relative;
  color: white;
  font-weight: 600;
  text-align: center;
  top: 80px;
}

.editButton {
  position: relative;
  float: right;
}

.lines {
  margin-bottom: 40px;
}

.shopInput {
  display: flex;
  height: 38px;
  width: 400px;
  margin-bottom: 30px;
}

.no {
  position: absolute;
  color: white;
  top: 500px;
  left: 350px;
  width: 40px;
  font-weight: 600;
}

.ok {
  position: absolute;
  color: white;
  width: 40px;
  top: 500px;
  left: 300px;
  font-weight: 600;
}
.left {

}
.right {

}
/*.selcBtn {*/
/*  position: absolute;*/
/*  top:550px;*/
/*  color: white;*/
/*  width: 40px;*/
/*  font-weight: 600;*/
/*  background-color: #2c3e50;*/
/*  border-radius: 4px;*/
/*}*/
/*.delBtn {*/
/*  position: absolute;*/
/*  top:550px;*/

/*  color: white;*/
/*  width: 40px;*/
/*  font-weight: 600;*/
/*  background-color: #2c3e50;*/
/*  border-radius: 4px;*/
/*}*/

/*.endBtn {*/
/*  position: absolute;*/
/*  top:550px;*/
/*  left: 80px;*/
/*  color: white;*/
/*  width: 40px;*/
/*  font-weight: 600;*/
/*  background-color: #2c3e50;*/
/*  border-radius: 4px;*/
/*}*/
</style>
