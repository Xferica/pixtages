<script>
export default {
  data() {
    return {
      subtitulo: 'Facturación y gestión fiscal',
      clientes: null,
    };
  },
  methods: {
    traer() {
      fetch('https://')
        .then((response) => response.json())
        .then((data) => (this.clientes = data))
        .catch((error) => console.log(error));
    },
  },
};
</script>

<template>
  <section id="clientes">
    <h4>{{ subtitulo }}</h4>
    <button @click="traer">Clientes</button>
    <ul v-for="cliente in clientes" id="clientes">
      <li>
        <span class="id">{{ cliente.Id }}</span>
        <span class="cliente">{{ cliente.Nombre }}</span>
        <span class="poblacion">{{ cliente.Poblacion }}</span>
      </li>
    </ul>
  </section>

  <section>
    <div class="wrapper"></div>
  </section>
</template>

<style>
body button {
  background-color: #256a92;
  padding: 10px;
  color: white;
  border: none;
  border-radius: 2px;
}
body section#clientes {
  padding: 1em;
}
body section#clientes ul {
  padding: 0 5px;
  margin: 0;
  padding: 0;
  max-width: 450px;
}
body section#clientes ul li {
  list-style: none;
  vertical-align: middle;
  padding: 15px 0;
}
body section#clientes ul li .id {
  float: left;
  height: 100%;
  text-align: right;
  color: #af3455;
  width: 30px;
  padding-right: 20px;
  font-size: 1.5em;
  display: block;
  float: left;
}
body section#clientes ul li .cliente {
  font-size: 1.2em;
  display: inline;
}
body section#clientes ul li .poblacion {
  font-size: 1em;
  color: #999999;
  display: block;
  margin-left: 50px;
}
</style>
