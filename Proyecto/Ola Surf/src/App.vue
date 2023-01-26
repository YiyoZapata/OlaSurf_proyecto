<script setup>
import { RouterLink, RouterView } from "vue-router";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import Carrusel from "./components/Carrusel.vue";
import Cards from "./components/Cards.vue";
</script>

<template>
  <div class="wrapper">
    <Header></Header>
  </div>

  <div>
    <div>
      <Carrusel></Carrusel>
    </div>

    <div class="m-3">
      <Cards></Cards>
    </div>
  </div>

  <div>
    <Footer></Footer>
  </div>
</template>
