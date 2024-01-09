<template>
    <view class="infobox data-v-7ae879b6">
        <view class="kuangtop data-v-7ae879b6">
            <view class="daohang data-v-7ae879b6">
                <u-tabs :activeItemStyle="barstyle" class="data-v-7ae879b6" :current="current" :duration="0" fontSize="28"
                    :height="65" :isScroll="false"  @change="change" :list="barlist" :showBar="false"></u-tabs>
            </view>
        </view>
        <view class="kuang data-v-7ae879b6">
            <view class="data-v-7ae879b6" v-if="total">
                <view class="wq_kuang data-v-7ae879b6" v-if="current === 0">
                    <view class="acea-row row-right adwk data-v-7ae879b6">
                        <view class="lkfb1 acea-row row-middle data-v-7ae879b6">
                            <tui-icon class="data-v-7ae879b6" color="#ffffff" name="evaluate" size="18"></tui-icon>
                            <text class="data-v-7ae879b6" style="margin-left:10rpx;" @click="toPage('/pages/addQun/index')">发布微群</text>
                        </view>
                    </view>
                    <view class="list sousuo data-v-7ae879b6" v-for="(item, index) in list" :key="index">
                        <view class="acea-row row-between-wrapper leftk data-v-7ae879b6">
                            <view class="left acea-row data-v-7ae879b6">
                                <view class="acea-row row-center-wrapper data-v-7ae879b6">
                                    <image class="img data-v-7ae879b6"
                                        :src="item.ewm ? `data:image/jpeg;base64,${item.ewm}` : '../../static/img/300-200.png'">
                                    </image>
                                </view>
                                <view class="wenzi data-v-7ae879b6">
                                    <view class="acea-row data-v-7ae879b6">
                                        <view class="acea-row row-center-wrapper data-v-7ae879b6">
                                            <image class="images data-v-7ae879b6" src="../../static/img/grwx.png"
                                                v-if="item.catid == 90"></image>
                                            <image class="images data-v-7ae879b6" src="../../static/img/qywx.png"
                                                v-if="item.catid == 91"></image>
                                        </view>
                                        <view class="bt text_display data-v-7ae879b6"> {{ item.name }} </view>
                                    </view>
                                    <view class="xia acea-row data-v-7ae879b6">
                                        <view class="acea-row row-middle data-v-7ae879b6">
                                            <tui-icon class="data-v-7ae879b6" color="#adadad" name="friendadd"
                                                size="16"></tui-icon>
                                            <text class="data-v-7ae879b6" style="margin-left:6rpx;">{{ item.peopleNum +
                                                '人' }}</text>
                                        </view>
                                        <view class="acea-row row-middle data-v-7ae879b6" style="margin-left:10rpx;">
                                            <tui-icon class="data-v-7ae879b6" color="#adadad" name="clock"
                                                size="16"></tui-icon>
                                            <text class="data-v-7ae879b6" style="margin-left:6rpx;">
                                                刚刚 </text>
                                        </view>
                                        <view class="acea-row row-middle data-v-7ae879b6" style="margin-left:14rpx;">
                                            <view class="bnt2 data-v-7ae879b6">置顶</view>
                                        </view>
                                    </view>
                                </view>
                            </view>
                            <view class="data-v-7ae879b6">
                                <view class="dibu_yuan data-v-7ae879b6" v-if="item.status == 0">审核中</view>
                                <view class="dibu_yuan1 data-v-7ae879b6" v-if="item.status == 1">通过</view>
                                <view class="dibu_yuan2 data-v-7ae879b6" v-if="item.status == 2">拒绝</view>
                            </view>
                        </view>
                        <view class="m_top_20 acea-row row-between-wrapper data-v-7ae879b6">
                            <view class="toptime data-v-7ae879b6">
                                <view class="data-v-7ae879b6">置顶:<text class="data-v-7ae879b6"
                                        style="color:#ff0000;margin-left:10rpx;">{{ item.top_time }}</text>
                                </view>
                            </view>
                            <view class="acea-row data-v-7ae879b6">
                                <view class="bnt data-v-7ae879b6">置顶</view>
                            </view>
                        </view>
                    </view>
                </view>
                <view class="card_kuang data-v-7ae879b6" v-if="current === 1">
                    <view class="acea-row row-right adwk data-v-7ae879b6">
                        <view class="lkfb1 acea-row row-middle data-v-7ae879b6">
                            <tui-icon class="data-v-7ae879b6" color="#ffffff" name="evaluate" size="18"></tui-icon>
                            <text class="data-v-7ae879b6" style="margin-left:10rpx;" @click="toPage('/pages/addCard/index')">发布个人名片</text>
                        </view>
                    </view>
                    <view class="list sousuo data-v-7ae879b6" v-for="(item, index) in list" :key="index">
                        <view class="acea-row row-between-wrapper leftk data-v-7ae879b6">
                            <view class="left acea-row data-v-7ae879b6">
                                <view class="acea-row row-center-wrapper data-v-7ae879b6">
                                    <image class="img data-v-7ae879b6"
                                        src="item.avatar?item.avatar:'../../static/img/300-200.png'">
                                    </image>
                                </view>
                                <view class="wenzi data-v-7ae879b6">
                                    <view class="acea-row data-v-7ae879b6">
                                        <view class="acea-row row-center-wrapper data-v-7ae879b6">
                                            <image class="images data-v-7ae879b6" src="../../static/img/nan_3.png"
                                                v-if="item.sex == '男'"></image>
                                            <image class="images data-v-7ae879b6" src="../../static/img/nv_1.png"
                                                v-if="item.sex == '女'"></image>
                                        </view>
                                        <view class="bt text_display data-v-7ae879b6"> {{ item.name }} </view>
                                    </view>
                                    <view class="xia acea-row data-v-7ae879b6">
                                        <view class="acea-row row-middle data-v-7ae879b6">
                                            <tui-icon class="data-v-7ae879b6" color="#adadad" name="clock"
                                                size="16"></tui-icon>
                                            <text class="data-v-7ae879b6" style="margin-left:6rpx;">
                                                {{ item.refresh_time }} </text>
                                        </view>
                                        <view class="acea-row row-middle data-v-7ae879b6" style="margin-left:14rpx;"
                                            v-if="item.top_time">
                                            <view class="bnt2 data-v-7ae879b6">置顶</view>
                                        </view>
                                    </view>
                                    <view class="diqu text_display data-v-7ae879b6">{{ '' + item.province + ' ' +item.city+' '+item.district+'' }}</view>
                                </view>
                            </view>
                            <view class="data-v-7ae879b6">
                                <view class="dibu_yuan data-v-7ae879b6" v-if="item.status == 0">审核中</view>
                                <view class="dibu_yuan1 data-v-7ae879b6" v-if="item.status == 1">通过</view>
                                <view class="dibu_yuan2 data-v-7ae879b6" v-if="item.status == 2">拒绝</view>
                            </view>
                        </view>
                        <view class="m_top_20 acea-row row-between-wrapper data-v-7ae879b6">
                            <view class="toptime data-v-7ae879b6">
                                <view class="data-v-7ae879b6" v-if="item.top_time">置顶:<text class="data-v-7ae879b6"
                                        style="color:#ff0000;margin-left:10rpx;">
                                        {{ item.top_time }} </text>
                                </view>
                            </view>
                            <view class="acea-row data-v-7ae879b6">
                                <view class="bnt data-v-7ae879b6" v-if="item.status == 1">置顶</view>
                            </view>
                        </view>
                    </view>
                </view>
                <view class="pyq_kuang data-v-7ae879b6" v-if="current === 2">
                    <view class="acea-row row-right adwk data-v-7ae879b6">
                        <view class="lkfb1 acea-row row-middle data-v-7ae879b6">
                            <tui-icon class="data-v-7ae879b6" color="#ffffff" name="evaluate" size="18"></tui-icon>
                            <text class="data-v-7ae879b6" style="margin-left:10rpx;" @click="toPage('/pages/addFind/index')">发布朋友圈</text>
                        </view>
                    </view>
                    <view class="wk acea-row data-v-7ae879b6" v-for="(item, index) in list" :key="index">
                        <view class="pyq_l data-v-7ae879b6">
                            <image class="img data-v-7ae879b6" mode="aspectFill"
                                :src="item.user_img ? item.user_img : '/static/img/300-300.jpg'"></image>
                        </view>
                        <view class="pyq_r data-v-7ae879b6">
                            <view class="acea-row row-middle data-v-7ae879b6">
                                <view class="title acea-row data-v-7ae879b6"> {{ item.user_name }} </view>
                                <view class="acea-row row-middle data-v-7ae879b6" style="margin-left:14rpx;"
                                    v-if="item.top_time">
                                    <view class="bnt2 data-v-7ae879b6">置顶</view>
                                </view>
                            </view>
                            <view class="content data-v-7ae879b6"> {{ '' + item.title + '' }} </view>
                            <view class="taotu acea-row data-v-7ae879b6" v-if="item.imgnum <= 1">
                                <view class="taotu_k2 data-v-7ae879b6">
                                    <image class="img _img data-v-7ae879b6" mode="widthFix" :src="item[0]">
                                    </image>
                                </view>
                            </view>
                            <view class="taotu acea-row data-v-7ae879b6" v-else>
                                <view class="taotu_k1 data-v-7ae879b6" v-for="(item1, index1) in item"
                                    :key="index1">
                                    <image class="img _img data-v-7ae879b6" mode="aspectFill" :src="item1"></image>
                                </view>
                            </view>
                            <view class="dibu acea-row row-between-wrapper data-v-7ae879b6">
                                <view class="dibu_l data-v-7ae879b6"> {{ item.time }} </view>
                                <view class="dibu_r acea-row data-v-7ae879b6">
                                    <view class="bnt data-v-7ae879b6" style="margin-right:20rpx;"
                                        v-if="item.status == 1">置顶</view>
                                    <view class="dibu_yuan data-v-7ae879b6" v-if="item.status == 0">审核中</view>
                                    <view class="dibu_yuan1 data-v-7ae879b6" v-if="item.status == 1">已通过</view>
                                    <view class="dibu_yuan2 data-v-7ae879b6" v-if="item.status == 2">拒绝</view>
                                </view>
                            </view>
                        </view>
                    </view>
                </view>
                <view class="m_top_50 data-v-7ae879b6">
                    <u-loadmore class="data-v-7ae879b6" :loadText="loadText" :status="status"></u-loadmore>
                </view>
            </view>
            <view class="acea-row row-center-wrapper m_top_60 data-v-7ae879b6" v-else>
                <view class="data-v-7ae879b6" style="width:100%;">
                    <u-empty class="data-v-7ae879b6" mode="list" text="暂无数据"></u-empty>
                </view>
                <view class="adwk data-v-7ae879b6" v-if="current === 0" @click="toPage('/pages/addQun/index')">
                    <view class="lkfb data-v-7ae879b6">发布微群</view>
                </view>
                <view class="adwk data-v-7ae879b6" v-if="current === 1" @click="toPage('/pages/addCard/index')">
                    <view class="lkfb data-v-7ae879b6">发布个人名片</view>
                </view>
                <view class="adwk data-v-7ae879b6" v-if="current === 2" @click="toPage('/pages/addFind/index')">
                    <view class="lkfb data-v-7ae879b6">发布朋友圈</view>
                </view>
            </view>
        </view>
    </view>
