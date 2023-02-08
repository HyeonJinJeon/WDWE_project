<template>
  <mdb-container>
    <mdb-row class="mt-5 align-items-center justify-content-start">
      <h4 class="demo-title"><strong>Textarea</strong></h4>
      <a
        href="https://mdbootstrap.com/docs/vue/forms/textarea/?utm_source=DemoApp&utm_medium=MDBVueFree"
        waves-fixed
        class="border grey-text px-2 border-light rounded ml-2"
        target="_blank"
        ><mdb-icon icon="graduation-cap" class="mr-2" />Docs</a
      >
    </mdb-row>
    <hr />
    <section class="demo-section">
      <h4>Basic example with v-model</h4>
      <section>
        <mdb-row class="align-items-center">
          <mdb-col sm="6">
            <mdb-input type="textarea" :rows="4" v-model="value" />
            <p class="mt-3 text-muted"><strong>value: </strong>{{ value }}</p>
          </mdb-col>
          <mdb-col sm="6">
            <mdb-input
              type="textarea"
              :rows="4"
              outline
              v-model="outlineValue"
            />
            <p class="mt-3 text-muted">
              <strong>value: </strong>{{ outlineValue }}
            </p>
          </mdb-col>
        </mdb-row>
      </section>
    </section>
    <section class="demo-section">
      <h4>Label & placeholder</h4>
      <section>
        <mdb-row class="align-items-center">
          <mdb-col sm="6">
            <mdb-input type="textarea" label="label" />
          </mdb-col>
          <mdb-col sm="6">
            <mdb-input type="textarea" placeholder="placeholder" />
          </mdb-col>
        </mdb-row>
        <mdb-row class="align-items-center">
          <mdb-col sm="6">
            <mdb-input outline type="textarea" label="label" />
          </mdb-col>
          <mdb-col sm="6">
            <mdb-input outline type="textarea" placeholder="placeholder" />
          </mdb-col>
        </mdb-row>
      </section>
    </section>
    <section class="demo-section">
      <h4>Prefix</h4>
      <section>
        <mdb-row class="align-items-center">
          <mdb-col sm="6">
            <mdb-input type="textarea" icon="paper-plane" far />
          </mdb-col>
          <mdb-col sm="6">
            <mdb-input type="textarea" outline icon="paper-plane" />
          </mdb-col>
        </mdb-row>
      </section>
    </section>
    <section class="demo-section">
      <h4>Colorful border & label</h4>
      <section>
        <mdb-row class="align-items-center">
          <mdb-col sm="6">
            <mdb-input
              type="textarea"
              outline
              inputClass="border-secondary"
              labelClass="text-secondary"
              label="label"
            />
          </mdb-col>
          <mdb-col sm="6">
            <mdb-input
              type="textarea"
              inputClass="border-info"
              labelClass="text-info"
              label="label"
            />
          </mdb-col>
        </mdb-row>
      </section>
    </section>
    <section class="demo-section">
      <h4>Custom borders & active outlines</h4>
      <section>
        <mdb-row class="align-items-center">
          <mdb-col sm="6">
            <mdb-input
              type="textarea"
              outline
              wrapperClass="custom-purple-border"
              placeholder="aways colorful"
            />
          </mdb-col>
          <mdb-col sm="6">
            <mdb-input
              type="textarea"
              outline
              wrapperClass="custom-green-border"
              placeholder="colorful on focus"
            />
          </mdb-col>
        </mdb-row>
      </section>
    </section>
    <section class="demo-section">
      <h4>Shadow</h4>
      <section>
        <mdb-row class="align-items-center">
          <mdb-col sm="6">
            <mdb-input
              type="textarea"
              outline
              inputClass="z-depth-1 p-3"
              placeholder="shadow textarea"
            />
          </mdb-col>
        </mdb-row>
      </section>
    </section>
    <section class="demo-section">
      <h4>Colorful textarea</h4>
      <section>
        <mdb-row class="align-items-end">
          <mdb-col sm="6">
            <mdb-input
              wrapperClass="pink-textarea"
              type="textarea"
              label="Pink textarea"
            />
          </mdb-col>
          <mdb-col sm="6">
            <mdb-input
              wrapperClass="active-pink-textarea"
              type="textarea"
              label="Active pink textarea"
            />
          </mdb-col>
        </mdb-row>
        <mdb-row class="align-items-end">
          <mdb-col sm="6">
            <mdb-input
              wrapperClass="amber-textarea"
              type="textarea"
              label="Amber textarea"
            />
          </mdb-col>
          <mdb-col sm="6">
            <mdb-input
              wrapperClass="active-amber-textarea"
              type="textarea"
              label="Active amber textarea"
            />
          </mdb-col>
        </mdb-row>
      </section>
    </section>
    <section class="demo-section">
      <h4>Colorful prefix</h4>
      <section>
        <mdb-row class="align-items-end">
          <mdb-col sm="6">
            <mdb-input
              wrapperClass="pink-textarea"
              type="textarea"
              label="Material textarea with a colorful prefix on :focus state"
              icon="angle-double-right"
            />
          </mdb-col>
          <mdb-col sm="6">
            <mdb-input
              icon="pencil-alt"
              wrapperClass="active-pink-textarea"
              type="textarea"
              label="Material textarea with an always colorful prefix"
            />
          </mdb-col>
        </mdb-row>
        <mdb-row class="mt-3 align-items-end">
          <mdb-col sm="6">
            <mdb-input
              wrapperClass="amber-textarea"
              type="textarea"
              label="Material textarea with a colorful prefix on :focus state"
              icon="angle-double-right"
            />
          </mdb-col>
          <mdb-col sm="6">
            <mdb-input
              icon="pencil-alt"
              wrapperClass="active-amber-textarea"
              type="textarea"
              label="Material textarea with an always colorful prefix"
            />
          </mdb-col>
        </mdb-row>
      </section>
    </section>
    <section class="demo-section">
      <h4>Colorful labels</h4>
      <section>
        <mdb-row class="align-items-end">
          <mdb-col sm="6">
            <mdb-input
              type="textarea"
              label="Amber label"
              labelClass="amber-text"
            />
          </mdb-col>
          <mdb-col sm="6">
            <mdb-input
              type="textarea"
              label="Pink label"
              labelClass="pink-text"
            />
          </mdb-col>
        </mdb-row>
      </section>
    </section>
  </mdb-container>
