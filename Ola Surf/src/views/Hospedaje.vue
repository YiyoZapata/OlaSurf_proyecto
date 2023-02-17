<script>
export default {
  data() {
    return {
      hospedajes: [],
    };
  },
  mounted() {
    this.fetchHospedajes();
  },
  methods: {
    async fetchHospedajes() {
      const response = await fetch("http://localhost:3000/hospedajes");
      const data = await response.json();
      console.log(data);
      this.hospedajes = data;
    },
  },
};
</script>
<template>
    <div class="clearfix container text-center">
    <img
      src="img/dormido.jpg"
      class="col-md-6 float-md-end mb-3 ms-md-3 img-fluid"
      alt="..."
    />

    <p>
      <strong
        >Primero hay que comprobar dispoponibilidad de las habitaciones.</strong
      >
    </p>

    <p>
        Cuando usted duerme está inconsciente, pero las funciones de su cerebro y cuerpo siguen activas. El sueño es un complejo proceso biológico que le ayuda a procesar información nueva, mantenerse saludable y a sentirse descansado.
    </p>

    <p>
      La excursión comienza temprano para aprovechar la calma del mar, remar sin
      viento y disfrutar de un agradable paseo por la costa y los acantilados.
      Hay diferentes cuevas para visitar a lo largo del Tour: La cueva verde, es
      una de las cuevas más populares, con un intenso color verde donde se
      reflejan los rayos del sol y donde se pueden bañar con barro natural.
      Guiado por Instructores experimentados que les llevaran a hermosas aguas
      de color turquesa para bucear, nadar en yacusis naturales y tomar un
      refrigerio relajante en lugares donde sólo se puede acceder por el agua.
      Esta excursión es para gente que ama el deporte, la naturaleza y la
      aventura. Una manera diferente de disfrutar de la isla de Mallorca y de
      una experiencia inolvidable.
    </p>

    <p>
      La excursión comienza temprano para aprovechar la calma del mar, remar sin
      viento y disfrutar de un agradable paseo por la costa y los acantilados.
      Hay diferentes cuevas para visitar a lo largo del Tour: La cueva verde, es
      una de las cuevas más populares, con un intenso color verde donde se
      reflejan los rayos del sol y donde se pueden bañar con barro natural.
      Guiado por Instructores experimentados que les llevaran a hermosas aguas
      de color turquesa para bucear, nadar en yacusis naturales y tomar un
      refrigerio relajante en lugares donde sólo se puede acceder por el agua.
      Esta excursión es para gente que ama el deporte, la naturaleza y la
      aventura. Una manera diferente de disfrutar de la isla de Mallorca y de
      una experiencia inolvidable.
    </p>
  </div>

  <div
    class="card text-bg-dark mx-auto m-2"
    v-for="hospedaje in hospedajes"
    :key="hospedaje.id"
    style="width: 300px"
  >
    <img :src="hospedaje.img" class="card-img img-fluid imagen:hover {filter: sepia(60%);}" alt="..." />
    <div class="card-img-overlay">
      <h5 class="card-title">{{ hospedaje.habitacion }}</h5>
      <p class="card-text">{{ hospedaje.precio }}</p>
      <p class="card-text">
        <small>{{ hospedaje.descripcion }}€</small>
      </p>
    </div>
  </div>
</template>