<template>
<<<<<<< HEAD
  <div id="app">
      <p>welcome to this application</p>
=======
  <div id="app" class="container-fluid">
    <!-- BLUE section -->
    <div class="columns" >
      <section class="hero full-height column is-info">
        <div class="hero-body">
          <div class="container">
            <h1 class="title">
              SEO analyzer 1.0
            </h1>
            <h2 class="subtitle">
              universal search engine optimization solution
            </h2>
            <div class="columns">
              <div class="column">
                <file-reader @load="text = $event"></file-reader>
              </div>
              <div class="column">
                <analyze-btn />
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- WHITE section -->
      <section class="hero full-height column is-light">
        <div class="hero-body">
          <div class="container">
            <code-block :code="text" v-if="text.length>0"></code-block>
          </div>
        </div>
      </section>
    </div>
>>>>>>> 1e07e55... attempt to integrate core with the backend
  </div>
</template>

<script>
import fs from 'fs'

export default {
  name: 'App',
  data: () => {
    return {

    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
