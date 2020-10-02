<template>
  <div class="container">
    <p class=" animate__animated animate__fadeIn is-size-1" v-if="res"> your SEO result is : {{ res }}</p>
  </div>
</template>

<script>
let res;
export default {
  name: 'result',
  props: {
    res
  },
  data: () => {
    return {

    }
  }
}
</script>