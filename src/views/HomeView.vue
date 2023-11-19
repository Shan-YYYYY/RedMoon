<template>
  <div class="container">
    <div class="topPart">
      <div class="components1">此处应为导航栏组件</div>
    </div>
    <hr />
    <div class="middlePart">
      <div class="components2">
        <homeCard />
      </div>
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
  </div>
</template>

<script setup>
import homeCard from '../components/homeCard.vue';
</script>

<style>
.container {
  display: flex;
  flex-direction: column;
  height: 100vh; /* 设置容器高度为视口高度 */
}

.topPart {
  flex: 0 0 7%; /* 占据 7% 的固定高度 */
}

.middlePart {
  flex: 1; /* 占据剩余空间 */
  display: flex; /* 将 middlePart 设置为 Flex 容器 */
}

.components2 {
  flex: 1; /* 让 homeCard 组件占据整个 middlePart 区域 */
}

.downPart {
  flex: 0 0 60%; /* 占据 60% 的固定高度 */
  display: flex;
  flex-direction: column;
}

.downPart1 {
  flex: 0 0 10%; /* 占据 10% 的固定高度 */
}

.downPart2 {
  flex: 1; /* 占据剩余空间 */
  background-color: brown;
}

.components1 {
  background-color: aqua;
  height: 100%;
}
</style>
