<template>
  <div>
    <!--    <b-button v-b-toggle.sidebar-1>Toggle Sidebar</b-button>-->
    <b-sidebar id="sidebar-1" shadow>
      <div class="px-3 py-2 sideTitle">
        <br>
        <div class="">
          <h3 style="color: #FFFFFF;">
            {{ userInfo.engName }}
          </h3>
        </div>
        <div style="margin-top: 100px;">

          <select v-model="selected">
            <option disabled value="">그룹 선택</option>
            <option
                v-for="(groupName, i) in groupNames"
                :key="groupName"
                v-text="groupName"
                :value="enterCodes[i]">
            </option>
          </select>
          <span> <button class="groupSetBtn" @click="groupChange(selected)">그룹 변경</button></span> <br>
          <hr>
          <router-link to="mainPg" style="color:black;">메인 화면</router-link>
          <br>
          <hr>
          <router-link to="receiptPg" style="color:black;">영수증 등록</router-link>
          <br>
          <hr>
          <router-link to="mapPg" style="color:black;">지도로 보기</router-link>
        </div>

      </div>
    </b-sidebar>
  </div>
</template>

<script>
import {firebase} from "@/firebase/firebaseConfig";

export default {
  name: "MainSideBar",
  data() {
    return {
      fbCollection: 'users',
      userInfo: [],
      userId: this.$store.state.user.uid,
      groups: [],
      enterCodes: [],
      groupNames: [],
      selected: '',
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
      const db = firebase.firestore();
      db.collection(self.fbCollection)
          .doc(self.userId)
          .get()
          .then((snapshot) => {
            self.userInfo = snapshot.data();
            self.groups.push(self.userInfo.groups);
            for(let i=0; i <= self.groups.length; i++) {
            //   let group = this.groups[i];
              self.groupNames.push(self.groups[0][i].groupName);
              self.enterCodes.push(self.groups[0][i].enterCode);
              console.log(self.groupNames)
            }
          })
    },
    groupChange(selected){    //현재 그룹 변경
      delete localStorage.groupCode
      localStorage.groupCode = selected
      // this.$router.go();
      // console.log(selected)
    },

  },
}
</script>

<style scoped>
.sideTitle {
  position: absolute;
  top: 0px;
  /*margin-top: 10px;*/
  background: #24376e;
  height: 100px;
  width: 360px;
}
.groupSetBtn {
  width: 90px;
  margin-left: 30px;
  border: none;
  background-color: #92bbe1;
  border-radius: 7px;
  color: white;
  font-weight: 600;
}
</style>