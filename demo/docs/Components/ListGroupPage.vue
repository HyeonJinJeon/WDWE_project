<template>
  <mdb-container>
    <mdb-row class="mt-5 align-items-center justify-content-start">
      <h4 class="demo-title"><strong>List Group</strong></h4>
      <a
        href="https://mdbootstrap.com/docs/vue/components/list-group/?utm_source=DemoApp&utm_medium=MDBVueFree"
        waves-fixed
        class="border grey-text px-2 border-light rounded ml-2"
        target="_blank"
        ><mdb-icon icon="graduation-cap" class="mr-2" />Docs</a
      >
    </mdb-row>
    <hr />
    <section class="demo-section">
      <h2>Basic</h2>
      <section>
        <mdb-row>
          <mdb-col md="3" class="mt-5 mx-3">
            <mdb-list-group>
              <mdb-list-group-item action active>Main Menu</mdb-list-group-item>
              <mdb-list-group-item action
                >Messages
                <mdb-badge :pill="true" color="default-color"
                  >12</mdb-badge
                ></mdb-list-group-item
              >
              <mdb-list-group-item action>Sell Products</mdb-list-group-item>
              <mdb-list-group-item action>Settings</mdb-list-group-item>
              <mdb-list-group-item disabled>Disabled</mdb-list-group-item>
            </mdb-list-group>
          </mdb-col>
        </mdb-row>
      </section>
    </section>
    <section class="demo-section">
      <h2>Flush</h2>
      <section>
        <mdb-row>
          <mdb-col md="3" class="mt-5 mx-3">
            <mdb-list-group flush>
              <mdb-list-group-item>Main Menu</mdb-list-group-item>
              <mdb-list-group-item>Sell Products</mdb-list-group-item>
              <mdb-list-group-item>Settings</mdb-list-group-item>
              <mdb-list-group-item>Contact</mdb-list-group-item>
            </mdb-list-group>
          </mdb-col>
        </mdb-row>
      </section>
    </section>
    <section class="demo-section">
      <h2>Horizontal</h2>
      <section>
        <mdb-list-group horizontal md>
          <mdb-list-group-item action active>Main Menu</mdb-list-group-item>
          <mdb-list-group-item action
            >Messages
            <mdb-badge :pill="true" color="default-color"
              >12</mdb-badge
            ></mdb-list-group-item
          >
          <mdb-list-group-item action>Sell Products</mdb-list-group-item>
          <mdb-list-group-item action>Settings</mdb-list-group-item>
        </mdb-list-group>
      </section>
    </section>
    <section class="demo-section">
      <h2>Contextual classes - static & action</h2>
      <section>
        <mdb-row>
          <mdb-col md="6" class="mt-5 px-3">
            <mdb-list-group>
              <mdb-list-group-item color="primary"
                >A simple primary list group item</mdb-list-group-item
              >
              <mdb-list-group-item color="secondary"
                >A simple secondary list group item</mdb-list-group-item
              >
              <mdb-list-group-item color="success"
                >A simple success list group item</mdb-list-group-item
              >
              <mdb-list-group-item color="danger"
                >A simple danger list group item</mdb-list-group-item
              >
              <mdb-list-group-item color="warning"
                >A simple warning list group item</mdb-list-group-item
              >
              <mdb-list-group-item color="info"
                >A simple info list group item</mdb-list-group-item
              >
              <mdb-list-group-item color="light"
                >A simple light list group item</mdb-list-group-item
              >
              <mdb-list-group-item color="dark"
                >A simple dark list group item</mdb-list-group-item
              >
            </mdb-list-group>
          </mdb-col>
          <mdb-col md="6" class="mt-5 px-3">
            <mdb-list-group>
              <mdb-list-group-item action color="primary"
                >A simple primary list group item</mdb-list-group-item
              >
              <mdb-list-group-item action color="secondary"
                >A simple secondary list group item</mdb-list-group-item
              >
              <mdb-list-group-item action color="success"
                >A simple success list group item</mdb-list-group-item
              >
              <mdb-list-group-item action color="danger"
                >A simple danger list group item</mdb-list-group-item
              >
              <mdb-list-group-item action color="warning"
                >A simple warning list group item</mdb-list-group-item
              >
              <mdb-list-group-item action color="info"
                >A simple info list group item</mdb-list-group-item
              >
              <mdb-list-group-item action color="light"
                >A simple light list group item</mdb-list-group-item
              >
              <mdb-list-group-item action color="dark"
                >A simple dark list group item</mdb-list-group-item
              >
            </mdb-list-group>
          </mdb-col>
        </mdb-row>
      </section>
    </section>
    <section class="demo-section">
      <h2>Custom content</h2>
      <section>
        <mdb-row>
          <mdb-col md="6" class="mt-5 px-3">
            <mdb-list-group>
              <mdb-list-group-item active>
                <div>
                  <div class="d-flex w-100 justify-content-between">
                    <h5 class="mb-2 h5">List group item heading</h5>
                    <small>3 days ago</small>
                  </div>
                  <p class="mb-2">
                    Donec id elit non mi porta gravida at eget metus. Maecenas
                    sed diam eget risus varius blandit.
                  </p>
                  <small>Donec id elit non mi porta.</small>
                </div>
              </mdb-list-group-item>
              <mdb-list-group-item>
                <div>
                  <div class="d-flex w-100 justify-content-between">
                    <h5 class="mb-2 h5">List group item heading</h5>
                    <small>3 days ago</small>
                  </div>
                  <p class="mb-2">
                    Donec id elit non mi porta gravida at eget metus. Maecenas
                    sed diam eget risus varius blandit.
                  </p>
                  <small>Donec id elit non mi porta.</small>
                </div>
              </mdb-list-group-item>
              <mdb-list-group-item>
                <div>
                  <div class="d-flex w-100 justify-content-between">
                    <h5 class="mb-2 h5">List group item heading</h5>
                    <small>3 days ago</small>
                  </div>
                  <p class="mb-2">
                    Donec id elit non mi porta gravida at eget metus. Maecenas
                    sed diam eget risus varius blandit.
                  </p>
                  <small>Donec id elit non mi porta.</small>
                </div>
              </mdb-list-group-item>
            </mdb-list-group>
          </mdb-col>
        </mdb-row>
      </section>
    </section>
    <section class="demo-section">
      <h2>List with icons</h2>
      <section>
        <mdb-row>
          <mdb-col md="6" class="mt-5 mx-3">
            <mdb-list-group>
              <mdb-list-group-item icon="laptop" active>Cras justo odio</mdb-list-group-item>
              <mdb-list-group-item action icon="bomb">Dapibus ac facilisis in</mdb-list-group-item>
              <mdb-list-group-item icon="code">Morbi leo risus</mdb-list-group-item>
              <mdb-list-group-item icon="gem">Porta ac consectetur ac</mdb-list-group-item>
              <mdb-list-group-item icon="cogs">Vestibulum at eros</mdb-list-group-item>
            </mdb-list-group>
          </mdb-col>
        </mdb-row>
      </section>
    </section>
    <section class="demo-section">
      <h2>List with social icons</h2>
      <section>
        <mdb-row>
          <mdb-col md="6" class="mt-5 mx-3">
            <mdb-list-group flush>
              <mdb-list-group-item social fab iconColor="primary-color" icon="instagram">Photos</mdb-list-group-item>
              <mdb-list-group-item social iconColor="red" fab icon="slack-hash">Work</mdb-list-group-item>
              <mdb-list-group-item social iconColor="secondary-color-dark" fab icon="snapchat">Vacation</mdb-list-group-item>
            </mdb-list-group>
          </mdb-col>
        </mdb-row>
      </section>
    </section>
    <section class="demo-section">
      <h2>List with rounded icons</h2>
      <section>
        <mdb-row>
          <mdb-col md="6" class="mt-5 mx-3">
            <mdb-list-group flush>
              <mdb-list-group-item social circle far iconColor="grey" icon="image">Photos</mdb-list-group-item>
              <mdb-list-group-item social circle iconColor="grey" icon="briefcase">Work</mdb-list-group-item>
              <mdb-list-group-item social circle iconColor="grey" icon="anchor">Vacation</mdb-list-group-item>
            </mdb-list-group>
          </mdb-col>
        </mdb-row>
      </section>
    </section>
  </mdb-container>
</template>

<script>
import {
  mdbListGroup,
  mdbListGroupItem,
  mdbBadge,
  mdbContainer,
  mdbIcon,
  mdbRow,
  mdbCol
} from "mdbvue";

export default {
  name: "ListGroupPage",
  components: {
    mdbListGroup,
    mdbListGroupItem,
    mdbBadge,
    mdbContainer,
    mdbIcon,
    mdbRow,
    mdbCol
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
