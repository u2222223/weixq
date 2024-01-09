<template>
  <view class="infobox data-v-94c14548">
    <view class="ddcontent data-v-94c14548">
      <view class="jiange data-v-94c14548">
        <view class="acea-row row-between-wrapper m_top_20 data-v-94c14548">
          <view class="touxiang acea-row row-middle data-v-94c14548">
            <view class="data-v-94c14548">
              <image class="img data-v-94c14548" :src="userInfo.avatar ? userInfo.avatar : '/static/img/login.png'">
              </image>
            </view>
            <view class="nc_y data-v-94c14548" v-if="userInfo.group_name">
              <view class="nc p10 text_display data-v-94c14548" v-if="userInfo.nickname">{{ userInfo.nickname }}
              </view>
              <view class="nc p10 text_display data-v-94c14548" v-else>点击修改昵称</view>
              <view class="xnc p10 acea-row row-middle data-v-94c14548">
                <image class="icon data-v-94c14548" src="/static/img/vip.png" v-if="userInfo.group_time"></image>
                <view class="title text_display data-v-94c14548">{{ userInfo.group_name }}</view>
              </view>
            </view>
            <view class="nc_y data-v-94c14548" v-else>
              <view class="nc p10 data-v-94c14548">登录/注册</view>
              <view class="xnc p10 data-v-94c14548">每天都有好心情~</view>
            </view>
          </view>
          <view class="qiandao data-v-94c14548">签到</view>
        </view>
        <view class="jifen m_top_20 acea-row row-between-wrapper data-v-94c14548">
          <view class="jifen_k data-v-94c14548"  @click="toPage('/pages/rewardbill/index')">
            <view class="jifen_sz data-v-94c14548">{{ brokerage_price }}</view>
            <view class="jifen_wz data-v-94c14548">佣金</view>
          </view>
          <view class="jifen_k data-v-94c14548"  @click="toPage('/pages/integral/index')">
            <view class="jifen_sz data-v-94c14548">{{ integral }}</view>
            <view class="jifen_wz data-v-94c14548">积分</view>
          </view>
          <view class="jifen_k data-v-94c14548">
            <view class="jifen_sz data-v-94c14548">{{ team }}</view>
            <view class="jifen_wz data-v-94c14548">好友</view>
          </view>
        </view>
        <view class="data-v-94c14548">
          <view class="vip m_top_30 acea-row row-between-wrapper data-v-94c14548" v-if="userInfo.vip_time">
            <view class="data-v-94c14548">
              <view class="vip_t data-v-94c14548">{{ '尊敬的:' + userInfo.group_name }}</view>
              <view class="vip_wz data-v-94c14548">{{ userInfo.vip_time }}</view>
            </view>
            <view class="vip_btn acea-row data-v-94c14548">立即升级</view>
          </view>
          <view class="vip m_top_30 acea-row row-between-wrapper data-v-94c14548">
            <view class="data-v-94c14548">
              <view class="vip_t data-v-94c14548">开通会员</view>
              <view class="vip_wz data-v-94c14548">百万社群与您共享</view>
            </view>
            <view class="vip_btn acea-row data-v-94c14548">立即开通</view>
          </view>
        </view>
        <view class="yaoqing acea-row row-between-wrapper m_top_20 data-v-94c14548">
          <view class="bjk yaoqing_l acea-row row-between-wrapper data-v-94c14548">
            <view class="acea-row row-between-wrapper data-v-94c14548">
              <view class="data-v-94c14548">
                <image class="acea-row row-middle yaoqing_l_icon data-v-94c14548" src="/static/img/icon_jihuo.png">
                </image>
              </view>
              <view class="l_wz data-v-94c14548">激活码激活</view>
            </view>
            <view class="icon_r acea-row row-middle data-v-94c14548">
              <tui-icon class="data-v-94c14548" color="#cbcbcb" name="arrowright" size="24"></tui-icon>
            </view>
          </view>
          <view class="bjk yaoqing_l acea-row row-between-wrapper data-v-94c14548">
            <view class="acea-row row-between-wrapper data-v-94c14548">
              <view class="data-v-94c14548">
                <image class="acea-row row-middle yaoqing_l_icon data-v-94c14548" src="/static/img/icon_yaoqing.png">
                </image>
              </view>
              <view class="l_wz data-v-94c14548">填写邀请码</view>
            </view>
            <view class="icon_r acea-row row-middle data-v-94c14548">
              <tui-icon class="data-v-94c14548" color="#cbcbcb" name="arrowright" size="24"></tui-icon>
            </view>
          </view>
        </view>
        <view class="bjk2 m_top_20 data-v-94c14548">
          <view class="tiaok acea-row row-between-wrapper data-v-94c14548">
            <view class="z_title acea-row row-middle data-v-94c14548">
              <image class="icon data-v-94c14548" src="/static/img/user_3.png"></image>
              <view class="data-v-94c14548">邀请码</view>
            </view>
            <view class="y_title acea-row row-middle data-v-94c14548">
              <text class="data-v-94c14548">复制</text>
              <text class="y_jifen data-v-94c14548" style="margin-left:20rpx;">{{ userInfo.code }}</text>
              <tui-icon class="data-v-94c14548" color="#cbcbcb" name="arrowright" size="24"></tui-icon>
            </view>
          </view>
          <view class="tiaok acea-row row-between-wrapper data-v-94c14548">
            <view class="z_title acea-row row-middle data-v-94c14548">
              <image class="icon data-v-94c14548" src="/static/img/user_18.png"></image>
              <view class="data-v-94c14548">积分充值</view>
            </view>
            <view class="y_title acea-row row-middle data-v-94c14548">
              <tui-icon class="data-v-94c14548" color="#cbcbcb" name="arrowright" size="24"></tui-icon>
            </view>
          </view>
          <view class="tiaok acea-row row-between-wrapper data-v-94c14548" @click="toPage('/pages/myPosted/index')">
            <view class="z_title acea-row row-middle data-v-94c14548">
              <image class="icon data-v-94c14548" src="/static/img/user_14.png"></image>
              <view class="data-v-94c14548">我的发布</view>
            </view>
            <view class="y_title acea-row row-middle data-v-94c14548">
              <tui-icon class="data-v-94c14548" color="#cbcbcb" name="arrowright" size="24"></tui-icon>
            </view>
          </view>
          <view class="tiaok acea-row row-between-wrapper data-v-94c14548">
            <view class="z_title acea-row row-middle data-v-94c14548">
              <image class="icon data-v-94c14548" src="/static/img/user_15.png"></image>
              <view class="data-v-94c14548">我的好友</view>
            </view>
            <view class="y_title acea-row row-middle data-v-94c14548">
              <tui-icon class="data-v-94c14548" color="#cbcbcb" name="arrowright" size="24"></tui-icon>
            </view>
          </view>
          <view class="tiaok acea-row row-between-wrapper data-v-94c14548">
            <view class="z_title acea-row row-middle data-v-94c14548">
              <image class="icon data-v-94c14548" src="/static/img/user_13.png"></image>
              <view class="data-v-94c14548">充值明细</view>
            </view>
            <view class="y_title acea-row row-middle data-v-94c14548">
              <tui-icon class="data-v-94c14548" color="#cbcbcb" name="arrowright" size="24"></tui-icon>
            </view>
          </view>
        </view>
        <view class="bjk2 m_top_20 data-v-94c14548">
          <view class="tiaok acea-row row-between-wrapper data-v-94c14548">
            <view class="z_title acea-row row-middle data-v-94c14548">
              <image class="icon data-v-94c14548" src="/static/img/user_4.png"></image>
              <view class="data-v-94c14548">账号管理</view>
            </view>
            <view class="y_title acea-row row-middle data-v-94c14548">
              <tui-icon class="data-v-94c14548" color="#cbcbcb" name="arrowright" size="24"></tui-icon>
            </view>
          </view>
          <view class="tiaok acea-row row-between-wrapper data-v-94c14548">
            <view class="z_title acea-row row-middle data-v-94c14548">
              <image class="icon data-v-94c14548" src="../../static/img/user_2.png"></image>
              <button class="fx data-v-94c14548" hoverClass="none" openType="share">分享给朋友</button>
            </view>
            <view class="y_title acea-row row-middle data-v-94c14548">
              <tui-icon class="data-v-94c14548" color="#cbcbcb" name="arrowright" size="24"></tui-icon>
            </view>
          </view>
          <view class="tiaok acea-row row-between-wrapper data-v-94c14548">
            <view class="z_title acea-row row-middle data-v-94c14548">
              <image class="icon data-v-94c14548" src="../../static/img/user_5.png"></image>
              <view class="data-v-94c14548" @click="showPopup">联系客服</view>
            </view>
            <view class="y_title acea-row row-middle data-v-94c14548">
              <tui-icon class="data-v-94c14548" color="#cbcbcb" name="arrowright" size="24"></tui-icon>
            </view>
          </view>
          <view class="tiaok acea-row row-between-wrapper data-v-94c14548" @click="toPage('/pages/userAgreement/index')">
            <view class="z_title acea-row row-middle data-v-94c14548">
              <image class="icon data-v-94c14548" src="../../static/img/user_6.png"></image>
              <view class="data-v-94c14548">用户协议</view>
            </view>
            <view class="y_title acea-row row-middle data-v-94c14548">
              <tui-icon class="data-v-94c14548" color="#cbcbcb" name="arrowright" size="24"></tui-icon>
            </view>
          </view>
          <view class="tiaok acea-row row-between-wrapper data-v-94c14548" @click="toPage('/pages/privacyAgreement/index')">
            <view class="z_title acea-row row-middle data-v-94c14548">
              <image class="icon data-v-94c14548" src="../../static/img/user_7.png"></image>
              <view class="data-v-94c14548">隐私协议</view>
            </view>
            <view class="y_title acea-row row-middle data-v-94c14548">
              <tui-icon class="data-v-94c14548" color="#cbcbcb" name="arrowright" size="24"></tui-icon>
            </view>
          </view>
        </view>
        <view class="dibu data-v-94c14548">{{ 'Version:' + version }}</view>
      </view>
    </view>
    <u-popup borderRadius="10" class="data-v-94c14548" :closeable="true" height="570" mode="center" :value="tcshow"
      width="500">
      <view class="tc_kuang data-v-94c14548" v-if="tctype == 1">
        <view class="acea-row row-center data-v-94c14548">
          <image class="img data-v-94c14548" :src="servicecode"></image>
        </view>
        <view class="text acea-row row-center data-v-94c14548">点击图片,长按识别二维码添加</view>
      </view>
      <view class="tc_kuang data-v-94c14548" v-if="tctype == 2">
        <view class="fxneirong data-v-94c14548">{{ '' + h5_share + '' }}</view>
        <view class="fuzhi1 acea-row row-center data-v-94c14548">一键复制,立刻分享</view>
      </view>
    </u-popup>
    <u-popup borderRadius="20" class="data-v-94c14548" height="500" mode="center" :value="vipshow" width="600">
      <view class="vip_kuang data-v-94c14548">
        <view class="top acea-row row-between-wrapper data-v-94c14548">
          <view class="data-v-94c14548">
            <view class="wenzi1 data-v-94c14548">激活码激活</view>
            <view class="wenzi2 data-v-94c14548">立即解锁整站内容</view>
          </view>
          <view class="icon data-v-94c14548">
            <tui-icon class="data-v-94c14548" color="#ffffff" name="member-fill" size="60"></tui-icon>
          </view>
        </view>
        <view class="zhong data-v-94c14548">
          <view class="shuru acea-row row-center data-v-94c14548">
            <u-input class="data-v-94c14548" :clearable="true" :customStyle="jh_style" placeholder="请输入激活码" type="text"
              :value="vip_value"></u-input>
          </view>
          <view class="btn_k acea-row row-between-wrapper data-v-94c14548">
            <view class="bj1 data-v-94c14548">
              取消</view>
            <view class="bj2 data-v-94c14548">提交
            </view>
          </view>
        </view>
      </view>
    </u-popup>
    <u-popup borderRadius="20" class="data-v-94c14548" height="500" mode="center" :value="yqshow" width="600">
      <view class="yq_kuang data-v-94c14548">
        <view class="top acea-row row-between-wrapper data-v-94c14548">
          <view class="data-v-94c14548">
            <view class="wenzi1 data-v-94c14548">绑定邀请码</view>
            <view class="wenzi2 data-v-94c14548">{{ '立刻获取' + relationpoint + '积分' }}</view>
          </view>
          <view class="icon data-v-94c14548">
            <tui-icon class="data-v-94c14548" color="#ffffff" name="pwd" size="60"></tui-icon>
          </view>
        </view>
        <view class="zhong data-v-94c14548">
          <view class="shuru acea-row row-center data-v-94c14548">
            <u-input class="data-v-94c14548" :clearable="true" :customStyle="jh_style" placeholder="请输入邀请码" type="text"
              :value="yq_value"></u-input>
          </view>
          <view class="btn_k acea-row row-between-wrapper data-v-94c14548">
            <view class="bj1 data-v-94c14548">
              取消</view>
            <view class="bj2 data-v-94c14548">提交</view>
          </view>
        </view>
      </view>
    </u-popup>
    <u-popup borderRadius="10" class="data-v-94c14548" height="560" mode="center" :value="nicknameshow" width="80%">
      <view class="tc_kuang_name data-v-94c14548">
        <form class="data-v-94c14548">
          <view class="m_top_20 data-v-94c14548">
            <view class="acea-row row-center data-v-94c14548">
              <button class="avatar-wrapper data-v-94c14548" openType="chooseAvatar">
                <image class="img data-v-94c14548" :src="avatarUrl"></image>
              </button>
            </view>
            <view class="title acea-row row-center data-v-94c14548">点击获取或上传头像</view>
          </view>
          <view class="data-v-94c14548">
            <u-form-item class="data-v-94c14548" label="昵称" labelWidth="120">
              <input class="data-v-94c14548" name="nickname" placeholder="请输入昵称" type="nickname"></input>
            </u-form-item>
          </view>
          <view class="m_top_40 data-v-94c14548">
            <button class="bnt data-v-94c14548" formType="submit" type="primary">立即保存</button>
          </view>
        </form>
      </view>
    </u-popup>
    <tui-loading class="data-v-94c14548" :data-custom-hidden="!loadshow" :fixed="true" type="column"></tui-loading>
  </view>
