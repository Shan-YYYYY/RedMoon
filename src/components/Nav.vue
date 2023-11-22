<template>
  <div class="nav">
    <el-breadcrumb separator="|">
      <el-breadcrumb-item><router-link to="index"> REDMOON </router-link></el-breadcrumb-item>
      <el-breadcrumb-item>
        <div class="flex flex-wrap items-center">
          <el-dropdown v-for="(category, index) in navList" :key="index">
            <el-button type="primary">
              {{ Object.keys(category)[0] }}
            </el-button>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item
                  v-for="(item, subIndex) in Object.values(category)[0]"
                  :key="subIndex"
                  >{{ item }}</el-dropdown-item
                >
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
      </el-breadcrumb-item>
      <el-breadcrumb-item>
        <el-dropdown>
          <router-link to="index"
            ><img src="../../public/img/购物车空.png"
          /></router-link>
        </el-dropdown>
        <el-dropdown>
          <img src="../../public/img/个人_2.png" />
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item>
                <router-link to="user"
                  ><div class="list">
                    <img src="../../public/img/个人.png" />
                    <span> profile</span>
                  </div>
                </router-link></el-dropdown-item
              >
              <el-dropdown-item>
                <router-link to="/"
                  ><div class="list">
                    <img src="../../public/img/个人.png" />
                    <span> Watchlist</span>
                  </div>
                </router-link></el-dropdown-item
              >
              <el-dropdown-item>
                <router-link to="/"
                  ><div class="list">
                    <img src="../../public/img/个人.png" />
                    <span> Deals</span>
                  </div>
                </router-link></el-dropdown-item
              >
              <el-dropdown-item>
                <router-link to="/"
                  ><div class="list">
                    <img src="../../public/img/个人.png" />
                    <span> Settings</span>
                  </div>
                </router-link></el-dropdown-item
              >
              <el-dropdown-item>
                <router-link to="/"
                  ><div class="list">
                    <img src="../../public/img/个人.png" />
                    <span> Help</span>
                  </div>
                </router-link></el-dropdown-item
              >
            </el-dropdown-menu>
          </template>
        </el-dropdown>
        <span class="connect"  v-show="obj.show" @click="login">CONNECT WALLET {{ obj.show }}</span>
        <span class="connect" v-show="!obj.show"> {{ obj.ethbalance / 1e18 }} ETH</span>
      </el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from "vue";
const navList = reactive([
  { DOCUMENT: ["TXT", "DOC/DOCX", "EXCEL"] },
  { GRAPGICS: ["JPG/JPEG", "GIF", "PNG"] },
  { AUDIO: ["MP3", "WMA", "WACV", "FLAC", "MID", "OTHERS"] },
  { VIDEO: ["MP4", "AVI", "WMV", "FLV", "MOV", "OTHERS"] },
  {
    ENGINEERING: [
      "C/C++/PY/GO",
      "JAVA/CLASS/JAR",
      "HTM/HTML",
      "JS/JSP/ASP",
      "SQL/LDF/MDF/BAK",
      "OTHERS",
    ],
  },
  { "MISC/MIX": [""] },
]);

const obj = reactive({
show:true,
ethbalance:''
})



//登录
const login = async () => {
      if (typeof window.ethereum !== "undefined") {
        // 通过 MetaMask 访问用户地址
        window.ethereum
          .request({ method: "eth_accounts" })
          .then(async function (accounts) {
            // 获取用户地址
            await ethereum.request({
              method: "wallet_requestPermissions",
              params: [
                {
                  eth_accounts: {},
                },
              ],
            });
            const address = accounts[0];
            console.log("用户地址：", address);
            obj.show = !obj.show
            // const exampleMessage = Date.now(); 
            // try {
            //   // 执行您的应用程序逻辑...
            //   const msg = `0x${exampleMessage.toString()}`;
            //   console.log("签名消息:::",msg)
            //   const sign = await ethereum.request({
            //     method: "personal_sign",
            //     params: [msg, address, "Example password"],
            //   });
            //   console.log("签名:", sign);
            // } catch (err) {
            //   console.error(err);
            // }
            ethereum
        .request({
          method: "eth_getBalance",
          params: [address, "latest"],
        })
        .then((res) => (obj.ethbalance = parseInt(res, 16)));
          })
          .catch(function (error) {
            if (
              (error.message =
                "Already processing eth_requestAccounts. Please wait.")
            ) {
              console.log("1");
            }
          });

      } else {
        console.log("请安装 MetaMask 插件");
      }
    };
</script>
<style scoped>
.list {
  display: flex;
}
.example-showcase .el-dropdown + .el-dropdown {
  margin-left: 15px;
}
.example-showcase .el-dropdown-link {
  cursor: pointer;
  color: var(--el-color-primary);
  display: flex;
  align-items: center;
}
.connect {
  background-color: yellow;
}
.nav {
  width: 100%;
  height: 100%;
}
.nav {
  display: flex;
}
img {
  width: 10%;
}
.connect:hover {
  background-color: red;
}
</style>