<template>
  <mdb-container>
    <mdb-row class="mt-5 align-items-center justify-content-start">
      <h4 class="demo-title">Animate on Scroll</h4>
      <a
        href="https://mdbootstrap.com/docs/vue/css/animations/"
        waves-fixed
        class="border grey-text px-2 border-light rounded ml-2"
        target="_blank"
      >
        <mdb-icon icon="graduation-cap" class="mr-2"/>Docs
      </a>
    </mdb-row>
    <hr>
    <section class="demo-section">
      <h4>Scroll down to see the effect <mdb-icon icon="chevron-down"/></h4>
      <section style="padding-top: 80vh;">
        <div class="mb-5">
          <mdb-row class="mb-4">
            <mdb-col>
              <img
                src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(31).jpg"
                alt="Sample image"
                class="img-fluid"
                v-mdb-animate-on-scroll="{animation: 'bounceInLeft', delay: 300, position: 20}"
              >
            </mdb-col>
            <mdb-col>
              <img
                src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(32).jpg"
                alt="Sample image"
                class="img-fluid"
                v-mdb-animate-on-scroll="'tada'"
              >
            </mdb-col>
            <mdb-col>
              <img
                src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(73).jpg"
                alt="Sample image"
                class="img-fluid"
                v-mdb-animate-on-scroll="{animation: 'fadeInLeft', delay: 200}"
              >
            </mdb-col>
          </mdb-row>
          <mdb-row class="mb-4">
            <mdb-col>
              <img
                src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg"
                alt="Sample image"
                class="img-fluid"
                v-mdb-animate-on-scroll="{animation: 'fadeInRight', delay: 100, position: 12}"
              >
            </mdb-col>
            <mdb-col>
              <img
                src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(14).jpg"
                alt="Sample image"
                class="img-fluid"
                v-mdb-animate-on-scroll="{animation: 'fadeIn'}"
              >
            </mdb-col>
            <mdb-col>
              <img
                src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(35).jpg"
                alt="Sample image"
                class="img-fluid"
                v-mdb-animate-on-scroll="{animation: 'rollIn', delay: 50}"
              >
            </mdb-col>
          </mdb-row>
        </div>
      </section>
    </section>
  </mdb-container>
</template>

<script>
import {
  mdbContainer,
  mdbRow,
  mdbCol,
  mdbIcon,
  mdbAnimateOnScroll
} from "mdbvue";

