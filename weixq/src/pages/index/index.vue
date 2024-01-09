<template>
  <view class="pubBox">
    <view class="top data-v-2cd5f542">
      <view
        class="title data-v-2cd5f542"
        style="font-family: 'ZCOOL XiaoWei', serif"
        >主标题主标题主标题</view
      >
      <view class="desc data-v-2cd5f542">副标题副标题副标题</view>
      <image class="bgicon data-v-2cd5f542" src="@/static/img/sybj.png"></image>
    </view>
    <view class="bottom">
      <view class="pubCard">
        <u-search shape="round"></u-search>
      </view>
      <view class="pubCard" style="margin-top: 20rpx">
        <u-swiper :list="swiperList" img-mode="aspectFit"></u-swiper>
      </view>
      <view class="pubCard" style="margin-top: 20rpx">
        <view class="data-v-2cd5f542">
          <view class="tui-rolling-news data-v-2cd5f542">
            <tui-icon
              class="data-v-2cd5f542"
              color="#5677fc"
              name="news-fill"
              size="24"
            ></tui-icon>
            <swiper
              :autoplay="true"
              :circular="true"
              class="tui-swiper data-v-2cd5f542"
              interval="3000"
              :vertical="true"
            >
              <swiper-item
                class="tui-swiper-item data-v-2cd5f542"
                v-for="(item, index) in newsList"
                :key="index"
              >
                <view class="tui-news-item data-v-2cd5f542">{{
                  item.title
                }}</view>
              </swiper-item>
            </swiper>
          </view>
        </view>
      </view>
      <view class="pubCard" style="margin-top: 20rpx">
        <view style="margin-top: 30rpx">
          <u-tabs
            :list="list"
            :current="current"
            @change="change"
            :showBar="false"
            :activeColor="'#2979ff'"
            :height="65"
            :isScroll="false"
            :duration="0"
            fontSize="28"
            :bgColor="'#ffffff'"
            :activeItemStyle="activeItemStyle"
            :lineHeight="0"
          ></u-tabs>
        </view>
        <view>
          <u-dropdown>
            <u-dropdown-item
              v-model="value1"
              title="排序"
              :options="options1"
            ></u-dropdown-item>
            <u-dropdown-item
              v-model="value2"
              title="标签"
              :options="options2"
            ></u-dropdown-item>
          </u-dropdown>
        </view>
        <view class="listBox">
          <view v-for="(item, index) in data" :key="index">
            <view class="list acea-row row-between-wrapper data-v-2cd5f542">
              <view class="left acea-row data-v-2cd5f542">
                <view class="acea-row row-center-wrapper data-v-2cd5f542">
                  <image class="img data-v-2cd5f542" :src="item.avatar"></image>
                </view>
                <view class="wenzi data-v-2cd5f542">
                  <view class="acea-row data-v-2cd5f542">
                    <view class="acea-row row-center-wrapper data-v-2cd5f542">
                      <image
                        class="images data-v-2cd5f542"
                        src="../../static/img/qywx.png"
                        v-if="item.isQW"
                      >
                      </image>
                      <image
                        class="images data-v-2cd5f542"
                        src="../../static/img/grwx.png"
                        v-else
                      >
                      </image>
                    </view>
                    <view class="bt text_display data-v-2cd5f542">{{
                      item.name
                    }}{{ index+1 }}</view>
                  </view>
                  <view class="xia acea-row data-v-2cd5f542">
                    <view class="acea-row row-middle data-v-2cd5f542">
                      <tui-icon
                        class="data-v-2cd5f542"
                        color="#adadad"
                        name="friendadd"
                        :size="16"
                      ></tui-icon>
                      <text class="data-v-2cd5f542" style="margin-left: 6rpx">{{
                        item.num + "人"
                      }}</text>
                    </view>
                    <view
                      class="acea-row row-middle data-v-2cd5f542"
                      style="margin-left: 10rpx"
                    >
                      <tui-icon
                        class="data-v-2cd5f542"
                        color="#adadad"
                        name="clock"
                        :size="16"
                      ></tui-icon>
                      <text class="data-v-2cd5f542" style="margin-left: 6rpx">{{
                        item.refresh_time
                      }}</text>
                    </view>
                    <view
                      class="acea-row row-middle data-v-2cd5f542"
                      style="margin-left: 14rpx"
                    >
                      <view class="bnt2 data-v-2cd5f542">置顶</view>
                    </view>
                  </view>
                </view>
              </view>
              <view class="data-v-2cd5f542">
                <view class="bnt1 data-v-2cd5f542" v-if="index > 2">已加</view>
                <view class="bnt data-v-2cd5f542" v-else @click="joinQun(index)">加群</view>
              </view>
            </view>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          name: "实时更新",
        },
        {
          name: "个人微群",
        },
        {
          name: "企业微群",
        },
      ],
      current: 0,
      swiperList: [
        {
          image: "/static/img/sw1.jpg",
          title: "蒹葭苍苍，白露为霜。所谓伊人，在水一方",
        },
        {
          image: "/static/img/sw1.jpg",
          title: "溯洄从之，道阻且长。溯游从之，宛在水中央",
        },
      ],
      newsList: [{ title: "这里是公告这里是公告这里是公告" }],
      activeItemStyle: {
        background: "#55aaff",
        borderRadius: "100rpx",
        color: "#FFF",
      },
      itemStyle: {
        padding: "10rpx 20rpx",
      },
      value1: 1,
      value2: 2,
      options1: [
        {
          label: "默认排序",
          value: 1,
        },
        {
          label: "距离优先",
          value: 2,
        },
        {
          label: "价格优先",
          value: 3,
        },
      ],
      options2: [
        {
          label: "去冰",
          value: 1,
        },
        {
          label: "加冰",
          value: 2,
        },
      ],
      data: [
        {
          id: 361147,
          name: "群",
          num: 27,
          province: null,
          city: null,
          district: null,
          avatar: "/static/img/wxCode.jpg",
          catid: 90,
          tags: "",
          hits: 0,
          sysadd: 0,
          weixin: null,
          cloud_id: 310950,
          top_time: 0,
          top_num: 0,
          add_time: 1702543541,
          edit_time: 1702557721,
          refresh_time: "4分钟前",
          delete_time: 0,
          is_up: 0,
          status: 1,
          uniacid: 7,
          type: 1,
          desc: null,
          pic: null,
          seelog: 0,
          days: 7,
        },
        {
          id: 360591,
          name: "群",
          num: 4,
          province: null,
          city: null,
          district: null,
          avatar: "/static/img/wxCode.jpg",
          catid: 90,
          tags: "",
          hits: 0,
          sysadd: 0,
          weixin: null,
          cloud_id: 310850,
          top_time: 0,
          top_num: 0,
          add_time: 1702525203,
          edit_time: 1702557482,
          refresh_time: "8分钟前",
          delete_time: 0,
          is_up: 0,
          status: 1,
          uniacid: 7,
          type: 1,
          desc: null,
          pic: null,
          seelog: 0,
          days: 7,
        },
        {
          id: 360311,
          name: "群",
          num: 111,
          province: null,
          city: null,
          district: null,
          avatar: "/static/img/wxCode.jpg",
          catid: 90,
          tags: "",
          hits: 1,
          sysadd: 0,
          weixin: null,
          cloud_id: 310806,
          top_time: 0,
          top_num: 0,
          add_time: 1702517763,
          edit_time: 1702557243,
          refresh_time: "12分钟前",
          delete_time: 0,
          is_up: 0,
          status: 1,
          uniacid: 7,
          type: 1,
          desc: null,
          pic: null,
          seelog: 0,
          days: 7,
        },
        {
          id: 360045,
          name: "群",
          num: 17,
          province: null,
          city: null,
          district: null,
          avatar: "/static/img/wxCode.jpg",
          catid: 90,
          tags: "",
          hits: 0,
          sysadd: 0,
          weixin: null,
          cloud_id: 310766,
          top_time: 0,
          top_num: 0,
          add_time: 1702514729,
          edit_time: 1702557243,
          refresh_time: "12分钟前",
          delete_time: 0,
          is_up: 0,
          status: 1,
          uniacid: 7,
          type: 1,
          desc: null,
          pic: null,
          seelog: 0,
          days: 7,
        },
        {
          id: 360016,
          name: "群",
          num: 80,
          province: null,
          city: null,
          district: null,
          avatar: "/static/img/wxCode.jpg",
          catid: 90,
          tags: "",
          hits: 1,
          sysadd: 0,
          weixin: null,
          cloud_id: 310746,
          top_time: 0,
          top_num: 0,
          add_time: 1702483207,
          edit_time: 1702557243,
          refresh_time: "12分钟前",
          delete_time: 0,
          is_up: 0,
          status: 1,
          uniacid: 7,
          type: 1,
          desc: null,
          pic: null,
          seelog: 0,
          days: 7,
        },
        {
          id: 360049,
          name: "群",
          num: 45,
          province: null,
          city: null,
          district: null,
          avatar: "/static/img/wxCode.jpg",
          catid: 90,
          tags: "",
          hits: 0,
          sysadd: 0,
          weixin: null,
          cloud_id: 310768,
          top_time: 0,
          top_num: 0,
          add_time: 1702514745,
          edit_time: 1702557002,
          refresh_time: "16分钟前",
          delete_time: 0,
          is_up: 0,
          status: 1,
          uniacid: 7,
          type: 1,
          desc: null,
          pic: null,
          seelog: 0,
          days: 7,
        },
        {
          id: 360225,
          name: "群",
          num: 44,
          province: null,
          city: null,
          district: null,
          avatar: "/static/img/wxCode.jpg",
          catid: 90,
          tags: "",
          hits: 0,
          sysadd: 0,
          weixin: null,
          cloud_id: 310794,
          top_time: 0,
          top_num: 0,
          add_time: 1702517350,
          edit_time: 1702556761,
          refresh_time: "20分钟前",
          delete_time: 0,
          is_up: 0,
          status: 1,
          uniacid: 7,
          type: 1,
          desc: null,
          pic: null,
          seelog: 0,
          days: 7,
        },
        {
          id: 360053,
          name: "群",
          num: 38,
          province: null,
          city: null,
          district: null,
          avatar: "/static/img/wxCode.jpg",
          catid: 90,
          tags: "",
          hits: 0,
          sysadd: 0,
          weixin: null,
          cloud_id: 310770,
          top_time: 0,
          top_num: 0,
          add_time: 1702514794,
          edit_time: 1702556761,
          refresh_time: "20分钟前",
          delete_time: 0,
          is_up: 0,
          status: 1,
          uniacid: 7,
          type: 1,
          desc: null,
          pic: null,
          seelog: 0,
          days: 7,
        },
        {
          id: 361068,
          name: "群",
          num: 99,
          province: null,
          city: null,
          district: null,
          avatar: "/static/img/wxCode.jpg",
          catid: 90,
          tags: "",
          hits: 0,
          sysadd: 0,
          weixin: null,
          cloud_id: 310936,
          top_time: 0,
          top_num: 0,
          add_time: 1702534811,
          edit_time: 1702556522,
          refresh_time: "24分钟前",
          delete_time: 0,
          is_up: 0,
          status: 1,
          uniacid: 7,
          type: 1,
          desc: null,
          pic: null,
          seelog: 0,
          days: 7,
        },
        {
          id: 360592,
          name: "群",
          num: 1,
          province: null,
          city: null,
          district: null,
          avatar: "/static/img/wxCode.jpg",
          catid: 90,
          tags: "",
          hits: 0,
          sysadd: 0,
          weixin: null,
          cloud_id: 310851,
          top_time: 0,
          top_num: 0,
          add_time: 1702525206,
          edit_time: 1702556522,
          refresh_time: "24分钟前",
          delete_time: 0,
          is_up: 0,
          status: 1,
          uniacid: 7,
          type: 1,
          desc: null,
          pic: null,
          seelog: 0,
          days: 7,
        },
      ],
    };
  },
  methods: {
    change(index) {
      this.current = index;
    },
    joinQun(index){
      uni.showToast({
        title: `点击了第${index+1}项`
      })
    }
  },
};
</script>

