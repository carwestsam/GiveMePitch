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
      <router-link
        v-for="link in links"
        :key="link.path"
        color="white"
        class="v-btn--flat v-btn--round white--text"
        flat
        round
        v-bind:to="link.path"
        tag="v-btn"
      >
        {{link.name}}
      </router-link>
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
        {path: '/keyboard', name: '找音键盘'},
        {path: '/toc', name: '文章'},
        {path: '/profile', name: '关于我'}
      ]
    })
  }
</script>