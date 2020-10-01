<template>
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
  </div>
</template>

<script>

import fileReader from './components/FileReader.vue'
import codeBlock from './components/CodeBlock.vue'
import AnalyzeBtn from "@/components/AnalyzeBtn.vue";

export default {
  name: 'App',
  components: {
    fileReader,
    codeBlock,
    AnalyzeBtn
  },
  data: () => {
    return {
      text:''
    }
  },
  methods: {
    loadTextFromFile(ev) {
      let reader = new FileReader()
      reader.onload = (event) => {
        this.product.image = event.target.result
      }
      reader.readAsText(ev)
    },
    analyze(){

    }
  }
}
</script>
<style scoped>
  .full-height {
    min-height: 101.3vh;
  }
</style>