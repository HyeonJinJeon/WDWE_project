<template>
  <mdb-container>
    <mdb-row class="mt-5 align-items-center justify-content-start">
      <h4 class="demo-title"><strong>Scroll Spy</strong></h4>
      <a
        href="https://mdbootstrap.com/docs/vue/directives/scroll-spy/?utm_source=DemoApp&utm_medium=MDBVueFree"
        waves-fixed
        class="border grey-text px-2 border-light rounded ml-2"
        target="_blank"
        ><mdb-icon icon="graduation-cap" class="mr-2" />Docs</a
      >
    </mdb-row>
    <hr />
    <section class="demo-section">
      <h4>Basic example</h4>
      <section>
        <ul
          class="basic-scrollspy list-unstyled"
          v-mdb-scroll-spy="{ container: 'basic-container', visible: 0.4 }"
        >
          <li><a href="#basic1">First</a></li>
          <li><a href="#basic2">Second</a></li>
          <li><a href="#basic3">Third</a></li>
        </ul>
        <div
          id="basic-container"
          style="overflow-y: scroll; max-height: 200px;"
        >
          <p id="basic1">
            Ad leggings keytar, brunch id art party dolor labore. Pitchfork yr
            enim lo-fi before they sold out qui. Tumblr farm-to-table bicycle
            rights whatever. Anim keffiyeh carles cardigan. Velit seitan
            mcsweeney's photo booth 3 wolf moon irure. Cosby sweater lomo jean
            shorts, williamsburg hoodie minim qui you probably haven't heard of
            them et cardigan trust fund culpa biodiesel wes anderson aesthetic.
            Nihil tattooed accusamus, cred irony biodiesel keffiyeh artisan
            ullamco consequat. Ad leggings keytar, brunch id art party dolor
            labore. Pitchfork yr enim lo-fi before they sold out qui. Tumblr
            farm-to-table bicycle rights whatever. Anim keffiyeh carles
            cardigan. Velit seitan mcsweeney's photo booth 3 wolf moon irure.
            Cosby sweater lomo jean shorts, williamsburg hoodie minim qui you
            probably haven't heard of them et cardigan trust fund culpa
            biodiesel wes anderson aesthetic. Nihil tattooed accusamus, cred
            irony biodiesel keffiyeh artisan ullamco consequat. Ad leggings
            keytar, brunch id art party dolor labore. Pitchfork yr enim lo-fi
            before they sold out qui. Tumblr farm-to-table bicycle rights
            whatever. Anim keffiyeh carles cardigan. Velit seitan mcsweeney's
            photo booth 3 wolf moon irure. Cosby sweater lomo jean shorts,
            williamsburg hoodie minim qui you probably haven't heard of them et
            cardigan trust fund culpa biodiesel wes anderson aesthetic. Nihil
            tattooed accusamus, cred irony biodiesel keffiyeh artisan ullamco
            consequat. Ad leggings keytar, brunch id art party dolor labore.
            Pitchfork yr enim lo-fi before they sold out qui. Tumblr
            farm-to-table bicycle rights whatever. Anim keffiyeh carles
            cardigan. Velit seitan mcsweeney's photo booth 3 wolf moon irure.
            Cosby sweater lomo jean shorts, williamsburg hoodie minim qui you
            probably haven't heard of them et cardigan trust fund culpa
            biodiesel wes anderson aesthetic. Nihil tattooed accusamus, cred
            irony biodiesel keffiyeh artisan ullamco consequat.
          </p>
          <p id="basic2">
            Tortor dignissim convallis aenean et tortor. Placerat orci nulla
            pellentesque dignissim enim sit. Ullamcorper malesuada proin libero
            nunc. Euismod in pellentesque massa placerat duis. Dictum at tempor
            commodo ullamcorper a lacus vestibulum sed. Ac odio tempor orci
            dapibus. Massa massa ultricies mi quis. Mi quis hendrerit dolor
            magna eget est lorem ipsum dolor. Facilisis volutpat est velit
            egestas dui id ornare. Tristique sollicitudin nibh sit amet commodo
            nulla facilisi nullam. Id leo in vitae turpis massa sed elementum
            tempus egestas. Eu nisl nunc mi ipsum faucibus. Justo nec ultrices
            dui sapien eget.Venenatis a condimentum vitae sapien pellentesque.
            Sagittis vitae et leo duis. In dictum non consectetur a erat nam at.
            Orci nulla pellentesque dignissim enim sit amet venenatis. Nisl
            purus in mollis nunc sed id semper risus in. Nec feugiat in
            fermentum posuere. Mattis ullamcorper velit sed ullamcorper. Tortor
            consequat id porta nibh venenatis cras. Iaculis at erat pellentesque
            adipiscing commodo elit at imperdiet. Viverra nibh cras pulvinar
            mattis nunc sed blandit libero. Consequat semper viverra nam libero.
            Id volutpat lacus laoreet non curabitur gravida. Blandit cursus
            risus at ultrices. Urna molestie at elementum eu facilisis sed.
          </p>
          <p id="basic3">
            Venenatis a condimentum vitae sapien pellentesque. Sagittis vitae et
            leo duis. In dictum non consectetur a erat nam at. Orci nulla
            pellentesque dignissim enim sit amet venenatis. Nisl purus in mollis
            nunc sed id semper risus in. Nec feugiat in fermentum posuere.
            Mattis ullamcorper velit sed ullamcorper. Tortor consequat id porta
            nibh venenatis cras. Iaculis at erat pellentesque adipiscing commodo
            elit at imperdiet. Viverra nibh cras pulvinar mattis nunc sed
            blandit libero. Consequat semper viverra nam libero. Id volutpat
            lacus laoreet non curabitur gravida. Blandit cursus risus at
            ultrices. Urna molestie at elementum eu facilisis sed. Semper
            viverra nam libero justo laoreet sit amet cursus. Commodo quis
            imperdiet massa tincidunt nunc pulvinar. Velit laoreet id donec
            ultrices tincidunt. Est lorem ipsum dolor sit amet. Gravida neque
            convallis a cras. Lectus magna fringilla urna porttitor rhoncus.
            Velit sed ullamcorper morbi tincidunt ornare. Morbi leo urna
            molestie at elementum eu facilisis sed odio. Justo donec enim diam
            vulputate ut. Iaculis urna id volutpat lacus. Dui faucibus in ornare
            quam viverra orci sagittis eu. Tortor dignissim convallis aenean et
            tortor. Placerat orci nulla pellentesque dignissim enim sit.
            Ullamcorper malesuada proin libero nunc. Euismod in pellentesque
            massa placerat duis. Dictum at tempor commodo ullamcorper a lacus
            vestibulum sed. Ac odio tempor orci dapibus. Massa massa ultricies
            mi quis. Mi quis hendrerit dolor magna eget est lorem ipsum dolor.
            Facilisis volutpat est velit egestas dui id ornare. Tristique
            sollicitudin nibh sit amet commodo nulla facilisi nullam. Id leo in
            vitae turpis massa sed elementum tempus egestas. Eu nisl nunc mi
            ipsum faucibus. Justo nec ultrices dui sapien eget.
          </p>
        </div>
      </section>
    </section>

    <section class="demo-section">
      <h4>Example in navbar</h4>
      <section>
        <mdb-navbar color="grey" class="lighten-4">
          <mdb-navbar-nav
            nav
            right
            class="nav-pills"
            v-mdb-scroll-spy="{
              container: 'navbar-container',
              visible: 0.6,
              callback: 'setActiveNavlink'
            }"
          >
            <mdb-nav-item href="#nav-example-1" :active="nav === 0"
              >@fat</mdb-nav-item
            >
            <mdb-nav-item href="#nav-example-2" :active="nav === 1"
              >@mdo</mdb-nav-item
            >
            <mdb-dropdown tag="li" class="nav-item text-primary">
              <mdb-dropdown-toggle
                tag="a"
                :active="nav === 2 || nav === 3 || nav === 4"
                navLink
                slot="toggle"
                waves-fixed
                >Dropdown</mdb-dropdown-toggle
              >
              <mdb-dropdown-menu>
                <mdb-dropdown-item href="#one" :active="nav === 2"
                  >one</mdb-dropdown-item
                >
                <mdb-dropdown-item href="#two" :active="nav === 3"
                  >two</mdb-dropdown-item
                >
                <mdb-dropdown-item href="#three" :active="nav === 4"
                  >three</mdb-dropdown-item
                >
              </mdb-dropdown-menu>
            </mdb-dropdown>
          </mdb-navbar-nav>
        </mdb-navbar>

        <div
          style="overflow-y: scroll; max-height: 200px;"
          class="p-3"
          id="navbar-container"
        >
          <div id="nav-example-1">
            <h4>@fat</h4>
            <p>
              Ad leggings keytar, brunch id art party dolor labore. Pitchfork yr
              enim lo-fi before they sold out qui. Tumblr farm-to-table bicycle
              rights whatever. Anim keffiyeh carles cardigan. Velit seitan
              mcsweeney's photo booth 3 wolf moon irure. Cosby sweater lomo jean
              shorts, williamsburg hoodie minim qui you probably haven't heard
              of them et cardigan trust fund culpa biodiesel wes anderson
              aesthetic. Nihil tattooed accusamus, cred irony biodiesel keffiyeh
              artisan ullamco consequat.
            </p>
          </div>
          <div id="nav-example-2">
            <h4>@mdo</h4>
            <p>
              Ad leggings keytar, brunch id art party dolor labore. Pitchfork yr
              enim lo-fi before they sold out qui. Tumblr farm-to-table bicycle
              rights whatever. Anim keffiyeh carles cardigan. Velit seitan
              mcsweeney's photo booth 3 wolf moon irure. Cosby sweater lomo jean
              shorts, williamsburg hoodie minim qui you probably haven't heard
              of them et cardigan trust fund culpa biodiesel wes anderson
              aesthetic. Nihil tattooed accusamus, cred irony biodiesel keffiyeh
              artisan ullamco consequat.
            </p>
          </div>
          <div id="one">
            <h4>one</h4>
            <p>
              Ad leggings keytar, brunch id art party dolor labore. Pitchfork yr
              enim lo-fi before they sold out qui. Tumblr farm-to-table bicycle
              rights whatever. Anim keffiyeh carles cardigan. Velit seitan
              mcsweeney's photo booth 3 wolf moon irure. Cosby sweater lomo jean
              shorts, williamsburg hoodie minim qui you probably haven't heard
              of them et cardigan trust fund culpa biodiesel wes anderson
              aesthetic. Nihil tattooed accusamus, cred irony biodiesel keffiyeh
              artisan ullamco consequat.
            </p>
          </div>
          <div id="two">
            <h4>two</h4>
            <p>
              Ad leggings keytar, brunch id art party dolor labore. Pitchfork yr
              enim lo-fi before they sold out qui. Tumblr farm-to-table bicycle
              rights whatever. Anim keffiyeh carles cardigan. Velit seitan
              mcsweeney's photo booth 3 wolf moon irure. Cosby sweater lomo jean
              shorts, williamsburg hoodie minim qui you probably haven't heard
              of them et cardigan trust fund culpa biodiesel wes anderson
              aesthetic. Nihil tattooed accusamus, cred irony biodiesel keffiyeh
              artisan ullamco consequat.
            </p>
          </div>
          <div id="three">
            <h4>three</h4>
            <p>
              Ad leggings keytar, brunch id art party dolor labore. Pitchfork yr
              enim lo-fi before they sold out qui. Tumblr farm-to-table bicycle
              rights whatever. Anim keffiyeh carles cardigan. Velit seitan
              mcsweeney's photo booth 3 wolf moon irure. Cosby sweater lomo jean
              shorts, williamsburg hoodie minim qui you probably haven't heard
              of them et cardigan trust fund culpa biodiesel wes anderson
              aesthetic. Nihil tattooed accusamus, cred irony biodiesel keffiyeh
              artisan ullamco consequat.
            </p>
          </div>
        </div>
      </section>
    </section>
    <section class="demo-section">
      <h4>Async data & custom callback</h4>
      <section>
        <mdb-container>
          <mdb-row>
            <mdb-col sm="4">
              <mdb-list-group
                v-mdb-scroll-spy.async="{
                  container: 'container',
                  callback: 'setActive',
                  loading
                }"
                class="scrollspy"
              >
                <mdb-list-group-item
                  action
                  :active="i === active"
                  tag="a"
                  :href="`#${section.id}`"
                  v-for="(section, i) in scrollSections"
                  :key="section.id"
                >
                  {{ section.title }}
                </mdb-list-group-item>
              </mdb-list-group>
            </mdb-col>
            <mdb-col>
              <div
                class="z-depth-1 p-5"
                id="container"
                style="height: 500px; overflow-y: scroll"
              >
                <div
                  v-for="section in scrollSections"
                  :id="section.id"
                  :key="section.id"
                >
                  <h5>{{ section.title }}</h5>
                  <p>{{ section.content }}</p>
                </div>
              </div>
            </mdb-col>
          </mdb-row>
        </mdb-container>
      </section>
    </section>

    <section class="demo-section">
      <h4>Nested scrollspy</h4>
      <section>
        <mdb-row>
          <mdb-col sm="4" lg="3">
            <mdb-navbar :toggler="false" color="grey" class="lighten-4">
              <mdb-navbar-nav
                vertical
                v-mdb-scroll-spy="{
                  container: 'nested',
                  callback: 'setActiveLink'
                }"
                class="nav-pills"
              >
                <mdb-nav-item
                  href="#item-1"
                  :active="nested === 0 || nested === 1 || nested === 2"
                  >Item 1</mdb-nav-item
                >
                <mdb-navbar-nav vertical>
                  <mdb-nav-item
                    :active="nested === 1"
                    class="ml-3 my-1"
                    href="#item-1-1"
                    >Item 1-1</mdb-nav-item
                  >
                  <mdb-nav-item
                    :active="nested === 2"
                    class="ml-3 my-1"
                    href="#item-1-2"
                    >Item 1-2</mdb-nav-item
                  >
                </mdb-navbar-nav>
                <mdb-nav-item href="#item-2" :active="nested === 3"
                  >Item 2</mdb-nav-item
                >
                <mdb-nav-item
                  href="#item-3"
                  :active="nested === 4 || nested === 5 || nested === 6"
                  >Item 3</mdb-nav-item
                >
                <mdb-navbar-nav vertical>
                  <mdb-nav-item
                    :active="nested === 5"
                    class="ml-3 my-1"
                    href="#item-3-1"
                    >Item 3-1</mdb-nav-item
                  >
                  <mdb-nav-item
                    :active="nested === 6"
                    class="ml-3 my-1"
                    href="#item-3-2"
                    >Item 3-2</mdb-nav-item
                  >
                </mdb-navbar-nav>
              </mdb-navbar-nav>
            </mdb-navbar>
          </mdb-col>

          <mdb-col sm="8" lg="9">
            <div
              class="z-depth-1 p-3"
              style="max-height: 325px; overflow-y: scroll;"
              id="nested"
            >
              <div id="item-1">
                <h4>Item 1</h4>
                <p>
                  Ad leggings keytar, brunch id art party dolor labore.
                  Pitchfork yr enim lo-fi before they sold out qui. Tumblr
                  farm-to-table bicycle rights whatever. Anim keffiyeh carles
                  cardigan. Velit seitan mcsweeney's photo booth 3 wolf moon
                  irure. Cosby sweater lomo jean shorts, williamsburg hoodie
                  minim qui you probably haven't heard of them et cardigan trust
                  fund culpa biodiesel wes anderson aesthetic. Nihil tattooed
                  accusamus, cred irony biodiesel keffiyeh artisan ullamco
                  consequat.
                </p>
              </div>
              <div id="item-1-1">
                <h5>Item 1-1</h5>
                <p>
                  Ad leggings keytar, brunch id art party dolor labore.
                  Pitchfork yr enim lo-fi before they sold out qui. Tumblr
                  farm-to-table bicycle rights whatever. Anim keffiyeh carles
                  cardigan. Velit seitan mcsweeney's photo booth 3 wolf moon
                  irure. Cosby sweater lomo jean shorts, williamsburg hoodie
                  minim qui you probably haven't heard of them et cardigan trust
                  fund culpa biodiesel wes anderson aesthetic. Nihil tattooed
                  accusamus, cred irony biodiesel keffiyeh artisan ullamco
                  consequat.
                </p>
              </div>
              <div id="item-1-2">
                <h5>Item 1-2</h5>
                <p>
                  Ad leggings keytar, brunch id art party dolor labore.
                  Pitchfork yr enim lo-fi before they sold out qui. Tumblr
                  farm-to-table bicycle rights whatever. Anim keffiyeh carles
                  cardigan. Velit seitan mcsweeney's photo booth 3 wolf moon
                  irure. Cosby sweater lomo jean shorts, williamsburg hoodie
                  minim qui you probably haven't heard of them et cardigan trust
                  fund culpa biodiesel wes anderson aesthetic. Nihil tattooed
                  accusamus, cred irony biodiesel keffiyeh artisan ullamco
                  consequat.
                </p>
              </div>
              <div id="item-2">
                <h4>Item 2</h4>
                <p>
                  Ad leggings keytar, brunch id art party dolor labore.
                  Pitchfork yr enim lo-fi before they sold out qui. Tumblr
                  farm-to-table bicycle rights whatever. Anim keffiyeh carles
                  cardigan. Velit seitan mcsweeney's photo booth 3 wolf moon
                  irure. Cosby sweater lomo jean shorts, williamsburg hoodie
                  minim qui you probably haven't heard of them et cardigan trust
                  fund culpa biodiesel wes anderson aesthetic. Nihil tattooed
                  accusamus, cred irony biodiesel keffiyeh artisan ullamco
                  consequat.
                </p>
              </div>
              <div id="item-3">
                <h4>Item 3</h4>
                <p>
                  Ad leggings keytar, brunch id art party dolor labore.
                  Pitchfork yr enim lo-fi before they sold out qui. Tumblr
                  farm-to-table bicycle rights whatever. Anim keffiyeh carles
                  cardigan. Velit seitan mcsweeney's photo booth 3 wolf moon
                  irure. Cosby sweater lomo jean shorts, williamsburg hoodie
                  minim qui you probably haven't heard of them et cardigan trust
                  fund culpa biodiesel wes anderson aesthetic. Nihil tattooed
                  accusamus, cred irony biodiesel keffiyeh artisan ullamco
                  consequat.
                </p>
              </div>
              <div id="item-3-1">
                <h5>Item 3-1</h5>
                <p>
                  Ad leggings keytar, brunch id art party dolor labore.
                  Pitchfork yr enim lo-fi before they sold out qui. Tumblr
                  farm-to-table bicycle rights whatever. Anim keffiyeh carles
                  cardigan. Velit seitan mcsweeney's photo booth 3 wolf moon
                  irure. Cosby sweater lomo jean shorts, williamsburg hoodie
                  minim qui you probably haven't heard of them et cardigan trust
                  fund culpa biodiesel wes anderson aesthetic. Nihil tattooed
                  accusamus, cred irony biodiesel keffiyeh artisan ullamco
                  consequat.
                </p>
              </div>
              <div id="item-3-2">
                <h5>Item 3-2</h5>
                <p>
                  Ad leggings keytar, brunch id art party dolor labore.
                  Pitchfork yr enim lo-fi before they sold out qui. Tumblr
                  farm-to-table bicycle rights whatever. Anim keffiyeh carles
                  cardigan. Velit seitan mcsweeney's photo booth 3 wolf moon
                  irure. Cosby sweater lomo jean shorts, williamsburg hoodie
                  minim qui you probably haven't heard of them et cardigan trust
                  fund culpa biodiesel wes anderson aesthetic. Nihil tattooed
                  accusamus, cred irony biodiesel keffiyeh artisan ullamco
                  consequat.
                </p>
              </div>
            </div>
          </mdb-col>
        </mdb-row>
      </section>
    </section>
  </mdb-container>
