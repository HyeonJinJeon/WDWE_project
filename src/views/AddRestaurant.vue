<template>
  <div>
    <b-icon class="backBtn" @click="goBack" icon="arrow-left"
            aria-hidden="true"></b-icon>
    <!--  <div class="bgImg">-->
    <!--    <img src="../assets/images/receipt.jpg">-->

    <div>
      <h3 style="position: absolute; top: 80px; left:350px; font-weight: 600; ">상호 등록</h3>
    </div>
    <div class="inputs">
      <hr style="margin: 10px; border-style: double; border-width:5px 0 0 0;">

      <label class="grey-text" style="margin:10px; font-weight: 400; color: black;">상호 명</label>
      <div class="input-line">
        <input v-model="resName" type="text" class="form-control" placeholder=""/>
      </div>

      <label class="grey-text" style="margin:10px; font-weight: 400; color: #000000;">전화번호</label>
      <div class="input-line">
        <input v-model="resNum" type="text" class="form-control" maxlength="13"
               oninput="javascript: this.value = this.value.replace(/[^0-9]/, '').replace(/^(\d{3})(\d{3,4})(\d{4})$/, `$1-$2-$3`);"
               placeholder=""/>
      </div>

      <label class="grey-text" style="margin:10px; font-weight: 400; color: black;">가게 타입</label>
      <div class="input-line">
        <b-select v-model="resType" name="type">
          <option value="한식">한식</option>
          <option value="양식">양식</option>
          <option value="일식">일식</option>
          <option value="중식">중식</option>
          <option value="분식">분식</option>
        </b-select>
      </div>

      <label class="grey-text" style="margin:10px; font-weight: 400; color: black;">위치 지정</label>
      <div class="input-line">
        <input v-model="resGeo" type="text" class="form-control" placeholder="Search" aria-label="Search"/>
        <button style="white-space:nowrap; margin: 0 auto; background-color: #455a64; color: #FFFFFF" class="btn"
                @click="searchGeo(resGeo)">이동
        </button>

      </div>


      <!--------------------------------------------------------메뉴 추가는 나중에 구현---------------------------------------------------------------->

      <!--      <hr style="margin: 10px; border-width:5px 0 0 0;">-->
      <!--      <p style="font-weight: 400; font-size: 20px; margin-left: 20px;">-->
      <!--        <span>*메뉴 등록*</span>-->
      <!--        <span style="margin-left: 110px;">메뉴</span>-->
      <!--        <span style="margin-left: 150px;">가격</span>-->
      <!--        <b-icon class="aniBtn" @click="addNum" style="margin-left: 100px;" icon="plus-circle"-->
      <!--                aria-hidden="true"></b-icon>-->
      <!--        &lt;!&ndash;          <button style="margin-left: 130px;">&ndash;&gt;-->

      <!--        &lt;!&ndash;          </button>&ndash;&gt;-->
      <!--      </p>-->
      <!--      <hr style="margin: 10px; border-width:5px 0 0 0;">-->
      <!--      &lt;!&ndash;        <div class="input-line engNameInput">&ndash;&gt;-->
      <!--      &lt;!&ndash;          <input v-model="engName" type="text" class="form-control" placeholder="영어이름"/>&ndash;&gt;-->
      <!--      &lt;!&ndash;        </div>&ndash;&gt;-->

      <!--      <div v-for="index in receiptNums" :key="index" style="margin-bottom:10px;">-->
      <!--        <p style="position: absolute;margin-left: 30px; margin-top: 5px;">{{ index }}</p>-->
      <!--        <select class="engNameInput" v-model="selectedName[index-1]">-->
      <!--          <option disabled value="">멤버 선택</option>-->
      <!--          <option-->
      <!--              v-for="member in members"-->
      <!--              :key="member"-->
      <!--              v-text="member"-->
      <!--              :value="member">-->
      <!--          </option>-->
      <!--        </select>-->
      <!--        <div class="input-line">-->
      <!--          <input v-model="menu[index-1]" type="text" class="form-control menuInput" placeholder="메뉴"/>-->
      <!--          <input v-model="price[index-1]" type="text" class="form-control priceInput" placeholder="가격"/>-->
      <!--          <b-icon class="aniBtn" style="margin-left: 100px;" icon="dash-circle"-->
      <!--                  aria-hidden="true"></b-icon>-->
      <!--        </div>-->
      <!--      </div>-->
      <!--------------------------------------------------------메뉴 추가는 나중에 구현---------------------------------------------------------------->


      <button class="confirmBtn" @click="addRestaurant()">등록</button>
    </div>
    <!--  </div>-->
    <div style="width: 85vh; height: 80vh; margin-top: 100px; margin-left: 80vh">
      <vue-daum-map id="addMap"
                    :appKey="appkey"
                    :center.sync="center"
                    :level.sync="level"
                    :mapTypeId="mapTypeId"
                    :libraries="libraries"
                    style="width:100%; height:70vh;"
                    @load="onLoad"
      >
      </vue-daum-map>
    </div>
  </div>