</template>

<script>
import { mdbContainer, mdbRow, mdbInput, mdbCol, mdbIcon } from "mdbvue";

export default {
  name: "TextareaPage",
  components: {
    mdbContainer,
    mdbRow,
    mdbInput,
    mdbCol,
    mdbIcon
  },
  data() {
    return {
      value: "",
      outlineValue: ""
    };
  }
};
</script>
<style>
.custom-purple-border textarea {
  border: 1px solid #ba68c8 !important;
}
.custom-purple-border .form-control:focus {
  border: 1px solid #ba68c8 !important;
  box-shadow: 0 0 0 0.2rem rgba(186, 104, 200, 0.25) !important;
}

.custom-green-border .form-control:focus {
  border: 1px solid #8bc34a !important;
  box-shadow: 0 0 0 0.2rem rgba(139, 195, 74, 0.25) !important;
}

.pink-textarea.md-form label.active {
  color: #f48fb1;
}

.pink-textarea textarea.md-textarea:focus:not([readonly]),
.active-pink-textarea textarea.md-textarea:focus:not([readonly]) {
  border-bottom: 1px solid #f48fb1;
  box-shadow: 0 1px 0 0 #f48fb1;
}
.pink-textarea.md-form .prefix.active {
  color: #f48fb1;
}
.pink-textarea.md-form textarea.md-textarea:focus:not([readonly]) + label {
  color: #f48fb1;
}

.amber-textarea.md-form label.active {
  color: #ffa000;
}
.amber-textarea textarea.md-textarea:focus:not([readonly]),
.active-amber-textarea textarea.md-textarea:focus:not([readonly]) {
  border-bottom: 1px solid #ffa000;
  box-shadow: 0 1px 0 0 #ffa000;
}
.amber-textarea.md-form .prefix.active {
  color: #ffa000;
}
.amber-textarea.md-form textarea.md-textarea:focus:not([readonly]) + label {
  color: #ffa000;
}

.active-pink-textarea textarea.md-textarea {
  border-bottom: 1px solid #f48fb1;
  box-shadow: 0 1px 0 0 #f48fb1;
}
.active-pink-textarea.md-form label.active {
  color: #f48fb1;
}
.active-pink-textarea.md-form label {
  color: #f48fb1;
}
.active-pink-textarea.md-form .prefix {
  color: #f48fb1;
}
.active-pink-textarea.md-form
  textarea.md-textarea:focus:not([readonly])
  + label {
  color: #f48fb1;
}

.active-amber-textarea textarea.md-textarea {
  border-bottom: 1px solid #ffa000;
  box-shadow: 0 1px 0 0 #ffa000;
}
.active-amber-textarea.md-form label.active {
  color: #ffa000;
}
.active-amber-textarea.md-form label {
  color: #ffa000;
}
.active-amber-textarea.md-form .prefix {
  color: #ffa000;
}
.active-amber-textarea.md-form
  textarea.md-textarea:focus:not([readonly])
  + label {
  color: #ffa000;
}
</style>
