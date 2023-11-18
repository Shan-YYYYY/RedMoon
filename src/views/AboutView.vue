<template>
    <div class="topPart">
        <div class="components1" style="width:100%;">此处应为导航栏组件</div>
      </div>
      <hr>
      <div class="midPart">
        此处应为个人页面组件
      </div>
      <div class="downPart">
        <div class="downPart1">
            <span>按钮组1</span>
            <span>按钮组2</span>
        </div>
        <div class="downPart2">

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
    height: 50%;
    width: 100%;
    background-color: blueviolet;
  }
  .downPart{
    height: 40%;
    .downPart1{
        height: 20%;
    }
    .downPart2{
        height: 80%;
    }
  }
</style>