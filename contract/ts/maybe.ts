import { ethers } from "ethers";
import main from '../abi/main.json'
import mainBy from '../byte/main.json'

export let provider: any;

// 检查是否安装了 Metamask
if (typeof window.ethereum !== "undefined") {
    try {
        // 创建 Web3Provider 对象
        provider = new ethers.BrowserProvider(window.ethereum)
        provider._getENSAddress = function () { } // 禁用ENS
        provider.pollingInterval = 1000000; // 设置以太坊节点轮询间隔
        
        console.log("Web3Provider successfully created:", provider);
        // 执行您的应用程序逻辑...
    } catch (err) {
        console.error("Failed to create Web3Provider:", err);
    }
} else {
    console.error("Metamask not detected!");
}
export const blockNumber = await provider.getBlockNumber();
console.log(blockNumber)

const signer = await provider.getSigner();
console.log("签名：：：",signer)
const mainfactory = new ethers.ContractFactory(main,  mainBy.code, signer);
export const mainContract = await mainfactory.deploy();
console.log(1)
const mainAddress = await mainContract.getAddress()
console.log("合约地址：",mainAddress)



