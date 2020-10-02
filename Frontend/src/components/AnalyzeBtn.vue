<template>
  <div class="buttons">
    <button class="button is-light is-block is-fullwidth" :class="isLoading ? 'is-loading' : '' " @click="analyze">Analyze</button>
  </div>
</template>
<script>
let code;
export default {
    name: 'analyzeBtn',
    props: {
      code
    },
    data: () => {
      return {
        isLoading: false,
      }
    },
    methods: {
      analyze(){
        this.isLoading = true
        console.log('this is what is being sent to backend:',this.code)
        fetch('http://www.dumas.ir:8082/analyse', {
          method: 'post',
          headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            input: this.code
          })
        }).then( (data) => {
          return data.json()
        }).then((res)=>{
          console.log(res.res)
          this.$emit('fetchComplete', res.res)
          this.isLoading = false
        })
            .catch((error) => {
              console.log('Request failure: ', error);
            })
      }
    }
  }
</script>