<template>
  <div class="details">
    <div class="detail">
      <span>Preview</span>
    </div>
    <div class="detail">
      <span>Name</span>
    </div>
    <div class="detail">
      <span>Present Price</span>
    </div>
    <div class="detail">
      <span>Acume</span>
    </div>
    <div class="detail">
      <span>Clients List</span>
    </div>
    <div class="detail">
      <span>Remove</span>
    </div>
    <div class="detail">
      <span>Status</span>
    </div>
  </div>
  <div class="details">
    <div class="detail">
      <span><img src="../../public/img/个人.png" /></span>
    </div>
    <div class="detail">
      <span>Name</span>
    </div>
    <div class="detail">
      <span>Present Price</span>
    </div>
    <div class="detail">
      <input />
      <butten text="comfirm"></butten>
    </div>
    <div class="detail">
      <butten text="CHECK"></butten>
      <butten text="SHIP"></butten>
    </div>
    <div class="detail">
      <butten text="YES" />
    </div>
    <div class="detail">
      <span>Unjudged</span>
    </div>
  </div>
</template>
  
<script>
import Butten from "./Butten.vue";
</script>


  <style>
.details {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
img {
  width: 100%;
}
.detail {
  width: 1049%;
}
</style>