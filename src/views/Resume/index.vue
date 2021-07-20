<template>
  <div class="resume">
    <div class="main">
      <div class="title">1</div>
      <div class="edu">2</div>
      <div class="exp">3</div>
      <div class="certificate">4</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'index'
}
</script>

<style scoped lang="scss">
.resume{
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: rgb(193,193,193);
  .main{
    width: 60%;
    background-color: white;
    margin: 30px 0;
  }
}
</style>
