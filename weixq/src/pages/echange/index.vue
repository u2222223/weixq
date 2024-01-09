<template>
  <view class="infobox pubBox data-v-532e73a3" style="padding: 0">
    <view class="waikuang data-v-532e73a3">
      <view class="kuandu data-v-532e73a3">
        <view class="m_top_10 sousuo data-v-532e73a3">
          <u-search shape="round"></u-search>
        </view>
        <view class="gonggao m_top_20 data-v-532e73a3" v-if="gonggao">
          <u-alert-tips
            class="data-v-532e73a3"
            :showIcon="false"
            :title="gonggao"
            :titleStyle="tips_style"
            type="error"
          ></u-alert-tips>
        </view>
      </view>
      <view class="m_top_20 sousuo data-v-532e73a3">
        <view class="m_top_20 bjk data-v-532e73a3">
          <u-tabs
            :activeItemStyle="barstyle"
            class="data-v-532e73a3"
            :current="currentTab"
            @change="change"
            :duration="0"
            fontSize="28"
            :height="65"
            :isScroll="false"
            :list="tabs"
            :showBar="false"
          ></u-tabs>
          <view class="data-v-532e73a3" style="padding: 14rpx 0 0rpx 0">
            <u-dropdown class="data-v-532e73a3" height="60">
              <u-dropdown-item
                class="data-v-532e73a3"
                :options="options1"
                title="排序"
                :value="value1"
              ></u-dropdown-item>
              <u-dropdown-item
                class="data-v-532e73a3"
                height="425"
                :options="options2"
                title="标签"
                :value="value2"
              ></u-dropdown-item>
            </u-dropdown>
          </view>
        </view>
      </view>
      <view class="listqun data-v-532e73a3">
        <view class="data-v-532e73a3" style="margin-bottom: 30rpx" v-if="total">
          <view
            class="data-v-532e73a3"
            v-for="(item, index) in list"
            :key="index"
          >
            <view class="list data-v-532e73a3">
              <view class="left acea-row data-v-532e73a3">
                <view class="acea-row row-between-wrapper topk data-v-532e73a3">
                  <view class="wenzi data-v-532e73a3">
                    <view class="acea-row row-middle data-v-532e73a3">
                      <view class="acea-row data-v-532e73a3">
                        <image
                          class="images data-v-532e73a3"
                          src="../../static/img/grwx.png"
                          v-if="item.catid == 90"
                        ></image>
                        <image
                          class="images data-v-532e73a3"
                          src="../../static/img/qywx.png"
                          v-if="item.catid == 91"
                        ></image>
                      </view>
                      <view class="bnt2 data-v-532e73a3" v-if="item.top_time"
                        >TOP</view
                      >
                      <view class="bt text_display data-v-532e73a3">{{
                        item.name
                      }}</view>
                    </view>
                    <view class="xia acea-row data-v-532e73a3">
                      <view class="acea-row row-middle data-v-532e73a3">
                        <tui-icon
                          class="data-v-532e73a3"
                          color="#adadad"
                          name="friendadd"
                          :size="16"
                        ></tui-icon>
                        <text
                          class="data-v-532e73a3"
                          style="margin-left: 6rpx"
                          >{{ item.num + "人" }}</text
                        >
                      </view>
                      <view
                        class="acea-row row-middle data-v-532e73a3"
                        style="margin-left: 10rpx"
                      >
                        <tui-icon
                          class="data-v-532e73a3"
                          color="#adadad"
                          name="clock"
                          :size="16"
                        ></tui-icon>
                        <text
                          class="data-v-532e73a3"
                          style="margin-left: 6rpx"
                          >{{ item.refresh_time }}</text
                        >
                      </view>
                      <view class="data-v-532e73a3" v-if="dqsj_kg">
                        <view
                          class="acea-row row-middle data-v-532e73a3"
                          style="margin-left: 10rpx"
                          v-if="item.days > 0"
                        >
                          <tui-icon
                            class="data-v-532e73a3"
                            color="#adadad"
                            name="notice"
                            :size="16"
                          ></tui-icon>
                          <text
                            class="data-v-532e73a3"
                            style="margin-left: 6rpx"
                            >{{ item.days + "天到期" }}</text
                          >
                        </view>
                        <view
                          class="acea-row row-middle data-v-532e73a3"
                          style="margin-left: 10rpx"
                          v-else
                        >
                          <tui-icon
                            class="data-v-532e73a3"
                            color="#adadad"
                            name="notice"
                            :size="16"
                          ></tui-icon>
                          <text
                            class="data-v-532e73a3"
                            style="margin-left: 6rpx; color: #ff0000"
                            >已过期</text
                          >
                        </view>
                      </view>
                    </view>
                  </view>
                  <view class="anniu data-v-532e73a3">
                    <view class="bnt1 data-v-532e73a3" v-if="item.seelog"
                      >已换</view
                    >
                    <view class="bnt data-v-532e73a3" v-else @click="exchange(index)">换群</view>
                  </view>
                </view>
                <view class="xuqiu m_top_30 data-v-532e73a3">
                  <view class="acea-row row-between-wrapper data-v-532e73a3">
                    <view class="title data-v-532e73a3">换群要求</view>
                    <view
                      class="acea-row row-middle data-v-532e73a3"
                      v-if="item.province"
                    >
                      <tui-icon
                        class="data-v-532e73a3"
                        color="#ff5500"
                        name="position"
                        :size="16"
                      ></tui-icon>
                      <text
                        class="data-v-532e73a3"
                        style="
                          margin-left: 8rpx;
                          color: #ff5500;
                          font-size: 24rpx;
                        "
                        >{{ item.city + " " + item.district }}</text
                      >
                    </view>
                  </view>
                  <view class="desc data-v-532e73a3">{{ item.desc }}</view>
                </view>
                <view class="m_top_20 data-v-532e73a3">
                  <view class="taotu acea-row data-v-532e73a3">
                    <view
                      class="taotu_k1 data-v-532e73a3"
                      v-for="(item1, index) in item.pic"
                      :key="index"
                    >
                      <image
                        class="img _img data-v-532e73a3"
                        mode="aspectFill"
                        :src="item1"
                      ></image>
                    </view>
                  </view>
                </view>
              </view>
            </view>
          </view>
        </view>
        <view class="m_top_60 data-v-532e73a3" v-else>
          <u-empty
            class="data-v-532e73a3"
            mode="list"
            text="暂无数据"
          ></u-empty>
        </view>
      </view>
    </view>
    <view class="fabu_wk data-v-532e73a3">
      <view class="circle-breath acea-row row-center-wrapper data-v-532e73a3"
        >发布</view
      >
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      // 公告
      gonggao: "",
      tips_style: {
        color: "#ff0000",
      },
      barstyle: {
        background: "#55aaff",
        "border-radius": "100rpx",
        color: "#ffffff",
      },
      currentTab: 0,
      total: 20,
      tabs: [
        {
          name: "实时更新",
          num: 0,
        },
        {
          name: "个人微群",
          num: 1,
        },
        {
          name: "企业微群",
          num: 2,
        },
      ],
      options1: [
        { label: "更新排序", value: "更新排序" },
        { label: "人数排序", value: "人数排序" },
        { label: "热门排序", value: "热门排序" }
      ],
      options2: [
        { label: "不限", value: "不限" },
        { label: "男性", value: "男" },
        { label: "女性", value: "女" },
      ],
      options3: [
        { label: "全部", value: "0" },
        { label: "已查看", value: "1" },
        { label: "未查看", value: "2" },
      ],
      value1: "不限",
      value2: "不限",
      value3: 0,
      list: [
        {
          id: 349296,
          name: "xxxxxxxxx",
          num: 46,
          province: "广东省",
          city: "广州市",
          district: "天河区",
          catid: 90,
          tags: "",
          hits: 11,
          sysadd: 1,
          weixin: "",
          cloud_id: 0,
          top_time: 0,
          top_num: 0,
          add_time: 1701788929,
          edit_time: 1702949779,
          refresh_time: "12-05",
          delete_time: 0,
          is_up: 1,
          status: 1,
          uniacid: 7,
          type: 2,
          desc: "群描述群描述群描述",
          pic: [],
          seelog: 0,
          days: -6,
        },
        {
          id: 349296,
          name: "xxxxxxxxx",
          num: 46,
          province: "广东省",
          city: "广州市",
          district: "天河区",
          catid: 90,
          tags: "",
          hits: 11,
          sysadd: 1,
          weixin: "",
          cloud_id: 0,
          top_time: 0,
          top_num: 0,
          add_time: 1701788929,
          edit_time: 1702949779,
          refresh_time: "12-05",
          delete_time: 0,
          is_up: 1,
          status: 1,
          uniacid: 7,
          type: 2,
          desc: "群描述群描述群描述",
          pic: [],
          seelog: 0,
          days: -6,
        },
        {
          id: 349296,
          name: "xxxxxxxxx",
          num: 46,
          province: "广东省",
          city: "广州市",
          district: "天河区",
          catid: 90,
          tags: "",
          hits: 11,
          sysadd: 1,
          weixin: "",
          cloud_id: 0,
          top_time: 0,
          top_num: 0,
          add_time: 1701788929,
          edit_time: 1702949779,
          refresh_time: "12-05",
          delete_time: 0,
          is_up: 1,
          status: 1,
          uniacid: 7,
          type: 2,
          desc: "群描述群描述群描述",
          pic: [],
          seelog: 0,
          days: -6,
        }
      ],
      dqsj_kg: 0,
      loadText: {
        loading: "加载数据中",
        loadmore: "上拉加载更多",
        nomore: "我是有底线的",
      },
      status: "loading",
    };
  },
  methods: {
    exchange(index){
      uni.showToast({
        title: `点击了第${index + 1}项`,
      });
    },
    change(index) {
      this.currentTab = index;
    },
  }
};
</script>

