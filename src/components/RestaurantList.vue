<template>
  <div class="firstDiv">
    <div style="overflow:auto;">
      <table class="table" border="1" style="margin-left: auto; margin-right: auto;">
        <thead>
        <tr>
        </tr>
        </thead>
        <tbody>
        <tr @click="$emit('changeLat',shopList.geo._lat), $emit('changeLng',shopList.geo._long), $emit('changeShop', shopList)"
            v-for="(shopList,i) in shopList" :key="i">
          <td>
            <div v-if="deleteCheck == true" class="custom-control custom-checkbox">
              <input v-model="arr" type="checkbox" class="custom-control-input" :id="i" name="list[]"
                     :value="shopList.id">
              <label class="custom-control-label" :for="i"></label>
            </div>
          </td>
          <td style="font-weight: 400;">{{ shopList.name }}<br> {{ shopList.type }}</td>
          <!--        <td><img class="img1" :src="memoryList.image"/></td>-->
        </tr>
        </tbody>
      </table>
    </div>
    <button v-if="deleteCheck == false" @click="onCheck" class="selcBtn">선택</button>
    <button v-if="deleteCheck == true" @click="deleteList" class="delBtn">삭제</button>
    <button v-if="deleteCheck == true" @click="offCheck" class="endBtn">취소</button>
  </div>

</template>

<script>
import {firebase} from "@/firebase/firebaseConfig";
import addRestaurant from "@/views/AddRestaurant.vue";

export default {
  name: "RestaurantList",
  computed: {
    addRestaurant() {
      return addRestaurant
    }
  },
  data() {
    return {
      shopList: [],
      shopInfo: [],
      arr:[],
      deleteCheck: false,
    }
  },
  props : {
    // arr: Array,
    // deleteCheck : Boolean,
  },

  mounted() {
    const self = this;
    self.init();
    console.log("arr",self.arr);
  },

  methods: {
    init() {
      const self = this;
      self.getDatalist();
      // self.getReceipt();
    },
    getDatalist() {
      const self = this;
      const db = firebase.firestore();
      console.log(self.whatData)
      db.collection("restaurant")
          .where("groupCode", '==', localStorage.groupCode)
          .get()
          .then((querySnapshot) => {
            if (querySnapshot.size === 0) {
              console.log("nothing")
            }
            querySnapshot.forEach((memory) => {
              const _data = memory.data();
              _data.id = memory.id
              self.shopList.push(_data)
              console.log(self.shopList);
            });

          })
    },
    onCheck() {
      this.deleteCheck = true;
    },
    offCheck() {
      this.deleteCheck = false;
      this.arr.splice(0);
    },
    deleteList() {
      const self = this;
      const db = firebase.firestore();
      const batch = db.batch()
      // const ref2 = db.collection("a").doc()
      // batch.set(ref2,{},{merge:true})
      //
      // const ref3 = db.collection("v").doc()
      // batch.set(ref3,{},{merge:true})

      for (let i = 0; i < this.arr.length; i++) {
        const ref = db.collection("restaurant").doc(this.arr[i])
        batch.delete(ref)
      }
      batch.commit()
          .then(() => {
            alert("삭제 완료")
            self.$router.go();
          })
    },

  }
}
</script>

<style scoped>
.aniBtn:active {
  transform: scale(0.9);
}

table {
  background-color: rgba(255, 255, 255, 0.3);
  color: white;

}

.firstDiv {
  height: 500px;
  overflow: auto;
}
.selcBtn {
  position: absolute;
  top:550px;
  color: white;
  width: 40px;
  font-weight: 600;
  background-color: #2c3e50;
  border-radius: 4px;
}
.delBtn {
  position: absolute;
  top:550px;

  color: white;
  width: 40px;
  font-weight: 600;
  background-color: #2c3e50;
  border-radius: 4px;
}

.endBtn {
  position: absolute;
  top:550px;
  left: 80px;
  color: white;
  width: 40px;
  font-weight: 600;
  background-color: #2c3e50;
  border-radius: 4px;
}
</style>