</template>

<script>
export default {
    data() {
        return {
            adshow: false,
            adtclist: [],
            topshow: false,
            toplist: [],
            topname: "",
            topcid: 0,
            topid: 0,
            barstyle: {
                "border-radius": "100rpx",
                background: "#55aaff",
                color: "#ffffff"
            },
            barlist: [{
                name: "微群"
            }, {
                name: "个人名片"
            }, {
                name: "朋友圈"
            }],
            current: 0,
            status: "loadmore",
            loadText: {
                loadmore: "上拉加载更多",
                loading: "加载数据中",
                nomore: "我是有底线的"
            },
            q_page: 1,
            list: [],
            total: 0,
            firstLoad: false,
            keyword: "",
            tags: "",
            loadshow: false,
            modal: false,
            buttonstyle: [{
                text: "取消",
                type: "white",
                plain: false
            }, {
                text: "立即前往",
                type: "primary",
                plain: false
            }]
        }
    },
    created(){
        this.getList()
    },
    methods: {
        change(index){
            if(this.current === index)return;
            this.current = index
            this.list = []
            this.getList()
        },
        toPage(url) {
            uni.navigateTo({
                url
            })
        },
        getList(){
            this.$ajax({
                url: "/weiqun-list/getAllList"
            }).then(res => {
                this.list = res.data
                this.total = this.list.length
            })
        }
    }
}
</script>

