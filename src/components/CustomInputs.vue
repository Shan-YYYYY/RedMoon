<template>
  <div class="custom-inputs custom-inputs-name">
    name<el-input
    v-model="name"
    placeholder="输入商品名字"
    type="textarea"
    :resize="'none'"
    class="custom-input" />

  </div>
    <div class="custom-inputs">
      <div class="input-row">
      <div class="input-container left-input-container">
        preview picture
        <el-input
         v-model="pictureUrl"
         placeholder="Input your picture url"
         :rows="4"
         type="textarea"
         :resize="'none'"
         class="custom-input" />
      </div>
      <div class="input-container">
        Description
        <el-input
        v-model="description"
        placeholder="Limited to 1000 characters"
        :rows="8"
        type="textarea"
        :resize="'none'"
        :maxlength="1000"
        class="custom-input"
        @input="handleInput"
      />
      </div>
      <div class="input-container right-input-container" >
        Download url
        <el-input 
        v-model="downloadUrl" 
        :rows="8"
        type="textarea"
        :resize="'none'"
        class="custom-input" />
      </div>
    </div>
    
    <div class="input-row custom-input-row">
    
      <div class="input-container custom-input-container number-input-container">
        Initial Price
        <el-input-number 
        v-model="number"
        :precision="1"
        :step="0.1"
        :max="10"
        controls-position="right"
        size="large"
        class="custom-input" />
      </div>
      <div class="input-container custom-input-container">
        Choose Data Type
        <el-select 
        v-model="selectedOption" 
        placeholder="Select Type" 
        class="custom-input"
        @change="updateBoolArray"
        >
          <el-option label="Document" value="0" />
          <el-option label="Graphics" value="1" />
          <el-option label="Auido" value="2" />
          <el-option label="video" value="3" />
        </el-select>
      </div>
      <div class="input-container custom-input-container button-input-container">
        
        <el-button
         type="info" 
         class="custom-input"
         size="large"
         @click="handleButtonClick"
         round
         >Submit
        </el-button>
      </div>
    </div>
  </div>
  </template>
  
  <script setup>
  import { ref ,computed } from 'vue';
  
  const pictureUrl = ref('');
  const description = ref('');
  const downloadUrl = ref('');
  const number = ref(0);
  const selectedOption = ref('');
  const name = ref('');


  const handleInput = (value) => {
  description.value = value.slice(0, 1000);
};

// 点击按钮时的事件处理程序
const handleButtonClick = () => {
   // 输出其他五个组件的值
   console.log('pictureUrl:', pictureUrl.value);
   console.log('name:', name.value);
  console.log('description:', description.value);
  console.log('downloadUrl:', downloadUrl.value);
  console.log('number:', number.value);
  // 输出 bool 数组的值
  console.log('boolArray:', boolArray.value);
};

const boolArray = computed(() => {
  const bools = [false, false, false, false];
  const option = parseInt(selectedOption.value);

  if (!isNaN(option) && option >= 0 && option < bools.length) {
    bools[option] = true;
  }

  return bools;
});
// 选项改变时更新 bool 数组
const updateBoolArray = () => {
  boolArray.value; // 触发计算属性的更新
};
  </script>
  
  <style scoped>
  .custom-inputs {
    display: flex;
    flex-direction: column;
   
  }
  
  .input-row {
    display: flex;
    justify-content: space-between;
    margin-top: 3%;
  }
  
  .custom-input-row {
    justify-content: space-around; /* 调整下一行组件的间距为 space-around */
  }
  .input-container {
    width: 25%;
    text-align: center;
  }
  .left-input-container{
    margin-left: 5%;
  }
  .right-input-container{
    margin-right: 5%;
  }
  .custom-input-container {
    /* 这里可以单独调整下一行的三个组件的样式 */
  }
  .number-input-container {
    margin-right: 100px; /* 单独为 Number 组件设置右边距 */
  }
  .button-input-container{
    margin-top: 20px;
    margin-left: 100px;
  }
  .custom-inputs-name{
    width: 20%;
    margin-left: 100px;
    margin-top: 100px;
  }
  </style>