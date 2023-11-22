<template>
  <el-carousel :interval="4000" type="card" height="200px">
    <el-carousel-item
      v-for="item in obj.url.length"
      :key="item"
      @click="topage"
    >
      {{ obj.url[item - 1] }}
      这是第{{ item }} 个
      {{ obj.name[item - 1] }}
    </el-carousel-item>
  </el-carousel>
</template>

<script setup>
import { reactive } from "vue";
import { ethers } from "ethers";
// import {blockNumber} from "../../contract/ts/maybe"
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
  console.log("签名"+ signer.address)
const Contract = mainContract(signer)
const contractAddress = Contract.getAddress()

// const st = "111"
// const n = 2
// const str = "222"
// const bo = [0,0,0,1]
// const str1 = "333"
// const str2 = "444"
// const n1 = 20
// const transaction = {
//   value: '20',
// };

// // 调用合约方法
// const result = await Contract.CommodityListing(st, n, str, bo, str1, str2, n1, transaction);
const tot = await Contract.FindNumberOfTotalData().then((res) => {
console.log(res)})
await Contract.FindNumberOfData([0,1]).then((res) => {
console.log(res)
})
// 调用合约方法
// const result = await Contract.CommodityListing(st,n,str,bo,str1,str2,n1);
// await Contract.CommodityListing(st,n,str,bo,str1,str2,n1).then((res) => {
// // obj.url = res[3]
// // obj.price = res[2]
// // obj.name = res[1]
// // obj.number = res[0]
// console.log(res)
// })
}
loding()
</script>


<style scoped>
.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 200px;
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