</template>
  
<script>
export default {
  data() {
    return {
      loadshow: false,
      nicknameshow: false,
      yq_value: '',
      relationpoint: 2,
      vip_value: '',
      yqshow: false,
      vipshow: false,
      tcshow: false,
      brokerage_price: 0,
      integral: 0,
      team: 0,
      version: '1.0.0',
      tctype: 1,
      userInfo: {},
      h5_share: "私域社群人脉广场，每日更新上千群,实时与您共享!    https://shequnjidi.fuwenhao.com/index.php?i=7&do=index&opt=index&act=index&m=dc_hsbd&spread=7162",
      servicecode: 'https://shequn.fubaige.cn/0969ae4fd307de037aedf08528344197.jpg?v=970143&imageView2/0/w/600',
      jh_style: {
        background: "#f3f3f3",
        "border-radius": "50rpx",
        "font-size": "38rpx",
        "padding": "10rpx 20rpx",
        "text-align": "center",
        width: "100%"
      }
    }
  },
  methods: {
    toPage(url) {
      uni.navigateTo({
        url
      })
    },
    showPopup(){
      console.log(11);
      this.tcshow = true
      this.tctype = 1
    }
  }
}
</script>
  
<style scoped lang="scss">

button.data-v-94c14548::after {
  border: none;
}

