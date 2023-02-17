
<template>
  
  <nav class="navbar navbar-dark bg-dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Ola Surf</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="views/SobreNosotros.vue"
              ><RouterLink to="/nosotros">Sobre nosotros</RouterLink>
            </a>
          </li>
          
          <li class="nav-item">
            <a class="nav-link" href="views/SobreNosotros.vue"
              ><RouterLink to="/login">Login</RouterLink>
            </a>
          </li>

          <li class="nav-item">
            <a class="nav-link" href="views/SobreNosotros.vue"
              ><RouterLink to="/cesta">Cesta</RouterLink>
            </a>
          </li>
        </ul>
        <form class="d-flex">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>

  <div class="video-container ">
    <video src="videos/video.mp4" autoplay loop muted poster="" ></video>
   
    <div class="container-titulo">
      <h1>Ola Surf!</h1>
    </div>
  </div>
</template>

<style scoped>
.video-container video {
  text-align: center;
  top: 0;
  left: 0;
  width: 100vw;
  height: calc(100vw * 0, 777);

  overflow: hidden;
}

.container-titulo {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

@font-face {
  font-family: "Granite";
  src: url(Granite-Bgvl.ttf) format("truetype");
}

h1 {
  font-family: Granite;
  color: aliceblue;
}
</style>
