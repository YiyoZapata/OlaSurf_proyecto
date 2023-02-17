<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>
<template>
  <div class="row row-cols-1 row-cols-md-2 g-4">
    <RouterLink to="/clases" class="link-secondary">
      <div class="col">
        <div class="card">
          <img src="img/grupos.jpg" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Clases</h5>
            <p class="card-text">
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
          </div>
        </div>
      </div>
    </RouterLink>
    <RouterLink to="/hospedajes" class="link-secondary">
      <div class="col">
        <div class="card">
          <img src="img/hospedaje.jpg" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Hospedaje</h5>
            <p class="card-text">
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
          </div>
        </div>
      </div>
    </RouterLink>
    <RouterLink to="/alquileres" class="link-secondary">
      <div class="col">
        <div class="card">
          <img src="img/alquiler.jpg" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Alquiler de tablas</h5>
            <p class="card-text">
              This is a longer card with supporting text below as a natural
              lead-in to additional content.
            </p>
          </div>
        </div>
      </div>
    </RouterLink>
    <RouterLink to="/rutas" class="link-secondary">
      <div class="col">
        <div class="card">
          <img src="img/ruta.jpg" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Rutas</h5>
            <p class="card-text">
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
          </div>
        </div>
      </div>
    </RouterLink>
  </div>
</template>
