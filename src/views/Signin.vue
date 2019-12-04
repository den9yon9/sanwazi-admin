<template>
  <div class="signin">
    <a-form :form="form" @submit="handleSubmit" class="form">
      <a-form-item>
        <a-input v-decorator="['mobile',{ rules: [{ required: true, message: '请输入手机号码登录系统!' }] }]" placeholder="手机号码">
          <a-icon slot="prefix" type="user" style="color: rgba(0,0,0,.25)" />
        </a-input>
      </a-form-item>
      <a-form-item>
        <a-input v-decorator="['password',{ rules: [{ required: true, message: '请输入登录密码!' }] }]" placeholder="登录密码"
          type="password">
          <a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25)" />
        </a-input>
      </a-form-item>
      <a-form-item>
        <a-checkbox v-decorator="['remember',{valuePropName: 'checked',initialValue: true}]">记住登录</a-checkbox>
        <a class="forgot" href="">忘记密码</a>
        <a-button type="primary" html-type="submit" class="signin-button">登录</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script>
  export default {
    beforeCreate() {
      this.form = this.$form.createForm(this, { name: 'normal_login' });
    },
    methods: {
      handleSubmit(e) {
        e.preventDefault();
        this.form.validateFields(async (err, values) => {
          if (!err) {
            await this.$http.signin({
              mobile: values.mobile,
              password: values.password
            })
            this.$router.push('/')
          }
        });
      },
    },
  };
</script>
<style scoped>
  .signin {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .form {
    width: 25vw;
    margin: 0 auto;
  }

  .forgot {
    float: right;
  }

  .signin-button {
    width: 100%;
  }
</style>