<template>
  <v-footer
    height="auto"
    class="grey grey--text"
  >
    <v-layout
      justify-center
      row
      wrap
    >
      <v-flex
        class="grey grey--lighten-2--text"
        py-3
        text-xs-center
        white--text
        xs12
      >
      </v-flex>
      <v-btn
        v-for="link in links"
        :key="link"
        color="white"
        flat
        round
      >
        {{ link }}
      </v-btn>
      <v-flex
        class="grey grey--lighten-2--text"
        py-3
        text-xs-center
        white--text
        xs12
      >
        &copy;2018 — <strong>合唱忍者</strong>
      </v-flex>
    </v-layout>
  </v-footer>
</template>
<script>
  export default {
    data: () => ({
      links: [
        '给音键盘',
        '文章',
        '关于我',
      ]
    })
  }
</script>