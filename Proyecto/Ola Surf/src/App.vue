<script setup>
import { RouterLink, RouterView } from "vue-router";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import Carrusel from "./components/Carrusel.vue";
import Cards from "./components/Cards.vue";
import Clases from "./components/Clases.vue";
</script>

<template>
  <div class="wrapper">
    <Header></Header>
  </div>

  <div class="m-3">
      <Cards></Cards>
    </div>

  <div>
    <div>
      <Carrusel></Carrusel>
    </div>
  </div>

  <div class="m-3">
    <Clases></Clases>
  </div>

  <div>
    <Footer></Footer>
  </div>
</template>
