<template>
  <view class="infobox data-v-3bb605d8">
    <view class="kuangtop data-v-3bb605d8">
      <view class="top acea-row row-between-wrapper data-v-3bb605d8">
        <view class="search data-v-3bb605d8">
          <u-search shape="round"></u-search>
        </view>
        <view class="fabu acea-row row-center-wrapper data-v-3bb605d8">
          <tui-icon class="data-v-3bb605d8" color="#ffffff" name="add" :size="18"></tui-icon>
          <view class="data-v-3bb605d8" style="margin-left: 10rpx">发布</view>
        </view>
      </view>
      <view class="daohang data-v-3bb605d8">
        <u-tabs activeColor="#55aaff" class="data-v-3bb605d8" :current="current" fontSize="32" gutter="20" @change="change"
          inactiveColor="#6b6b6b" :list="barlist" vueId="4dc430ca-3"></u-tabs>
      </view>
    </view>
    <view class="kuang data-v-3bb605d8">
      <view class="pyq data-v-3bb605d8" v-if="total">
        <view class="pyq_kuang acea-row data-v-3bb605d8" v-for="(item, index) in list" :key="index">
          <view class="pyq_l data-v-3bb605d8">
            <image class="img data-v-3bb605d8" mode="aspectFill" :src="item.user_img ? item.user_img : '../../static/img/300-300.jpg'
              "></image>
          </view>
          <view class="pyq_r data-v-3bb605d8">
            <view class="acea-row data-v-3bb605d8">
              <view class="title acea-row data-v-3bb605d8">{{
                item.user_name
              }}</view>
              <view class="title_btn data-v-3bb605d8" v-if="item.top_time">置顶</view>
            </view>
            <view class="content data-v-3bb605d8">{{
              "" + item.title + ""
            }}</view>
            <view class="taotu acea-row data-v-3bb605d8" v-if="item.imgnum <= 1">
              <view class="taotu_k2 data-v-3bb605d8">
                <image class="img _img data-v-3bb605d8" mode="widthFix" :src="item.content[0]"></image>
              </view>
            </view>
            <view class="taotu acea-row data-v-3bb605d8" v-else>
              <view class="taotu_k1 data-v-3bb605d8" v-for="(item1, index) in item.content" :key="index">
                <image class="img _img data-v-3bb605d8" mode="aspectFill" :src="item1"></image>
              </view>
            </view>
            <view class="dibu acea-row row-between-wrapper data-v-3bb605d8">
              <view class="dibu_l data-v-3bb605d8">{{ item.time }}</view>
              <view class="dibu_zhong data-v-3bb605d8"> </view>
              <view class="dibu_r data-v-3bb605d8">
                <view class="dibu_yuan data-v-3bb605d8">
                  <tui-icon class="data-v-3bb605d8" color="#4a4a4a" name="more-fill" :size="16"></tui-icon>
                </view>
              </view>
            </view>
          </view>
        </view>
        <view class="m_top_40 data-v-3bb605d8">
          <u-loadmore class="data-v-3bb605d8" :loadText="loadText" :status="status" vueId="4dc430ca-11"></u-loadmore>
        </view>
      </view>
      <view class="acea-row row-center-wrapper m_top_60 data-v-3bb605d8" v-else>
        <u-empty class="data-v-3bb605d8" mode="list" text="暂无数据" vueId="4dc430ca-12"></u-empty>
      </view>
    </view>
    <tui-loading class="data-v-3bb605d8" :data-custom-hidden="!loadshow" :fixed="true" type="column"
      vueId="4dc430ca-13"></tui-loading>
    <u-toast class="data-v-3bb605d8 vue-ref" data-ref="uToast" vueId="4dc430ca-14"></u-toast>
  </view>
</template>

