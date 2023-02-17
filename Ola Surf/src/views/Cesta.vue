<template>
  <div
    class="card mb-3 mx-auto m-2"
    style="max-width: 540px"
    v-for="producto in productos"
  >
    <div class="row g-0">
      <div class="col-md-4">
        <img :src="producto.imgs" class="img-fluid rounded-start" />
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">{{ producto.name }}</h5>
          <p class="card-text">{{ producto.precio }}€</p>
          <p class="card-text">{{ producto.duracion }} €</p>
          <p class="card-text">
            <small class="text-muted">Last updated 3 mins ago</small>
          </p>
        </div>
      </div>
    </div>
  </div>

  <div>
    <h1>Añadir producto</h1>
    <form @submit.prevent="crearProducto" class="container-sm">
      <div class="mb-3">
        <label for="nombre" class="form-label">Nombre:</label>
        <input type="text" id="nombre" v-model="producto.name"  class="form-control"/>
      </div>
      <div class="mb-3">
        <label for="descripcion" class="form-label">Duración:</label>
        <input id="descripcion" v-model="producto.duracion" class="form-control"/>
      </div>
      <div class="mb-3">
        <label for="precio" class="form-label">Precio:</label>
        <input type="number" id="precio" v-model="producto.precio" class="form-control"/>
      </div>
      <button type="submit" class="btn btn-dark">Añadir</button>
    </form>
  </div>

  <div
    class="card mb-3 mx-auto m-2"
    style="max-width: 540px"
    v-for="producto in cestas"
  >
    <div class="row g-0">
     
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">{{ producto.name }}</h5>
          <p class="card-text">{{ producto.precio }}€</p>
          <p class="card-text">{{ producto.duracion }}hora</p>
          <p class="card-text">
            <small class="text-muted">Last updated 3 mins ago</small>
          </p>

          <button @click="eliminarProducto(producto.id)" class="btn btn-dark">
            Eliminar
          </button>
          <button @click="editarProducto(producto)" class="btn btn-dark">
            Editar
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      productos: [],
      producto: {
        name: "",
        duracion: "",
        precio: "",
      },
      cestas: [],
    
    };
  },
  mounted() {
    this.getProductos();
  },
  methods: {
    getProductos() {
      fetch("http://localhost:3000/clases")
        .then((response) => response.json())
        .then((productos) => (this.productos = productos));
    },
    getProductosCesta() {
      fetch("http://localhost:3000/cesta")
        .then((response) => response.json())
        .then((cestas) => (this.cestas = cestas));
    },
    eliminarProducto(id) {
      fetch(`http://localhost:3000/cesta/${id}`, { method: "DELETE" }).then(
        () => this.getProductosCesta()
      );
    },
    editarProducto(producto) {
      fetch(`http://localhost:3000/clases/${producto.id}}`, { method: "PUT" }).then(() =>
        this.getProductosCesta()
      );
    },

    crearProducto() {
      fetch("http://localhost:3000/cesta", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(this.producto),
      })
        .then(
            () => this.getProductosCesta()
        )
        .catch((error) => console.error(error));
    },
  },
};
</script>
