<script>

import clientes from './components/clientes.vue'
// import facturas from './components/facturas.vue'

export default {
  components: {
    clientes
  }
}

</script>

<template>
  <header>
    <h2>PixtaGes</h2>
  </header>

  <clientes/>
</template>
  

<style>
body header h2 {
    color: #00b700;
    padding: 0.3em 0.5em;
  }
</style>