<style scoped lang="scss">
.infobox.data-v-532e73a3 {
  font-size: 28rpx;
  color: #333;
  padding-bottom: 100rpx;
}

.errkuang .title.data-v-532e73a3 {
  font-size: 32rpx;
  font-weight: 700;
}

.errkuang .desc.data-v-532e73a3 {
  color: #7a7a7a;
}

.errkuang .errbnt.data-v-532e73a3 {
  width: 170rpx;
  padding: 16rpx 0rpx;
  border-radius: 10rpx;
  background-color: red;
  color: #fff;
}

.errkuang .errbnt1.data-v-532e73a3 {
  width: 170rpx;
  padding: 16rpx 0rpx;
  border-radius: 10rpx;
  background-color: #f1f1f1;
  color: #4c4c4c;
}

.errkuang .errbnt2.data-v-532e73a3 {
  width: 170rpx;
  padding: 16rpx 0rpx;
  border-radius: 10rpx;
  background-color: #69c512;
  color: #fff;
}

.tstitle.data-v-532e73a3 {
  font-size: 32rpx;
  font-weight: 700;
  text-align: center;
  margin-bottom: 20rpx;
}

.tousu.data-v-532e73a3 {
  padding: 10rpx 0;
}

.tousu .bnt.data-v-532e73a3 {
  padding: 20rpx;
  background-color: #f4f4f4;
  border-radius: 10rpx;
  border: 2rpx solid #eee;
}

