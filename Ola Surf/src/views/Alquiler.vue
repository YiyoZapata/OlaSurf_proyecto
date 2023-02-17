<script>
export default {
  data() {
    return {
      alquileres: [],
      fondoBind: '/img/tablas.jpg',
    };
  },
  mounted() {
    this.fetchAlquileres();
  },
  methods: {
    async fetchAlquileres() {
      const response = await fetch("http://localhost:3000/alquileres");
      const data = await response.json();
      console.log(data);
      this.alquileres = data;
    },
  },
};



</script>


<template>
  <div class="clearfix container text-center">
    <img v-bind:src="fondoBind" alt=""
      
      class="col-md-6 float-md-end mb-3 ms-md-3 img-fluid"
      
    />

    <p>
      In tincidunt sapien id nisl suscipit commodo. Nunc at vehicula nisl.
      Pellentesque habitant morbi tristique senectus et netus et malesuada fames
      ac turpis egestas. Sed tincidunt hendrerit nibh eu gravida. Fusce blandit
      pulvinar dui, at interdum urna condimentum et. In tortor dui, ultricies id
      ultricies nec, semper ac ante. Praesent varius, sem eget aliquet pharetra,
      risus turpis vestibulum dolor, at tempor ante odio vel diam.
    </p>

    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
      hendrerit odio vitae orci iaculis suscipit. Phasellus eu orci et orci
      varius semper in sit amet nibh. Etiam ultricies est et mi imperdiet
      hendrerit. Aenean lobortis erat et congue tempor. Fusce a justo augue.
      Duis quis nisl pellentesque, tincidunt augue nec, tincidunt diam.
      Phasellus malesuada est lacinia, suscipit magna a, rhoncus nisi. In
      scelerisque ut justo sed egestas. Nunc tincidunt vel turpis in imperdiet.
    </p>

    <p>
      Quisque ac massa sit amet nibh consequat porttitor. Maecenas imperdiet
      venenatis magna ultricies lacinia. Aenean placerat ut lacus in ultrices.
      Praesent vitae molestie sapien, at varius odio. Sed dignissim ut nibh quis
      pulvinar. Fusce facilisis luctus auctor. Cras mattis, mi luctus
      sollicitudin egestas, magna elit ultricies purus, id elementum nisl ex ac
      diam. Ut a posuere est. Cras vitae elit elit. Nunc convallis maximus mi,
      sit amet egestas tellus vehicula nec. Curabitur hendrerit placerat elit
      sit amet venenatis. Pellentesque habitant morbi tristique senectus et
      netus et malesuada fames ac turpis egestas. Curabitur pellentesque nisi in
      nisl luctus, vitae elementum felis sollicitudin. Morbi lobortis sem
      hendrerit erat vestibulum interdum.
    </p>
  </div>

  <div class="row row-cols-1 row-cols-md-3 g-4 ms-3 position-relative">
    <div
      class="card col-sm-6 img-fluid"
      v-for="alquiler in alquileres"
      :key="alquiler.id"
      style="width: 18rem"
    >
      <img
        :src="alquiler.img"
        class="card-img-top img-fluid img-thumbnail img-fluid"
        alt="..."
        height="50"
      />
      <div class="card-body">
        <h5 class="card-title text-dark">{{ alquiler.name }}</h5>
        <p class="card-text text-dark">{{ alquiler.precio }}€</p>
        <p class="card-text text-dark">{{ alquiler.duracion }}hora</p>
        <p class="card-text text-dark">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a href="#" class="btn btn-dark">Go somewhere</a>
      </div>
    </div>
  </div>


    
      <div
        class="accordion d-flex flex-column mb-3 m-2 mw-100"
        id="accordionPanelsStayOpenExample"
      >
        <div class="accordion-item">
          <h2 class="accordion-header" id="panelsStayOpen-headingOne">
            <button
              class="accordion-button btn btn-dark link-secondary"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseOne"
              aria-expanded="true"
              aria-controls="panelsStayOpen-collapseOne"
            >
              Recomendaciones
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseOne"
            class="accordion-collapse collapse show"
            aria-labelledby="panelsStayOpen-headingOne"
          >
            <div class="accordion-body">
              <strong>Respeta la preferencia.</strong>Conoce tus límites y no
              accedas a picos que no están para tu nivel o condición física.
              Sino es mejor que busques olas mas pequeñas u otro spot. Tu tabla
              es tu responsabilidad, nunca pierdas en control de tu tabla, o lo
              que es peor, nunca la sueltes y la dejes a su aire. Si estas en
              medio cuando otro surfista esta cogiendo una ola, mantente alejado
              y rema hacia la zona rota de la ola
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
            <button
              class="accordion-button collapsed btn btn-dark link-secondary"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseTwo"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseTwo"
            >
              Información
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseTwo"
            class="accordion-collapse collapse"
            aria-labelledby="panelsStayOpen-headingTwo"
          >
            <div class="accordion-body">
              <strong
                >¿Dónde miro las previsiones de Olas? En Mallorca no tenemos
                mareas así que nuestras olas son de temporales y viento. Las
                apps más usadas son : Wisuki, Todosurf o
                surfmediterraneo.</strong
              >
              Disponemos de webcams en algunas playas, la mejor app para verlas
              es Livecam pro. Durante la temporada de verano la mayoría de las
              playas (no todas) están balizadas y solo se puede Surfear dentro
              de los canales de acceso para embarcaciones. Si tienes una
              emergencia o alguien necesita ayuda el teléfono de urgencias es el
              112.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="panelsStayOpen-headingThree">
            <button
              class="accordion-button collapsed btn btn-dark link-secondary"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseThree"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseThree"
            >
              Importante
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseThree"
            class="accordion-collapse collapse"
            aria-labelledby="panelsStayOpen-headingThree"
          >
            <div class="accordion-body">
              <strong>La escuala dispone de un seguro de accidentes.</strong>
              Aún así recomendamos maxima precaución y cuidado con el mar,
              también respeto y cuidado del material y del entorno.
            </div>
          </div>
        </div>
      </div>
   

</template>
