<template>
  <v-app id="app">
    <navigation />
    <v-content>
        <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import Navigation from './components/Navigation.vue';

export default {
  name: 'App',

  components: {
    Navigation
  },

  data: () => ({
    //
  }),
};
</script>

<style lang="scss">
main {
  background-image: url('./assets/bagels.jpg');
  background-size: cover;
}
  
</style>
