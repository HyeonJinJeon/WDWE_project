<template>
  <div v-if="modal == true" class="black-bg">
    <div class="white-bg">
      <h4><span style="font-weight: bold">상호 명: </span> {{obj.name}}</h4><br>
      <h4><span style="font-weight: bold">전화 번호: </span> {{obj.number}}</h4><br>
      <h4><span style="font-weight: bold">가게 타입: </span> {{obj.type}}</h4><br>
      <h4><span style="font-weight: bold">주소: </span> {{obj.address}}</h4><br>
      <h4><span style="font-weight: bold">별점: </span> {{ obj.star }}</h4>
      <star-rating
          v-bind:increment="0.1"
          v-bind:read-only="true"
          v-model="obj.star">
      </star-rating>
      <button class="closeBtn" @click="$emit('closeModal')">닫기</button>
    </div>
  </div>
</template>

<script>
import StarRating from 'vue-star-rating'
export default {
  name: "Detail",
  components: {StarRating},
  data() {
    return {}
  },
  watch: {},
  props: {
    items: Array,
    obj: Object,
    modal: Boolean,
  },
  created() {
    // this.memory= this.obj
  },
  mounted() {
    console.log(self.items)
    console.log(self.obj)
  },
  methods: {},
}
</script>

<style scoped>
.white-bg {
  font-family: 'Gowun Dodum', sans-serif;
  padding:20px;
  width: 700px; background: white;
  height: 500px;
  border-radius: 8px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.closeBtn {
  position: absolute;
  left: 49%;
  top: 85%;
}
</style>
