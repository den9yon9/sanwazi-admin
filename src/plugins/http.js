import axios from 'axios'

export default {
    install(Vue) {
        // 不会变化的头参数
        axios.defaults.baseURL = 'http://172t8v1421.imwork.net/sanwazi'
        axios.defaults.headers.post['Content-Type'] = 'application/json';
        axios.defaults.withCredentials = true;

        async function request({
            method = 'get', url, params, data, headers
        }) {
            // start loading
            try {
                let res = await axios({
                    method, url, params, data, headers
                })
                if (!res.data.success) throw new Error(res.data.msg)
                return res.data.result
            } catch (err) {
                alert(err.message)
                throw err
            } finally {
                // stop loading
            }
        }

        Vue.prototype.$http = {
            signin(data) {
                return request({
                    method: 'post',
                    url: '/signin',
                    data
                })
            },

            signout(data) {
                return request({
                    url: '/signout',
                    data
                })
            },

            createMenu(data) {
                return request({
                    method: 'post',
                    url: '/weixin/offiaccount/createMenu',
                    data
                })
            },

            createCard(data) {
                return request({
                    method: 'post',
                    url: '/weixin/coupon/createCard',
                    data
                })
            },



        }
    }
}