<style scoped lang="scss">
.infobox.data-v-7ae879b6 {
    width: 100%;
    font-size: 28rpx;
    color: #333;
}

.adwk.data-v-7ae879b6 {
    margin: 20rpx 24rpx 24rpx 24rpx;
}

.adwk .lkfb.data-v-7ae879b6 {
    padding: 20rpx 80rpx;
    background-color: #5af;
    border-radius: 1000rpx;
    color: #fff;
    text-align: center;
    font-size: 32rpx;
}

.adwk .lkfb1.data-v-7ae879b6 {
    padding: 16rpx 40rpx;
    background-color: #5af;
    border-radius: 1000rpx;
    color: #fff;
    text-align: center;
}

.kuangtop.data-v-7ae879b6 {
    margin: 20rpx 28rpx 0 28rpx;
    padding: 0rpx 40rpx 20rpx 40rpx;
    background-color: #fff;
    border-radius: 10rpx;
}

.tanchu.data-v-7ae879b6 {
    padding: 20rpx 40rpx;
}

.top .search.data-v-7ae879b6 {
    width: 83%;
    padding: 0rpx 25rpx;
    background-color: #f1f1f1;
    border-radius: 10rpx;
}

.top .fabu.data-v-7ae879b6 {
    color: #fff;
    padding: 20rpx 20rpx;
    background-color: #ff557f;
    border-radius: 10rpx;
}

