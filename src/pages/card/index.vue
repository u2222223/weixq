<template>
  <view class="pubBox infobox data-v-c493f25c">
    <view class="waikuang data-v-c493f25c">
      <view class="data-v-c493f25c" style="padding: 0">
        <view class="pubCard data-v-c493f25c" style="padding-top: 40rpx; padding-bottom: 20rpx">
          <u-search shape="round"></u-search>
          <view class="m_top_20">
            <u-dropdown class="data-v-c493f25c" height="60">
              <u-dropdown-item
                class="data-v-c493f25c"
                height="425"
                :options="options1"
                title="地域"
                :value="value1"
              ></u-dropdown-item>
              <u-dropdown-item
                class="data-v-c493f25c"
                height="425"
                :options="options2"
                title="性别"
                :value="value2"
              ></u-dropdown-item>
              <u-dropdown-item
                class="data-v-c493f25c"
                height="425"
                :options="options3"
                title="查看"
                :value="value3"
              ></u-dropdown-item>
            </u-dropdown>
          </view>
        </view>
        <view
          class="data-v-c493f25c pubCard m_top_20"
          style="margin-bottom: 30rpx"
          v-if="total"
        >
          <view
            class="data-v-c493f25c"
            v-for="(item, index) in list"
            :key="index"
          >
            <view class="list acea-row row-between-wrapper data-v-c493f25c">
              <view class="left acea-row data-v-c493f25c">
                <view class="acea-row row-center-wrapper data-v-c493f25c">
                  <image
                    class="img data-v-c493f25c"
                    :src="
                      item.avatar ? item.avatar : '../../static/img/300-200.png'
                    "
                  ></image>
                </view>
                <view class="wenzi data-v-c493f25c">
                  <view class="acea-row data-v-c493f25c">
                    <view class="acea-row row-center-wrapper data-v-c493f25c">
                      <image
                        class="images data-v-c493f25c"
                        src="../../static/img/nan_3.png"
                        v-if="item.sex == '男'"
                      ></image>
                      <image
                        class="images data-v-c493f25c"
                        src="../../static/img/nv_1.png"
                        v-if="item.sex == '女'"
                      ></image>
                    </view>
                    <view class="bt text_display data-v-c493f25c">{{
                      item.name
                    }}</view>
                  </view>
                  <view class="xia acea-row data-v-c493f25c">
                    <view class="acea-row row-middle data-v-c493f25c">
                      <tui-icon
                        class="data-v-c493f25c"
                        color="#adadad"
                        name="clock"
                        :size="16"
                      ></tui-icon>
                      <text class="data-v-c493f25c" style="margin-left: 6rpx">{{
                        item.refresh_time
                      }}</text>
                    </view>
                    <view
                      class="acea-row row-middle data-v-c493f25c"
                      style="margin-left: 14rpx"
                      v-if="item.top_time"
                    >
                      <view class="bnt2 data-v-c493f25c">置顶</view>
                    </view>
                  </view>
                  <view class="diqu text_display data-v-c493f25c">{{
                    "" +
                    item.province +
                    " " +
                    item.city +
                    " " +
                    item.district +
                    ""
                  }}</view>
                </view>
              </view>
              <view class="data-v-c493f25c">
                <view class="bnt1 data-v-c493f25c" v-if="item.seelog"
                  >已看</view
                >
                <view
                  class="bnt data-v-c493f25c"
                  v-else
                  @click="showDetail(index)"
                  >查看</view
                >
              </view>
            </view>
          </view>
          <view class="m_top_40 data-v-c493f25c">
            <u-loadmore
              class="data-v-c493f25c"
              :loadText="loadText"
              :status="status"
            ></u-loadmore>
          </view>
        </view>
        <view class="m_top_60 data-v-c493f25c" v-else>
          <u-empty
            class="data-v-c493f25c"
            mode="list"
            text="暂无数据"
            vueId="a4457a80-8"
          ></u-empty>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      loadText: {
        loading: "加载数据中",
        loadmore: "上拉加载更多",
        nomore: "我是有底线的",
      },
      status: "loading",
      keyword: "",
      total: 20,
      list: [
        {
          id: 22685,
          name: "用户昵称",
          sex: "女",
          introduce: "我是小八妹来聊聊吧",
          province: "上海市",
          city: "上海市",
          district: "徐汇区",
          avatar: "/static/img/wxCode.jpg",
          catid: 92,
          tags: "兼职",
          hits: 45,
          sysadd: 0,
          cloud_id: 0,
          top_time: 1731772800,
          top_num: 0,
          add_time: 1700229881,
          edit_time: 1702800958,
          refresh_time: "11-17",
          delete_time: 0,
          is_up: 1,
          status: 1,
          uniacid: 7,
          seelog: 0,
        },
        {
          id: 24197,
          name: "用户昵称",
          sex: "男",
          introduce: "金hua牛三张扑克",
          province: "辽宁省",
          city: "沈阳市",
          district: "沈河区",
          avatar: "/static/img/wxCode.jpg",
          catid: 92,
          tags: "",
          hits: 0,
          sysadd: 0,
          cloud_id: 59967,
          top_time: 0,
          top_num: 0,
          add_time: 1702909563,
          edit_time: 1702913884,
          refresh_time: "10小时前",
          delete_time: 0,
          is_up: 0,
          status: 1,
          uniacid: 7,
          seelog: 0,
        },
        {
          id: 24196,
          name: "用户昵称",
          sex: "男",
          introduce:
            "专注互联网项目玩法6年，爱交各行各业好友，欢迎各位链接，不管你是小白也好，还是行业大哥，都可以来互相学习经验。",
          province: "浙江省",
          city: "杭州市",
          district: "钱塘区",
          avatar: "/static/img/wxCode.jpg",
          catid: 92,
          tags: "",
          hits: 0,
          sysadd: 0,
          cloud_id: 59966,
          top_time: 0,
          top_num: 0,
          add_time: 1702909205,
          edit_time: 1702913884,
          refresh_time: "10小时前",
          delete_time: 0,
          is_up: 0,
          status: 1,
          uniacid: 7,
          seelog: 0,
        },
        {
          id: 24187,
          name: "用户昵称",
          sex: "男",
          introduce: "流量资源群",
          province: "浙江省",
          city: "金华市",
          district: "东阳市",
          avatar: "/static/img/wxCode.jpg",
          catid: 92,
          tags: "",
          hits: 0,
          sysadd: 1,
          cloud_id: 0,
          top_time: 0,
          top_num: 0,
          add_time: 1702899958,
          edit_time: 1702903325,
          refresh_time: "13小时前",
          delete_time: 0,
          is_up: 1,
          status: 1,
          uniacid: 7,
          seelog: 0,
        },
        {
          id: 24182,
          name: "用户昵称",
          sex: "女",
          introduce: "莬费教莬费带，所有人可做，一部手机就可以！",
          province: "上海市",
          city: "上海市",
          district: "青浦区",
          avatar: "/static/img/wxCode.jpg",
          catid: 92,
          tags: "",
          hits: 0,
          sysadd: 0,
          cloud_id: 59963,
          top_time: 0,
          top_num: 0,
          add_time: 1702874702,
          edit_time: 1702884122,
          refresh_time: "20小时前",
          delete_time: 0,
          is_up: 0,
          status: 1,
          uniacid: 7,
          seelog: 0,
        },
        {
          id: 24171,
          name: "用户昵称",
          sex: "男",
          introduce: "互联网创业实战派导师",
          province: "江苏省",
          city: "苏州市",
          district: "昆山市",
          avatar: "/static/img/wxCode.jpg",
          catid: 92,
          tags: "",
          hits: 0,
          sysadd: 0,
          cloud_id: 59962,
          top_time: 0,
          top_num: 0,
          add_time: 1702871401,
          edit_time: 1702872610,
          refresh_time: "21小时前",
          delete_time: 0,
          is_up: 0,
          status: 1,
          uniacid: 7,
          seelog: 0,
        },
        {
          id: 24170,
          name: "用户昵称",
          sex: "男",
          introduce: "微信红包封面",
          province: "山东省",
          city: "泰安市",
          district: "新泰市",
          avatar: "/static/img/wxCode.jpg",
          catid: 92,
          tags: "",
          hits: 0,
          sysadd: 0,
          cloud_id: 59961,
          top_time: 0,
          top_num: 0,
          add_time: 1702870923,
          edit_time: 1702872610,
          refresh_time: "21小时前",
          delete_time: 0,
          is_up: 0,
          status: 1,
          uniacid: 7,
          seelog: 0,
        },
        {
          id: 24163,
          name: "用户昵称",
          sex: "女",
          introduce: "日赚三四张靠谱长久",
          province: "上海市",
          city: "上海市",
          district: "青浦区",
          avatar: "/static/img/wxCode.jpg",
          catid: 92,
          tags: "",
          hits: 0,
          sysadd: 0,
          cloud_id: 59960,
          top_time: 0,
          top_num: 0,
          add_time: 1702858442,
          edit_time: 1702865163,
          refresh_time: "1天前",
          delete_time: 0,
          is_up: 0,
          status: 1,
          uniacid: 7,
          seelog: 0,
        },
        {
          id: 24162,
          name: "用户昵称",
          sex: "女",
          introduce: "0投资0成本0风险，一部手机可轻松搞定！",
          province: "上海市",
          city: "上海市",
          district: "青浦区",
          avatar: "/static/img/wxCode.jpg",
          catid: 92,
          tags: "",
          hits: 0,
          sysadd: 0,
          cloud_id: 59959,
          top_time: 0,
          top_num: 0,
          add_time: 1702855801,
          edit_time: 1702865163,
          refresh_time: "1天前",
          delete_time: 0,
          is_up: 0,
          status: 1,
          uniacid: 7,
          seelog: 0,
        },
        {
          id: 24161,
          name: "用户昵称",
          sex: "女",
          introduce: "微信发送一秒就賺",
          province: "河北省",
          city: "邯郸市",
          district: "鸡泽县",
          avatar: "/static/img/wxCode.jpg",
          catid: 92,
          tags: "",
          hits: 0,
          sysadd: 0,
          cloud_id: 59958,
          top_time: 0,
          top_num: 0,
          add_time: 1702834202,
          edit_time: 1702865163,
          refresh_time: "1天前",
          delete_time: 0,
          is_up: 0,
          status: 1,
          uniacid: 7,
          seelog: 0,
        },
      ],
      options1: [
        { label: "不限", value: "不限" },
        { label: "北京", value: "北京" },
        { label: "天津", value: "天津" },
        { label: "河北", value: "河北" },
        { label: "内蒙古", value: "内蒙古" },
        { label: "辽宁", value: "辽宁" },
        { label: "吉林", value: "吉林" },
        { label: "黑龙江", value: "黑龙江" },
        { label: "上海", value: "上海" },
        { label: "江苏", value: "江苏" },
        { label: "浙江", value: "浙江" },
        { label: "安徽", value: "安徽" },
        { label: "福建", value: "福建" },
        { label: "江西", value: "江西" },
        { label: "山东", value: "山东" },
        { label: "河南", value: "河南" },
        { label: "湖北", value: "湖北" },
        { label: "湖南", value: "湖南" },
        { label: "广东", value: "广东" },
        { label: "广西", value: "广西" },
        { label: "海南", value: "海南" },
        { label: "重庆", value: "重庆" },
        { label: "四川", value: "四川" },
        { label: "贵州", value: "贵州" },
        { label: "云南", value: "云南" },
        { label: "西藏", value: "西藏" },
        { label: "陕西", value: "陕西" },
        { label: "甘肃", value: "甘肃" },
        { label: "青海", value: "青海" },
        { label: "宁夏", value: "宁夏" },
        { label: "新疆", value: "新疆" },
        { label: "台湾", value: "台湾" },
        { label: "香港", value: "香港" },
        { label: "澳门", value: "澳门" },
        { label: "海外", value: "海外" },
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
    };
  },
  methods: {
    showDetail(index) {
      uni.showToast({
        title: `点击了第${index + 1}项`,
      });
    },
  },
};
</script>

