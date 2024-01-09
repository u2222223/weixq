<template>
  <view class="bigContent infobox data-v-a89eb3f8">
    <view class="find_tg data-v-a89eb3f8">
      <view class="data-v-a89eb3f8">
        <view class="gonggao m_top_40 data-v-a89eb3f8" v-if="integral">
          <u-alert-tips class="data-v-a89eb3f8" :showIcon="true" :title="'每次发布,需扣除' + integral + '积分,点击赚取积分'"
            :titleStyle="tips_style" type="warning"></u-alert-tips>
        </view>
        <view class="m_top_10 data-v-a89eb3f8">
          <!-- <tui-input
            class="data-v-a89eb3f8"
            :clearable="true"
            label="昵称"
            :labelSize="28"
            :lineLeft="false"
            maxlength="15"
            placeholder="请输入昵称"
            :required="true"
            :size="28"
            :value="form.name"
          ></tui-input> -->
          <u-input v-model="form.name" type="text" :border="true" />
          <view class="acea-row row-middle yzm data-v-a89eb3f8">
            <view class="left data-v-a89eb3f8">性别</view>
            <view class="acea-row data-v-a89eb3f8">
              <u-radio-group class="data-v-a89eb3f8" :value="sex">
                <u-radio class="data-v-a89eb3f8" :disabled="item.disabled" :name="item.name"
                  v-for="(item, index) in radioList" :key="index">{{ "" + item.name + "" }}</u-radio>
              </u-radio-group>
            </view>
          </view>
          <!-- <tui-textarea :borderTop="false" class="data-v-a89eb3f8" :flexStart="true" label="简介" :labelSize="28"
            maxlength="200" placeholder="请输入您的内容" :size="28" :value="form.introduce"></tui-textarea> -->
            <u-input v-model="form.introduce" :border="false" type="textarea"  placeholder="请输入您的内容" />
          <view class="acea-row row-middle yzm data-v-a89eb3f8">
            <view class="left data-v-a89eb3f8">二维码</view>
            <view class="acea-row data-v-a89eb3f8">
              <u-upload class="data-v-a89eb3f8 vue-ref" data-ref="upload" :fileList="fileList" :header="header"
                maxCount="1"></u-upload>
            </view>
          </view>
          <view class="acea-row yzm data-v-a89eb3f8" v-if="form.province">
            <view class="left data-v-a89eb3f8">地址</view>
            <view class="acea-row data-v-a89eb3f8" style="color: #878787">{{
              "" + form.province + " " + form.city + " " + form.district + ""
            }}</view>
          </view>
        </view>
        <view class="m_top_60 data-v-a89eb3f8">
          <view class="add_lot2 data-v-a89eb3f8">立即发布</view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      radioList: [
        {
          name: "男",
          disabled: false,
        },
        {
          name: "女",
          disabled: false,
        },
      ],
      sex: "男",
      tipsshow: false,
      tips: "",
      show: false,
      loadshow: false,
      tips_style: {
        color: "#ff8c53",
      },
      content: "",
      action: "",
      fileList: [],
      integral: 0,
      header: {
        "content-type": "application/x-www-form-urlencoded",
        cookie: "",
      },
      form: {
        name: "",
        province: "",
        city: "",
        district: "",
        code: "",
        introduce: "",
      },
      vrcodeimg: "",
      is_vrcode: false,
      modal: false,
      buttonstyle: [
        {
          text: "取消",
          type: "white",
          plain: false,
        },
        {
          text: "立即前往",
          type: "primary",
          plain: false,
        },
      ],
      dingwei_ok: false,
    };
  },
};
</script>

<style scoped lang="scss">
.infobox.data-v-a89eb3f8 {
  width: 100%;
  font-size: 28rpx;
  color: #333;
}

.yzm.data-v-a89eb3f8 {
  padding: 24rpx 0rpx 24rpx 28rpx;
  border-bottom: 1px solid #f3f3f3;
}

.yzm .left.data-v-a89eb3f8 {
  width: 140rpx;
}

.find_tg.data-v-a89eb3f8 {
  padding: 0rpx 40rpx;
  padding-bottom: 40rpx;
}

.find_tg .varcode.data-v-a89eb3f8 {
  width: 210rpx;
  height: 60rpx;
}

.find_tg .add_lot1.data-v-a89eb3f8 {
  text-align: center;
  font-size: 32rpx;
  border-radius: 10rpx;
  background-color: #fafafa;
  padding: 20rpx 40rpx;
  color: #646464;
  border: 1rpx solid #e2e2e2;
}

.find_tg .add_lot2.data-v-a89eb3f8 {
  text-align: center;
  font-size: 32rpx;
  border-radius: 1000rpx;
  background-color: #5af;
  padding: 28rpx 40rpx;
  color: #fff;
}
</style>
