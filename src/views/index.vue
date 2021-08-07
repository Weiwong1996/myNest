<template>
  <div class="main">
    <div class="top">
      <div class="title">
        <div class="items">
          <div>
            <img src="static/logo/logo.png">
          </div>
        </div>
        <div
          class="items"
          v-for="(item, index) in navTitle"
          :key="index"
          @click="redirect(item.routeName)"
        >{{ item.title }}</div>
      </div>
    </div>
    <div class="content">
      <router-view></router-view>
    </div>
    <bottomInfo class="footerInfo" />
  </div>
</template>

<script>

import bottomInfo from '../components/footerInfo/footerInfo'

export default {
  name: 'index',
  components: {
    bottomInfo
  },
  data () {
    return {
      navTitle: [
        // {title: 'HOME', routeName: 'home'},
        {title: 'GALLERY', routeName: 'gallery'},
        {title: 'ABOUT', routeName: 'about'},
        {title: 'CONTACT', routeName: 'contact'}
      ]
    }
  },
  methods: {
    redirect (name) {
      this.$router.push({name: name})
    }
  }
}
</script>

<style lang="scss" scoped>
.main {
  display: flex;
  flex-direction: column;
  width: 100%;

  .top {
    color: #F5F5F7;
    height: 65px;
    line-height: 65px;
    background-color: rgba(0, 0, 0, 0.8);

    .title {
      font-size: 14px;
      display: flex;
      justify-content: center;

      .items {
        margin: 0 5%;
        cursor: pointer;
        opacity: 0.9;
        //&:nth-child(1) {
        //  margin-right: 5%;
        //}

        &:hover{
          opacity: 1;
        }

        div {
          top: 50%;
          transform: translateY(15%);

          img {
            width: 40px;
            height: 40px;
          }
        }
      }
    }
  }

  .content {
  }

  .footerInfo {
    width: 100%;
    height: 40px;
    line-height: 40px;
    background-color: rgba(0, 0, 0, 0.8);
    text-align: center;
  }
}
</style>
