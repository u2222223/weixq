<template>
    <view class="infobox data-v-7535d82a">
        <view class="topkuang bjk data-v-7535d82a">
            <image class="bgicon data-v-7535d82a"
                src="https://down.wowo6.com/7e5aefbca88181e50a0db111fb213769.png?v=923036"></image>
            <view class="dqjf data-v-7535d82a">
                <view class="acea-row row-center-wrapper fen data-v-7535d82a">{{ integral }}</view>
                <view class="acea-row row-center-wrapper m_top_10 data-v-7535d82a">当前可用积分</view>
            </view>
            <view class="acea-row row-between-wrapper ljjf data-v-7535d82a">
                <view class="data-v-7535d82a">
                    <view class="acea-row row-center-wrapper fen data-v-7535d82a">0</view>
                    <view class="acea-row row-center-wrapper m_top_10 data-v-7535d82a">累计积分</view>
                </view>
                <view class="data-v-7535d82a">
                    <view class="acea-row row-center-wrapper fen data-v-7535d82a">0</view>
                    <view class="acea-row row-center-wrapper m_top_10 data-v-7535d82a">累计消费</view>
                </view>
                <view class="data-v-7535d82a">
                    <view class="acea-row row-center-wrapper fen data-v-7535d82a">0</view>
                    <view class="acea-row row-center-wrapper m_top_10 data-v-7535d82a">昨日消费</view>
                </view>
            </view>
        </view>
        <view class="xiakuang data-v-7535d82a">
            <view class="daohang acea-row data-v-7535d82a">
                <view
                    :class="['data-v-7535d82a', tab == 1 ? 'dhbj1 z1 acea-row row-center-wrapper' : 'dhbj2 z1 acea-row row-center-wrapper']">
                    <image class="images data-v-7535d82a" src="/static/img/jf_1.png"></image>积分明细
                </view>
                <view
                    :class="['data-v-7535d82a', tab == 2 ? 'dhbj1 y1 acea-row row-center-wrapper' : 'dhbj2 y1 acea-row row-center-wrapper']">
                    <image class="images data-v-7535d82a" src="/static/img/jf_3.png"></image>获取积分
                </view>
            </view>
            <view class="nei data-v-7535d82a" v-if="tab == 1">
                <view class="m_top_20 data-v-7535d82a">
                    <view class="data-v-7535d82a" v-if="total">
                        <view class="data-v-7535d82a" v-for="(item, index) in list" :key="index">
                            <view class="acea-row row-between-wrapper sglist data-v-7535d82a">
                                <view class="data-v-7535d82a">
                                    <view class="title data-v-7535d82a">{{ item.title }}</view>
                                    <view class="time data-v-7535d82a">{{ item.add_time }}</view>
                                </view>
                                <view class="data-v-7535d82a">
                                    <text class="data-v-7535d82a" style="color:#55aa00;" v-if="item.pm == 1">{{ '+' +
                                        item.number }}</text>
                                    <text class="data-v-7535d82a" style="color:#ff0000;" v-else>{{ '- ' + item.number
                                    }}</text>
                                </view>
                            </view>
                        </view>
                        <view class="m_top_30 data-v-7535d82a">
                            <u-loadmore bind:__l="__l" class="data-v-7535d82a" :loadText="loadText" :status="status"
                                vueId="7cbec9c0-1"></u-loadmore>
                        </view>
                    </view>
                    <view class="data-v-7535d82a" v-else>
                        <u-empty bind:__l="__l" class="data-v-7535d82a" mode="list" text="暂无数据"
                            vueId="7cbec9c0-2"></u-empty>
                    </view>
                </view>
            </view>
            <view class="nei data-v-7535d82a" v-if="tab == 2">
                <view class="m_top_20 data-v-7535d82a">
                    <view class="bjk1 acea-row row-between-wrapper m_top_30 data-v-7535d82a">
                        <view class="acea-row row-center-wrapper data-v-7535d82a">
                            <view class="data-v-7535d82a">
                                <image class="img data-v-7535d82a" src="/static/img/jifen.png"></image>
                            </view>
                            <view class="data-v-7535d82a">
                                <view class="bjtitle data-v-7535d82a">充值获得积分</view>
                                <view class="bjdesc data-v-7535d82a">开通会员可赠送积分</view>
                            </view>
                        </view>
                        <view class="data-v-7535d82a">
                            <view class="bnt1 data-v-7535d82a">充值</view>
                        </view>
                    </view>
                    <view class="bjk1 acea-row row-between-wrapper m_top_30 data-v-7535d82a">
                        <view class="acea-row row-center-wrapper data-v-7535d82a">
                            <view class="data-v-7535d82a">
                                <image class="img data-v-7535d82a" src="/static/img/jf_4.png"></image>
                            </view>
                            <view class="data-v-7535d82a">
                                <view class="bjtitle data-v-7535d82a">{{ '每日签到+' + userInfo.qdjf + '分' }}</view>
                                <view class="bjdesc data-v-7535d82a">开通会员签到加分翻倍</view>
                            </view>
                        </view>
                        <view class="data-v-7535d82a">
                            <view class="bnt1 data-v-7535d82a">签到</view>
                        </view>
                    </view>
                    <view class="bjk1 acea-row row-between-wrapper m_top_30 data-v-7535d82a">
                        <view class="acea-row row-center-wrapper data-v-7535d82a">
                            <view class="data-v-7535d82a">
                                <image class="img data-v-7535d82a" src="/static/img/jf_5.png"></image>
                            </view>
                            <view class="data-v-7535d82a">
                                <view class="bjtitle data-v-7535d82a">{{ '邀请好友+' + userInfo.yqjf + '分' }}</view>
                                <view class="bjdesc data-v-7535d82a">开通会员邀请好友加分翻倍</view>
                            </view>
                        </view>
                        <view class="data-v-7535d82a">
                            <view class="bnt1 data-v-7535d82a">邀请</view>
                        </view>
                    </view>
                    <view class="bjk1 acea-row row-between-wrapper m_top_30 data-v-7535d82a">
                        <view class="acea-row row-center-wrapper data-v-7535d82a">
                            <view class="data-v-7535d82a">
                                <image class="img data-v-7535d82a" src="/static/img/jf_6.png"></image>
                            </view>
                            <view class="data-v-7535d82a">
                                <view class="bjtitle data-v-7535d82a">{{ '看一次广告+' + userInfo.qdjf + '分' }}</view>
                                <view class="bjdesc data-v-7535d82a">看广告获积分</view>
                            </view>
                        </view>
                        <view class="data-v-7535d82a">
                            <view class="bnt1 data-v-7535d82a">查看</view>
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
            tab: 1,
            jf_show: false,
            userInfo: [],
            integral: 0,
            status: "loadmore",
            loadText: {
                loadmore: "上拉加载更多",
                loading: "加载数据中",
                nomore: "我是有底线的"
            },
            q_page: 1,
            list: [{"pm":1,"title":"签到增送积分","number":"2.00","add_time":"2023-12-19 19:51:32","balance":"10.00","mark":""},{"pm":1,"title":"签到增送积分","number":"2.00","add_time":"2023-12-14 17:29:23","balance":"8.00","mark":""},{"pm":1,"title":"签到增送积分","number":"2.00","add_time":"2023-12-12 11:27:06","balance":"6.00","mark":""},{"pm":1,"title":"签到增送积分","number":"2.00","add_time":"2023-12-11 22:25:49","balance":"4.00","mark":""},{"pm":1,"title":"注册增送积分","number":"2.00","add_time":"2023-12-11 22:24:57","balance":"0.00","mark":""}],
            total: 5,
            firstLoad: false,
            keyword: "",
            loadshow: false,
            tj: [],
            rewardedVideoAd: null,
            posterImg: "",
            winWidth: 750,
            winHeight: 1114,
            show: false,
            qrimg: ""
        }
    }
}
</script>