</template>

<script>
/*global kakao*/
// import DatePicker from 'vue2-datepicker';
// import 'vue2-datepicker/index.css';
// import {firebase} from '@/firebase/firebaseConfig';

import {firebase} from '@/firebase/firebaseConfig';
import VueDaumMap from "vue-daum-map";

export default {
  name: "AddRestaurant",
  components: {VueDaumMap},
  data() {
    return {
      appkey: '052fcb2d3b1e8a3b1d67a75a68abb3cf',
      center: {lat: 37.5411, lng: 127.068},
      level: 10,
      mapTypeId: VueDaumMap.MapTypeId.NORMAL,
      libraries: ['services'],
      mapObject: null,
      map: null,
      maps: null,
      markers: [],
      markersInMap: [],
      geo: '',
      date: '',

      resName: "",
      resNum: "",
      resType: "",
      resGeo: "",
    }
  },
  mounted() {

  },
  methods: {
    addRestaurant() {
      const self = this;
      const db = firebase.firestore();
      const marker = new firebase.firestore.GeoPoint(this.lat, this.long);
      const _data = {            // data()에 있는 데이터가 바로 들어갈 수 없다.
        name: self.resName,
        number: self.resNum,
        type: self.resType,
        // marker: self.marker,
        geo: marker,
        groupCode: localStorage.groupCode
      }
      db.collection('restaurant')
          .add(_data)
          .then(() => {
            alert("등록되었습니다.")
            this.$router.push('../receiptPg')
          })
          .catch((e) => {          // 실패하면 catch가 실행된다.
            console.log(e)
            alert("저장에 실패했습니다.")
          })

    },
    onLoad(map, daum) {
      this.map = map;
      this.maps = daum.map
      setTimeout(function () {
        console.log("111", map.relayout())
      }, 1);


      let marker = new kakao.maps.Marker({
        position: map.getCenter()
      });


      daum.maps.event.addListener(map, 'click', (mouseEvent) => {
        marker.setMap(map);

        // 클릭한 위도, 경도 정보를 가져옵니다
        let latlng = mouseEvent.latLng;

        // 마커 위치를 클릭한 위치로 옮깁니다
        marker.setPosition(latlng);

        // this.changeLatLng();
        this.lat = latlng.getLat();
        this.long = latlng.getLng();
        console.log(this.map.relayout())
        console.log(this.lat)
      });
    },
    searchGeo(geo) {
      console.log(kakao)
      console.log(kakao.maps.services)

      const ps = new kakao.maps.services.Places();
      console.log('11', kakao.maps.services)
      ps.keywordSearch(geo, placesSearchCB);
      console.log('22', ps.keywordSearch)
      const map = this.map

      function placesSearchCB(data, status) {
        console.log('33', map)
        console.log('44', kakao.maps.services)
        console.log('55', map.setBounds)

        if (status === kakao.maps.services.Status.OK) {

          // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
          // LatLngBounds 객체에 좌표를 추가합니다
          const bounds = new kakao.maps.LatLngBounds();

          for (var i = 0; i < data.length; i++) {
            bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
          }
          // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
          map.setBounds(bounds);
        }
      }
    },
    goBack() {
      this.$router.push('../receiptPg')
    },
  },
}
</script>

<style scoped>
.bgImg {
  /*height: 8px;*/
  width: 1000px;
  background-size: cover;
}

#addMap {
  width: 100px;
  height: 1000px;
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
  top: 150px;
  left: 100px;
}


.confirmBtn {
  position: relative;
  width: 90px;
  height: 38px;
  margin-top: 300px;
  margin-left: 72vh;
  color: white;
  background-color: #2c3e50;
  border-radius: 5px;
  font-weight: 700;
}

.backBtn {
  position: absolute;
}

</style>
