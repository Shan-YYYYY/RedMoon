<template>
  <div class="topPart1">
      <div class="components1" style="width:100%;"><Nav/></div>
    </div>
    <div class="midPart1">
     <CustomInputs/>
    </div>
    <!-- <div class="downPatr1">
    <span class="d_left">
      此处应为交易价格
    </span>
    <span class="d_mid">
      此处应为数据类型选择
    </span>
    <span class="d_right">
       此处应为按钮
    </span>
  </div> -->
</template>

<script setup>
import CustomInputs from '../components/CustomInputs.vue';
import Nav from '../components/nav.vue'
</script>

<style  >
.topPart1{
  height: 7%;
}
.midPart1{
  height: 50%;
}  
.downPart1{
  height: 20%;
}

</style>