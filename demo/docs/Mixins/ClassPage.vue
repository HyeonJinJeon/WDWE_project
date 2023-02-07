<template>
  <mdb-container>
    <mdb-row class="mt-5 align-items-center justify-content-start">
      <h4 class="demo-title"><strong>Class Mixin</strong></h4>
      <a
        href="https://mdbootstrap.com/docs/vue/mixins/class/?utm_source=DemoApp&utm_medium=MDBVueFree"
        waves-fixed
        class="border grey-text px-2 border-light rounded ml-2"
        target="_blank"
        ><mdb-icon icon="graduation-cap" class="mr-2" />Docs</a
      >
    </mdb-row>
    <hr />

    <section class="demo-section">
      <h4>Button with custom margins and paddings</h4>

      <p>
        &lt;mdb-btn color=&quot;primary&quot; m=&quot;4&quot; p=&quot;2&quot;&gt;m=&quot;4&quot; p=&quot;2&quot;&lt;/mdb-btn&gt;<br>
        &lt;mdb-btn color=&quot;primary&quot; m=&quot;1&quot; p=&quot;4&quot;&gt;m=&quot;1&quot; p=&quot;4&quot;&lt;/mdb-btn&gt;<br>
        &lt;mdb-btn color=&quot;primary&quot; m=&quot;2&quot; p=&quot;1&quot;&gt;m=&quot;2&quot; p=&quot;1&quot;&lt;/mdb-btn&gt;
      </p>

      <section>
        <mdb-btn color="primary" m="4" p="2">m="4" p="2"</mdb-btn>
        <mdb-btn color="primary" m="1" p="4">m="1" p="4"</mdb-btn>
        <mdb-btn color="primary" m="2" p="1">m="2" p="1"</mdb-btn>
      </section>
    </section>
    
    <section class="demo-section">
      <h4>Advanced customization</h4>

      <p>
        &lt;mdb-btn color=&quot;primary&quot; m=&quot;y4&quot;&gt;m=&quot;y4&quot;&lt;/mdb-btn&gt;<br>
        &lt;mdb-btn color=&quot;primary&quot; p=&quot;x4&quot;&gt;p=&quot;x4&quot;&lt;/mdb-btn&gt;<br>
        &lt;mdb-btn color=&quot;primary&quot; p=&quot;t4 r2&quot;&gt;p=&quot;t4 r2&quot;&lt;/mdb-btn&gt;
      </p>

      <section>
        <mdb-btn color="primary" m="y4">m="y4"</mdb-btn>
        <mdb-btn color="primary" p="x4">p="x4"</mdb-btn>
        <mdb-btn color="primary" p="t4 r2">p="t4 r2"</mdb-btn>
      </section>
    </section>
  </mdb-container>
</template>

<script>
import {
  mdbContainer,
  mdbRow,
  mdbIcon,
  mdbBtn,
  mdbClassMixin
} from "mdbvue";

export default {
  name: "ClassMixinPage",
  components: {
    mdbContainer,
    mdbRow,
    mdbIcon,
    mdbBtn
  },
  mixins: [ mdbClassMixin ]
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
