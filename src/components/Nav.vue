<template>
  <div class="nav">
    <el-breadcrumb separator="|">
      <el-breadcrumb-item>REDMOON</el-breadcrumb-item>
      <el-breadcrumb-item>
        <div class="flex flex-wrap items-center">
          <el-dropdown v-for="(category, index) in navList" :key="index">
            <el-button
              type="primary"
            >
            {{Object.keys(category)[0]}}
            </el-button>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item v-for="(item, subIndex) in Object.values(category)[0]"
              :key="subIndex">{{item}}</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
      </el-breadcrumb-item>
      <el-breadcrumb-item>
        <router-link to="index"><img src="../../public/img/购物车空.png"/></router-link>
        <router-link to="user"><img src="../../public/img/个人.png"/></router-link>
        <span class="connect">CONNECT WALLET</span>
      </el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from "vue";
const navList = reactive([
  { DOCUMENT: ["TXT", "DOC/DOCX", "EXCEL"] },
  { GRAPGICS: ["JPG/JPEG", "GIF", "PNG"] },
  { AUDIO: ["MP3", "WMA", "WACV","FLAC","MID","OTHERS"] },
  { VIDEO: ["MP4", "AVI", "WMV", "FLV", "MOV","OTHERS"] },
  { ENGINEERING: ["C/C++/PY/GO", "JAVA/CLASS/JAR", "HTM/HTML","JS/JSP/ASP","SQL/LDF/MDF/BAK","OTHERS"] },
  { "MISC/MIX":[""]},
]);

</script>
<style scoped>
.example-showcase .el-dropdown + .el-dropdown {
  margin-left: 15px;
}
.example-showcase .el-dropdown-link {
  cursor: pointer;
  color: var(--el-color-primary);
  display: flex;
  align-items: center;
}
.connect{
background-color: yellow;
}
.nav{
width: 100%;
height: 100%;
}
.nav{
display: flex;

}
img{
width: 10%;
}
.connect:hover{
background-color: red;

}
</style>