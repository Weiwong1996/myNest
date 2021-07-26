<template>
  <div class="main">
    <div class="top">
      <div class="title">
        <div class="items">
          <div>
            <img src="static/logo/logo.png">
          </div>
        </div>
        <div class="items">HOME</div>
        <div class="items">ABOUT</div>
        <div class="items">GALLERY</div>
        <div class="items">CONTACT</div>
      </div>
    </div>
    <div class="content"></div>
    <div class="footer">
      <a href="https://beian.miit.gov.cn" target="_blank">网站备案号 ：浙ICP备2021021303号-1 </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style lang="scss" scoped>
$red: red;
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
        margin: 0 100px;
        cursor: pointer;
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

  .footer {
    position: absolute;
    width: 100%;
    height: 40px;
    line-height: 40px;
    background-color: rgba(0, 0, 0, 0.8);
    //color: white;
    text-align: center;
    bottom: 0;
    left: 0;

    a {
      color: #F5F5F7;
    }

    //a:visited{color:black;}
  }
}
</style>
