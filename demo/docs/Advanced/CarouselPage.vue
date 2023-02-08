<template>
  <mdb-container>
    <mdb-row class="mt-5 align-items-center justify-content-start">
      <h4 class="demo-title">
        <strong>Carousel</strong>
      </h4>
      <a
        href="https://mdbootstrap.com/docs/vue/advanced/carousel/?utm_source=DemoApp&utm_medium=MDBVueFree"
        waves-fixed
        class="border grey-text px-2 border-light rounded ml-2"
        target="_blank"
      >
        <mdb-icon icon="graduation-cap" class="mr-2" />Docs
      </a>
    </mdb-row>
    <section class="demo-section">
      <h4>Basic example with v-model</h4>
      <section>
        <mdb-carousel :items="basicCarousel" v-model="carousel" indicators></mdb-carousel>
        <p class="mt-3 ml-1">
          Current index:
          <strong>{{carousel}}</strong>
        </p>
        <mdb-row class="mt-3 ml-1">
          <mdb-btn size="sm" color="amber" @click="carousel--" icon="minus"></mdb-btn>
          <mdb-btn size="sm" color="amber" @click="carousel++" icon="plus"></mdb-btn>
        </mdb-row>
      </section>
    </section>

    <section class="demo-section">
      <h4>Basic example with loader</h4>
      <section>
        <mdb-carousel :items="basicCarousel" v-model="carouselWithLoader" indicators loader></mdb-carousel>
        <p class="mt-3 ml-1">
          Current index:
          <strong>{{carouselWithLoader}}</strong>
        </p>
        <mdb-row class="mt-3 ml-1">
          <mdb-btn size="sm" color="amber" @click="carouselWithLoader--" icon="minus"></mdb-btn>
          <mdb-btn size="sm" color="amber" @click="carouselWithLoader++" icon="plus"></mdb-btn>
        </mdb-row>
      </section>
    </section>

    <section class="demo-section">
      <h4>Interval</h4>
      <section>
        <mdb-carousel :interval="4000" slide :items="intervalCarousel"></mdb-carousel>
      </section>
    </section>

    <section class="demo-section">
      <h4>Captions with custom animation</h4>
      <section>
        <mdb-carousel :items="captionsCarousel" controlls captions indicators></mdb-carousel>
      </section>
    </section>

    <section class="demo-section">
      <h4>Custom controll icons</h4>
      <section>
        <mdb-carousel :items="controllsCarousel" controlls :controllIcons="['fas fa-arrow-circle-left fa-2x text-white', 'fas fa-arrow-circle-right fa-2x text-white']"></mdb-carousel>
      </section>
    </section>

    <section class="demo-section">
      <h4>Video carousel</h4>
      <section>
        <mdb-carousel :items="videoCarousel" indicators></mdb-carousel>
      </section>
    </section>
  </mdb-container>
</template>

<script>
import {
  mdbCarousel,
  mdbRow,
  mdbIcon,
  mdbContainer,
  mdbBtn,
} from "mdbvue";

export default {
  name: "CarouselPage",
  components: {
    mdbCarousel,
    mdbRow,
    mdbIcon,
    mdbContainer,
    mdbBtn,
  },
  data() {
    return {
      carousel: 0,
      carouselWithLoader: 0,
      multi: 2,
      basicCarousel: [
        {
          img: true,
          src: "https://mdbootstrap.com/img/Photos/Slides/img%20(68).jpg",
          mask: "black-light",
          alt: "First Slide",
          caption: {
            title: "First slide"
          }
        },
        {
          img: true,
          src: "https://mdbootstrap.com/img/Photos/Slides/img%20(6).jpg",
          mask: "black-strong",
          caption: {
            title: "Second slide"
          }
        },
        {
          img: true,
          src: "https://mdbootstrap.com/img/Photos/Slides/img%20(9).jpg",
          mask: "black-slight",
          caption: {
            title: "Third slide"
          }
        }
      ],
      controllsCarousel: [
        {
          img: true,
          src: "https://mdbootstrap.com/img/Photos/Slides/img%20(68).jpg",
          mask: "black-light"
        },
        {
          img: true,
          src: "https://mdbootstrap.com/img/Photos/Slides/img%20(6).jpg",
          mask: "black-strong"
        },
        {
          img: true,
          src: "https://mdbootstrap.com/img/Photos/Slides/img%20(9).jpg",
          mask: "black-slight"
        }
      ],
      captionsCarousel: [
        {
          img: true,
          src: "https://mdbootstrap.com/img/Photos/Slides/img%20(130).jpg",
          mask: "light-blue-light",
          alt: "First Slide",
          caption: {
            animation: "slideInLeft",
            title: "Light mask",
            text: "First text"
          }
        },
        {
          img: true,
          src: "https://mdbootstrap.com/img/Photos/Slides/img%20(129).jpg",
          mask: "light-blue-strong",
          caption: {
            animation: "slideInDown",
            title: "Strong mask",
            text: "Second text"
          }
        },
        {
          img: true,
          src: "https://mdbootstrap.com/img/Photos/Slides/img%20(70).jpg",
          mask: "light-blue-slight",
          caption: {
            animation: "slideInRight",
            title: "Slight mask",
            text: "Third text"
          }
        }
      ],
      intervalCarousel: [
        {
          img: true,
          src: "https://mdbootstrap.com/img/Photos/Slides/img%20(68).jpg",
          mask: "black-light",
          alt: "First Slide"
        },
        {
          img: true,
          src: "https://mdbootstrap.com/img/Photos/Slides/img%20(6).jpg",
          mask: "black-strong"
        },
        {
          img: true,
          src: "https://mdbootstrap.com/img/Photos/Slides/img%20(9).jpg",
          mask: "black-slight"
        }
      ],
      videoCarousel: [
        {
          video: true,
          src: "https://mdbootstrap.com/img/video/Tropical.mp4",
          loop: true,
          auto: true,
          muted: true
        },
        {
          video: true,
          src: "https://mdbootstrap.com/img/video/forest.mp4",
          mask: "purple-strong",
          loop: true,
          auto: true,
          muted: true
        },
        {
          video: true,
          src: "https://mdbootstrap.com/img/video/Agua-natural.mp4",
          loop: true,
          auto: true,
          muted: true
        }
      ]
    };
  }
};
</script>

<style scoped>
</style>
