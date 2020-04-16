<template>
  <v-container grid-list-xs>
    <v-layout align-center class="info_box">
      <v-flex sm2 xs12 offset-sm1>
        <h1>Bagel shop - About us</h1>
      </v-flex>
    </v-layout>

    <v-layout align-center class="info_box" row wrap>
      <v-flex sm2 xs12 offset-sm1>
        <h1>Our bagels</h1>
        <div>
          <p>Buy or bagels Plz, i need money</p>
        </div>
      </v-flex>

      <v-flex sm2 xs12>
        <h1>Our bagels</h1>
        <div>
          <p>Buy or bagels Plz, i need money</p>
        </div>
      </v-flex>

      <v-flex sm2 xs12>
        <h1>Our bagels</h1>
        <div>
          <p>Buy or bagels Plz, i need money</p>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<style lang="scss" scoped>
  .info_box:first-child .flex h1{
    font-size: 150%;
    padding: 50px;
  }
</style>