<template>
  <div>
    <MainSideBar></MainSideBar>
    <vue-daum-map
        :appKey="appkey"
        :center.sync="center"
        :level.sync="level"
        :mapTypeId="mapTypeId"
        :libraries="libraries"
        @load="onLoad"
        style="width:100%;height:100vh;position: fixed;"
    >
    </vue-daum-map>
    <i v-b-toggle.sidebar-1 id="sidebar_openBtn" class="fas fa-bars sidebarBtn" style="margin-top: 30px; margin-left: 30px;"></i>

  </div>

</template>

<script>

import MainSideBar from "@/components/MainSideBar.vue";
// import {firebase} from '@/firebase/firebaseConfig';
import VueDaumMap from "vue-daum-map";
export default {
  name: "MapPg",
  components: { MainSideBar, VueDaumMap },
  data() {
    return {
      appkey: '8f46ab92162c0dbe8c99a0f9dd265208',
      center: {lat: 37.5411, lng: 127.068},
      level: 3,
      mapTypeId: VueDaumMap.MapTypeId.NORMAL,
      libraries: ['services'],
      mapObject: null,
      map: null,
      maps: null,
      markers: [],
      row: [],
      fbCollection: 'memory',
      userId: this.$store.state.user.uid,
      markersInMap: [],
      geo: '',
      lat: 0,
      long: 0,
      centerLat: 37,
      centerLng: 127,
      makerOn: false,
      items: [],
      modal : false,
      obj: {},
      userInfo: [],
      maptype: '',
    }
  },
  computed: {

  },
  mounted() {
    this.getDataList()
    this.getData()
  },
  methods: {
    onLoad(map, daum) {
      this.map = map;
      this.maps = daum.map
    },
  },
}
</script>

<style scoped>

.sidebarBtn {
  position: absolute;
  z-index: 2;
}
</style>