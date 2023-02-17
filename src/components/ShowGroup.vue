<template>
  <div class="firstDiv">
    <div style="overflow:auto;">
      <table class="table" border="1" style="margin-left: auto; margin-right: auto;">
        <thead>
        <tr></tr>
        </thead>
        <tbody>

        <tr v-for="(group,i) in groupNames" :key="i">
          <td style="font-weight: 400;">{{ group }}<br> {{ enterCodes[i] }}</td>
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
  name: "ShowGroup",
  data() {
    return {
      userId: this.$store.state.user.uid,
      userInfo: [],
      groupInfo: [],
      enterCodes: [],
      groupNames: [],
      groups: [],
    }
  },
  mounted() {
    const self = this;
    self.init();

  },
  methods: {
    init() {
      const self = this;
      self.getData();
    },
    getData() {
      const self = this;
      // console.log(userId)
      const db = firebase.firestore();
      db.collection("users")
          .doc(self.userId)
          .get()
          .then((snapshot) => {
            self.userInfo = snapshot.data();
            self.groups.push(self.userInfo.groups);
            for(let i=0; i <= self.groups[0].length; i++) {
              self.groupNames.push(self.groups[0][i].groupName);
              // console.log("groupNames",self.groupNames)
              self.enterCodes.push(self.groups[0][i].enterCode)
              // console.log("enterCodes",self.enterCodes)
              // console.log("groups",self.groups)
            }
          })
    },

  },
}
</script>

<style scoped>

table {
  background-color: rgba(255, 255, 255, 0.3);
  color: white;
}

.firstDiv {
  height: 450px;
  overflow: auto;
}

.white-bg {
  max-width: 700px;
  height: 500px;
  align: center;
  background-color: rgba(255,255,255,0.3);
  border-radius: 8px;
  padding: 50px;
  position: relative;
  /*top: 25%;*/
  /*left: 24vh;*/
  margin: 0 auto;
}

.groupList {
  position: relative;
  background-color: rgba(255, 255, 255, 0.2);
  float: right;
  width: 500px;
  height: 800px;
  right: 200px;
  top: 100px;
  /*overflow: auto;*/
  padding: 20px;
  border-radius: 15px;
}
</style>