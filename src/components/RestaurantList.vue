<template>
  <div>
    <h3>식당 리스트<span>
      <b-icon class="aniBtn" icon="plus-square"
              aria-hidden="true"></b-icon>
      </span></h3>
    <div style="overflow:auto;">



      <table class="table " border="1" style="margin-left: auto; margin-right: auto;">
        <thead>
        <tr>
        </tr>
        </thead>
        <tbody>
        <tr @click="$emit('changeShop', shopList)" v-for="(shopList,i) in shopList" :key="i">
          <td>{{ shopList.name }}<br> {{ shopList.type }}</td>
          <!--        <td><img class="img1" :src="memoryList.image"/></td>-->
        </tr>
        </tbody>
      </table>
    </div>
  </div>

</template>

<script>
import {firebase} from "@/firebase/firebaseConfig";

export default {
  name: "RestaurantList",
  data() {
    return {
      shopList: [],
      shopInfo: [],
    }
  },

  mounted() {
    const self = this;
    self.init();
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

  }
}
</script>

<style scoped>
.aniBtn:active {
  transform: scale(0.9);
}
</style>