</template>

<script>
import {
  mdbContainer,
  mdbNavbar,
  mdbNavbarNav,
  mdbNavItem,
  mdbRow,
  mdbCol,
  mdbIcon,
  mdbListGroup,
  mdbListGroupItem,
  mdbDropdown,
  mdbDropdownToggle,
  mdbDropdownMenu,
  mdbDropdownItem,
  mdbScrollSpy
} from "mdbvue";

export default {
  name: "ScrollSpyPage",
  components: {
    mdbContainer,
    mdbNavbar,
    mdbNavbarNav,
    mdbNavItem,
    mdbRow,
    mdbCol,
    mdbListGroup,
    mdbListGroupItem,
    mdbDropdown,
    mdbDropdownToggle,
    mdbDropdownMenu,
    mdbDropdownItem,
    mdbIcon
  },
  data() {
    return {
      active: 0,
      nested: 0,
      nav: 0,
      scrollSections: [],
      loading: true
    };
  },
  methods: {
    setActive(i) {
      this.active = i;
    },
    setActiveLink(i) {
      this.nested = i;
    },
    setActiveNavlink(i) {
      this.nav = i;
    }
  },
  mounted() {
    setTimeout(() => {
      this.scrollSections = [
              {
          id: "section1",
          title: "First title",
          content:
            "Ad leggings keytar, brunch id art party dolor labore. Pitchfork yr enim lo-fi before they sold out qui. Tumblr farm-to-table bicycle rights whatever. Anim keffiyeh carles cardigan. Velit seitan mcsweeney's photo booth 3 wolf moon irure. Cosby sweater lomo jean shorts, williamsburg hoodie minim qui you probably haven't heard of them et cardigan trust fund culpa biodiesel wes anderson aesthetic. Nihil tattooed accusamus, cred irony biodiesel keffiyeh artisan ullamco consequat. Ad leggings keytar, brunch id art party dolor labore. Pitchfork yr enim lo-fi before they sold out qui. Tumblr farm-to-table bicycle rights whatever. Anim keffiyeh carles cardigan. Velit seitan mcsweeney's photo booth 3 wolf moon irure. Cosby sweater lomo jean shorts, williamsburg hoodie minim qui you probably haven't heard of them et cardigan trust fund culpa biodiesel wes anderson aesthetic. Nihil tattooed accusamus, cred irony biodiesel keffiyeh artisan ullamco consequat. Ad leggings keytar, brunch id art party dolor labore. Pitchfork yr enim lo-fi before they sold out qui. Tumblr farm-to-table bicycle rights whatever. Anim keffiyeh carles cardigan. Velit seitan mcsweeney's photo booth 3 wolf moon irure. Cosby sweater lomo jean shorts, williamsburg hoodie minim qui you probably haven't heard of them et cardigan trust fund culpa biodiesel wes anderson aesthetic. Nihil tattooed accusamus, cred irony biodiesel keffiyeh artisan ullamco consequat. Ad leggings keytar, brunch id art party dolor labore. Pitchfork yr enim lo-fi before they sold out qui. Tumblr farm-to-table bicycle rights whatever. Anim keffiyeh carles cardigan. Velit seitan mcsweeney's photo booth 3 wolf moon irure. Cosby sweater lomo jean shorts, williamsburg hoodie minim qui you probably haven't heard of them et cardigan trust fund culpa biodiesel wes anderson aesthetic. Nihil tattooed accusamus, cred irony biodiesel keffiyeh artisan ullamco consequat."
        },
        {
          id: "section2",
          title: "Second title",
          content:
            "Ad leggings keytar, brunch id art party dolor labore. Pitchfork yr enim lo-fi before they sold out qui. Tumblr farm-to-table bicycle rights whatever. Anim keffiyeh carles cardigan. Velit seitan mcsweeney's photo booth 3 wolf moon irure. Cosby sweater lomo jean shorts, williamsburg hoodie minim qui you probably haven't heard of them et cardigan trust fund culpa biodiesel wes anderson aesthetic. Nihil tattooed accusamus, cred irony biodiesel keffiyeh artisan ullamco consequat. Ad leggings keytar, brunch id art party dolor labore. Pitchfork yr enim lo-fi before they sold out qui. Tumblr farm-to-table bicycle rights whatever. Anim keffiyeh carles cardigan. Velit seitan mcsweeney's photo booth 3 wolf moon irure. Cosby sweater lomo jean shorts, williamsburg hoodie minim qui you probably haven't heard of them et cardigan trust fund culpa biodiesel wes anderson aesthetic. Nihil tattooed accusamus, cred irony biodiesel keffiyeh artisan ullamco consequat. Ad leggings keytar, brunch id art party dolor labore. Pitchfork yr enim lo-fi before they sold out qui. Tumblr farm-to-table bicycle rights whatever. Anim keffiyeh carles cardigan. Velit seitan mcsweeney's photo booth 3 wolf moon irure. Cosby sweater lomo jean shorts, williamsburg hoodie minim qui you probably haven't heard of them et cardigan trust fund culpa biodiesel wes anderson aesthetic. Nihil tattooed accusamus, cred irony biodiesel keffiyeh artisan ullamco consequat. Ad leggings keytar, brunch id art party dolor labore. Pitchfork yr enim lo-fi before they sold out qui. Tumblr farm-to-table bicycle rights whatever. Anim keffiyeh carles cardigan. Velit seitan mcsweeney's photo booth 3 wolf moon irure. Cosby sweater lomo jean shorts, williamsburg hoodie minim qui you probably haven't heard of them et cardigan trust fund culpa biodiesel wes anderson aesthetic. Nihil tattooed accusamus, cred irony biodiesel keffiyeh artisan ullamco consequat. Ad leggings keytar, brunch id art party dolor labore. Pitchfork yr enim lo-fi before they sold out qui. Tumblr farm-to-table bicycle rights whatever. Anim keffiyeh carles cardigan. Velit seitan mcsweeney's photo booth 3 wolf moon irure. Cosby sweater lomo jean shorts, williamsburg hoodie minim qui you probably haven't heard of them et cardigan trust fund culpa biodiesel wes anderson aesthetic. Nihil tattooed accusamus, cred irony biodiesel keffiyeh artisan ullamco consequat. Ad leggings keytar, brunch id art party dolor labore. Pitchfork yr enim lo-fi before they sold out qui. Tumblr farm-to-table bicycle rights whatever. Anim keffiyeh carles cardigan. Velit seitan mcsweeney's photo booth 3 wolf moon irure. Cosby sweater lomo jean shorts, williamsburg hoodie minim qui you probably haven't heard of them et cardigan trust fund culpa biodiesel wes anderson aesthetic. Nihil tattooed accusamus, cred irony biodiesel keffiyeh artisan ullamco consequat."
        },
        {
          id: "section3",
          title: "Third title",
          content:
            "Ad leggings keytar, brunch id art party dolor labore. Pitchfork yr enim lo-fi before they sold out qui. Tumblr farm-to-table bicycle rights whatever. Anim keffiyeh carles cardigan. Velit seitan mcsweeney's photo booth 3 wolf moon irure. Cosby sweater lomo jean shorts, williamsburg hoodie minim qui you probably haven't heard of them et cardigan trust fund culpa biodiesel wes anderson aesthetic. Nihil tattooed accusamus, cred irony biodiesel keffiyeh artisan ullamco consequat. Ad leggings keytar, brunch id art party dolor labore. Pitchfork yr enim lo-fi before they sold out qui. Tumblr farm-to-table bicycle rights whatever. Anim keffiyeh carles cardigan. Velit seitan mcsweeney's photo booth 3 wolf moon irure. Cosby sweater lomo jean shorts, williamsburg hoodie minim qui you probably haven't heard of them et cardigan trust fund culpa biodiesel wes anderson aesthetic. Nihil tattooed accusamus, cred irony biodiesel keffiyeh artisan ullamco consequat. Ad leggings keytar, brunch id art party dolor labore. Pitchfork yr enim lo-fi before they sold out qui. Tumblr farm-to-table bicycle rights whatever. Anim keffiyeh carles cardigan. Velit seitan mcsweeney's photo booth 3 wolf moon irure. Cosby sweater lomo jean shorts, williamsburg hoodie minim qui you probably haven't heard of them et cardigan trust fund culpa biodiesel wes anderson aesthetic. Nihil tattooed accusamus, cred irony biodiesel keffiyeh artisan ullamco consequat. Ad leggings keytar, brunch id art party dolor labore. Pitchfork yr enim lo-fi before they sold out qui. Tumblr farm-to-table bicycle rights whatever. Anim keffiyeh carles cardigan. Velit seitan mcsweeney's photo booth 3 wolf moon irure. Cosby sweater lomo jean shorts, williamsburg hoodie minim qui you probably haven't heard of them et cardigan trust fund culpa biodiesel wes anderson aesthetic. Nihil tattooed accusamus, cred irony biodiesel keffiyeh artisan ullamco consequat."
        }
      ]

      this.loading = false;
    }, 1000)
  },
  directives: { mdbScrollSpy }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.basic-scrollspy li a {
  border: 1px solid #eee;
  border-radius: 2px;
  transition: background-color 0.4s linear;
  padding: 15px;
  display: block;
}
.basic-scrollspy .active {
  background-color: #eee !important;
}

.dotted-scrollspy li a.active {
  background-color: transparent !important;
}

.dotted-scrollspy li a.active span {
  background-color: white !important;
}
</style>