export default {
  name: "AnimateOnScrollPage",
  components: {
    mdbContainer,
    mdbRow,
    mdbCol,
    mdbIcon
  },
  data() {
    return {
      animatedClass: "",
      attentionSeekers: [
        { text: "ATTENTION SEEKERS", value: null },
        { text: "BOUNCE", value: "bounce" },
        { text: "FLASH", value: "flash" },
        { text: "PULSE", value: "pulse" },
        { text: "RUBBER BAND", value: "rubberBand" },
        { text: "SHAKE", value: "shake" },
        { text: "HEAD SHAKE", value: "headShake" },
        { text: "SWING", value: "swing" },
        { text: "TADA", value: "tada" },
        { text: "WOBBLE", value: "wobble" },
        { text: "JELLO", value: "jello" }
      ],
      bouncingEntrances: [
        { text: "BOUNCING ENTRANCES", value: null },
        { text: "BOUNCE IN", value: "bounceIn" },
        { text: "BOUNCE IN DOWN", value: "bounceInDown" },
        { text: "BOUNCE IN LEFT", value: "bounceInLeft" },
        { text: "BOUNCE IN RIGHT", value: "bounceInRight" },
        { text: "BOUNCE IN UP", value: "bounceInUp" }
      ],
      bouncingExits: [
        { text: "BOUNCING EXITS", value: null },
        { text: "BOUNCE OUT", value: "bounceOut" },
        { text: "BOUNCE OUT DOWN", value: "bounceOutDown" },
        { text: "BOUNCE OUT LEFT", value: "bounceOutLeft" },
        { text: "BOUNCE OUT RIGHT", value: "bounceOutRight" },
        { text: "BOUNCE OUT UP", value: "bounceOutUp" }
      ],
      fadingEntrances: [
        { text: "FADING ENTRANCES", value: null },
        { text: "FADE IN", value: "fadeIn" },
        { text: "FADE IN DOWN", value: "fadeInDown" },
        { text: "FADE IN LEFT", value: "fadeInLeft" },
        { text: "FADE IN RIGHT", value: "fadeInRight" },
        { text: "FADE IN UP", value: "fadeInUp" },
        { text: "FADE IN DOWN BIG", value: "fadeInDownBig" },
        { text: "FADE IN LEFT BIG", value: "fadeInLeftBig" },
        { text: "FADE IN RIGHT BIG", value: "fadeInRightBig" },
        { text: "FADE IN UP BIG", value: "fadeInUpBig" }
      ],
      fadingExits: [
        { text: "FADING EXITS", value: null },
        { text: "FADE OUT", value: "fadeOut" },
        { text: "FADE OUT DOWN", value: "fadeOutDown" },
        { text: "FADE OUT LEFT", value: "fadeOutLeft" },
        { text: "FADE OUT RIGHT", value: "fadeOutRight" },
        { text: "FADE OUT UP", value: "fadeOutUp" },
        { text: "FADE OUT DOWN BIG", value: "fadeOutDownBig" },
        { text: "FADE OUT LEFT BIG", value: "fadeOutLeftBig" },
        { text: "FADE OUT RIGHT BIG", value: "fadeOutRightBig" },
        { text: "FADE OUT UP BIG", value: "fadeOutUpBig" }
      ],
      flippers: [
        { text: "FLIPPERS", value: null },
        { text: "FLIP", value: "flip" },
        { text: "FLIP IN X", value: "flipInX" },
        { text: "FLIP IN Y", value: "flipInY" },
        { text: "FLIP OUT X", value: "flipOutX" },
        { text: "FLIP OUT Y", value: "flipOutY" }
      ],
      lightspeed: [
        { text: "LIGHTSPEED", value: null },
        { text: "LIGHTSPEED IN", value: "lightSpeedIn" },
        { text: "LIGHTSPEED OUT", value: "lightSpeedOut" }
      ],
      rotatingEntrances: [
        { text: "ROTATING ENTRANCES", value: null },
        { text: "ROTATE IN", value: "rotateIn" },
        { text: "ROTATE IN DOWN LEFT", value: "rotateInDownLeft" },
        { text: "ROTATE IN DOWN RIGHT", value: "rotateInDownRight" },
        { text: "ROTATE IN UP LEFT", value: "rotateInUpLeft" },
        { text: "ROTATE IN UP RIGHT", value: "rotateInUpRight" }
      ],
      rotatingExits: [
        { text: "ROTATING EXITS", value: null },
        { text: "ROTATE OUT", value: "rotateOut" },
        { text: "ROTATE OUT DOWN LEFT", value: "rotateOutDownLeft" },
        { text: "ROTATE OUT DOWN RIGHT", value: "rotateOutDownRight" },
        { text: "ROTATE OUT UP LEFT", value: "rotateOutUpLeft" },
        { text: "ROTATE OUT UP RIGHT", value: "rotateOutUpRight" }
      ],
      slidingEntrances: [
        { text: "SLIDING ENTRANCES", value: null },
        { text: "SLIDE IN UP", value: "slideInUp" },
        { text: "SLIDE IN DOWN", value: "slideInDown" },
        { text: "SLIDE IN LEFT", value: "slideInLeft" },
        { text: "SLIDE IN RIGHT", value: "slideInRight" }
      ],
      slidingExits: [
        { text: "SLIDING EXITS", value: null },
        { text: "SLIDE OUT UP", value: "slideOutUp" },
        { text: "SLIDE OUT DOWN", value: "slideOutDown" },
        { text: "SLIDE OUT LEFT", value: "slideOutLeft" },
        { text: "SLIDE OUT RIGHT", value: "slideOutRight" }
      ],
      zoomEntrances: [
        { text: "ZOOM ENTRANCES", value: null },
        { text: "ZOOM IN UP", value: "zoomInUp" },
        { text: "ZOOM IN DOWN", value: "zoomInDown" },
        { text: "ZOOM IN LEFT", value: "zoomInLeft" },
        { text: "ZOOM IN RIGHT", value: "zoomInRight" }
      ],
      zoomExits: [
        { text: "ZOOM EXITS", value: null },
        { text: "ZOOM OUT UP", value: "zoomOutUp" },
        { text: "ZOOM OUT DOWN", value: "zoomOutDown" },
        { text: "ZOOM OUT LEFT", value: "zoomOutLeft" },
        { text: "ZOOM OUT RIGHT", value: "zoomOutRight" }
      ],
      specials: [
        { text: "SPECIALS", value: null },
        { text: "HINGE", value: "hinge" },
        { text: "ROLL IN", value: "rollIn" },
        { text: "ROLL OUT", value: "rollOut" }
      ]
    };
  },
  methods: {
    getSelectValue(event) {
      this.animatedClass = event.target.value;
    },
  },
  directives: {
    mdbAnimateOnScroll
  }
};
</script>

<style scoped>
.img-container {
  margin: 6rem 0;
  padding: 5rem;
  display: flex;
  justify-content: center;
}
.custom-select {
  margin: 10px 0;
}
.loop-container {
  padding: 3rem;
}


</style>
