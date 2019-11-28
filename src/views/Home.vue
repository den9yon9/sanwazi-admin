<template>
  <div class="home">
    <button @click="signout">退出</button>
    <button @click="createMenu">添加菜单</button>
  </div>
</template>

<script>
  // @ is an alias to /src

  export default {
    name: 'home',
    components: {
    },
    data() {
      return {

      }
    },

    async mounted() {

    },

    methods: {
      async signout() {
        await this.$http.signout()
      },

      async createMenu() {
        await this.$http.createMenu()
      }
    }
  }
</script>