.daohang.data-v-7ae879b6 {
    padding: 20rpx 0 0rpx 0;
}

.kuang.data-v-7ae879b6 {
    padding: 0rpx 10rpx 40rpx 10rpx;
}

.kuang .ad_kuang .sousuo.data-v-7ae879b6 {
    margin: 28rpx 20rpx;
    border-radius: 16rpx;
    background-color: #fff;
}

.kuang .ad_kuang .list.data-v-7ae879b6 {
    padding: 30rpx 30rpx;
}

.kuang .ad_kuang .list .left.data-v-7ae879b6 {
    padding-bottom: 40rpx;
    border-bottom: #e3eef1 dashed 1px;
}

.kuang .ad_kuang .list .left .img.data-v-7ae879b6 {
    border-radius: 20rpx;
    width: 160rpx;
    height: 160rpx;
    box-shadow: 5rpx 6rpx 8rpx 0rpx #e5e5e5;
}

.kuang .ad_kuang .list .left .wenzi.data-v-7ae879b6 {
    margin-left: 30rpx;
}

.kuang .ad_kuang .list .left .wenzi .images.data-v-7ae879b6 {
    width: 32rpx;
    height: 32rpx;
}

.kuang .ad_kuang .list .left .wenzi .bt.data-v-7ae879b6 {
    width: 380rpx;
    font-size: 30rpx;
    margin-left: 10rpx;
    font-weight: 700;
}

