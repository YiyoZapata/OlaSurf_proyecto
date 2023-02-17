<script >
export default {
  data() {
    return {
      imgs: [],
      xlScreen: false,
      screenSize: '',
    };
  },
  created() {
    window.addEventListener('resize', this.checkWidth);
  },
  mounted() {
    this.fetchImgs();
    this.checkWidth();
  },
  unmounted() {
    window.removeEventListener('resize', this.checkWidth);
  },
  methods: {
    async fetchImgs() {
      const response = await fetch("http://localhost:3000/imgs");
      const data = await response.json();
      console.log(data);
      this.imgs = data;
    },

    checkWidth() {
      this.xlScreen = window.innerWidth >= 1280;
      this.screenSize = this.getScreenSize();
    },
    getScreenSize() {
      const width = window.innerWidth;
      if (width <= 640) {
        return 'xs';
      }
      if (width <= 768) {
        return 'sm';
      }
      if (width <= 1024) {lang="ts"
      }
      if (width <= 1280) {
        return 'lg';
      }
      if (width <= 1536) {
        return 'xl';
      }
      return '2xl';
    },
  },
};
</script>
<template>
  <div class="container-fluid">
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae ipsum
      tortor. Etiam sed ex ut metus commodo convallis. Duis faucibus metus elit,
      ut accumsan justo pretium quis. Donec leo mi, vestibulum et nulla in,
      fermentum tincidunt mi. Fusce eget sapien eget nisl pharetra efficitur eu
      sed velit. Integer commodo mi eu erat molestie efficitur. Aenean at
      venenatis ex. Vestibulum pharetra dolor ac feugiat imperdiet. Nam
      elementum, leo a porttitor mattis, sem magna consequat ante, at aliquam
      odio purus ac tortor. Fusce nisi massa, blandit vitae imperdiet laoreet,
      lobortis eget est. Sed elit leo, tempus id ornare vitae, porta vel erat.
      Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec a
      tellus pharetra, molestie metus quis, congue elit. Nam ullamcorper
      interdum metus, et condimentum massa scelerisque et. Donec tincidunt augue
      vitae lorem placerat elementum.
    </p>
    <p>
      hasellus vitae tellus vehicula, malesuada mi at, porttitor elit. Sed
      accumsan vulputate nulla, vel sagittis tellus mattis id. Sed quam arcu,
      commodo ac dignissim non, laoreet ac ipsum. Nunc luctus, orci nec
      condimentum dictum, odio orci elementum libero, non facilisis tortor risus
      non ex. Donec non malesuada lectus.
    </p>
    <p>
      Aenean fermentum nibh eget arcu volutpat, vel scelerisque nulla ultrices.
      Nullam convallis, elit et efficitur tincidunt, mi dolor varius massa,
      vitae scelerisque dolor nisl eget massa. Donec egestas dui ut quam
      placerat, eu egestas orci suscipit. Nullam dapibus viverra pharetra. Nam
      consequat et elit pharetra varius. Aliquam erat volutpat. Nulla at tortor
      vestibulum, fringilla dui at, iaculis lorem. Pellentesque arcu dolor,
      venenatis non dolor nec, consequat fringilla urna.
    </p>
  </div>

  <div
    id="carouselExampleInterval"
    class="carousel slide container-md"
    data-bs-ride="carousel"
  >
    <div class="carousel-inner">
      <div class="carousel-item active" data-bs-interval="10000" v-for="img in imgs" :key="img.id">
        
          <img :src="img.imagenes" class="d-block w-100" alt="..."  v-if="!xlScreen"/>
          <img :src="img.imagenes" class="d-block w-100" alt="..."  v-else="!xlScreen"/>
      </div>
    </div>
    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#carouselExampleInterval"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#carouselExampleInterval"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>
