<template>
  <a-layout>
    <a-layout-header class="header">
      <div class="logo" />

      <a-menu theme="dark" mode="horizontal" :defaultSelectedKeys="['2']" style="line-height: 64px">
        <a-menu-item key="1">nav 1</a-menu-item>
        <a-menu-item key="2">nav 2</a-menu-item>
        <a-menu-item key="3">nav 3</a-menu-item>
      </a-menu>

      <div class="additional">
        <div class="additional-item">
          <a-icon type="question-circle" style="color: #fff;font-size: 18px" />
        </div>
        <div class="additional-item">
          <a-badge :count="1">
            <a-icon type="bell" style="color: #fff;font-size: 18px" />
          </a-badge>
        </div>
        <a-dropdown placement="bottomCenter" class="additional-item">
          <a-icon type="user" style="color: #fff;font-size: 18px"></a-icon>
          <a-menu slot="overlay">
            <a-menu-item style="display: flex;align-items: center;">
              <a-icon type="user"></a-icon>
              <a href="javascript:;">个人中心</a>
            </a-menu-item>
            <a-menu-item style="display: flex;align-items: center;" @click="signout">
              <a-icon type="logout"></a-icon>
              <a href="javascript:;">退出</a>
            </a-menu-item>
          </a-menu>
        </a-dropdown>
      </div>

    </a-layout-header>
    <a-layout-content style="padding: 0 50px;display: flex;flex-direction: column;">
      <a-breadcrumb style="margin: 16px 0">
        <a-breadcrumb-item>Home</a-breadcrumb-item>
        <a-breadcrumb-item>List</a-breadcrumb-item>
        <a-breadcrumb-item>App</a-breadcrumb-item>
      </a-breadcrumb>
      <a-layout style="padding: 24px 0; background: #fff;">
        <a-layout-sider width="200" style="background: #fff">
          <a-menu mode="inline" :defaultSelectedKeys="['1']" :defaultOpenKeys="['sub1']" style="height: 100%">
            <a-sub-menu key="sub1">
              <span slot="title">
                <a-icon type="user" />subnav 1</span>
              <a-menu-item key="1">option1</a-menu-item>
              <a-menu-item key="2">option2</a-menu-item>
              <a-menu-item key="3">option3</a-menu-item>
              <a-menu-item key="4">option4</a-menu-item>
            </a-sub-menu>
            <a-sub-menu key="sub2">
              <span slot="title">
                <a-icon type="laptop" />subnav 2</span>
              <a-menu-item key="5">option5</a-menu-item>
              <a-menu-item key="6">option6</a-menu-item>
              <a-menu-item key="7">option7</a-menu-item>
              <a-menu-item key="8">option8</a-menu-item>
            </a-sub-menu>
            <a-sub-menu key="sub3">
              <span slot="title">
                <a-icon type="notification" />subnav 3</span>
              <a-menu-item key="9">option9</a-menu-item>
              <a-menu-item key="10">option10</a-menu-item>
              <a-menu-item key="11">option11</a-menu-item>
              <a-menu-item key="12">option12</a-menu-item>
            </a-sub-menu>
          </a-menu>
        </a-layout-sider>
        <a-layout-content style="padding: 0 24px">
          Content
        </a-layout-content>
      </a-layout>
    </a-layout-content>
    <a-layout-footer style="text-align: center">
      Ant Design ©2018 Created by Ant UED
    </a-layout-footer>
  </a-layout>
</template>

<script>
  export default {
    mounted() {

    },
    methods: {
      async signout() {
        await this.$http.signout()
        this.$router.push('/signin')
      }
    }
  }
</script>

<style scoped>
  .logo {
    width: 120px;
    height: 31px;
    background: rgba(255, 255, 255, 0.2);
    margin: 16px 28px 16px 0;
    float: left;
  }

  .header {
    display: flex;
  }

  .header .additional {
    flex-grow: 1;
    display: flex;
    justify-content: flex-end;
    /* align-items: center; */
  }

  .additional .additional-item {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
  }

  .additional .additional-item:hover {
    background-color: #1890ff;
    transition: all 0.3s;
    cursor: pointer;
  }
</style>