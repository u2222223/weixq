<template>
  <view class="infobox data-v-4a1defbe">
    <view class="find_tg data-v-4a1defbe">
      <view class="data-v-4a1defbe">
        <view class="gonggao m_top_40 data-v-4a1defbe" v-if="integral">
          <u-alert-tips class="data-v-4a1defbe" :showIcon="false" :title="'每次发布,需扣除' + integral + '积分,点击赚取积分'"
            :titleStyle="tips_style" type="warning"></u-alert-tips>
        </view>
        <view class="data-v-4a1defbe">
          <u-form :model="form" ref="uForm">
            <u-form-item label="群名称" :label-width="130" required>
              <u-input maxlength="15" v-model="form.name" placeholder="请输入群名称" type="text" :border="false" />
            </u-form-item>
            <u-form-item label="群人数" :label-width="130" required>
              <u-input maxlength="3" v-model="form.peopleNum" placeholder="请输入群人数" type="text" :border="false" />
            </u-form-item>
            <u-form-item label="群二维码" :label-width="130" required>
              <u-upload class="data-v-4a1defbe vue-ref" ref="uploadComp" action="#"
                :auto-upload="false" maxCount="1"></u-upload>
            </u-form-item>
            <u-form-item label="是否企微" :label-width="130" required>
              <u-switch v-model="form.isQiWei"></u-switch>
            </u-form-item>
            <view class="acea-row yzm data-v-4a1defbe" v-if="form.province">
              <view class="left data-v-4a1defbe">地址</view>
              <view class="acea-row data-v-4a1defbe" style="color: #878787">{{
                "" + form.province + " " + form.city + " " + form.district + ""
              }}</view>
            </view>
          </u-form>
        </view>
        <view class="m_top_60 data-v-4a1defbe">
          <view class="add_lot2 data-v-4a1defbe" @click="submit">立即发布</view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      tips_style: {
        color: "#ff8c53",
      },
      integral: 0,
      form: {
        name: "",
        peopleNum: "",
        isQiWei: false,
        province: "",
        city: "",
        district: "",
        code: "",
      }
    };
  },
  methods: {
    async submit() {
      let file = this.$refs.uploadComp.lists[0]
      let base64 = await this.$getBase64(file.url)
      let data = { ...this.form, ewm: base64, isQiWei: this.form.isQiWei ? 1 : 0 }
      let res = await this.$ajax({
        url: "/weiqun-list/createList",
        method: 'post',
        data
      })
      uni.navigateBack({
        delta: 1,//返回层数，2则上上页
      })
    },

  }
};
</script>

<style scoped lang="scss">
.infobox.data-v-4a1defbe {
  width: 100%;
  font-size: 28rpx;
  color: #333;
  background-color: #FFF;
  min-height: 100vh;
}

.yzm.data-v-4a1defbe {
  padding: 24rpx 0rpx 24rpx 28rpx;
  border-bottom: 1px solid #f3f3f3;
}

.yzm .left.data-v-4a1defbe {
  width: 140rpx;
}

.find_tg.data-v-4a1defbe {
  padding: 0rpx 40rpx;
  padding-bottom: 40rpx;
}

.find_tg .varcode.data-v-4a1defbe {
  width: 210rpx;
  height: 60rpx;
}

.find_tg .add_lot1.data-v-4a1defbe {
  text-align: center;
  font-size: 32rpx;
  border-radius: 10rpx;
  background-color: #fafafa;
  padding: 20rpx 40rpx;
  color: #646464;
  border: 1rpx solid #e2e2e2;
}

.find_tg .add_lot2.data-v-4a1defbe {
  text-align: center;
  font-size: 32rpx;
  border-radius: 1000rpx;
  background-color: #5af;
  padding: 28rpx 40rpx;
  color: #fff;
}
</style>
