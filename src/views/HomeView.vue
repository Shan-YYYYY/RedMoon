<template>
    
    <div class="topPart">
      <div class="components1" style="width:100%;">此处应为导航栏组件</div>
    </div>
    <hr>
    <div class="midPart">
      <div class="components2">此处应为轮播图片组件</div>
    </div>
    <div class="downPart">
      <div class="downPart1">
        <span>按钮组1</span>
        <span>按钮组2</span>
      </div>
      <div class="downPart2">
        <span>此处应为表格组件</span>
        <span>此处应为表格组件</span>
      </div>
    </div>
    
</template>

<script setup>

</script>

<style>
.topPart{
  height: 7%;
}
.midPart{
  height: 30%;
  width: 100%;
  background-color: blueviolet;
}
.downPart{
  height: 60%;
  width: 100%;
  .downPart1{
    height: 10%;
  }
  .downPart2{
    height: 90%;
    background-color: brown;
  }
}

.components1{
  background-color: aqua;
  height: 100%;
}

</style>