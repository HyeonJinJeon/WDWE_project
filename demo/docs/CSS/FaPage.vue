<template>
  <mdb-container class="mt-5">
    <mdb-row class="mt-5 align-items-center justify-content-start">
      <h4 class="demo-title"><strong>Icons</strong></h4>
      <a href="https://mdbootstrap.com/docs/vue/content/icons-usage/?utm_source=DemoApp&utm_medium=MDBVueFree" waves-fixed class="border grey-text px-2 border-light rounded ml-2" target="_blank"><mdb-icon icon="graduation-cap" class="mr-2"/>Docs</a>
    </mdb-row>
    <hr />
    <section class="demo-section">
      <h4>Solid</h4>
      <section class="text-center">
        <mdb-icon icon="calendar-check" size="2x" class="mx-2"/>
        <mdb-icon icon="exclamation-circle" size="2x" class="mx-2"/>
        <mdb-icon icon="folder" size="2x" class="mx-2"/>
        <mdb-icon icon="eye" size="2x" class="mx-2"/>
        <mdb-icon icon="map-marker-alt" size="2x" class="mx-2"/>
        <mdb-icon icon="hand-spock" size="2x" class="mx-2"/>
      </section>
    </section>
    <section class="demo-section">
      <h4>Regular</h4>
      <section class="text-center">
        <mdb-icon regular icon="address-book" size="2x" class="mx-2"/>
        <mdb-icon regular icon="address-card" size="2x" class="mx-2"/>
        <mdb-icon regular icon="angry" size="2x" class="mx-2"/>
        <mdb-icon regular icon="bell" size="2x" class="mx-2"/>
        <mdb-icon regular icon="bookmark" size="2x" class="mx-2"/>
        <mdb-icon regular icon="calendar-alt" size="2x" class="mx-2"/>
      </section>
    </section>
    <section class="demo-section">
      <h4>Brands</h4>
      <section class="text-center">
        <mdb-icon brands icon="apple" size="2x" class="mx-2"/>
        <mdb-icon brands icon="atlassian" size="2x" class="mx-2"/>
        <mdb-icon brands icon="bitbucket" size="2x" class="mx-2"/>
        <mdb-icon brands icon="mdb" size="2x" class="mx-2"/>
        <mdb-icon brands icon="chrome" size="2x" class="mx-2"/>
        <mdb-icon brands icon="github" size="2x" class="mx-2"/>
        <mdb-icon brands icon="gitlab" size="2x" class="mx-2"/>
      </section>
    </section>
  </mdb-container>
</template>

<script>
import { mdbIcon, mdbContainer, mdbRow } from 'mdbvue';

export default {
  name: 'FaPage',
  components: {
    mdbIcon,
    mdbContainer,
    mdbRow
  }
};
</script>

<style scoped>

</style>
