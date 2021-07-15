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
    <div class="footer"></div>
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
  .top{
    color: white;
    height: 65px;
    line-height: 65px;
    background-color: black;
    .title{
      font-size: 14px;
      display: flex;
      justify-content: center;
      .items{
        margin: 0 100px;
        cursor: pointer;
        div{
          top: 50%;
          transform: translateY(15%);
          img{
            width: 40px;
            height: 40px;
          }
        }
      }
    }
  }
  .content{}
  .footer{}
}
</style>
