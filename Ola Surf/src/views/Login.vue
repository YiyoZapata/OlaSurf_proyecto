<script>
export default {
  data() {
    return {
        "nivel": ""
    };
  }
};
</script>
<template>
    <div class="container-md">
  <div class="mb-3 row">
    <label for="staticEmail" class="col-sm-2 col-form-label">Email</label>
    <div class="col-sm-10">
      <input
        type="text"
        readonly
        class="form-control-plaintext"
        id="staticEmail"
        value="email@example.com"
      />
    </div>
  </div>
  <div class="mb-3 row">
    <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
    <div class="col-sm-10">
      <input type="password" class="form-control" id="inputPassword" />
    </div>
  </div>

  <select class="form-select" aria-label="Default select example" v-model="nivel">
    <option selected>Nivel de natación.</option>
    <option value="Bajo">Bajo</option>
    <option value="Medio">Medio</option>
    <option value="Alto">Alto</option>
  </select>

  <p class="m-2">Tu nivel de natación es: {{ nivel }}</p>

  <button class="btn  btn-dark m-3" type="submit">Button</button>
</div>
</template>
