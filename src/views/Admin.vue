<template>
    <div class="admin">
        <div class="offiaccount">
            <input type="text" placeholder="appid" v-model="appid">
            <input type="text" placeholder="secret" v-model="secret">
            <input type="text" placeholder="token" v-model="token">
            <input type="text" placeholder="encoding_aes_key" v-model="encoding_aes_key">
            <input type="text" placeholder="mobile" v-model="mobile">
            <button @click="createUser">增加公众号</button>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                appid: 'wx2f59bc52ecb513fb',
                secret: '8421ae781d724fd981a758b0dfabcb73',
                token: 'wuxianaoyou',
                encoding_aes_key: 'CQtsnAgJw2YsdMtvkfz4FWT63d01nY62Qb89zed1Z6Q',
                mobile: '13100718339'
            }
        },
        methods: {
            async createUser() {
                let res = await this.$http.createUser({
                    appid: this.appid,
                    secret: this.secret,
                    token: this.token,
                    encoding_aes_key: this.encoding_aes_key,
                    mobile: this.mobile
                })
            }
        }
    }
</script>