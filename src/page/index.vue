<template>
    
  <div class="topPart">
    <div class="components1" style="width:100%;"><Nav/></div>
  </div>
  <hr>
  <div class="midPart">
    <carousel/>
  </div>
  <div class="downPart">
    <div class="downPart1">
      <span><butten text='Trending'/></span>
      <span><butten text='TOP'/></span>
      <span><butten text='Join the DAO'/></span>
    </div>
    <div class="downPart2">
      <div class="detail"><Details/></div>
      <div class="detail"><Details/></div>
    </div>
  </div>
  
</template>

<script setup>
import Nav from "../components/nav.vue";
import Carousel from '../components/Carousel.vue';
import Butten from '../components/Butten.vue'
import Details from '../components/Details.vue'
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
width: 100%;}
.downPart1{
  height: 10%;
}
.downPart2{
  height: 90%;
  background-color: brown;
  display: flex;
}
.detail{
width: 49%;
}

.components1{
background-color: aqua;
height: 100%;
}

</style>