<template>
  <div>
<!--    <b-button v-b-toggle.sidebar-1>Toggle Sidebar</b-button>-->
    <b-sidebar id="sidebar-1" title="Sidebar" shadow>
      <div class="px-3 py-2">
        <router-link to="receiptPg" style="color:black;">영수증 등록</router-link> <br>
        <router-link to="mapPg" style="color:black;">지도로 보기</router-link>

      </div>
    </b-sidebar>
  </div>
</template>

<script>
export default {
name: "MainSideBar"
}
</script>

<style scoped>

</style>