<style scoped lang="scss">
.infobox.data-v-7535d82a {
    width: 100%;
    font-size: 28rpx;
    color: #333;
}

.tui-poster__box.data-v-7535d82a {
    width: 100%;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.tui-close__img.data-v-7535d82a {
    width: 48rpx;
    height: 48rpx;
    position: absolute;
    right: 0;
    top: -60rpx;
}

.tui-poster__img.data-v-7535d82a {
    width: 560rpx;
    height: 890rpx;
    border-radius: 20rpx;
    margin-bottom: 40rpx;
}

.tui-share__tips.data-v-7535d82a {
    font-size: 24rpx;
    transform: scale(.8);
    transform-origin: center center;
    color: #fff;
    padding-top: 12rpx;
}

.topkuang.data-v-7535d82a {
    padding: 30rpx;
    background-color: #0af;
}

.topkuang .bgicon.data-v-7535d82a {
    position: absolute;
    width: 600rpx;
    height: 467rpx;
    margin-top: -220rpx;
    margin-left: 120rpx;
    opacity: .4;
    z-index: 0;
}

.topkuang .dqjf.data-v-7535d82a {
    font-size: 32rpx;
    color: #fff;
}

.topkuang .dqjf .fen.data-v-7535d82a {
    font-size: 62rpx;
    font-weight: bolder;
}

.topkuang .ljjf.data-v-7535d82a {
    padding: 40rpx 50rpx 120rpx 50rpx;
    color: #fff;
}

.topkuang .ljjf .fen.data-v-7535d82a {
    color: #fff;
    font-size: 32rpx;
}

.xiakuang.data-v-7535d82a {
    position: relative;
    z-index: 999;
    margin: -98rpx 30rpx 30rpx 30rpx;
}

.xiakuang .sglist.data-v-7535d82a {
    padding: 20rpx 30rpx;
    border-bottom: 1rpx solid #e0e6f7;
}

.xiakuang .sglist .title.data-v-7535d82a {
    padding: 6rpx 0;
    color: #697588;
}

.xiakuang .sglist .time.data-v-7535d82a {
    padding: 6rpx 0;
    color: #8797af;
}

.xiakuang .images.data-v-7535d82a {
    width: 40rpx;
    height: 40rpx;
    margin-right: 16rpx;
}

.xiakuang .nei.data-v-7535d82a {
    padding: 10rpx 0rpx;
}

.xiakuang .z1.data-v-7535d82a {
    border-top-left-radius: 20rpx;
}

.xiakuang .y1.data-v-7535d82a {
    border-top-right-radius: 20rpx;
}

.xiakuang .dhbj1.data-v-7535d82a {
    width: 50%;
    background-color: #fff;
    color: #ff0004;
    font-weight: bolder;
    font-size: 32rpx;
}

.xiakuang .dhbj2.data-v-7535d82a {
    width: 50%;
    padding: 30rpx 50rpx;
    background-color: #f3f3f3;
    color: #868686;
    font-size: 32rpx;
}

.bjk.data-v-7535d82a {
    background: linear-gradient(80deg, #2e77ff, #13d8ff);
}

.bjk1.data-v-7535d82a {
    padding: 20rpx 30rpx;
    background-color: #f3f3f3;
    border-radius: 20rpx;
}

.img.data-v-7535d82a {
    width: 120rpx;
    height: 120rpx;
    margin-right: 20rpx;
}

.bnt1.data-v-7535d82a {
    background: linear-gradient(90deg, #ffde39, #ffca0b);
    padding: 20rpx 35rpx;
    border-radius: 100rpx;
}

.bjtitle.data-v-7535d82a {
    font-size: 34rpx;
    font-weight: 700;
}

.bjdesc.data-v-7535d82a {
    margin-top: 10rpx;
    font-size: 28rpx;
    color: #919191;
}
</style>