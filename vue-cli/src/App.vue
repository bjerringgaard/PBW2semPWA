<template>
  <div>
      <webapp-header></webapp-header>
      <webapp-content></webapp-content>
      <webapp-footer></webapp-footer>
  </div>
</template>

<script>
import header from './views/header.vue'
import content from './views/content.vue'
import footer from './views/footer.vue'


export default {
  name: 'App',

  components: {
    'webapp-header': header,
    'webapp-content': content,
    'webapp-footer': footer,

  },


  data(){
    return {

    }
  },

  methods: {
 
  }

};
</script>
