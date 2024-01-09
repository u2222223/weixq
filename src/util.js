import Vue from "vue";
import { ajax } from "./ajax";

// 获取配置文件
// Vue.prototype.$getAppConfig = async function(){
//     if(this.$appConfig){
//         return this.$appConfig
//     } else {
//         const res = await getConfig()
//         this.$appConfig = res
//         return res
//     }
// }
Vue.prototype.$ajax = ajax;

// 获取用户详情
Vue.prototype.$getUserInfo = async function () {
  return new Promise((resove, reject) => {
    if (Vue.prototype.$userInfo) {
      resove(Vue.prototype.$userInfo);
    } else {
      uni.login({
        success: async (res) => {
          const accountInfo = uni.getAccountInfoSync();
          const appId = accountInfo.miniProgram.appId;
          const jsCode = res.code;
          const res2 = await this.$ajax({
            url: "/weiqun-list/login",
            data: {
              appId,
              jsCode,
            },
          });
          const userInfo = res2.data;
          wx.setStorageSync("t", userInfo.authorization);
          Vue.prototype.$userInfo = userInfo;
          resove(userInfo);
        },
        fail() {
          reject({});
        },
      });
    }
  });
};

// 获得base64
Vue.prototype.$getBase64 = async function (url) {
  return new Promise((resolve, reject) => {
    uni.getFileSystemManager().readFile({
      filePath: url, //选择图片返回的相对路径
      encoding: "base64", //编码格式
      success: (res) => {
        resolve(res.data);
      },
      fail: (e) => {
        reject();
      },
    });
  });
};
