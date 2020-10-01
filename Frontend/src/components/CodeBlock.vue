<template>
  <div class="container">
    <div class="control">
      <textarea class="textarea code-block is-disabled" readonly v-model="code"></textarea>
    </div>
  </div>
</template>

<script>
let code;
export default {
    name: 'HtmlBlock',
    props: {
      code
    }
  }
</script>

<style scoped>
  .code-block {
    height: 500px;
  }
</style>