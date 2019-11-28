<template>
    <div class="signin">
        <input type="text" v-model="mobile">
        <input type="password" v-model="password">
        <button @click="signin">登录</button>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                mobile: '',
                password: ''
            }
        },

        methods: {
            async signin() {
                let res = await this.$http.signin({ mobile: this.mobile, password: this.password })
                console.log(res)
                this.$router.push('/')
            }
        }
    }
</script>

<style scoped>

</style>