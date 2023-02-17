<script setup>
import Carrusel from "@/components/Carrusel.vue";
import Cards from "@/components/Cards.vue";
import Clases from "@/components/Clases.vue";
</script>
<template>
  <div class="m-3">
    <Cards></Cards>
  </div>

  <div>
    <div class="container-md">
      <Carrusel></Carrusel>
    </div>
  </div>

  <div class="m-3">
    <Clases></Clases>
  </div>
</template>
