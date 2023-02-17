<script setup>
import { RouterView } from "vue-router";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
  <div class="wrapper">
    <Header></Header>
  </div>

  <RouterView></RouterView>

  <div>
    <Footer></Footer>
  </div>
</template>
