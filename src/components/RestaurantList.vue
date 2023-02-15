<template>
  <div>

    <div style="overflow:auto;">
      <table class="table" border="1" style="margin-left: auto; margin-right: auto;">
        <thead>
        <tr>
        </tr>
        </thead>
        <tbody>
        <tr @click="$emit('changeLat',shopList.geo._lat), $emit('changeLng',shopList.geo._long),$emit('changeShop', shopList)" v-for="(shopList,i) in shopList" :key="i">
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
          .where("groupCode",'==', localStorage.groupCode)
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
table {
  background-color: white;
  border-radius: 7px;
}
</style>