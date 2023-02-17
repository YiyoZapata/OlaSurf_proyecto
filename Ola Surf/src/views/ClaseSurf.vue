<script>
    const baseURL = "http://localhost:3000/";

export default {
  data() {
    return {
      clases: [],

      fondoBind: "/imgs/clas1.jpg",
    };
  },

  mounted() {
    this.fetchclases();
  },
  methods: {
    fortmatResponse(res) {
      return JSON.stringify(res, null, 2);
    },

    async fetchclases() {
      const response = await fetch("http://localhost:3000/clases");
      const data = await response.json();
      console.log(data);
      this.clases = data;
    },

    async getDataByName() {
      const name = this.$refs.get_name.value;

      if (name) {
        try {
          const res = await fetch(`${baseURL}${name}`);

          if (!res.ok) {
            const message = `ha ocurrido un error: ${res.status} - ${res.statusText}`;
            throw new Error(message);
          }

          const data = await res.json();

          const result = {
            data: data,
            status: res.status,
            statusText: res.statusText,
            headers: {
              "Content-Type": res.headers.get("Content-Type"),
              "Content-Length": res.headers.get("Content-Length"),
            },
          };

          this.getResult = this.fortmatResponse(result);
        } catch (err) {
          this.getResult = err.message;
        }
      }
    },

  },
};
</script>
<template>
  <div class="clearfix container text-center">
    <img
      v-bind:src="fondoBind"
      class="col-md-6 float-md-end mb-3 ms-md-3 img-fluid"
      alt="..."
    />

    <p>
      <strong>Surf en el Mediterraneo.</strong>
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

  <div class="mb-3 mx-auto container-md">
    <label for="formGroupExampleInput" class="form-label">Busca el tipo de clase que quieres:</label>
    <input
      type="text"
      class="form-control"
      ref="get_name"
      id="formGroupExampleInput "
      placeholder="Qué buscas?"
    />
    <button type="button" class="btn btn-dark m-2" id="buscar"  @click="getDataByName">Buscar</button>

  </div>

  <div
    class="card mb-3 mx-auto m-2"
    style="max-width: 540px"
    v-for="clase in clases"
    :key="clase.id"
  >
    <div class="row g-0">
      <div class="col-md-4">
        <img :src="clase.imgs" class="img-fluid rounded-start" />
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">{{ clase.name }}</h5>
          <p class="card-text">
            {{ clase.precio }}
          </p>
          <p class="card-text">{{ clase.duracion }} €</p>
          <p class="card-text">
            <small class="text-muted">Last updated 3 mins ago</small>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
