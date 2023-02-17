<script>
export default {
  data() {
    return {
      rutas: [],
    };
  },
  mounted() {
    this.fetchRutas();
  },
  methods: {
    async fetchRutas() {
      const response = await fetch("http://localhost:3000/rutas");
      const data = await response.json();
      console.log(data);
      this.rutas = data;
    },
  },
};
</script>
<template>
  <div class="clearfix container text-center">
    <img
      src="img/excursion.jpg"
      class="col-md-6 float-md-end mb-3 ms-md-3 img-fluid"
      alt="..."
    />

    <p>
      <strong
        >Inicio actividad: 09:00 Máximo grupos de 10 personas. Imprescindible
        saber nadar .</strong
      >
    </p>

    <p>
      Vive una experiencia única visitando las cuevas naturales de Mallorca en
      kayak, disfrutando de unas vistas privilegiadas del fondo del mar donde
      podrá ver diferentes animales marinos como coloridas estrellas de mar.
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
    v-for="ruta in rutas"
    :key="ruta.id"
    style="width: 300px"
  >
    <img :src="ruta.img" class="card-img img-fluid imagen:hover {filter: sepia(60%);}" alt="..." />
    <div class="card-img-overlay">
      <h5 class="card-title">{{ ruta.name }}</h5>
      <p class="card-text">{{ ruta.descripcion }}</p>
      <p class="card-text">
        <small>{{ ruta.precio }}€</small>
      </p>
    </div>
  </div>

  <div class="alert alert-dark container-md " role="alert" >
    Importante Consulta las fechas de excursiones con la escuela antes de
    realizar la compra. Plazas limitadas. Reservas mínimo 48 horas antelación,
    consultar con Bonaona para reservas dentro de las 48 horas. Se recomienda no
    llevar objetos personales ni de valor durante el Tour : pasaportes , gafas ,
    teléfonos móviles ( a no ser que estos lleven una funda resistente al agua y
    con flotación ) y será siempre bajo su propia responsabilidad. La Escuela
    BonaOna no se hará responsable de la perdida y/o rotura de los objetos
    personales que puedan transportar en los Kayak / Supit out!
  </div>
</template>