<script>
export default {
  data() {
    return {
      barlist: [
        { name: "推荐", id: 0 },
        {
          id: 2,
          name: "日常",
          pid: 0,
          sort: 100,
          icon: "",
          is_up: 0,
          status: 1,
          uniacid: 7,
        },
        {
          id: 1,
          name: "项目",
          pid: 0,
          sort: 100,
          icon: "",
          is_up: 0,
          status: 1,
          uniacid: 7,
        },
      ],
      current: 0,
      total: 20,
      list: [
        {
          id: 74,
          uid: 4,
          title:
            "晚上好",
          hits: 0,
          content: [
            "/static/img/sw1.jpg",
            "/static/img/sw1.jpg",
            "/static/img/sw1.jpg",
            "/static/img/sw1.jpg",
            "/static/img/sw1.jpg",
            "/static/img/sw1.jpg",
          ],
          hot: 0,
          top_time: 1733328000,
          catid: 1,
          createtime: "2023-12-05 23:14:21",
          imgnum: 6,
          time: "12-05",
          user_name: "路飞1",
          user_img: "/static/img/wxCode.jpg",
          btn_kg: false,
          dz_on: false,
          sc_on: false,
        },
        {
          id: 84,
          uid: 7209,
          title: "早上好",
          hits: 0,
          content: ["/static/img/sw1.jpg"],
          hot: 1,
          top_time: 1704159350,
          catid: 2,
          createtime: "2023-12-18 19:50:31",
          imgnum: 1,
          time: "1天前",
          user_img: "/static/img/wxCode.jpg",
          user_name: "路飞1",
          btn_kg: false,
          dz_on: false,
          sc_on: false,
        },
        {
          id: 43,
          uid: 1714,
          title:
            "中午好中午好中午好",
          hits: 0,
          content: ["/static/img/sw1.jpg"],
          hot: 11,
          top_time: 0,
          catid: 1,
          createtime: "2023-05-07 23:17:35",
          imgnum: 1,
          time: "05-07",
          user_img: "/static/img/wxCode.jpg",
          user_name: "路飞1",
          btn_kg: false,
          dz_on: false,
          sc_on: false,
        },
        {
          id: 45,
          uid: 2003,
          title: "中午好中午好中午好",
          hits: 0,
          content: ["/static/img/sw1.jpg"],
          hot: 4,
          top_time: 0,
          catid: 2,
          createtime: "2023-05-23 20:45:59",
          imgnum: 2,
          time: "05-23",
          user_name: "路飞1",
          user_img: "/static/img/wxCode.jpg",
          btn_kg: false,
          dz_on: false,
          sc_on: false,
        },
        {
          id: 31,
          uid: 371,
          title: "流量卡",
          hits: 0,
          content: ["/static/img/sw1.jpg"],
          hot: 4,
          top_time: 0,
          catid: 2,
          createtime: "2023-04-23 18:34:28",
          imgnum: 1,
          time: "04-23",
          user_name: "路飞1",
          user_img: "/static/img/wxCode.jpg",
          btn_kg: false,
          dz_on: false,
          sc_on: false,
        },
        {
          id: 30,
          uid: 371,
          title: "中午好中午好中午好",
          hits: 0,
          content: ["/static/img/sw1.jpg"],
          hot: 4,
          top_time: 0,
          catid: 2,
          createtime: "2023-04-23 13:34:11",
          imgnum: 1,
          time: "04-23",
          user_name: "路飞1",
          user_img: "/static/img/wxCode.jpg",
          btn_kg: false,
          dz_on: false,
          sc_on: false,
        },
        {
          id: 25,
          uid: 371,
          title: "中午好中午好中午好",
          hits: 0,
          content: ["/static/img/sw1.jpg"],
          hot: 4,
          top_time: 0,
          catid: 2,
          createtime: "2023-04-03 22:05:12",
          imgnum: 1,
          time: "04-03",
          user_name: "路飞1",
          user_img: "/static/img/wxCode.jpg",
          user_img:
            "https:\/\/shequn.fubaige.cn\/f6a64ec788eafa4d7fe39726fa78d67a.jpg?v=162081",
          btn_kg: false,
          dz_on: false,
          sc_on: false,
        },
        {
          id: 22,
          uid: 371,
          title: "中午好中午好中午好",
          hits: 0,
          content: ["/static/img/sw1.jpg"],
          hot: 4,
          top_time: 0,
          catid: 2,
          createtime: "2023-04-03 20:31:14",
          imgnum: 1,
          time: "04-03",
          user_name: "路飞1",
          user_img: "/static/img/wxCode.jpg",
          btn_kg: false,
          dz_on: false,
          sc_on: false,
        },
        {
          id: 12,
          uid: 369,
          title:
            "中午好中午好中午好",
          hits: 0,
          content: ["/static/img/sw1.jpg"],
          hot: 4,
          top_time: 0,
          catid: 2,
          createtime: "2023-03-07 16:19:09",
          imgnum: 2,
          time: "03-07",
          user_img: "/static/img/wxCode.jpg",
          user_name: "路飞1",
          btn_kg: false,
          dz_on: false,
          sc_on: false,
        },
        {
          id: 48,
          uid: 2390,
          title: "中午好中午好中午好",
          hits: 0,
          content: ["/static/img/sw1.jpg"],
          hot: 2,
          top_time: 0,
          catid: 1,
          createtime: "2023-06-04 04:16:56",
          imgnum: 1,
          user_img: "/static/img/wxCode.jpg",
          time: "06-04",
          user_name: "路飞1",
          btn_kg: false,
          dz_on: false,
          sc_on: false,
        },
      ],
      loadText: {
        loading: "加载数据中",
        loadmore: "上拉加载更多",
        nomore: "我是有底线的",
      },
      status: "loadmore",
      loadshow: false,
    };
  },
  methods: {
    change(index) {
      this.current = index;
    },
  }
};
</script>

