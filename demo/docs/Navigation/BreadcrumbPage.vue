<template>
  <mdb-container>
    <mdb-row class="mt-5 align-items-center justify-content-start">
      <h4 class="demo-title"><strong>Breadcrumb</strong></h4>
      <a href="https://mdbootstrap.com/docs/vue/navigation/breadcrumb/?utm_source=DemoApp&utm_medium=MDBVueFree" waves-fixed class="border grey-text px-2 border-light rounded ml-2" target="_blank"><mdb-icon icon="graduation-cap" class="mr-2"/>Docs</a>
    </mdb-row>
    <hr>
    <section class="demo-section">
      <h4>Basic example</h4>
      <section>
        <mdb-breadcrumb class="mb-0">
          <mdb-breadcrumb-item><a href="#">Home</a></mdb-breadcrumb-item>
          <mdb-breadcrumb-item><a href="#">Library</a></mdb-breadcrumb-item>
          <mdb-breadcrumb-item>Data</mdb-breadcrumb-item>
        </mdb-breadcrumb>
      </section>
    </section>
    <section class="demo-section">
      <h4>Changing the separator</h4>
      <section>
        <mdb-breadcrumb class="breadcrumb-with-arrows">
          <mdb-breadcrumb-item><a href="#">Home</a></mdb-breadcrumb-item>
          <mdb-breadcrumb-item><a href="#">Library</a></mdb-breadcrumb-item>
          <mdb-breadcrumb-item>Data</mdb-breadcrumb-item>
        </mdb-breadcrumb>
        <mdb-breadcrumb class="breadcrumb-with-mdb-icon">
          <mdb-breadcrumb-item><a href="#">Home</a></mdb-breadcrumb-item>
          <mdb-breadcrumb-item><a href="#">Library</a></mdb-breadcrumb-item>
          <mdb-breadcrumb-item>Data</mdb-breadcrumb-item>
        </mdb-breadcrumb>
        <mdb-breadcrumb class="breadcrumb-with-double-arrows mb-0">
          <mdb-breadcrumb-item><a href="#">Home</a></mdb-breadcrumb-item>
          <mdb-breadcrumb-item><a href="#">Library</a></mdb-breadcrumb-item>
          <mdb-breadcrumb-item>Data</mdb-breadcrumb-item>
        </mdb-breadcrumb>
      </section>
    </section>
    <section class="demo-section">
      <h4>Breadcrumbs with dark background</h4>
      <section>
        <mdb-breadcrumb color="default">
          <mdb-breadcrumb-item><a href="#" class="white-text">Home</a></mdb-breadcrumb-item>
        </mdb-breadcrumb>
        <mdb-breadcrumb class="light-font" color="primary">
          <mdb-breadcrumb-item><a href="#" class="white-text">Home</a></mdb-breadcrumb-item>
          <mdb-breadcrumb-item><a href="#" class="white-text">Library</a></mdb-breadcrumb-item>
        </mdb-breadcrumb>
        <mdb-breadcrumb class="mb-0 light-font" color="secondary">
          <mdb-breadcrumb-item><a href="#" class="white-text">Home</a></mdb-breadcrumb-item>
          <mdb-breadcrumb-item><a href="#" class="white-text">Library</a></mdb-breadcrumb-item>
          <mdb-breadcrumb-item active>Data</mdb-breadcrumb-item>
        </mdb-breadcrumb>
      </section>
    </section>
    <section class="demo-section">
      <h4>Breadcrumbs with light background</h4>
      <section class="dark-font">
        <mdb-breadcrumb class="cyan lighten-4">
          <mdb-breadcrumb-item><a href="#" class="black-text">Home</a></mdb-breadcrumb-item>
        </mdb-breadcrumb>
        <mdb-breadcrumb class="pink lighten-4">
          <mdb-breadcrumb-item><a href="#" class="black-text">Home</a></mdb-breadcrumb-item>
          <mdb-breadcrumb-item><a href="#" class="black-text">Library</a></mdb-breadcrumb-item>
        </mdb-breadcrumb>
        <mdb-breadcrumb class="purple lighten-4 mb-0">
          <mdb-breadcrumb-item><a href="#" class="black-text">Home</a></mdb-breadcrumb-item>
          <mdb-breadcrumb-item><a href="#" class="black-text">Library</a></mdb-breadcrumb-item>
          <mdb-breadcrumb-item active>Data</mdb-breadcrumb-item>
        </mdb-breadcrumb>
      </section>
    </section>
    <section class="demo-section">
      <h4>Breadcrumbs in uppercase</h4>
      <section class="text-uppercase">
        <mdb-breadcrumb class="cyan lighten-4">
          <mdb-breadcrumb-item><a href="#">Home</a></mdb-breadcrumb-item>
        </mdb-breadcrumb>
        <mdb-breadcrumb class="cyan lighten-4">
          <mdb-breadcrumb-item><a href="#">Home</a></mdb-breadcrumb-item>
          <mdb-breadcrumb-item><a href="#">Library</a></mdb-breadcrumb-item>
        </mdb-breadcrumb>
        <mdb-breadcrumb class="cyan lighten-4 mb-0">
          <mdb-breadcrumb-item><a href="#">Home</a></mdb-breadcrumb-item>
          <mdb-breadcrumb-item><a href="#">Library</a></mdb-breadcrumb-item>
          <mdb-breadcrumb-item active>Data</mdb-breadcrumb-item>
        </mdb-breadcrumb>
      </section>
    </section>
    <section class="demo-section">
      <h4>Breadcrumbs with a bold font</h4>
      <section class="font-weight-bold text-uppercase">
        <mdb-breadcrumb>
          <mdb-breadcrumb-item><a href="#">Home</a></mdb-breadcrumb-item>
        </mdb-breadcrumb>
        <mdb-breadcrumb>
          <mdb-breadcrumb-item><a href="#">Home</a></mdb-breadcrumb-item>
          <mdb-breadcrumb-item><a href="#">Library</a></mdb-breadcrumb-item>
        </mdb-breadcrumb>
        <mdb-breadcrumb class="mb-0">
          <mdb-breadcrumb-item><a href="#">Home</a></mdb-breadcrumb-item>
          <mdb-breadcrumb-item><a href="#">Library</a></mdb-breadcrumb-item>
          <mdb-breadcrumb-item active>Data</mdb-breadcrumb-item>
        </mdb-breadcrumb>
      </section>
    </section>
    <section class="demo-section">
      <h4>Breadcrumbs with a hamburger button</h4>
      <section>
        <nav class="navbar navbar-expand-md navbar-dark indigo">
          <div class="float-left">
            <a class="white-text button-collapse" href="#!"><i class="fas fa-bars"></i></a>
          </div>
          <mdb-breadcrumb class="mb-1 indigo mr-auto">
            <mdb-breadcrumb-item><a href="#" class="text-white">Home</a></mdb-breadcrumb-item>
            <mdb-breadcrumb-item active>Library</mdb-breadcrumb-item>
          </mdb-breadcrumb>
          <form class="form-inline md-form m-0">
            <input class="form-control m-0 p-1 text-white" type="text" placeholder="Search" aria-label="Search">
          </form>
        </nav>
      </section>
    </section>
    <section class="demo-section">
      <h4>Breadcrumbs with a logo</h4>
      <section>
        <nav class="navbar navbar-expand-md navbar-dark indigo">
          <a class="navbar-brand" href="#!">
            <img src="https://mdbootstrap.com/img/logo/mdb-transparent.png" height="30" alt="MDB logo">
          </a>
          <mdb-breadcrumb class="mb-1 indigo mr-auto">
            <mdb-breadcrumb-item><a href="#" class="text-white">Layout</a></mdb-breadcrumb-item>
            <mdb-breadcrumb-item active>Grid Usage</mdb-breadcrumb-item>
          </mdb-breadcrumb>
        </nav>
      </section>
    </section>
  </mdb-container>
