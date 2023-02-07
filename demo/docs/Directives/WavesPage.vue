<template>
  <mdb-container>
    <mdb-row class="mt-5 align-items-center justify-content-start">
      <h4 class="demo-title"><strong>Waves</strong></h4>
      <a href="https://mdbootstrap.com/docs/vue/directives/waves/?utm_source=DemoApp&utm_medium=MDBVueFree" waves-fixed class="border grey-text px-2 border-light rounded ml-2" target="_blank"><mdb-icon icon="graduation-cap" class="mr-2"/>Docs</a>
    </mdb-row>

    <hr class="mt-4 mb-5">

    <section class="demo-section">
      <h4>Basic example</h4>
      <section class="d-flex justify-content-center">
        <div v-mdb-waves style="width: 200px; height: 100px; background-color: #c23636;"></div>
      </section>
    </section>

    <section class="demo-section">
      <h4>Dark example</h4>
      <section class="d-flex justify-content-center">
        <div v-mdb-waves="{dark: true}" style="width: 200px; height: 100px; background-color: #ddd;"></div>
      </section>
    </section>

    <section class="demo-section">
      <h4>Custom background examples</h4>
      <section class="d-flex justify-content-center">
        <div v-mdb-waves="{background: 'rgba(102,159,221,0.5)'}" style="width: 200px; height: 100px; background-color: #ddd;" class="mx-1"></div>
        <div v-mdb-waves="{background: 'rgba(194,54,54,0.5)'}" style="width: 200px; height: 100px; background-color: #ddd;" class="mx-1"></div>
        <div v-mdb-waves="{background: 'rgba(235,226,16,1)'}" style="width: 200px; height: 100px; background-color: #ddd;" class="mx-1"></div>
      </section>
    </section>

    <section class="demo-section">
      <h4>Time durations</h4>
      <section class="d-flex justify-content-center">
        <div v-mdb-waves="{duration: 'long'}" style="width: 200px; height: 100px; background-color: #c23636;" class="mx-1"></div>
        <div v-mdb-waves style="width: 200px; height: 100px; background-color: #c23636;" class="mx-1"></div>
        <div v-mdb-waves="{duration: 'short'}" style="width: 200px; height: 100px; background-color: #c23636;" class="mx-1"></div>
      </section>
    </section>
    
    <section class="demo-section">
      <h4>Centered</h4>
      <section class="d-flex justify-content-center">
        <div v-mdb-waves="{center: true}" style="width: 200px; height: 100px; background-color: #c23636;"></div>
      </section>
    </section>

    <section class="demo-section">
      <h4>Table</h4>
      <section>
        <table class="table">
          <thead>
            <tr>
              <th v-mdb-waves="{dark: true}">Test</th>
              <th v-mdb-waves="{dark: true}">Test</th>
              <th v-mdb-waves="{dark: true}">Test</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td v-mdb-waves="{dark: true}">Test</td>
              <td v-mdb-waves="{dark: true}">Test</td>
              <td v-mdb-waves="{dark: true}">Test</td>
            </tr>
            <tr>
              <td v-mdb-waves="{dark: true}">Test</td>
              <td v-mdb-waves="{dark: true}">Test</td>
              <td v-mdb-waves="{dark: true}">Test</td>
            </tr>
            <tr>
              <td v-mdb-waves="{dark: true}">Test</td>
              <td v-mdb-waves="{dark: true}">Test</td>
              <td v-mdb-waves="{dark: true}">Test</td>
            </tr>
          </tbody>
        </table>
      </section>
    </section>

    <section class="demo-section">
      <h4>List Group</h4>
      <section>
        <mdb-list-group>
          <mdb-list-group-item action active v-mdb-waves>Main Menu</mdb-list-group-item>
          <mdb-list-group-item action v-mdb-waves="{dark: true}"
            >Messages
            <mdb-badge :pill="true" color="default-color"
              >12</mdb-badge
            ></mdb-list-group-item
          >
          <mdb-list-group-item action v-mdb-waves="{dark: true}">Sell Products</mdb-list-group-item>
          <mdb-list-group-item action v-mdb-waves="{dark: true}">Settings</mdb-list-group-item>
          <mdb-list-group-item disabled>Disabled</mdb-list-group-item>
        </mdb-list-group>
      </section>
    </section>

    <section class="demo-section">
      <h4>Panels</h4>
      <section class="d-flex justify-content-center">
        <mdb-card v-mdb-waves class="card-body mx-2 indigo text-white" style="width: 22rem;">
          <mdb-card-title>Panel Title</mdb-card-title>
          <mdb-card-text class="mb-0">Some quick example text to build on the panel title and make up the bulk of the panel's content.</mdb-card-text>
        </mdb-card>
        <mdb-card v-mdb-waves="{dark: true}" class="card-body mx-2" style="width: 22rem;">
          <mdb-card-title>Panel Title</mdb-card-title>
          <mdb-card-text class="mb-0">Some quick example text to build on the panel title and make up the bulk of the panel's content.</mdb-card-text>
        </mdb-card>
      </section>
    </section>

    <section class="demo-section">
      <h4>Image</h4>
      <section class="d-flex justify-content-center">
        <div style="width: 400px; height: 300px" v-mdb-waves>
          <img src="https://mdbootstrap.com/img/Photos/Others/img (36).jpg" alt="photo" />
        </div>
      </section>
    </section>
    
    <button v-mdb-waves="{fixed: true}" style="width: 60px; height: 60px; position: fixed; right: 20px; bottom: 20px; border-radius: 50%; background-color: #c23636; color: white; border: none;" class="mx-1">Fixed</button>

  </mdb-container>
</template>

<script>
import { mdbContainer, mdbRow, mdbIcon, mdbListGroup, mdbListGroupItem, mdbBadge, mdbCard, mdbCardTitle, mdbCardText, mdbWaves } from 'mdbvue';

export default {
  name: 'WavesPage',
  components: {
    mdbContainer,
    mdbRow,
    mdbIcon,
    mdbListGroup,
    mdbListGroupItem, 
    mdbBadge,
    mdbCard,
    mdbCardTitle,
    mdbCardText
  },
  directives: { mdbWaves }
};
</script>

<style>
</style>
