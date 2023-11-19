<template>
  <el-carousel :interval="4000" type="card" style="height: 100%; width: 100%;">
    <el-carousel-item v-for="item in 6" :key="item">
      <h3 text="2xl" justify="center">{{ item }}</h3>
    </el-carousel-item>
  </el-carousel>
</template>

<style scoped>
.el-carousel {
  height: 100%; /* 设置走马灯的高度为父容器的高度 */
  width: 100%; /* 设置走马灯的宽度为父容器的宽度 */
}

.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 100%; /* 调整文字垂直居中 */
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
