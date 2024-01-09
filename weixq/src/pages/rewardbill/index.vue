<template>
    <view class="infobox data-v-6f8cdc84">
        <view class="ddcontent data-v-6f8cdc84">
            <view class="jiange data-v-6f8cdc84">
                <view class="bjk acea-row row-center-wrapper data-v-6f8cdc84">
                    <view class="yjk data-v-6f8cdc84">
                        <view class="jifentext acea-row row-center data-v-6f8cdc84">当前佣金</view>
                        <view class="jifen acea-row row-center data-v-6f8cdc84">{{ brokerage_price }}</view>
                    </view>
                    <image class="bg3 data-v-6f8cdc84" mode="widthFix"
                        src="https://down.wowo6.com/7e5aefbca88181e50a0db111fb213769.png?v=923036"></image>
                </view>
                <view class="yaoqing acea-row row-between-wrapper m_top_30 data-v-6f8cdc84">
                    <view class="bjk3 yaoqing_l acea-row row-between-wrapper data-v-6f8cdc84">
                        <view class="acea-row row-between-wrapper data-v-6f8cdc84">
                            <view class="data-v-6f8cdc84">
                                <image class="acea-row row-middle yaoqing_l_icon data-v-6f8cdc84"
                                    src="/static/img/icon_tixian.png"></image>
                            </view>
                            <view class="l_wz data-v-6f8cdc84">立即提现</view>
                        </view>
                        <view class="icon_r data-v-6f8cdc84">
                            <tui-icon class="data-v-6f8cdc84" color="#cbcbcb" name="arrowright" size="24"></tui-icon>
                        </view>
                    </view>
                    <view class="bjk3 yaoqing_l acea-row row-between-wrapper data-v-6f8cdc84">
                        <view class="acea-row row-between-wrapper data-v-6f8cdc84">
                            <view class="data-v-6f8cdc84">
                                <image class="acea-row row-middle yaoqing_l_icon data-v-6f8cdc84"
                                    src="/static/img/icon_mx.png"></image>
                            </view>
                            <view class="l_wz data-v-6f8cdc84">提现记录</view>
                        </view>
                        <view class="icon_r data-v-6f8cdc84">
                            <tui-icon class="data-v-6f8cdc84" color="#cbcbcb" name="arrowright" size="24"></tui-icon>
                        </view>
                    </view>
                </view>
                <view class="jftitle acea-row row-center data-v-6f8cdc84">
                    <u-tabs activeColor="#55aaff" class="data-v-6f8cdc84" :current="current" fontSize="32" gutter="70"
                        inactiveColor="#6b6b6b" :list="barlist"></u-tabs>
                </view>
                <view class="m_top_20 data-v-6f8cdc84">
                    <view class="data-v-6f8cdc84" v-if="total">
                        <view class="data-v-6f8cdc84" v-for="(item, index) in list" :key="index">
                            <view class="sglist data-v-6f8cdc84">
                                <view class="acea-row row-between-wrapper data-v-6f8cdc84">
                                    <view class="data-v-6f8cdc84">
                                        <view class="title data-v-6f8cdc84">{{ item.title }}</view>
                                        <view class="time1 data-v-6f8cdc84">{{ item.add_time }}</view>
                                    </view>
                                    <view class="data-v-6f8cdc84" style="font-size:32rpx;">
                                        <text class="data-v-6f8cdc84" style="color:#55aa00;" v-if="item.pm == 1">{{
                                            '+' + item.number }}</text>
                                        <text class="data-v-6f8cdc84" style="color:#ff0000;" v-else>{{
                                            '-' + item.number }}</text>
                                    </view>
                                </view>
                                <view class="data-v-6f8cdc84" style="padding:20rpx 0 10rpx 0;" v-if="item.mark">
                                    <u-alert-tips class="data-v-6f8cdc84" :title="'备注:' + item.mark" :titleStyle="tips_style"
                                        type="error"></u-alert-tips>
                                </view>
                            </view>
                        </view>
                        <view class="m_top_30 data-v-6f8cdc84">
                            <u-loadmore class="data-v-6f8cdc84" :loadText="loadText" :status="status"></u-loadmore>
                        </view>
                    </view>
                    <view class="m_top_60 data-v-6f8cdc84" v-else>
                        <u-empty class="data-v-6f8cdc84" mode="list" text="暂无数据"></u-empty>
                    </view>
                </view>
            </view>
        </view>
        <u-toast class="data-v-6f8cdc84 vue-ref" data-ref="uToast"></u-toast>
        <tui-loading class="data-v-6f8cdc84" :data-custom-hidden="!loadshow" :fixed="true" type="column"></tui-loading>
    </view>
