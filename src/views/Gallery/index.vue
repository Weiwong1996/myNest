<template>
  <div class="gallery">
    <div class="content">
      <div class="item" v-for="(item, index) in imgList" :key="index">
        <div v-viewer>
          <img :src="require('@/assets/pictures/' + item)">
        </div>
        <div class="name">
          {{ item.substring(4, 8) }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      imgList: []
    }
  },
  methods: {
    loadImgFile () {
      const files = require.context('@/assets/pictures', false, /.JPG$/).keys()

      this.imgList = files.map(item => {
        return item.slice(2, item.length)
      }).reverse()
    }
  },
  mounted () {
    this.loadImgFile()
  }
}
</script>

<style scoped lang="scss">
.gallery {
  @media screen and (max-width: 769px) {
    width: 80% !important;
  }
  width: 60%;
  margin: 5% auto 0;

  .content {
    width: 100%;
    display: flex;
    flex-wrap: wrap;

    .item {
      @media screen and (max-width: 769px) {
        width: calc(100% / 1) !important;
      }
      @media screen and (max-width: 1024px) and (min-width: 768px) {
        width: calc(100% / 2) !important;
      }

      width: calc(100% / 3);
      text-align: center;
      margin-bottom: 55px;

      img {
        @media screen and (max-width: 769px) {
          height: 300px !important;
        }
        height: 200px;
        background-size: contain;
      }

      .name {
        margin-top: 20px;
      }
    }
  }
}
</style>
