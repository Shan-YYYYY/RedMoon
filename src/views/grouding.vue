<template>
    <div class="topPart">
        <div class="components1" style="width:100%;">此处应为导航栏组件</div>
      </div>
      <div class="midPart">
        <span class="left">
            此处应为上架图片预览
        </span>
        <span class="mid">
            此处应为上架信息
        </span>
        <span class="right">
            此处应为下载url
        </span>
      </div>
      <div class="downPatr">
      <span class="d_left">
        此处应为交易价格
      </span>
      <span class="d_mid">
        此处应为数据类型选择
      </span>
      <span class="d_right">
         此处应为按钮
      </span>
    </div>
</template>

<script setup>
import homeCard from '../components/homeCard.vue';
</script>

<style>
.topPart{
    height: 7%;
  }
.midPart{
    height: 70%;
}
.downPart{
    height: 20%;
}

</style>