.kuang .ad_kuang .list .left .xia.data-v-7ae879b6 {
    margin-top: 20rpx;
    font-size: 24rpx;
    color: #919191;
}

.kuang .ad_kuang .list .left .diqu.data-v-7ae879b6 {
    margin-top: 20rpx;
    font-size: 24rpx;
}

.kuang .ad_kuang .list .bnt.data-v-7ae879b6 {
    font-weight: 700;
    padding: 16rpx 30rpx;
    background-color: #e4f3ff;
    color: #3c76ff;
    border-radius: 50rpx;
}

.kuang .ad_kuang .list .bnt1.data-v-7ae879b6 {
    font-weight: 700;
    padding: 16rpx 30rpx;
    background-color: #f3f3f3;
    color: #a3a3a3;
    border-radius: 50rpx;
}

.kuang .ad_kuang .list .bnt2.data-v-7ae879b6 {
    padding: 8rpx 22rpx;
    background-color: #ffeaeb;
    color: #e23134;
    border-radius: 100rpx;
}

.kuang .ad_kuang .list .bnt3.data-v-7ae879b6 {
    margin-left: 20rpx;
    padding: 8rpx 22rpx;
    background-color: #e1ffe9;
    color: #13c500;
    border-radius: 100rpx;
}

.kuang .card_kuang .toptime.data-v-7ae879b6 {
    font-size: 24rpx;
    color: #818181;
}

.kuang .card_kuang .sousuo.data-v-7ae879b6 {
    margin: 28rpx 20rpx;
    border-radius: 16rpx;
    background-color: #fff;
}

.kuang .card_kuang .list.data-v-7ae879b6 {
    padding: 30rpx 30rpx;
}

.kuang .card_kuang .list .leftk.data-v-7ae879b6 {
    padding-bottom: 40rpx;
    border-bottom: #e3eef1 dashed 1px;
}

.kuang .card_kuang .list .left .img.data-v-7ae879b6 {
    border-radius: 100rpx;
    width: 140rpx;
    height: 140rpx;
    box-shadow: 5rpx 6rpx 8rpx 0rpx #e5e5e5;
}

.kuang .card_kuang .list .left .wenzi.data-v-7ae879b6 {
    margin-left: 30rpx;
}

.kuang .card_kuang .list .left .wenzi .images.data-v-7ae879b6 {
    width: 32rpx;
    height: 32rpx;
}

.kuang .card_kuang .list .left .wenzi .bt.data-v-7ae879b6 {
    width: 240rpx;
    font-size: 30rpx;
    margin-left: 10rpx;
    font-weight: 700;
}

.kuang .card_kuang .list .left .xia.data-v-7ae879b6 {
    margin-top: 16rpx;
    font-size: 24rpx;
    color: #919191;
}

.kuang .card_kuang .list .left .diqu.data-v-7ae879b6 {
    width: 240rpx;
    margin-top: 16rpx;
    font-size: 24rpx;
    color: #919191;
}

.kuang .card_kuang .list .bnt.data-v-7ae879b6 {
    font-weight: 700;
    padding: 10rpx 30rpx;
    background-color: #e4f3ff;
    color: #3c76ff;
    border-radius: 50rpx;
}

.kuang .card_kuang .list .bnt1.data-v-7ae879b6 {
    font-weight: 700;
    padding: 16rpx 30rpx;
    background-color: #f3f3f3;
    color: #a3a3a3;
    border-radius: 50rpx;
}

.kuang .card_kuang .list .bnt2.data-v-7ae879b6 {
    padding: 2rpx 10rpx;
    background-color: #ffeaeb;
    color: #e23134;
    border-radius: 10rpx;
}