</template>

<script>
export default {
    data() {
        return {
            barlist: [{
                name: "全部"
            }, {
                name: "增加"
            }, {
                name: "减少"
            }],
            current: 0,
            userInfo: [],
            brokerage_price: 0,
            status: "loadmore",
            loadText: {
                loadmore: "上拉加载更多",
                loading: "加载数据中",
                nomore: "我是有底线的"
            },
            q_page: 1,
            list: [],
            total: 0,
            firstLoad: !1,
            keyword: "",
            loadshow: !1,
            type: 10,
            tips_style: {
                "font-size": "24rpx",
                color: "#ff557f"
            }
        }
    }
}
</script>

<style scoped lang="scss">
.infobox.data-v-6f8cdc84 {
    width: 100%;
    font-size: 28rpx;
    color: #333;
}

.ddcontent.data-v-6f8cdc84 {
    position: absolute;
    top: 20rpx;
    width: 100%;
}

.ddcontent .yaoqing .yaoqing_l.data-v-6f8cdc84 {
    width: 48%;
}

.ddcontent .yaoqing .yaoqing_l .yaoqing_l_icon.data-v-6f8cdc84 {
    width: 40rpx;
    height: 40rpx;
    margin-right: 16rpx;
}

.ddcontent .yaoqing .yaoqing_l .l_wz.data-v-6f8cdc84 {
    font-size: 32rpx;
    font-weight: 600;
}

.ddcontent .yaoqing .icon_r.data-v-6f8cdc84 {
    color: #aaa;
}

.ddcontent .jiange.data-v-6f8cdc84 {
    padding: 40rpx;
}

.ddcontent .yjk.data-v-6f8cdc84 {
    width: 50%;
}

.ddcontent .yjk .jifen.data-v-6f8cdc84 {
    margin-top: 10rpx;
    color: #fff;
    font-size: 58rpx;
    margin-left: 20rpx;
    font-weight: 800;
}

.ddcontent .yjk .jifentext.data-v-6f8cdc84 {
    font-size: 32rpx;
    padding-top: 15rpx;
    color: #fff;
}

.ddcontent .sglist.data-v-6f8cdc84 {
    padding: 25rpx;
    border-bottom: 1rpx solid #efefef;
}

.ddcontent .sglist .title.data-v-6f8cdc84 {
    font-size: 30rpx;
    padding: 10rpx 0;
    font-weight: 800;
}

.ddcontent .sglist .time.data-v-6f8cdc84 {
    font-size: 24rpx;
    color: #989898;
}

.ddcontent .sglist .time1.data-v-6f8cdc84 {
    font-size: 24rpx;
    padding: 10rpx 0;
    color: #989898;
}

.bgicon.data-v-6f8cdc84 {
    width: 80rpx;
    height: 80rpx;
    opacity: .8;
    margin-left: 20rpx;
}

.jftitle.data-v-6f8cdc84 {
    padding: 5rpx 0;
    border-radius: 50rpx;
    background-color: #fff;
    margin-top: 30rpx;
}

.bjk.data-v-6f8cdc84 {
    position: relative;
    overflow: hidden;
    padding: 50rpx 30rpx;
    background: #fff;
    border-radius: 30rpx;
    box-shadow: 0rpx 5rpx 15rpx #dccbdb;
    background: linear-gradient(90deg, #2f9bff, #3ad1ff);
}

.bjk .bg3.data-v-6f8cdc84 {
    position: absolute;
    top: -50rpx;
    left: 0;
    width: 600rpx;
    opacity: .3;
}

.bjk2.data-v-6f8cdc84 {
    background: #fff;
    border-radius: 10rpx;
    box-shadow: 0rpx 0rpx 10rpx #ececec;
}

.bjk3.data-v-6f8cdc84 {
    padding: 30rpx 30rpx;
    background: #fff;
    border-radius: 30rpx;
    box-shadow: 0rpx 0rpx 10rpx #ececec;
}
</style>