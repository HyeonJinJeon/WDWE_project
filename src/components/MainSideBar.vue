<template>
  <div>
    <!--    <b-button v-b-toggle.sidebar-1>Toggle Sidebar</b-button>-->
    <b-sidebar id="sidebar-1" shadow>
      <div class="px-3 py-2">
        <br>
        <div>
          <h3 style="color: #FFFFFF;">
            {{ userInfo.engName }}
            <span>
              <button class="logOutBtn" @click="logout">Logout</button>
            </span>
          </h3>
          <h6 style="color: #FFFFFF;">
            ({{firstGroupName}})
          </h6>
          <hr style="color: white;">
        </div>
        <div style="margin-top: 100px;">
          <b-select style="width: 120px" v-model="selected">
            <option selected disabled hidden value="">{{firstGroupName}}</option>
            <option
                v-for="(groupName, i) in groupNames"
                :key="groupName"
                v-text="groupName"
                :value="enterCodes[i]">
            </option>
          </b-select>
          <span> <button class="groupSetBtn" @click="groupChange(selected)">그룹 변경</button></span> <br>
          <hr>룹
          <router-link to="mainPg" style="color:white; font-weight: 600;">메인 화면</router-link>
          <br>
          <hr>
          <router-link to="receiptPg" style="color:white; font-weight: 600;">영수증 등록</router-link>
          <br>
          <hr>
          <router-link to="mapPg" style="color:white; font-weight: 600;">지도로 보기</router-link>
          <br>
          <hr>
          <router-link to="setRestaurantList" style="color:white; font-weight: 600;">상호 정보</router-link>
          <br>
          <hr>
          <router-link to="groupMaster" style="color: white; font-weight: 600;">그룹 설정</router-link>
          <br>
          <hr>
          <router-link to="myAteList" style="color: white; font-weight: 600;">나의 정산</router-link>
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
      firstGroupName: localStorage.groupName,
      userInfo: [],
      userId: this.$store.state.user.uid,
      groups: [],
      enterCodes: [],
      groupNames: [],
      groupName:[],
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
            // console.log(self.groups.length)
            for(let i=0; i < self.groups[0].length; i++) {
              // for(let j=0; j < self.groups[i].length; i++) {
              self.groupNames.push(self.groups[0][i].groupName);
              self.enterCodes.push(self.groups[0][i].enterCode)
            }
            // console.log(self.groupNames)
            // console.log(self.enterCodes)
            // }
          })
    },
    getGroupName() {
      const self = this;
      const db = firebase.firestore();
      db.collection("group")
          .where("groupCode", "==", localStorage.groupCode)
          .get()
          .then(async (querySnapshot) => {
            if (querySnapshot.size === 0) {
              return
            }
            querySnapshot.forEach((doc) => {
              const _data = doc.data();
              _data.id = doc.id
              // const date = new Date(_data.date.seconds * 1000);
              // _data.date = getDate(date);
              self.groupName.push(_data.groupName);
              console.log(self.groupName)
            });
          })
    },
    async groupChange(selected) {    //현재 그룹 변경
      const self = this;
      await this.getGroupName()
      console.log(this.groupName[0])
      delete localStorage.groupCode
      delete localStorage.groupName
      localStorage.groupCode = selected
      localStorage.groupName = this.groupName[0]
      for(let i =0; i<self.groups[0].length; i++) {
        if(self.enterCodes[i] == selected) {
          localStorage.groupName = self.groupNames[i]
        }
      }
      this.$router.go();

    },
    logout() {
      delete localStorage.groupCode
      delete localStorage.groupName
      firebase.auth().signOut()
      this.$router.push('/')
    },

  },
}
</script>

<style scoped>

.groupSetBtn {
  width: 90px;
  height: 28px;
  margin-left: 30px;
  border: none;
  background-color: #24376e;
  border-radius: 7px;
  color: white;
  font-weight: 600;
}
.logOutBtn {
  position: absolute;
  font-size: 13px;
  color: white;
  left:250px;
}
</style>