.kuang .wq_kuang .toptime.data-v-7ae879b6 {
    font-size: 24rpx;
    color: #818181;
}

.kuang .wq_kuang .sousuo.data-v-7ae879b6 {
    margin: 28rpx 20rpx;
    border-radius: 16rpx;
    background-color: #fff;
}

.kuang .wq_kuang .list.data-v-7ae879b6 {
    padding: 30rpx 30rpx;
}

.kuang .wq_kuang .list .leftk.data-v-7ae879b6 {
    padding-bottom: 40rpx;
    border-bottom: #e3eef1 dashed 1px;
}

.kuang .wq_kuang .list .left .img.data-v-7ae879b6 {
    border-radius: 20rpx;
    width: 95rpx;
    height: 95rpx;
}

.kuang .wq_kuang .list .left .wenzi.data-v-7ae879b6 {
    margin-left: 30rpx;
}

.kuang .wq_kuang .list .left .wenzi .images.data-v-7ae879b6 {
    width: 32rpx;
    height: 32rpx;
}

.kuang .wq_kuang .list .left .wenzi .bt.data-v-7ae879b6 {
    width: 290rpx;
    font-size: 30rpx;
    margin-left: 10rpx;
    font-weight: 700;
}

.kuang .wq_kuang .list .left .xia.data-v-7ae879b6 {
    margin-top: 16rpx;
    font-size: 24rpx;
    color: #919191;
}

.kuang .wq_kuang .list .bnt.data-v-7ae879b6 {
    font-weight: 700;
    padding: 10rpx 30rpx;
    background-color: #e4f3ff;
    color: #3c76ff;
    border-radius: 50rpx;
    text-align: center;
}

.kuang .wq_kuang .list .bnt1.data-v-7ae879b6 {
    font-weight: 700;
    padding: 16rpx 30rpx;
    background-color: #f3f3f3;
    color: #a3a3a3;
    border-radius: 50rpx;
    text-align: center;
}

.kuang .wq_kuang .list .bnt2.data-v-7ae879b6 {
    padding: 2rpx 10rpx;
    background-color: #ffeaeb;
    color: #e23134;
    border-radius: 10rpx;
    text-align: center;
}

.kuang .dibu_yuan.data-v-7ae879b6 {
    padding: 16rpx 30rpx;
    background-color: #f1f1f1;
    border-radius: 50rpx;
    color: #818181;
    text-align: center;
}

.kuang .dibu_yuan1.data-v-7ae879b6 {
    padding: 16rpx 30rpx;
    background-color: #eeffe7;
    border-radius: 50rpx;
    color: #5a0;
    text-align: center;
}

.kuang .dibu_yuan2.data-v-7ae879b6 {
    padding: 16rpx 30rpx;
    background-color: #fff6f6;
    border-radius: 50rpx;
    color: red;
    text-align: center;
}

.kuang .pyq_kuang .bnt.data-v-7ae879b6 {
    font-weight: 700;
    padding: 16rpx 30rpx;
    background-color: #e4f3ff;
    color: #3c76ff;
    border-radius: 50rpx;
}

.kuang .pyq_kuang .wk.data-v-7ae879b6 {
    margin: 28rpx 20rpx;
    background-color: #fff;
    padding: 30rpx 30rpx;
    border-radius: 10rpx;
}

.kuang .pyq_kuang .pyq_l.data-v-7ae879b6 {
    width: 18%;
}

.kuang .pyq_kuang .pyq_l .img.data-v-7ae879b6 {
    object-fit: fill;
    width: 80rpx;
    height: 80rpx;
    border-radius: 10rpx;
}

.kuang .pyq_kuang .pyq_r.data-v-7ae879b6 {
    width: 82%;
}

.kuang .pyq_kuang .pyq_r .title.data-v-7ae879b6 {
    font-weight: 800;
    font-size: 32rpx;
    color: #00264a;
}