button.data-v-94c14548 {
  color: #ff557f;
  padding: 0rpx 30rpx;
  background: #fff;
  border-radius: 50rpx;
  font-size: 30rpx;
  font-weight: 600;
}

.bnt.data-v-94c14548 {
  padding: 4rpx;
  background-color: #18b566;
  border-radius: 10rpx;
  color: #fff;
}

.fx.data-v-94c14548 {
  padding: 0rpx;
  border-radius: 0rpx;
  font-size: 28rpx;
  margin-left: -2rpx;
  font-weight: 400;
  color: #333;
}

.infobox.data-v-94c14548 {
  width: 100%;
  font-size: 28rpx;
  color: #333;
  padding-bottom: 100rpx;
}

.badge.data-v-94c14548 {
  margin-right: 210rpx;
  margin-top: -30rpx;
}

.yq_kuang .top.data-v-94c14548 {
  background: linear-gradient(130deg, #ff557f, #ff75b1);
  height: 200rpx;
  padding: 40rpx 40rpx;
  color: #fff;
}

.yq_kuang .top .wenzi1.data-v-94c14548 {
  font-size: 48rpx;
  font-weight: 800;
}

.yq_kuang .top .wenzi2.data-v-94c14548 {
  margin-top: 10rpx;
  font-size: 32rpx;
}

.yq_kuang .top .icon.data-v-94c14548 {
  opacity: .6;
}

.yq_kuang .zhong.data-v-94c14548 {
  padding: 40rpx;
}

.yq_kuang .zhong .btn_k.data-v-94c14548 {
  margin-top: 40rpx;
  font-size: 32rpx;
  font-weight: 600;
}

.yq_kuang .zhong .btn_k .bj1.data-v-94c14548 {
  padding: 20rpx 80rpx;
  border: 1rpx #ff6f9a solid;
  border-radius: 50rpx;
  color: #ff6f9a;
}

.yq_kuang .zhong .btn_k .bj2.data-v-94c14548 {
  color: #fff;
  padding: 20rpx 80rpx;
  border-radius: 50rpx;
  background: linear-gradient(130deg, #ff6f9a, #ff85ba);
}

.vip_kuang .top.data-v-94c14548 {
  background: linear-gradient(130deg, #ffbf00, #fdd303);
  height: 200rpx;
  padding: 40rpx 40rpx;
  color: #fff;
}

.vip_kuang .top .wenzi1.data-v-94c14548 {
  font-size: 48rpx;
  font-weight: 800;
}

.vip_kuang .top .wenzi2.data-v-94c14548 {
  margin-top: 10rpx;
  font-size: 32rpx;
}

.vip_kuang .top .icon.data-v-94c14548 {
  opacity: .6;
}

.vip_kuang .zhong.data-v-94c14548 {
  padding: 40rpx;
}

.vip_kuang .zhong .btn_k.data-v-94c14548 {
  margin-top: 40rpx;
  font-size: 32rpx;
  font-weight: 600;
}

.vip_kuang .zhong .btn_k .bj1.data-v-94c14548 {
  padding: 20rpx 80rpx;
  border: 1rpx #fec504 solid;
  border-radius: 50rpx;
  color: #fec504;
}

.vip_kuang .zhong .btn_k .bj2.data-v-94c14548 {
  color: #fff;
  padding: 20rpx 80rpx;
  border-radius: 50rpx;
  background: linear-gradient(130deg, #f79d00, #fdd303);
}

.tc_kuang_name.data-v-94c14548 {
  padding: 30rpx 50rpx;
}

.tc_kuang_name .img.data-v-94c14548 {
  width: 170rpx;
  height: 170rpx;
  border-radius: 100rpx;
}

.tc_kuang_name .title.data-v-94c14548 {
  padding: 5rpx 0 20rpx 0;
  font-size: 28rpx;
  color: #999;
}

.tc_kuang.data-v-94c14548 {
  padding: 80rpx 40rpx 50rpx 40rpx;
}

.tc_kuang .title.data-v-94c14548 {
  font-size: 36rpx;
  font-weight: 700;
}

.tc_kuang .fxneirong.data-v-94c14548 {
  word-break: break-all;
}

.tc_kuang .img.data-v-94c14548 {
  width: 350rpx;
  height: 350rpx;
}

.tc_kuang .text.data-v-94c14548 {
  padding: 26rpx 0;
}

.tc_kuang .fuzhi1.data-v-94c14548 {
  margin-top: 30rpx;
  font-size: 32rpx;
  color: red;
}

.ddcontent.data-v-94c14548 {
  width: 100%;
}

.ddcontent .dibu.data-v-94c14548 {
  margin-top: 30rpx;
  text-align: center;
  color: #b4b4b4;
}

.ddcontent .jiange.data-v-94c14548 {
  padding: 20rpx 40rpx 40rpx 40rpx;
}

.ddcontent .yaoqing .yaoqing_l.data-v-94c14548 {
  width: 48%;
}

.ddcontent .yaoqing .yaoqing_l .yaoqing_l_icon.data-v-94c14548 {
  width: 40rpx;
  height: 40rpx;
  margin-right: 16rpx;
}

.ddcontent .yaoqing .yaoqing_l .l_wz.data-v-94c14548 {
  font-size: 30rpx;
  font-weight: 600;
}

.ddcontent .yaoqing .icon_r.data-v-94c14548 {
  color: #aaa;
}

.ddcontent .vip.data-v-94c14548 {
  padding: 30rpx 40rpx;
  border-radius: 10rpx;
  background: linear-gradient(90deg, #2f9bff, #3ad1ff);
  color: #fff;
}

.ddcontent .vip .vip_t.data-v-94c14548 {
  font-size: 42rpx;
  font-weight: bolder;
}

.ddcontent .vip .vip_wz.data-v-94c14548 {
  margin-top: 10rpx;
  color: #fff;
}

.ddcontent .vip .vip_btn.data-v-94c14548 {
  color: #3997ea;
  padding: 16rpx 30rpx;
  background: #fff;
  border-radius: 50rpx;
  font-size: 30rpx;
  font-weight: 600;
}

.ddcontent .vip .vip_icon.data-v-94c14548 {
  width: 100rpx;
  height: 100rpx;
  opacity: .7;
}

.ddcontent .shezhi.data-v-94c14548 {
  padding: 0rpx 0rpx 16rpx 0rpx;
}

.ddcontent .shezhi .setting.data-v-94c14548 {
  color: #9e9e9e;
  font-size: 48rpx;
  margin-left: 30rpx;
}

.ddcontent .jifen.data-v-94c14548 {
  padding: 0 20rpx;
}

.ddcontent .jifen .jifen_k .jifen_sz.data-v-94c14548 {
  text-align: center;
  font-size: 38rpx;
  font-weight: 800;
}

.ddcontent .jifen .jifen_k .jifen_wz.data-v-94c14548 {
  margin-top: 14rpx;
  text-align: center;
  color: #757575;
}

.ddcontent .touxiang.data-v-94c14548 {
  position: relative;
}

.ddcontent .touxiang .img.data-v-94c14548 {
  width: 140rpx;
  height: 140rpx;
  border-radius: 100rpx;
}

.ddcontent .touxiang .nc_y.data-v-94c14548 {
  width: 300rpx;
  margin-left: 30rpx;
}

.ddcontent .touxiang .nc_y .nc.data-v-94c14548 {
  font-size: 42rpx;
  font-weight: 700;
}

.ddcontent .touxiang .nc_y .xnc.data-v-94c14548 {
  font-size: 28rpx;
  color: #757575;
}

.ddcontent .touxiang .nc_y .xnc .icon.data-v-94c14548 {
  width: 45rpx;
  height: 45rpx;
  margin-right: 15rpx;
}

.ddcontent .touxiang .nc_y .xnc .title.data-v-94c14548 {
  width: 220rpx;
}

.ddcontent .qiandao.data-v-94c14548 {
  background: linear-gradient(90deg, #ffde39, #ffca0b);
  padding: 20rpx 35rpx;
  border-radius: 100rpx;
  font-weight: 700;
}

.ddcontent .tiaok.data-v-94c14548 {
  padding: 22rpx 40rpx;
}

.ddcontent .tiaok .z_title.data-v-94c14548 {
  font-size: 30rpx;
  width: 360rpx;
}

.ddcontent .tiaok .z_title .icon.data-v-94c14548 {
  width: 38rpx;
  height: 38rpx;
  margin-right: 22rpx;
  color: #18b566;
}

.ddcontent .tiaok .y_title.data-v-94c14548 {
  color: #aaa;
}

.ddcontent .tiaok .y_title .icon.data-v-94c14548 {
  margin-left: 20rpx;
}

.ddcontent .tiaok .y_jifen.data-v-94c14548 {
  color: #5af;
}

.bjk.data-v-94c14548 {
  padding: 34rpx 30rpx;
  background: #fff;
  border-radius: 10rpx;
  box-shadow: 0rpx 0rpx 10rpx #ececec;
}

.bjk2.data-v-94c14548 {
  padding: 15rpx 0;
  background: #fff;
  border-radius: 10rpx;
}
</style>