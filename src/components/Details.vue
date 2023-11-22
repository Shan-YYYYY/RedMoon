<template>
  <div class="details">
    <div class="detail">
      <span>Preview</span>
    </div>
    <div class="detail">
      <span>Name</span>
    </div>
    <div class="detail">
      <span>Floor Price</span>
    </div>
    <div class="detail">
      <span>Volume</span>
    </div>
  </div>
  <div class="details" v-for="item in obj.url.length " :key="item" @click="topage">
    <div class="detail">
      <img src="../../public/img/个人.png" />
    </div>
    <div class="detail">
        <span>{{obj.name[item - 1]}}</span>
    </div>
    <div class="detail"> 
      <span>{{obj.price[item - 1]}}</span>
    </div>
    <div class="detail">
        <span>{{obj.price[item - 1]}}</span>
    </div>
  </div>
</template>

<script setup>
import { reactive } from "vue";
import { getSigner, mainContract} from "../../contract/ts/test"
import { useRouter } from "vue-router";
const router = useRouter();
const obj = reactive({
url:[1,2,3,4,5,6],
price:[1,2,3,4,5,6],
name:[7,8,9,1,2,3],
number:[1,2,3,4,5,6]
})

const topage = () => {
  router.push({ name: "commidity"});
}

const loding = async () =>{
  const signer = await getSigner()
  console.log("签名"+ signer)
const Contract = mainContract(signer)
await Contract.FindLastestdata().then((res) => {
obj.url = res[3]
obj.price = res[2]
obj.name = res[1]
obj.number = res[0]
})
}
</script>

<style>
.details{
display: flex;
justify-content: center;
  align-items: center;
}
img{
width: 30%;
}
</style>