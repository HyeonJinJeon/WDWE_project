<template>
  <mdb-container>
    <mdb-row class="mt-5 align-items-center justify-content-start">
      <h4 class="demo-title"><strong>Pills</strong></h4>
      <a href="https://mdbootstrap.com/docs/vue/components/pills/?utm_source=DemoApp&utm_medium=MDBVueFree" waves-fixed class="border grey-text px-2 border-light rounded ml-2" target="_blank"><mdb-icon icon="graduation-cap" class="mr-2"/>Docs</a>
    </mdb-row>
    <hr />

    <section class="demo-section">
      <h4>Default pills</h4>
      <section>
        <mdb-tabs 
          :active="0"
          pills 
          :links="[
            { text: 'Home' },
            { text: 'Profile' },
            { text: 'Contact' }]" 
          :content="[
            `Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.`,
            `<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil odit magnam minima, soluta doloribus reiciendis molestiae placeat unde eos molestias. Quisquam aperiam, pariatur. Tempora, placeat ratione porro voluptate odit minima.</p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil odit magnam minima, soluta doloribus reiciendis molestiae placeat unde eos molestias. Quisquam aperiam, pariatur. Tempora, placeat ratione porro voluptate odit minima.</p>`,
            `Etsy mixtape wayfarers, ethical wes anderson tofu before they sold out mcsweeney's organic lomo retro fanny pack lo-fi farm-to-table readymade. Messenger bag gentrify pitchfork tattooed craft beer, iphone skateboard locavore carles etsy salvia banksy hoodie helvetica. DIY synth PBR banksy irony. Leggings gentrify squid 8-bit cred pitchfork. Williamsburg banh mi whatever gluten-free, carles pitchfork biodiesel fixie etsy retro mlkshk vice blog. Scenester cred you probably haven't heard of them, vinyl craft beer blog stumptown. Pitchfork sustainable tofu synth chambray yr.`]"
        />
      </section>
    </section>

  </mdb-container>
</template>

<script>
import { mdbContainer, mdbRow, mdbIcon, mdbTabs } from 'mdbvue';

export default {
  name: 'PillsPage',
  components: {
    mdbContainer,
    mdbRow,
    mdbIcon,
    mdbTabs
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
