<template>
  <view class="infobox data-v-84f90680">
    <view class="find_tg data-v-84f90680">
      <view class="data-v-84f90680">
        <view class="gonggao m_top_40 data-v-84f90680" v-if="integral">
          <u-alert-tips
            class="data-v-84f90680"
            :showIcon="true"
            :title="'每次发布,需扣除'+integral+'积分,点击赚取积分'"
            :titleStyle="tips_style"
            type="warning"
          ></u-alert-tips>
        </view>
        <view class="m_top_40 data-v-84f90680">
          <!-- <tui-textarea
            class="data-v-84f90680"
            :isCounter="true"
            maxlength="200"
            placeholder="请输入您的内容"
            :textareaBorder="true"
            :value="content"
          ></tui-textarea> -->
          
          <u-input v-model="form.introduce" :border="false" type="textarea"  placeholder="请输入您的内容" />
        </view>
        <view class="m_top_40 data-v-84f90680">
          <u-upload
            class="data-v-84f90680 vue-ref"
            data-ref="upload"
            :fileList="fileList"
            :header="header"
            maxCount="9"
          ></u-upload>
        </view>
        <view class="m_top_40 acea-row data-v-84f90680">
          <view
            class="add_lot1 data-v-84f90680"
            >{{ fl_text }}</view
          >
        </view>
        <view class="m_top_60 data-v-84f90680">
          <view
            class="add_lot2 data-v-84f90680"
            >立即发布</view
          >
        </view>
      </view>
    </view>
    <u-select
      class="data-v-84f90680"
      :list="fllist"
      :value="show"
    ></u-select>
  </view>
</template>

<script>
export default {
  data() {
    return {
      tipsshow: false,
      tips: "",
      fl_text: "选择话题分类",
      fl_id: 0,
      show: false,
      loadshow: false,
      fllist: [],
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
    };
  },
};
</script>

<style scoped lang="scss">
.infobox.data-v-84f90680 {
  width: 100%;
  font-size: 28rpx;
  color: #333;
}

.find_tg.data-v-84f90680 {
  padding: 0rpx 40rpx;
  padding-bottom: 40rpx;
}

.find_tg .add_lot1.data-v-84f90680 {
  text-align: center;
  font-size: 32rpx;
  border-radius: 10rpx;
  background-color: #fafafa;
  padding: 20rpx 40rpx;
  color: #646464;
  border: 1rpx solid #e2e2e2;
}

.find_tg .add_lot2.data-v-84f90680 {
  text-align: center;
  font-size: 32rpx;
  border-radius: 1000rpx;
  background-color: #5af;
  padding: 28rpx 40rpx;
  color: #fff;
}
</style>