.fabu_wk.data-v-532e73a3 {
  position: fixed;
  left: 0;
  bottom: 230rpx;
}

.fabu_wk .bnt.data-v-532e73a3 {
  font-size: 24rpx;
  width: 80rpx;
  height: 80rpx;
  border-radius: 100rpx;
  background-color: #3c76ff;
  color: #fff;
}

.login-input.data-v-532e73a3 {
  overflow: auto;
}

.login-input .input.data-v-532e73a3 {
  margin-top: 20rpx;
  padding: 20rpx;
  background-color: #f3f3f3;
}

.login-input .yzmtitle.data-v-532e73a3 {
  font-size: 32rpx;
}

.login-input .varcode.data-v-532e73a3 {
  width: 100%;
  height: 85rpx;
}

.circle-breath.data-v-532e73a3 {
  background: linear-gradient(120deg, #5af, #37d664);
  padding: 18rpx 30rpx;
  border-radius: 0 20rpx 20rpx 0;
  color: #fff;
  animation: donghua-data-v-532e73a3 0.6s infinite;
}

@-webkit-keyframes donghua-data-v-532e73a3 {
  0% {
    box-shadow: 0 0 0 0 rgba(0, 255, 183, 0.7);
  }

  60% {
    box-shadow: 0 0 0 28rpx rgba(0, 255, 183, 0);
  }

  100% {
    box-shadow: 0 0 0 0 rgba(0, 255, 183, 0);
  }
}

@keyframes donghua-data-v-532e73a3 {
  0% {
    box-shadow: 0 0 0 0 rgba(0, 255, 183, 0.7);
  }

  60% {
    box-shadow: 0 0 0 28rpx rgba(0, 255, 183, 0);
  }

  100% {
    box-shadow: 0 0 0 0 rgba(0, 255, 183, 0);
  }
}

.tui-mask-screen.data-v-532e73a3 {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  z-index: 99996;
  transition: all 0.3s ease-in-out;
  opacity: 0;
  visibility: hidden;
}

.tui-mask-show.data-v-532e73a3 {
  opacity: 1;
  visibility: visible;
}

.tui-picker-box.data-v-532e73a3 {
  width: 100%;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99999;
  visibility: hidden;
  transform: translate3d(0, 100%, 0);
  transform-origin: center;
  transition: all 0.3s ease-in-out;
  min-height: 20rpx;
  background: #fff;
}

.tui-pickerbox-show.data-v-532e73a3 {
  transform: translateZ(0);
  visibility: visible;
}

.picker-header.data-v-532e73a3 {
  width: 100%;
  height: 90rpx;
  padding: 0 46rpx;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  font-size: 32rpx;
  background: #fff;
}

.tui-list-item.data-v-532e73a3::after {
  left: 0;
}

.btn-cancle.data-v-532e73a3 {
  padding: 20rpx;
  color: #888;
}

.btn-sure.data-v-532e73a3 {
  padding: 20rpx;
  color: #5677fc;
}

.picker-view.data-v-532e73a3 {
  width: 100%;
  height: 260px;
}

.item.data-v-532e73a3 {
  line-height: 50px;
  text-align: center;
}

.search-box.data-v-532e73a3 {
  padding: 14rpx 30rpx;
  border-radius: 16rpx;
  background-color: #fff;
  box-sizing: border-box;
  position: relative;
}

.search-box.data-v-532e73a3::after {
  content: "";
  position: absolute;
  height: 200%;
  width: 200%;
  transform-origin: 0 0;
  transform: scale(0.5);
  left: 0;
  top: 0;
  border-radius: 20rpx;
  pointer-events: none;
}

.s-input.data-v-532e73a3 {
  height: 86rpx;
  padding: 0 21rpx;
  display: flex;
  align-items: center;
}

.s-img.data-v-532e73a3 {
  width: 34rpx;
  height: 34rpx;
  margin-right: 17rpx;
  flex-shrink: 0;
}

.input.data-v-532e73a3 {
  color: #353535;
  width: 565rpx;
  padding-right: 5rpx;
  box-sizing: border-box;
  height: 100%;
}

.img30.data-v-532e73a3 {
  height: 30rpx;
  width: 30rpx;
}

.s-select.data-v-532e73a3 {
  position: relative;
  z-index: 9;
}

.s-select.data-v-532e73a3::before {
  content: "";
  position: absolute;
  transform: scaleY(0.5);
  top: 0;
  right: 0;
  left: 0;
}

.text.data-v-532e73a3 {
  color: #353535;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.wid27.data-v-532e73a3 {
  width: 27%;
}

.wid46.data-v-532e73a3 {
  width: 46%;
}

.img32.data-v-532e73a3 {
  height: 32rpx;
  width: 32rpx;
}

.pdr20.data-v-532e73a3 {
  padding-right: 20rpx;
}

.flr.data-v-532e73a3 {
  margin-left: auto;
}

.btn-select.data-v-532e73a3 {
  padding: 20rpx 40rpx;
}

.tckuang.data-v-532e73a3 {
  padding: 50rpx 60rpx;
}

.tckuang .tui-tool-icon.data-v-532e73a3 {
  margin-top: 30rpx;
  width: 280rpx;
  height: 280rpx;
  border-radius: 50rpx;
  box-shadow: 7rpx 8rpx 10rpx 0rpx #e5e5e5;
  border: #e7e7e7 solid 2rpx;
}

.tckuang .title.data-v-532e73a3 {
  font-size: 32rpx;
  font-weight: 700;
}

.tckuang .desc.data-v-532e73a3 {
  margin-top: 20rpx;
  line-height: 40rpx;
}

.tckuang .piaofu.data-v-532e73a3 {
  position: absolute;
  margin-top: 80rpx;
  z-index: 1000;
  padding: 14rpx 20rpx;
  background-color: #e23134;
  color: #fff;
  border-top-right-radius: 20rpx;
  border-bottom-right-radius: 20rpx;
  opacity: 0.8;
}

.qun_tckuang.data-v-532e73a3 {
  background-color: #fff;
  padding: 50rpx 60rpx;
  border-radius: 30rpx 30rpx 0 0;
}

.qun_tckuang .tui.data-v-532e73a3 {
  margin-top: 40rpx;
}

.qun_tckuang .jubao.data-v-532e73a3 {
  margin-top: 50rpx;
  font-weight: 700;
  color: #757575;
}

.qun_tckuang .zhong.data-v-532e73a3 {
  margin-top: 30rpx;
}

.qun_tckuang .tui-tool-icon.data-v-532e73a3 {
  width: 320rpx;
  height: 320rpx;
  border-radius: 50rpx;
  box-shadow: 7rpx 8rpx 10rpx 0rpx #e5e5e5;
  border: #e7e7e7 solid 2rpx;
}

.qun_tckuang .title.data-v-532e73a3 {
  font-size: 36rpx;
  font-weight: 700;
}

.qun_tckuang .desc.data-v-532e73a3 {
  margin-top: 20rpx;
  line-height: 40rpx;
}

.qun_tckuang .piaofu.data-v-532e73a3 {
  position: absolute;
  margin-top: 50rpx;
  z-index: 1000;
  padding: 14rpx 20rpx;
  background-color: #e23134;
  color: #fff;
  border-top-right-radius: 20rpx;
  border-bottom-right-radius: 20rpx;
}

.scroll-Y-qun.data-v-532e73a3 {
  height: 780rpx;
}

.scroll-Y.data-v-532e73a3 {
  height: 540rpx;
}

.waikuang.data-v-532e73a3 {
  padding: 28rpx 26rpx;
}

.tui-rolling-news.data-v-532e73a3 {
  width: 100%;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: nowrap;
}

.tui-swiper.data-v-532e73a3 {
  font-size: 28rpx;
  height: 40rpx;
  flex: 1;
}

.tui-swiper-item.data-v-532e73a3 {
  display: flex;
  align-items: center;
}

.tui-news-item.data-v-532e73a3 {
  margin-left: 14rpx;
  line-height: 28rpx;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.bjk.data-v-532e73a3 {
  padding: 0 0 10rpx 0;
}

.sousuo.data-v-532e73a3 {
  padding: 14rpx 30rpx;
  border-radius: 16rpx;
  background-color: #fff;
}

.dhbj.data-v-532e73a3 {
  margin-top: -30rpx;
  margin-bottom: 20rpx;
  padding: 12rpx 30rpx;
  border-bottom-left-radius: 16rpx;
  border-bottom-right-radius: 16rpx;
  background: linear-gradient(180deg, #fff, #fafafa);
  background-color: #fff;
}

.tubiao.data-v-532e73a3 {
  margin-top: 30rpx;
  width: 120rpx;
  padding: 10rpx 0rpx;
}

.tubiao .img.data-v-532e73a3 {
  width: 60rpx;
  height: 60rpx;
}

.tubiao .text.data-v-532e73a3 {
  margin-top: 6rpx;
}

.after.data-v-532e73a3 {
  margin-left: 25rpx;
  margin-top: 40rpx;
  content: "";
  position: relative;
  width: 2rpx;
  height: 60rpx;
  background-color: #dfdfdf;
}

.adlist.data-v-532e73a3 {
  position: relative;
  overflow: hidden;
  margin-top: 20rpx;
  width: 100%;
  padding: 26rpx 40rpx;
  background: linear-gradient(-120deg, #fff3c4, #ffe79e);
  border-radius: 10rpx;
}

.adlist .sellout.data-v-532e73a3 {
  top: 0;
  right: 0;
  background-color: #d9a508;
  width: 30%;
  height: 70rpx;
  line-height: 70rpx;
  margin-top: -18rpx;
  margin-right: -94rpx;
  text-align: center;
  position: absolute;
  transform: rotate(42deg);
}

.adlist .sellout .text.data-v-532e73a3 {
  color: #fff;
  display: flex;
  margin-top: 17rpx;
  margin-left: 56rpx;
  font-size: 24rpx;
  transform: rotate(0deg);
}

.adlist .left.data-v-532e73a3 {
  width: 62%;
}

.adlist .title.data-v-532e73a3 {
  font-size: 30rpx;
  font-weight: 700;
}

.adlist .desc.data-v-532e73a3 {
  margin-top: 10rpx;
  color: #7e7234;
  font-size: 24rpx;
}

.adlist .bnt.data-v-532e73a3 {
  padding: 12rpx 30rpx;
  background-color: #dab253;
  color: #fff;
  border-radius: 20rpx;
}

.list.data-v-532e73a3 {
  margin-top: 20rpx;
  padding: 30rpx 28rpx;
  background-color: #fff;
  border-radius: 20rpx;
}

.list .taotu .taotu_k1.data-v-532e73a3 {
  margin: 12rpx 11rpx 0 11rpx;
}

.list .taotu .taotu_k1 .img.data-v-532e73a3 {
  object-fit: cover;
  width: 190rpx;
  height: 190rpx;
  border-radius: 20rpx;
  border: 1rpx solid #f0f0f0;
}

.list .left .topk.data-v-532e73a3 {
  width: 100%;
}

.list .left .img.data-v-532e73a3 {
  border-radius: 20rpx;
  width: 130rpx;
  height: 130rpx;
}

.list .left .wenzi .images.data-v-532e73a3 {
  width: 38rpx;
  height: 38rpx;
}

.list .left .wenzi .bt.data-v-532e73a3 {
  width: 360rpx;
  font-size: 32rpx;
  margin-left: 10rpx;
  font-weight: 600;
}

.list .left .xia.data-v-532e73a3 {
  margin-top: 26rpx;
  font-size: 24rpx;
  color: #919191;
}

.list .left .diqu.data-v-532e73a3 {
  width: 300rpx;
  margin-top: 16rpx;
  font-size: 24rpx;
  color: #b51717;
}

.list .xuqiu.data-v-532e73a3 {
  width: 100%;
  padding: 30rpx 30rpx 30rpx 30rpx;
  background-color: #f9f9f9;
  border: 1px dashed #e2e2e2;
  border-radius: 20rpx;
}

.list .xuqiu .title.data-v-532e73a3 {
  font-size: 32rpx;
  font-weight: 600;
  color: #f50;
}

.list .xuqiu .desc.data-v-532e73a3 {
  padding: 14rpx 0 0 0;
  line-height: 45rpx;
}

.list .bnt.data-v-532e73a3 {
  font-weight: 700;
  padding: 16rpx 30rpx;
  background: linear-gradient(120deg, #0f4fff, #00eaff);
  color: #fff;
  border-radius: 50rpx;
}

.list .bnt1.data-v-532e73a3 {
  font-weight: 700;
  padding: 16rpx 30rpx;
  background-color: #f3f3f3;
  color: #a3a3a3;
  border-radius: 50rpx;
}

.list .bnt2.data-v-532e73a3 {
  margin-left: 10rpx;
  padding: 4rpx 10rpx;
  background-color: #ff7300;
  color: #fff;
  border-radius: 10rpx;
  font-size: 24rpx;
}
</style>
