<template>
  <mdb-container>
    <mdb-row class="mt-5 align-items-center justify-content-start">
      <h4 class="demo-title"><strong>Waves effect</strong></h4>
      <a href="https://mdbootstrap.com/docs/vue/advanced/waves-effect/?utm_source=DemoApp&utm_medium=MDBVueFree" waves-fixed class="border grey-text px-2 border-light rounded ml-2" target="_blank"><mdb-icon icon="graduation-cap" class="mr-2"/>Docs</a>
    </mdb-row>

    <hr class="mt-4 mb-5">

    <section class="demo-section">
      <h4>Basic example</h4>
      <section class="text-center">
        <mdb-btn color="primary">
          click me
        </mdb-btn>
      </section>
    </section>

    <section class="demo-section">
      <h4>Dark example</h4>
      <section class="text-center">
        <mdb-btn color="primary" darkWaves>
          click me
        </mdb-btn>
      </section>
    </section>

    <section class="demo-section">
      <h4>Mask example</h4>
      <section class="d-flex justify-content-center">
        <mdb-view src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/6-col/img%20(54).jpg" hover>
          <mdb-mask overlay="white-slight" waves/>
        </mdb-view>
      </section>
    </section>

  </mdb-container>
</template>

<script>
import { mdbContainer, mdbRow, mdbIcon, mdbBtn, mdbView, mdbMask } from 'mdbvue';

export default {
  name: 'WavesPage',
  components: {
    mdbContainer,
    mdbRow,
    mdbIcon,
    mdbBtn,
    mdbView,
    mdbMask
  }
};
</script>

<style>
</style>
