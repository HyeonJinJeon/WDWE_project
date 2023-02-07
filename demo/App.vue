<template>
  <div id="app" :class="$store.state.docs && 'flyout'">
    <mdb-navbar
      v-if="$store.state.docs"
      id="main-navbar"
      dark
      position="top"
      color="stylish"
      style="z-index: 1049"
      expand="xl"
      scrolling
      :scrollingOffset="20"
    >
      <mdb-navbar-brand to="/" waves class="font-weight-bold"
        >MDB Vue</mdb-navbar-brand
      >
      <mdb-navbar-toggler>
        <mdb-navbar-nav right>
          <mdb-nav-item to="/css">
            <strong>CSS</strong>
          </mdb-nav-item>
          <mdb-nav-item to="/components">
            <strong>Components</strong>
          </mdb-nav-item>
          <mdb-nav-item to="/advanced">
            <strong>Advanced</strong>
          </mdb-nav-item>
          <mdb-nav-item to="/navigation">
            <strong>Navigation</strong>
          </mdb-nav-item>
          <mdb-nav-item to="/forms">
            <strong>Forms</strong>
          </mdb-nav-item>
          <mdb-nav-item to="/tables">
            <strong>Tables</strong>
          </mdb-nav-item>
          <mdb-nav-item to="/modals">
            <strong>Modals</strong>
          </mdb-nav-item>
          <mdb-nav-item to="/plugins">
            <strong>Plugins</strong>
          </mdb-nav-item>
          <mdb-nav-item to="/mixins">
            <strong>Mixins</strong>
          </mdb-nav-item>
          <mdb-nav-item to="/directives">
            <strong>Directives</strong>
          </mdb-nav-item>
          <mdb-tooltip>
            <span slot="tip">PRO</span>
            <mdb-nav-item
              slot="reference"
              href="https://mdbootstrap.com/products/vue-ui-kit/"
              newTab
              far
              icon="gem"
            ></mdb-nav-item>
          </mdb-tooltip>
          <mdb-tooltip>
            <span slot="tip">FREE</span>
            <mdb-nav-item
              slot="reference"
              href="https://mdbootstrap.com/docs/vue/getting-started/download/"
              newTab
              icon="download"
            ></mdb-nav-item>
          </mdb-tooltip>
        </mdb-navbar-nav>
      </mdb-navbar-toggler>
    </mdb-navbar>
    <main :style="{ marginTop: $store.state.docs ? '60px' : '0px' }">
      <transition name="fade" mode="out-in">
        <router-view></router-view>
      </transition>
    </main>
    <mdb-footer v-if="$store.state.docs" color="stylish-color">
      <p class="footer-copyright mb-0 py-3 text-center">
        &copy; {{ new Date().getFullYear() }} Copyright:
        <a
          href="https://mdbootstrap.com/docs/vue/?utm_source=DemoApp&utm_medium=MDBVue"
          >MDBootstrap.com</a
        >
      </p>
    </mdb-footer>
  </div>
</template>

<script>
import {
  mdbNavbar,
  mdbNavItem,
  mdbNavbarNav,
  mdbNavbarToggler,
  mdbNavbarBrand,
  mdbFooter,
  mdbTooltip
} from "mdbvue";

export default {
  name: "app",
  components: {
    mdbNavbar,
    mdbNavItem,
    mdbNavbarNav,
    mdbNavbarToggler,
    mdbNavbarBrand,
    mdbFooter,
    mdbTooltip
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap");

.flyout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  justify-content: space-between;
}
.active {
  background-color: rgba(255, 255, 255, 0.1);
}
.demo-section {
  padding: 20px 0;
}
.demo-section > section {
  border: 1px solid #e0e0e0;
  padding: 15px;
}
.demo-section > h4 {
  font-weight: bold;
  margin-bottom: 20px;
}
.demo-title {
  color: #9e9e9e;
  font-weight: 700;
  margin-bottom: 0;
  padding-left: 15px;
}
.demo-result-section {
  position: relative;
  margin-top: -20px;
  margin-bottom: 20px;
  border: 1px solid #e0e0e0;
  border-top: none;
  padding: 15px;
  padding-top: 50px;
  color: grey;
  background-color: #f8f8f8;
}
.demo-result-section:before {
  display: block;
  content: "Result:";
  position: absolute;
  left: 0;
  top: 0;
  padding: 5px 15px;
  width: 100%;
  background-color: #e0e0e0;
  font-weight: 400;
}

.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease-out;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>