<style scoped lang="scss">
.infobox.data-v-c493f25c {
  font-size: 28rpx;
  color: #333;
}

.tckuang.data-v-c493f25c {
  padding: 50rpx 60rpx;
}

.tckuang .tui-tool-icon.data-v-c493f25c {
  margin-top: 30rpx;
  width: 280rpx;
  height: 280rpx;
  border-radius: 50rpx;
  box-shadow: 7rpx 8rpx 10rpx 0rpx #e5e5e5;
  border: #e7e7e7 solid 2rpx;
}

.tckuang .title.data-v-c493f25c {
  font-size: 32rpx;
  font-weight: 700;
}

.tckuang .desc.data-v-c493f25c {
  margin-top: 20rpx;
  line-height: 40rpx;
}

.tckuang .piaofu.data-v-c493f25c {
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

.scroll-Y.data-v-c493f25c {
  height: 540rpx;
}

.waikuang.data-v-c493f25c {
  // padding: 28rpx 26rpx;
}

.sousuo.data-v-c493f25c {
  border-radius: 16rpx;
  background-color: #fff;
}

.tubiao.data-v-c493f25c {
  margin-top: 30rpx;
  width: 120rpx;
  padding: 10rpx 0rpx;
}

.tubiao .img.data-v-c493f25c {
  width: 60rpx;
  height: 60rpx;
}

.tubiao .text.data-v-c493f25c {
  margin-top: 6rpx;
}

.after.data-v-c493f25c {
  margin-left: 25rpx;
  margin-top: 40rpx;
  content: "";
  position: relative;
  width: 2rpx;
  height: 60rpx;
  background-color: #dfdfdf;
}

.adlist.data-v-c493f25c {
  position: relative;
  overflow: hidden;
  margin-top: 20rpx;
  width: 100%;
  padding: 26rpx 40rpx;
  background: linear-gradient(-120deg, #fff3c4, #ffe79e);
  border-radius: 10rpx;
}

.adlist .sellout.data-v-c493f25c {
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

.adlist .sellout .text.data-v-c493f25c {
  color: #fff;
  display: flex;
  margin-top: 17rpx;
  margin-left: 56rpx;
  font-size: 24rpx;
  transform: rotate(0deg);
}

.adlist .left.data-v-c493f25c {
  width: 62%;
}

.adlist .title.data-v-c493f25c {
  font-size: 30rpx;
  font-weight: 700;
}

.adlist .desc.data-v-c493f25c {
  margin-top: 10rpx;
  color: #7e7234;
  font-size: 24rpx;
}

.adlist .bnt.data-v-c493f25c {
  padding: 12rpx 30rpx;
  background-color: #dab253;
  color: #fff;
  border-radius: 20rpx;
}

.list.data-v-c493f25c {
  padding: 40rpx 10rpx;
  border-bottom: #e3eef1 dashed 1px;
}

.list .left .img.data-v-c493f25c {
  border-radius: 100rpx;
  width: 140rpx;
  height: 140rpx;
  box-shadow: 5rpx 6rpx 8rpx 0rpx #e5e5e5;
}

.list .left .wenzi.data-v-c493f25c {
  margin-left: 30rpx;
}

.list .left .wenzi .images.data-v-c493f25c {
  width: 32rpx;
  height: 32rpx;
}

.list .left .wenzi .bt.data-v-c493f25c {
  width: 240rpx;
  font-size: 30rpx;
  margin-left: 10rpx;
  font-weight: 700;
}

.list .left .xia.data-v-c493f25c {
  margin-top: 16rpx;
  font-size: 24rpx;
  color: #919191;
}

.list .left .diqu.data-v-c493f25c {
  width: 240rpx;
  margin-top: 16rpx;
  font-size: 24rpx;
  color: #919191;
}

.list .bnt.data-v-c493f25c {
  font-weight: 700;
  padding: 16rpx 30rpx;
  background-color: #e4f3ff;
  color: #3c76ff;
  border-radius: 50rpx;
}

.list .bnt1.data-v-c493f25c {
  font-weight: 700;
  padding: 16rpx 30rpx;
  background-color: #f3f3f3;
  color: #a3a3a3;
  border-radius: 50rpx;
}

.list .bnt2.data-v-c493f25c {
  padding: 2rpx 10rpx;
  background-color: #ffeaeb;
  color: #e23134;
  border-radius: 10rpx;
}
</style>
