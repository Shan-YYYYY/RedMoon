<template>
  <div class="topPart">
      <div class="components1" style="width:100%;"><Nav/></div>
    </div>
    <hr>
    <div class="midPart">
      <user-head/>
    </div>
    <div class="downPart">
      <div class="downPart1">
          <span><butten text='Bought'/></span>
          <span><butten text='Selling'/></span>
          <span><butten text='arbitrated'/></span>
          <span><butten text='Create'/></span>
          <span><butten text='Join the DAO'/></span>
      </div>
      <div class="downPart3">
        <UserSell/>
      </div>
    </div>
</template>

<script setup>
import Nav from "../components/Nav.vue";
import Carousel from '../components/Carousel.vue';
import UserHead from '../components/UserHead.vue'
import UserSell from '../components/UserSell.vue'
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
}
  .downPart1{
      height: 20%;
  }
  .downPart3{
      height: 80%;
  }

</style>