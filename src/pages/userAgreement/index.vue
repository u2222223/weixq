<template>
    <view class="infobox data-v-6b5756b3">
        <view class="kuang data-v-6b5756b3">
            <view class="info data-v-6b5756b3">
                <u-parse class="data-v-6b5756b3" :html="info"></u-parse>
            </view>
        </view>
        <tui-loading class="data-v-6b5756b3" :data-custom-hidden="!loadshow" :fixed="true" type="row"></tui-loading>
    </view>
</template>

<script>
export default {
    data() {
        return {
            cname: "",
            info: "<p>用户协议</p>",
            loadshow: false
        }
    }
}
</script>

<style scoped>
.infobox.data-v-6b5756b3 {
    width: 100%;
    font-size: 28rpx;
    color: #333;
}

.bottom.data-v-6b5756b3 {
    width: 100%;
    position: fixed;
    bottom: 0;
    border-top: 1rpx solid #f1f1f1;
    background-color: #fff;
}

.bottom .bottom_k.data-v-6b5756b3 {
    padding: 20rpx 40rpx;
}

.bottom .bottom_k .nei_l.data-v-6b5756b3 {
    width: 55%;
}

.bottom .bottom_k .nei_l .btn.data-v-6b5756b3 {
    padding: 15rpx 40rpx;
    border-radius: 50rpx;
    border: 1rpx solid #e7e7e7;
}

.bottom .bottom_k .nei_r.data-v-6b5756b3 {
    width: 26%;
}

.bottom .bottom_k .nei_r .nei_r_k .text.data-v-6b5756b3 {
    margin-top: 10rpx;
}

.kuang.data-v-6b5756b3 {
    padding: 40rpx 40rpx 90rpx 40rpx;
}

.kuang .title.data-v-6b5756b3 {
    font-size: 42rpx;
}

.kuang .time .time_icon.data-v-6b5756b3 {
    color: #fff;
    padding: 12rpx 24rpx;
    background-color: #fa0;
    border-radius: 10rpx;
}

.kuang .info.data-v-6b5756b3 {
    font-size: 32rpx;
    line-height: 50rpx;
}

.kuang .ktvip.data-v-6b5756b3 {
    padding: 40rpx 30rpx 0 30rpx;
}

.kuang .ktvip .jiesuo_text.data-v-6b5756b3 {
    width: 100%;
    padding: 70rpx 50rpx;
    text-align: center;
    font-size: 32rpx;
}

.kuang .ktvip .jiesuo_btn.data-v-6b5756b3 {
    padding: 16rpx 30rpx;
    background-color: #ff557f;
    border-radius: 10rpx;
    color: #fff;
}
</style>