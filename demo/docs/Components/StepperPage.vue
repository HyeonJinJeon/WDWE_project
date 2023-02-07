<template>
  <mdb-container>
    <mdb-row class="mt-5 align-items-center justify-content-start">
      <h4 class="demo-title">
        <strong>Stepper</strong>
      </h4>
      <a
        href="https://mdbootstrap.com/docs/vue/components/stepper"
        waves-fixed
        class="border grey-text px-2 border-light rounded ml-2"
        target="_blank"
      >
        <mdb-icon icon="graduation-cap" class="mr-2" />Docs
      </a>
    </mdb-row>
    <hr />
    <mdb-container class="mt-5">
      <section class="demo-section">
        <h4>Horizontal stepper</h4>
        <section class="p-5">
          <mdb-stepper simpleH :steps="horizontalStepper"></mdb-stepper>
        </section>
      </section>

      <section class="demo-section">
        <h4>Vertical stepper</h4>
        <section class="p-5">
          <mdb-stepper simpleV :steps="verticalStepper" v-model="step"></mdb-stepper>
        </section>
        <h4 class="mt-5">Current step: {{step}}</h4>
        <mdb-btn color="primary" @click="changeStep">Change step</mdb-btn>
      </section>
    </mdb-container>
  </mdb-container>
</template>

<script>
import { mdbContainer, mdbRow, mdbStepper, mdbIcon, mdbBtn } from "mdbvue";

export default {
  components: {
    mdbContainer,
    mdbRow,
    mdbStepper,
    mdbIcon,
    mdbBtn
  },
  data() {
    return {
      step: 3,
      horizontalStepper: [
        {
          content:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse cupiditate voluptate facere iusto quaerat vitae excepturi, accusantium ut aliquam repellat atque nesciunt nostrum similique. Inventore nostrum ut, nobis porro sapiente."
        },
        {
          content:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse cupiditate voluptate facere iusto quaerat vitae excepturi, accusantium ut aliquam repellat atque nesciunt nostrum similique. Inventore nostrum ut, nobis porro sapiente."
        },
        {
          content:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse cupiditate voluptate facere iusto quaerat vitae excepturi, accusantium ut aliquam repellat atque nesciunt nostrum similique. Inventore nostrum ut, nobis porro sapiente."
        }
      ],
      verticalStepper: [
        {
          content:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse cupiditate voluptate facere iusto quaerat vitae excepturi, accusantium ut aliquam repellat atque nesciunt nostrum similique. Inventore nostrum ut, nobis porro sapiente."
        },
        {
          content:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse cupiditate voluptate facere iusto quaerat vitae excepturi, accusantium ut aliquam repellat atque nesciunt nostrum similique. Inventore nostrum ut, nobis porro sapiente."
        },
        {
          content:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse cupiditate voluptate facere iusto quaerat vitae excepturi, accusantium ut aliquam repellat atque nesciunt nostrum similique. Inventore nostrum ut, nobis porro sapiente."
        },
        {
          content:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse cupiditate voluptate facere iusto quaerat vitae excepturi, accusantium ut aliquam repellat atque nesciunt nostrum similique. Inventore nostrum ut, nobis porro sapiente."
        },
        {
          content:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse cupiditate voluptate facere iusto quaerat vitae excepturi, accusantium ut aliquam repellat atque nesciunt nostrum similique. Inventore nostrum ut, nobis porro sapiente."
        }
      ]
    };
  },
  methods: {
    changeStep() {
      this.step = Math.ceil(Math.random() * 5);
    }
  }
};
</script>

<style scoped>
.stepper-vertical .step a:hover {
  background-color: rgba(0, 0, 0, 0.06) !important;
}
.horizontal-step:hover {
  background-color: initial;
}

.horizontal-step a:hover {
  background-color: rgba(0, 0, 0, 0.06);
}

.step a {
  transition: background-color 0.2s linear;
}

.stepper-vertical .step-content {
  height: 0;
  overflow: hidden;
  transition: all 0.5s ease-out;
}

.stepper-horizontal .step-content {
  max-width: 0px;
  overflow: hidden;
  transition: all 0.5s ease-out;
}

.stepper-horizontal li:not(:last-child):after {
  display: none;
}
</style>
