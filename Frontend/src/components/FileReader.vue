<template id="fileReader">
  <div class="file has-name is-fullwidth">
    <label class="file-label">
      <input class="file-input" type="file" @change="loadTextFromFile" name="resume"/>
      <span class="file-cta">
      <span class="file-icon">
        <i class="fas fa-upload"></i>
      </span>
      <span class="file-label">
        Upload
      </span>
    </span>
      <span class="file-name">
        {{ fileName }}
    </span>
    </label>
  </div>
</template>
<script>
  export default {
    name: 'fileReader',
    data: () => {
      return {
        fileName: 'No file selected'
      }
    },
    methods: {
      loadTextFromFile: function (e) {
        const file = e.target.files[0]
        this.fileName = file.name
        const reader = new FileReader()
        reader.onload = e => this.$emit('load', e.target.result)
        reader.readAsText(file)
      }

    }
  }
</script>