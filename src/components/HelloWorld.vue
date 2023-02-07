<template>
  <div class="d-flex justify-content-center align-items-center" style="height: 100vh">
    <div class="text-center">
      <img
        class="mb-4"
        src="https://v1.mdbootstrap.com/wp-content/uploads/2022/11/mdb-sale.png"
      />
      <h5 class="mb-4">{{ msg }}</h5>
​
      <p class="mb-4 fw-bold">All offers are LIMITED!</p>
      <a
        class="btn btn-lg btn-danger fw-bold mb-3" style="background-color: #e70808;"
        href="https://mdbootstrap.com/sale/november/"
        target="_blank"
        role="button"
        >Check insane offers</a
      >
    <hr>
    <p class="mt-4 lead fw-bold">Publish your project with a single command.</p>
    <p class="mt-2">Use <a href="https://mdbgo.com/" class="fw-bold" target="_blank"><u>MDB GO</u></a> for a free hosting & deployment
      tool</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
