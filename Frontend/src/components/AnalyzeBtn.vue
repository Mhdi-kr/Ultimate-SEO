<template>
  <div class="buttons">
    <button class="button is-light is-block is-fullwidth" :class="isLoading ? 'is-loading' : '' " @click="analyze">Analyze</button>
  </div>
</template>
<script>
  export default {
    name: 'analyzeBtn',
    data: () => {
      return {
        isLoading: false,
      }
    },
    methods: {
      analyze(){
        console.log('hello!')
        this.isLoading = true
        fetch('www.dumas.ir:3000/analyze')
            .then(response => response.json())
            .then(json => {
              console.log(json)
              this.isLoading = false
            })
      }
    }
  }
</script>