<style scoped lang="scss">
.infobox.data-v-3bb605d8 {
  width: 100%;
  font-size: 28rpx;
  color: #333;
  background-color: #fff;
}

.kuangtop.data-v-3bb605d8 {
  padding: 20rpx 40rpx 20rpx 40rpx;
  position: fixed;
  z-index: 800;
  width: 100%;
  background-color: #fff;
}

.kuangtop .top.data-v-3bb605d8 {
  width: 100%;
  height: 100rpx;
}

.kuangtop .top .search.data-v-3bb605d8 {
  width: 75%;
  color: #8f8f8f;
  padding: 0rpx 25rpx;
  background-color: #f1f1f1;
  border-bottom-left-radius: 10rpx;
  border-top-left-radius: 10rpx;
}

.kuangtop .top .fabu.data-v-3bb605d8 {
  width: 25%;
  color: #fff;
  padding: 22rpx 20rpx;
  background-color: #5af;
  border-bottom-right-radius: 10rpx;
  border-top-right-radius: 10rpx;
}

.kuangtop .daohang.data-v-3bb605d8 {
  padding: 20rpx 0 10rpx 0;
}

.kuang.data-v-3bb605d8 {
  padding: 220rpx 40rpx 40rpx 40rpx;
}

.kuang .tanchu.data-v-3bb605d8 {
  padding: 20rpx 40rpx;
}

.kuang .tanchu .tui-menu-item-on.data-v-3bb605d8 {
  color: #ff557f;
}

.kuang .pyq .pyq_kuang.data-v-3bb605d8 {
  margin-top: 50rpx;
  width: 100%;
  border-bottom: 1rpx solid #f3f3f3;
}

.kuang .pyq .pyq_kuang .pyq_l.data-v-3bb605d8 {
  width: 19%;
}

.kuang .pyq .pyq_kuang .pyq_l .img.data-v-3bb605d8 {
  object-fit: fill;
  width: 100rpx;
  height: 100rpx;
  border-radius: 10rpx;
}

.kuang .pyq .pyq_kuang .pyq_r.data-v-3bb605d8 {
  width: 81%;
}

.kuang .pyq .pyq_kuang .pyq_r .title.data-v-3bb605d8 {
  font-weight: 800;
  font-size: 32rpx;
  color: #00264a;
}

.kuang .pyq .pyq_kuang .pyq_r .title_btn.data-v-3bb605d8 {
  margin-left: 20rpx;
  font-size: 24rpx;
  padding: 4rpx 10rpx;
  border-radius: 10rpx;
  background-color: #ff557f;
  color: #fff;
}

.kuang .pyq .pyq_kuang .pyq_r .content.data-v-3bb605d8 {
  word-wrap: break-word;
  padding: 25rpx 0;
  line-height: 50rpx;
  font-size: 30rpx;
}

.kuang .pyq .pyq_kuang .pyq_r .taotu.data-v-3bb605d8 {
  margin-top: 5rpx;
}

.kuang .pyq .pyq_kuang .pyq_r .taotu .taotu_k1.data-v-3bb605d8 {
  display: flex;
  margin-bottom: 12rpx;
  margin-right: 12rpx;
}

.kuang .pyq .pyq_kuang .pyq_r .taotu .taotu_k1 .img.data-v-3bb605d8 {
  object-fit: cover;
  width: 164rpx;
  height: 164rpx;
  border-radius: 10rpx;
  border: 1rpx solid #f0f0f0;
}

.kuang .pyq .pyq_kuang .pyq_r .taotu .taotu_k2.data-v-3bb605d8 {
  margin-bottom: 12rpx;
  margin-right: 12rpx;
  width: 420rpx;
}

.kuang .pyq .pyq_kuang .pyq_r .taotu .taotu_k2 .img.data-v-3bb605d8 {
  max-width: 100%;
  max-height: 100%;
  border-radius: 10rpx;
  border: 1rpx solid #f0f0f0;
}

.kuang .pyq .pyq_kuang .pyq_r .dibu.data-v-3bb605d8 {
  padding: 30rpx 0 30rpx 0;
}

.kuang .pyq .pyq_kuang .pyq_r .dibu .dibu_l.data-v-3bb605d8 {
  color: #b4b4b4;
}

.kuang .pyq .pyq_kuang .pyq_r .dibu .dibu_zhong.data-v-3bb605d8 {
  position: relative;
  width: 260rpx;
}

.kuang .pyq .pyq_kuang .pyq_r .dibu .dibu_r .dibu_yuan.data-v-3bb605d8 {
  padding: 0rpx 20rpx;
  background-color: #f1f1f1;
  border-radius: 10rpx;
}

.kuang .pyq .pyq_kuang .pyq_r .dibu .dibu_r .dibu_yuan .btn.data-v-3bb605d8 {
  font-size: 32rpx;
}
</style>