</template>

<script>
import { mdbBreadcrumb, mdbBreadcrumbItem, mdbIcon, mdbRow, mdbContainer } from 'mdbvue';

export default {
  name: 'BreadcrumbPage',
  components: {
    mdbBreadcrumb,
    mdbBreadcrumbItem,
    mdbContainer,
    mdbRow,
    mdbIcon    
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.breadcrumb-with-arrows .breadcrumb-item + .breadcrumb-item::before {
  font-family: "Font Awesome 5 Free";
  font-weight: 900;
  content: "\f0da";
}
.breadcrumb-with-mdb-icon .breadcrumb-item + .breadcrumb-item::before {
  font-family: "Font Awesome 5 Brands";
  font-weight: 900;
  content: "\f8ca";
}
.breadcrumb-with-double-arrows .breadcrumb-item + .breadcrumb-item::before {
  font-family: "Font Awesome 5 Free";
  font-weight: 900;
  content: "\f101";
}
.light-font .breadcrumb-item + .breadcrumb-item::before {
  color: #fff; }
.light-font .breadcrumb-item.active {
  color: #cfd8dc;
}
.dark-font .breadcrumb-item + .breadcrumb-item::before {
color: #000; }
.dark-font .breadcrumb-item.active {
color: #455a64; }
::placeholder { 
  color: #cfd8dc;
}
</style>