.kuang .pyq_kuang .pyq_r .title_btn.data-v-7ae879b6 {
    margin-left: 20rpx;
    font-size: 24rpx;
    padding: 4rpx 10rpx;
    border-radius: 10rpx;
    background-color: #ff557f;
    color: #fff;
}

.kuang .pyq_kuang .pyq_r .data-v-7ae879b6 {
    padding: 25rpx 0;
    line-height: 50rpx;
    font-size: 30rpx;
}

.kuang .pyq_kuang .pyq_r .taotu.data-v-7ae879b6 {
    margin-top: 5rpx;
}

.kuang .pyq_kuang .pyq_r .taotu .taotu_k1.data-v-7ae879b6 {
    display: flex;
    margin-bottom: 12rpx;
    margin-right: 12rpx;
}

.kuang .pyq_kuang .pyq_r .taotu .taotu_k1 .img.data-v-7ae879b6 {
    object-fit: cover;
    width: 158rpx;
    height: 158rpx;
    border-radius: 10rpx;
    border: 1rpx solid #f0f0f0;
}

.kuang .pyq_kuang .pyq_r .taotu .taotu_k2.data-v-7ae879b6 {
    margin-bottom: 12rpx;
    margin-right: 12rpx;
    width: 420rpx;
}

.kuang .pyq_kuang .pyq_r .taotu .taotu_k2 .img.data-v-7ae879b6 {
    max-width: 100%;
    max-height: 100%;
    border-radius: 10rpx;
    border: 1rpx solid #f0f0f0;
}

.kuang .pyq_kuang .pyq_r .dibu.data-v-7ae879b6 {
    padding: 30rpx 0 10rpx 0;
}

.kuang .pyq_kuang .pyq_r .dibu .dibu_l.data-v-7ae879b6 {
    color: #b4b4b4;
}

.kuang .pyq_kuang .pyq_r .dibu .dibu_zhong.data-v-7ae879b6 {
    position: relative;
    width: 260rpx;
}

.kuang .pyq_kuang .bnt2.data-v-7ae879b6 {
    padding: 8rpx 22rpx;
    background-color: #ffeaeb;
    color: #e23134;
    border-radius: 100rpx;
    font-size: 24rpx;
}

.kuang .article .tui-order-list.data-v-7ae879b6 {
    width: 100%;
    box-sizing: border-box;
    display: flex;
    align-items: center;
}

.kuang .article .tui-flex-wrap.data-v-7ae879b6 {
    flex-wrap: wrap;
}

.kuang .article .tui-tool-item.data-v-7ae879b6 {
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding-top: 30rpx;
}

.kuang .article .outk.data-v-7ae879b6 {
    width: 330rpx;
    height: 200rpx;
    position: absolute;
    overflow: hidden;
}

.kuang .article .outk .sellout.data-v-7ae879b6 {
    top: 0;
    left: 0;
    width: 200rpx;
    height: 44rpx;
    margin-left: -66rpx;
    margin-top: 10rpx;
    background-color: #ff557f;
    text-align: center;
    position: absolute;
    transform: rotate(-46deg);
    color: #fff;
}

.kuang .article .tui-tool-icon.data-v-7ae879b6 {
    width: 330rpx;
    height: 200rpx;
    display: block;
    object-fit: cover;
    border-top-left-radius: 20rpx;
    border-top-right-radius: 20rpx;
}

.kuang .article .tui-tool-text.data-v-7ae879b6 {
    width: 330rpx;
    height: 170rpx;
    background-color: #fff;
    border-bottom-left-radius: 20rpx;
    border-bottom-right-radius: 20rpx;
    padding: 20rpx 20rpx;
}

.kuang .article .tui-tool-text .title.data-v-7ae879b6 {
    height: 76rpx;
}

.kuang .article .tui-tool-text .xia.data-v-7ae879b6 {
    margin-top: 16rpx;
    color: #9e9e9e;
    font-size: 26rpx;
}
</style>