<style scoped lang="scss">
.pubBox {
  .top.data-v-2cd5f542 {
    padding: 30rpx 0 0 38rpx;
    height: 210rpx;
    background: linear-gradient(90deg, #d1eaff, #fdf8e2);
  }

  .top .title.data-v-2cd5f542 {
    font-size: 60rpx;
    color: #027dff;
  }

  .top .desc.data-v-2cd5f542 {
    font-family: ZCOOL XiaoWei, serif;
    font-size: 32rpx;
    margin-top: 16rpx;
    color: #7ca9e0;
  }

  .top .bgicon.data-v-2cd5f542 {
    position: absolute;
    width: 200rpx;
    height: 122rpx;
    margin-top: -102rpx;
    margin-right: 55rpx;
    right: 0;
    opacity: 0.4;
    z-index: 0;
  }

  .bottom {}
}

.infobox.data-v-2cd5f542 {
  font-size: 28rpx;
  color: #333;
}

.tui-poster__box.data-v-2cd5f542 {
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.tui-close__img.data-v-2cd5f542 {
  width: 48rpx;
  height: 48rpx;
  position: absolute;
  right: 0;
  top: -60rpx;
}

.tui-poster__img.data-v-2cd5f542 {
  width: 560rpx;
  height: 890rpx;
  border-radius: 20rpx;
  margin-bottom: 40rpx;
}

.tui-share__tips.data-v-2cd5f542 {
  font-size: 24rpx;
  transform: scale(0.8);
  transform-origin: center center;
  color: #fff;
  padding-top: 12rpx;
}

.tckuang.data-v-2cd5f542 {
  padding: 50rpx 60rpx;
}

.tckuang .tui-tool-icon.data-v-2cd5f542 {
  margin-top: 30rpx;
  width: 280rpx;
  height: 280rpx;
  border-radius: 50rpx;
  box-shadow: 7rpx 8rpx 10rpx 0rpx #e5e5e5;
  border: #e7e7e7 solid 2rpx;
}

.tckuang .title.data-v-2cd5f542 {
  font-size: 32rpx;
  font-weight: 700;
}

.tckuang .desc.data-v-2cd5f542 {
  margin-top: 20rpx;
  line-height: 40rpx;
}

.tckuang .piaofu.data-v-2cd5f542 {
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

.scroll-Y.data-v-2cd5f542 {
  height: 540rpx;
}

.top.data-v-2cd5f542 {
  padding: 30rpx 0 0 38rpx;
  height: 210rpx;
  background: linear-gradient(90deg, #d1eaff, #fdf8e2);
}

.top .title.data-v-2cd5f542 {
  font-size: 60rpx;
  color: #027dff;
}

.top .desc.data-v-2cd5f542 {
  font-family: ZCOOL XiaoWei, serif;
  font-size: 32rpx;
  margin-top: 16rpx;
  color: #7ca9e0;
}

.top .bgicon.data-v-2cd5f542 {
  position: absolute;
  width: 200rpx;
  height: 122rpx;
  margin-top: -102rpx;
  margin-right: 55rpx;
  right: 0;
  opacity: 0.4;
  z-index: 0;
}

.top .bgicon1.data-v-2cd5f542 {
  position: absolute;
  width: 360rpx;
  height: 169rpx;
  margin-top: -139rpx;
  margin-right: 40rpx;
  right: 0;
  opacity: 0.2;
  z-index: 0;
}

.waikuang.data-v-2cd5f542 {
  margin-top: -110rpx;
  padding: 28rpx 26rpx;
}

.tui-rolling-news.data-v-2cd5f542 {
  width: 100%;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: nowrap;
}

.tui-swiper.data-v-2cd5f542 {
  font-size: 28rpx;
  height: 40rpx;
  flex: 1;
}

.tui-swiper-item.data-v-2cd5f542 {
  display: flex;
  align-items: center;
}

.tui-news-item.data-v-2cd5f542 {
  margin-left: 14rpx;
  line-height: 28rpx;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.bjk.data-v-2cd5f542 {
  padding: 0 0 20rpx 0;
  border-bottom: #e3eef1 dashed 1px;
}

.sousuo.data-v-2cd5f542 {
  padding: 14rpx 30rpx;
  border-radius: 16rpx;
  background-color: #fff;
}

.dhbj.data-v-2cd5f542 {
  margin-top: -30rpx;
  margin-bottom: 20rpx;
  padding: 12rpx 30rpx;
  border-bottom-left-radius: 16rpx;
  border-bottom-right-radius: 16rpx;
  background: linear-gradient(180deg, #fff, #fafafa);
  background-color: #fff;
}

.tubiao.data-v-2cd5f542 {
  margin-top: 30rpx;
  width: 120rpx;
  padding: 10rpx 0rpx;
}

.tubiao .img.data-v-2cd5f542 {
  width: 60rpx;
  height: 60rpx;
}

.tubiao .text.data-v-2cd5f542 {
  margin-top: 6rpx;
}

.after.data-v-2cd5f542 {
  margin-left: 25rpx;
  margin-top: 40rpx;
  content: "";
  position: relative;
  width: 2rpx;
  height: 60rpx;
  background-color: #dfdfdf;
}

.adlist.data-v-2cd5f542 {
  position: relative;
  overflow: hidden;
  margin-top: 20rpx;
  width: 100%;
  padding: 26rpx 40rpx;
  background: linear-gradient(-120deg, #fff3c4, #ffe79e);
  border-radius: 10rpx;
}

.adlist .sellout.data-v-2cd5f542 {
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

.adlist .sellout .text.data-v-2cd5f542 {
  color: #fff;
  display: flex;
  margin-top: 17rpx;
  margin-left: 56rpx;
  font-size: 24rpx;
  transform: rotate(0deg);
}

.adlist .left.data-v-2cd5f542 {
  width: 62%;
}

.adlist .title.data-v-2cd5f542 {
  font-size: 30rpx;
  font-weight: 700;
}

.adlist .desc.data-v-2cd5f542 {
  margin-top: 10rpx;
  color: #7e7234;
  font-size: 24rpx;
}

.adlist .bnt.data-v-2cd5f542 {
  padding: 12rpx 30rpx;
  background-color: #dab253;
  color: #fff;
  border-radius: 20rpx;
}

.list.data-v-2cd5f542 {
  padding: 40rpx 10rpx;
  border-bottom: #e3eef1 dashed 1px;
}

.list .left .img.data-v-2cd5f542 {
  border-radius: 20rpx;
  width: 95rpx;
  height: 95rpx;
}

.list .left .wenzi.data-v-2cd5f542 {
  margin-left: 30rpx;
}

.list .left .wenzi .images.data-v-2cd5f542 {
  width: 32rpx;
  height: 32rpx;
}

.list .left .wenzi .bt.data-v-2cd5f542 {
  width: 300rpx;
  font-size: 30rpx;
  margin-left: 10rpx;
  font-weight: 700;
}

.list .left .xia.data-v-2cd5f542 {
  margin-top: 16rpx;
  font-size: 24rpx;
  color: #919191;
}

.list .bnt.data-v-2cd5f542 {
  font-weight: 700;
  padding: 16rpx 30rpx;
  background-color: #e4f3ff;
  color: #3c76ff;
  border-radius: 50rpx;
}

.list .bnt1.data-v-2cd5f542 {
  font-weight: 700;
  padding: 16rpx 30rpx;
  background-color: #f3f3f3;
  color: #a3a3a3;
  border-radius: 50rpx;
}

.list .bnt2.data-v-2cd5f542 {
  padding: 2rpx 10rpx;
  background-color: #ffeaeb;
  color: #e23134;
  border-radius: 10rpx;
}
</style>
