<template>
  <div id="app">
    <p>{{ idea }}</p>
    <p> {{ buffer }}</p>
  </div>
</template>

<script>
import fs from 'fs'
import { hello } from './scripts/ultimateSEO.ts'

export default {
  name: 'App',
  data: () => {
    return {
      idea: hello()
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
