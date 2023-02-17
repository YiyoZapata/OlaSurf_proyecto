<script setup>

import { RouterLink } from "vue-router";
const categorias = [
  {
    tag: "Alquiler.",
    cuerpo: "Aquiler de tablas de surf y paddle surf desde 10€ la hora.",
  },

  {
    tag: "Clases .",
    cuerpo: "Clase individual o por grupos.",
  },

  {
    tag: "Rutas.",
    cuerpo: "Por la Tramuntana.",
  },

  {
    tag: "Hospedaje.",
    cuerpo: "Habitaciones individuales y dobles.",
  },
];
</script>
<template>
  <div v-for="categoria in categorias" :key="categoria.tag">
    <div class="row ">
      <div class="-flex flex-column bd-highlight mb-3">
        <div class="card">
          <div class="card-body ">
            <h5 class="card-title ">{{ categoria.tag }}</h5>
            <p class="card-text">
              {{ categoria.cuerpo }}
            </p>
            <RouterLink to="/hi">
              <a href="#" class="btn btn-dark">Vamos!</a>
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
