<template>
    <main>
        <router-view></router-view>
        <van-swipe class="my-swipel1" :autoplay="3000" width="100%">
            <van-swipe-item><img src="https://upimg.tiebaobei.com/img/20220805/jv16zpai9bvjvsr34ye73ydx6qvm989e.jpg!640x480" alt=""></van-swipe-item>
            <van-swipe-item><img src="https://upimg.tiebaobei.com/img/20220805/cztof3cs47se81isnkdrm8dbcc09b5vc.jpg!640x480" alt=""></van-swipe-item>
            <van-swipe-item><img src="https://upimg.tiebaobei.com/img/20220805/qsycse3at9x8hfkwye4n2pbwy0hq2xzu.jpg!640x480" alt=""></van-swipe-item>
            <van-swipe-item><img src="https://upimg.tiebaobei.com/img/20220805/3v1i39n02uq1x4ncjdpuml5yy1a72rcu.jpg!640x480" alt=""></van-swipe-item>
            <van-swipe-item><img src="https://upimg.tiebaobei.com/img/20220805/d206kjco0ye2fbljcfi0dqhd7evka8m7.jpg!640x480" alt=""></van-swipe-item>
            <van-swipe-item><img src="https://upimg.tiebaobei.com/img/20220805/d206kjco0ye2fbljcfi0dqhd7evka8m7.jpg!640x480" alt=""></van-swipe-item>
            <van-swipe-item><img src="https://upimg.tiebaobei.com/img/20220805/cq86cknpxnqiole90eb9h5tgc91igiug.jpg!640x480" alt=""></van-swipe-item>
            <van-swipe-item><img src="https://upimg.tiebaobei.com/img/20220805/9ahkqqfpkw26b2d53gcjo07mefxlgdgj.jpg!640x480" alt=""></van-swipe-item>
            <van-swipe-item><img src="https://upimg.tiebaobei.com/img/20220805/76orywbnzj6nfg6xhdhos8g7nzydzo7r.jpg!640x480" alt=""></van-swipe-item>
            <van-swipe-item><img src="	https://upimg.tiebaobei.com/img/20220805/4ru6yh7fc95s2q88vduifcl4svbxnmkp.jpg!640x480" alt=""></van-swipe-item>
        </van-swipe>
        <!-- 文字介绍 -->
        <div class="txt-div">
          <p class="p1">徐工XE75D挖掘机</p>
          <p class="p2">10.8</p>
          <p class="p3">万</p>
          <span class="txt-span">以降价4.2万 ↓</span>
          <router-link to="grzx"><button>咨询底价</button></router-link>
          
        </div>
        
        <!-- 支付方式板块 -->
        <div class="txt-div2">
          <div class="txt-div2-box">
            <img src="https://m.tiebaobei.com/m_static/img/346fb76.png" alt="">
              <span class="txt-div2-box-span">首付11.8万元 月供8,452</span>
          </div>
        </div>

        <!-- 设备信息 -->
        <div class="sbxx">
          <div class="sbxx-top">
            <span class="sbxx-span1">设备信息</span>
            <span class="sbxx-span2">ID1655110</span>
             <ul class="sbxx-ul">
                  <li>
                    <p class="sbxx-ul-p1">设备品牌</p>
                    <p class="sbxx-ul-p2">现代</p>
                  </li>

                  <li>
                    <p class="sbxx-ul-p1">设备型号</p>
                    <p class="sbxx-ul-p2">RZ123</p>
                  </li>

                  <li>
                    <p class="sbxx-ul-p1">出厂时间</p>
                    <p class="sbxx-ul-p2">2018</p>
                  </li>

                  <li>
                    <p class="sbxx-ul-p1">表显小时数</p>
                    <p class="sbxx-ul-p2">5778小时</p>
                  </li>

                  <li>
                    <p class="sbxx-ul-p1">地点</p>
                    <p class="sbxx-ul-p2">江西-上饶市</p>
                  </li>

                  <li>
                    <p class="sbxx-ul-p1">更新时间</p>
                    <p class="sbxx-ul-p2">2022-08-09</p>
                  </li>

                  <p class="sbxx-bottom">设备信息来自机身铭牌或卖家描述, 欢迎</p>

                  <button class="sbxx-bt-left">原厂参数</button>
                  <button class="sbxx-bt-right">机型论坛</button>
             </ul>
          </div>
        </div>

        <!-- 排行榜 -->
        <div class="phb">
          <p>广州人气榜第一名</p>
        </div>

        <!-- 服务保障 -->
        <div class="fwbz">
          <div class="fwbz1">
            <span class="fwbz1-logo"></span>
            <ul class="fwbz1-ul">
              
              <li><img src="	https://upimg.tiebaobei.com/cloudbox/img/tiebaobei/ic_detail_pei@3x.png" alt="">
              <p>权属问题</p>
              <p>先行赔付</p>
              </li>

              <li><img src="	https://upimg.tiebaobei.com/cloudbox/img/tiebaobei/ic_detail_pei@3x.png" alt="">
              <p>权属问题</p>
              <p>先行赔付</p>
              </li>

              <li><img src="	https://upimg.tiebaobei.com/cloudbox/img/tiebaobei/ic_detail_pei@3x.png" alt="">
              <p>权属问题</p>
              <p>先行赔付</p>
              </li>

              <li><img src="	https://upimg.tiebaobei.com/cloudbox/img/tiebaobei/ic_detail_pei@3x.png" alt="">
              <p>权属问题</p>
              <p>先行赔付</p>
              </li>

            </ul>

            <p class="fwbz-bottom">
              
              <img src="	https://upimg.tiebaobei.com/cloudbox/img/tiebaobei/ic_detail_brand@3x.png" alt="">
              <span>品牌保真</span>
            </p>
          </div>
        </div>

        <!-- 卖家说 -->
        <div class="mjs">
          <div class="mjs-top">
            <span class="mjs-span-img">
              <img src="https://upimg.tiebaobei.com/cloudbox/img/tiebaobei/ic_sell_user_portrait@2x.png" alt="">
            </span>
            <p class="mjs-p1">卖家说</p>
            <p class="mjs-p2">89%的卖家接受议价</p>
            <button class="mjs-bnt">砍价</button>
          </div>
          <div class="mjs-bottom">
            <span class="mjs-bottom-txt">机子质量无问题，以及过检</span>
          </div>
        </div>

        <!-- 铁甲管家介绍 -->
        <div class="tjgj">
          <div class="mjs-top">
            <span class="tjgj-span-img">
              <img src="https://upimg.tiebaobei.com/cloudbox/img/tiebaobei/ic_sell_user_portrait@2x.png" alt="">
            </span>
            <p class="mjs-p1">铁甲管家-吴迪</p>
            <button class="mjs-bnt">联系</button>
          </div>
          <div class="mjs-bottom">
            <span class="mjs-bottom-txt">2006年进入工程机械行业，服务工程行业领域已有14年，累计服务用户500以上。</span>
          </div>
        </div>

        <!-- 看车报告 -->
        <div class="kcbg">
          
          <img class="kcbg-top" src="https://m.tiebaobei.com/m_static/img/8640a3f.png" alt="">
          <p class="kcbg-txt">看车报告</p>
          <p class="kcbg-txt2">编号：202913901283091</p>
          <p class="kcbg-txt3">看车结果：现场看车车况没有任何问题怠速不快速度飞机转盘没有问题</p>
          <p class="kcbg-bj"></p>
          <ul class="kcbg-ul">
            <li class="kcbg-li">
              <img class="kcbg-li-img1" src="https://m.tiebaobei.com/m_static/img/991ac00.png" alt="">
              <span class="kcbg-span1">设备认证</span>
              <span class="kcbg-span2">2项</span>
              <img class="kcbg-li-img2" src="	https://m.tiebaobei.com/m_static/img/04cd321.png" alt="">
              <span class="kcbg-span3">3项</span>
              <img class="kcbg-li-img3" src="	https://m.tiebaobei.com/m_static/img/d327d31.png" alt="">
            </li>
            <li class="kcbg-li">
              <img class="kcbg-li-img1" src="https://m.tiebaobei.com/m_static/img/991ac00.png" alt="">
              <span class="kcbg-span1">设备认证</span>
              <span class="kcbg-span2">2项</span>
              <img class="kcbg-li-img2" src="	https://m.tiebaobei.com/m_static/img/04cd321.png" alt="">
              <span class="kcbg-span3">3项</span>
              <img class="kcbg-li-img3" src="	https://m.tiebaobei.com/m_static/img/d327d31.png" alt="">
            </li>
            <li class="kcbg-li">
              <img class="kcbg-li-img1" src="https://m.tiebaobei.com/m_static/img/991ac00.png" alt="">
              <span class="kcbg-span1">设备认证</span>
              <span class="kcbg-span2">2项</span>
              <img class="kcbg-li-img2" src="	https://m.tiebaobei.com/m_static/img/04cd321.png" alt="">
              <span class="kcbg-span3">3项</span>
              <img class="kcbg-li-img3" src="	https://m.tiebaobei.com/m_static/img/d327d31.png" alt="">
            </li>
            <li class="kcbg-li">
              <img class="kcbg-li-img1" src="https://m.tiebaobei.com/m_static/img/991ac00.png" alt="">
              <span class="kcbg-span1">设备认证</span>
              <span class="kcbg-span2">2项</span>
              <img class="kcbg-li-img2" src="	https://m.tiebaobei.com/m_static/img/04cd321.png" alt="">
              <span class="kcbg-span3">3项</span>
              <img class="kcbg-li-img3" src="	https://m.tiebaobei.com/m_static/img/d327d31.png" alt="">
            </li>
            <li class="kcbg-li">
              <img class="kcbg-li-img1" src="https://m.tiebaobei.com/m_static/img/991ac00.png" alt="">
              <span class="kcbg-span1">设备认证</span>
              <span class="kcbg-span2">2项</span>
              <img class="kcbg-li-img2" src="	https://m.tiebaobei.com/m_static/img/04cd321.png" alt="">
              <span class="kcbg-span3">3项</span>
              <img class="kcbg-li-img3" src="	https://m.tiebaobei.com/m_static/img/d327d31.png" alt="">
            </li>
            <li class="kcbg-li">
              <img class="kcbg-li-img1" src="https://m.tiebaobei.com/m_static/img/991ac00.png" alt="">
              <span class="kcbg-span1">设备认证</span>
              <span class="kcbg-span2">2项</span>
              <img class="kcbg-li-img2" src="	https://m.tiebaobei.com/m_static/img/04cd321.png" alt="">
              <span class="kcbg-span3">3项</span>
              <img class="kcbg-li-img3" src="	https://m.tiebaobei.com/m_static/img/d327d31.png" alt="">
            </li>
            <li class="kcbg-li">
              <img class="kcbg-li-img1" src="https://m.tiebaobei.com/m_static/img/991ac00.png" alt="">
              <span class="kcbg-span1">设备认证</span>
              <span class="kcbg-span2">2项</span>
              <img class="kcbg-li-img2" src="	https://m.tiebaobei.com/m_static/img/04cd321.png" alt="">
              <span class="kcbg-span3">3项</span>
              <img class="kcbg-li-img3" src="	https://m.tiebaobei.com/m_static/img/d327d31.png" alt="">
            </li>
          </ul>
          <a class="kcbg-bottom-a" href="">查看详细看车内容 ></a>
          <p class="kcbg-bottom-p">仅代表2022年08月03日  铁甲管家现场看车结果，最终车况以现场看车为准。</p>
          <img class="kcbg-bottom" src="https://m.tiebaobei.com/m_static/img/8640a3f.png" alt="">
        </div>

        <!-- 设备实拍 -->
        <div :class="{'sbsp':1,'c':msg=='查看更多'}">
          <p class="sbsp-txt-p">
            <span class="sbsp-span1"></span>
            <span class="sbsp-span2">设备实拍</span>
            <p class="sbsp-txt-p2">整机外观</p>
          <ul class="sbsp-ul">
            <li class="sbsp-li">
              <img src="https://upimg.tiebaobei.com/img/20220803/n0jgrnrggklwm054q2adzozk9ruydcrq.jpeg!640x480" alt="">
            </li>
            <li class="sbsp-li">
              <img src="https://upimg.tiebaobei.com/img/20220803/n0jgrnrggklwm054q2adzozk9ruydcrq.jpeg!640x480" alt="">
            </li>
            <li class="sbsp-li">
              <img src="https://upimg.tiebaobei.com/img/20220803/n0jgrnrggklwm054q2adzozk9ruydcrq.jpeg!640x480" alt="">
            </li>
            <li class="sbsp-li">
              <img src="https://upimg.tiebaobei.com/img/20220803/n0jgrnrggklwm054q2adzozk9ruydcrq.jpeg!640x480" alt="">
            </li>
            <li class="sbsp-li">
              <img src="https://upimg.tiebaobei.com/img/20220803/n0jgrnrggklwm054q2adzozk9ruydcrq.jpeg!640x480" alt="">
            </li>
            <li class="sbsp-li">
              <img src="https://upimg.tiebaobei.com/img/20220803/n0jgrnrggklwm054q2adzozk9ruydcrq.jpeg!640x480" alt="">
            </li>
            <li class="sbsp-li">
              <img src="https://upimg.tiebaobei.com/img/20220803/n0jgrnrggklwm054q2adzozk9ruydcrq.jpeg!640x480" alt="">
            </li>
            <li class="sbsp-li">
              <img src="https://upimg.tiebaobei.com/img/20220803/n0jgrnrggklwm054q2adzozk9ruydcrq.jpeg!640x480" alt="">
            </li>
            <li class="sbsp-li">
              <img src="https://upimg.tiebaobei.com/img/20220803/n0jgrnrggklwm054q2adzozk9ruydcrq.jpeg!640x480" alt="">
            </li>
            <li class="sbsp-li">
              <img src="https://upimg.tiebaobei.com/img/20220803/n0jgrnrggklwm054q2adzozk9ruydcrq.jpeg!640x480" alt="">
            </li>
            <li class="sbsp-li">
              <img src="https://upimg.tiebaobei.com/img/20220803/n0jgrnrggklwm054q2adzozk9ruydcrq.jpeg!640x480" alt="">
            </li>
            <li class="sbsp-li">
              <img src="https://upimg.tiebaobei.com/img/20220803/n0jgrnrggklwm054q2adzozk9ruydcrq.jpeg!640x480" alt="">
            </li>
            <li class="sbsp-li">
              <img src="https://upimg.tiebaobei.com/img/20220803/n0jgrnrggklwm054q2adzozk9ruydcrq.jpeg!640x480" alt="">
            </li>
            <li class="sbsp-li">
              <img src="https://upimg.tiebaobei.com/img/20220803/n0jgrnrggklwm054q2adzozk9ruydcrq.jpeg!640x480" alt="">
            </li>
            <li class="sbsp-li">
              <img src="https://upimg.tiebaobei.com/img/20220803/n0jgrnrggklwm054q2adzozk9ruydcrq.jpeg!640x480" alt="">
            </li>
            <li class="sbsp-li">
              <img src="https://upimg.tiebaobei.com/img/20220803/n0jgrnrggklwm054q2adzozk9ruydcrq.jpeg!640x480" alt="">
            </li>
            <li class="sbsp-li">
              <img src="https://upimg.tiebaobei.com/img/20220803/n0jgrnrggklwm054q2adzozk9ruydcrq.jpeg!640x480" alt="">
            </li>
            <li class="sbsp-li">
              <img src="https://upimg.tiebaobei.com/img/20220803/n0jgrnrggklwm054q2adzozk9ruydcrq.jpeg!640x480" alt="">
            </li>
            <li class="sbsp-li">
              <img src="https://upimg.tiebaobei.com/img/20220803/n0jgrnrggklwm054q2adzozk9ruydcrq.jpeg!640x480" alt="">
            </li>
            <li class="sbsp-li">
              <img src="https://upimg.tiebaobei.com/img/20220803/n0jgrnrggklwm054q2adzozk9ruydcrq.jpeg!640x480" alt="">
            </li>
            <li class="sbsp-li">
              <img src="https://upimg.tiebaobei.com/img/20220803/n0jgrnrggklwm054q2adzozk9ruydcrq.jpeg!640x480" alt="">
            </li>
          </ul>

        </div>
        <!-- 按钮 -->
          <div class="anniu">
          <button class="ckgd" v-on:click="add">{{msg}}</button>
          </div>

          <!-- 购买流程 -->
          <div class="gmlc">
            <p class="gmlc-p1">
              <span class="gmlc-span1"></span>
              <span class="gmlc-span2">购买流程</span>
            </p>

            <span class="gmlc-span3"></span>
            <span class="gmlc-span4">1</span>
            <span class="gmlc-span5">2</span>
            <span class="gmlc-span6">3</span>
            <span class="gmlc-span7">4</span>

            <a class="gmlc-a1" href="">电话咨询</a>
            <a class="gmlc-a2" href="">管家带看</a>
            <a class="gmlc-a3" href="">签订协议</a>
            <a class="gmlc-a4" href="">交易完成</a>
          </div>

          <!-- 像似设备 -->
          <div class="xssb">
            相似设备
          </div>
          <van-card
  num="2"
  price="2.00"
  desc="描述信息"
  title="商品标题"
  thumb="https://img01.yzcdn.cn/vant/ipad.jpeg"
>
  <template #tags>
    <van-tag plain type="danger">标签</van-tag>
    <van-tag plain type="danger">标签</van-tag>
  </template>
  <template #footer>
    <van-button size="mini">按钮</van-button>
    <van-button size="mini">按钮</van-button>
  </template>
</van-card>
<div class="jiange">
</div>

<van-card
  num="2"
  price="2.00"
  desc="描述信息"
  title="商品标题"
  thumb="https://img01.yzcdn.cn/vant/ipad.jpeg"
>
  <template #tags>
    <van-tag plain type="danger">标签</van-tag>
    <van-tag plain type="danger">标签</van-tag>
  </template>
  <template #footer>
    <van-button size="mini">按钮</van-button>
    <van-button size="mini">按钮</van-button>
  </template>
</van-card>
<div class="jiange">
</div>

<van-card
  num="2"
  price="2.00"
  desc="描述信息"
  title="商品标题"
  thumb="https://img01.yzcdn.cn/vant/ipad.jpeg"
>
  <template #tags>
    <van-tag plain type="danger">标签</van-tag>
    <van-tag plain type="danger">标签</van-tag>
  </template>
  <template #footer>
    <van-button size="mini">按钮</van-button>
    <van-button size="mini">按钮</van-button>
  </template>
</van-card>
<div class="jiange">
</div>

<van-card
  num="2"
  price="2.00"
  desc="描述信息"
  title="商品标题"
  thumb="https://img01.yzcdn.cn/vant/ipad.jpeg"
>
  <template #tags>
    <van-tag plain type="danger">标签</van-tag>
    <van-tag plain type="danger">标签</van-tag>
  </template>
  <template #footer>
    <van-button size="mini">按钮</van-button>
    <van-button size="mini">按钮</van-button>
  </template>
</van-card>
<div class="jiange">
</div>

<van-card
  num="2"
  price="2.00"
  desc="描述信息"
  title="商品标题"
  thumb="https://img01.yzcdn.cn/vant/ipad.jpeg"
>
  <template #tags>
    <van-tag plain type="danger">标签</van-tag>
    <van-tag plain type="danger">标签</van-tag>
  </template>
  <template #footer>
    <van-button size="mini">按钮</van-button>
    <van-button size="mini">按钮</van-button>
  </template>
</van-card>
<div class="jiange">
</div>

<van-card
  num="2"
  price="2.00"
  desc="描述信息"
  title="商品标题"
  thumb="https://img01.yzcdn.cn/vant/ipad.jpeg"
>
  <template #tags>
    <van-tag plain type="danger">标签</van-tag>
    <van-tag plain type="danger">标签</van-tag>
  </template>
  <template #footer>
    <van-button size="mini">按钮</van-button>
    <van-button size="mini">按钮</van-button>
  </template>
</van-card>
<div class="jiange">
</div>

<van-card
  num="2"
  price="2.00"
  desc="描述信息"
  title="商品标题"
  thumb="https://img01.yzcdn.cn/vant/ipad.jpeg"
>
  <template #tags>
    <van-tag plain type="danger">标签</van-tag>
    <van-tag plain type="danger">标签</van-tag>
  </template>
  <template #footer>
    <van-button size="mini">按钮</van-button>
    <van-button size="mini">按钮</van-button>
  </template>
</van-card>
<div class="jiange">
</div>

<!-- 固定定位 -->
<div class="gddw">
  <span class="gddw-span1"></span>
  <span class="gddw-span2">砍价</span>
  <button class="gddw-bnt">马上咨询</button>
</div>
    </main>
</template>


<style scoped>
  *{
    margin: 0px;
    padding: 0px;
    list-style: none;
  }
  main{
    background-color: #f9f9f9;
  }
  .my-swipe1l .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 300px;
    text-align: center;
    background-color: #39a9ed;
  }
  .van-swipe-item img{
    width: 100%;
    height: 310px;
  }
  /* 文字介绍 */
  .txt-div{
    width: 100%;
    height: 90px;
    position: relative;
    border-bottom: 1px solid #e7eaec;
    background-color: #fff;
    
  }
  .txt-div .p1{
    font-size: 20px;
    position: absolute;
    top: 10px;
    left: 10px;
  }
  .txt-div .p2{
    font-size: 20px;
    position: absolute;
    color: #f66a1a;
    bottom: 10px;
    left: 10px;
  }
  .txt-div .p3{
    font-size: 14px;
    position: absolute;
    color: #f66a1a;
    bottom: 12px;
    left: 52px;
  }
  .txt-div button{
    position: absolute;
    bottom: 10px;
    right: 20px;
    background-color: #f66a1a;
    border: none;
    color: #fff;
    border-radius: 4px;
    padding: 4px;
  }
  .txt-span{
    background: linear-gradient(90deg, rgba(255, 116, 84, 0.72) 0%, rgba(255, 88, 87, 0.92) 100%);
    color: #ffffff;
    font-size: 0.2rem;
    font-weight: 300;
    padding: 0 0.08rem;
    position: absolute;
    bottom: 14px;
    left: 75px;
  }
  /* 付款方式 */
  .txt-div2{
    margin-top: 10px;
    position: relative;
    overflow: hidden;
    background-color: #fff;
  }
  .txt-div2-box{
        background: linear-gradient(90deg, rgba(255, 116, 84, 0.72) 0%, rgba(255, 88, 87, 0.92) 100%);
    border-radius: 4px;
    font-size: 0.3rem;
    font-weight: 400;
    color: #FFFFFF;
    display: flex;
    align-items: center;
    margin: 0.2rem;
    padding: 0.2rem;
  }
  .txt-div2-box img{
    display: inline-block;
    margin-left: 20px;
    width: 46px;
    height: 35px;
  }
  .txt-div2-box-span{
    font-size: 18px;
    padding-top: 10px;
    padding-bottom: 10px;
    margin-left: 20px;
  }
  /* 设备信息 */
  .sbxx{
    width: 100%;
    height: 260px;
    margin-top: 10px;
    background-color: #fff;
    position: relative;
  }
  .sbxx-span1{
    display: inline-block;
    font-size: 20px;
    border-left: 4px solid #39a9ed;
    margin-top: 20px;
    margin-left: 15px;
    padding-left: 10px;
    margin-right: 220px;
  }
  .sbxx-ul{
    width: 90%;
    height: 116px;
    margin-top: 20px;
    margin-bottom: 20px;
    margin-left: auto;
    margin-right: auto;
  }
  .sbxx-ul li{
    width: 33%;
    height: 50%;
    float: left;
  }
  .sbxx-ul-p1{
    color: #e0d4d9;
    font-size: 14px;
    text-align: center;
  }
  .sbxx-ul-p2{
    color: rgb(109, 103, 103);
    font-size: 14px;
    text-align: center;
  }
  .sbxx-bottom{
    font-size: 12px;
    margin-left: 25px;
    color: #2e2c2d;
  }
  .sbxx-bt-left{
    width: 190px;
    height: 36px;
    background-color: #e0d4d9;
    color: #333;border: none;
    border-radius: 5px;
    position: absolute;
    left: 10px;
    bottom: 10px;
  }
  .sbxx-bt-right{
    width: 190px;
    height: 36px;
    background-color: #e0d4d9;
    color: #333;border: none;
    border-radius: 5px;
    position: absolute;
    right: 10px;
    bottom: 10px;
  }
  .phb{
    width: 100%;
    height: 40px;
    margin-top: 10px;
    background: url(https://m.tiebaobei.com/m_static/img/41fabad.png) no-repeat;
    background-size: 100%;
    margin-bottom: 10px;
  }
  .phb p{
    line-height: 40px;
    text-align: center;
  }

  /* 服务保障 */
  .fwbz{
    background-color: #fff;
    padding: 10px;
  }
  .fwbz1{
    width: 100%;
    height: 200px;
    background-image: url(https://upimg.tiebaobei.com/cloudbox/img/20220519/ic_tjb_card_bg.png);
    border: 0.06rem solid #e4cba5;
    border-radius: 12px;
    position: relative;
    
  }
  .fwbz1-logo{
    background: url(	https://upimg.tiebaobei.com/cloudbox/img/20220519/ic_tjb_title.png?121) no-repeat;
    background-size: 100%;
    width: 137px;
    height: 39px;
    position: absolute;
    top: 0;
    left: 0;
  }
  .fwbz1-ul{
    width: 100%;
    height: 90px;
    margin-top: 50px;
    border-bottom: 1px solid #db8c1d;
    display: flex;
  }
  .fwbz1-ul img{
    width: 36px;
    height: 36px;

  }
  .fwbz1-ul li{
    width: 25%;
    font-size: 12px;
    color: #db8c1d;
    text-align: center;
  }
  .fwbz-bottom{
    text-align: center;
  }
  .fwbz-bottom img{
    width: 22px;
    height: 22px;
  }
  .fwbz-bottom span{
    position: absolute;
    left: 173px;
    bottom: 15px;
    font-size: 12px;
    color: #db8c1d;
  }
  /* 卖家说 */
  .mjs{
    width: 100%;
    height: 104px;
    padding: 10px;
    background-color: #fff;
    margin-top: 10px;
    position: relative;
  }
  .mjs-top{
    width: 100%;
    height: 48px;
    position: relative;
  }
  .mjs-span-img{
    width: 48px;
    height: 48px;
  }
  .mjs img{
    width: 48px;
    height: 48px;
  }
  .mjs-p1{
    position: absolute;
    top: 16px;
    left: 53px;
  }
  .mjs-p2{
    position: absolute;
    top: 16px;
    right: 75px;
  }
  .mjs-bnt{
    position: absolute;
    background-color: #f66a1a;
    border: none;
    padding: 5px;
    border-radius: 6px;
    color: #fff;
    right: 18px;
    top: 12px;
  }
  .mjs-bottom-txt{
    position: absolute;
    top: 90px;
    left: 18px;
  }

  /* 铁甲管家 */
  .tjgj{
    width: 100%;
    height: 120px;
    padding: 10px;
    background-color: #fff;
    margin-top: 10px;
    position: relative;
  }
  .tjgj img{
    width: 48px;
    height: 48px;
  }
  .tjgj-span-img{
    width: 48px;
    height: 48px;
  }
  /* 看车报告 */
  .kcbg{
    width: 100%;
    height: 620px;
    margin-top: 10px;
    position: relative;
    overflow: hidden;
    background-color: #fff;
  }
  .kcbg-top{
    display: block;
    width: 95%;
    height: 19px;
    position: absolute;
    transform: translate(-50%);
    left: 50%;
    top: 0px;
  }
  .kcbg-bottom{
    display: block;
    width: 95%;
    height: 19px;
    position: absolute;
    transform: translate(-50%);
    left: 50%;
    bottom: 0px;
  }
  .kcbg-txt{
    text-align: center;
    margin-top: 30px;
    color: #333;
  }
  .kcbg-txt2{
    font-size: 12px;
    color: #666;
    float: right;
    margin-right: 30px;
  }
  .kcbg-txt3{
    float: left;
    margin-top: 10px;
    margin-left: 25px;
    margin-right: 25px;
  }
  .kcbg-bj{
    width: 350px;
    height: 83px;
    background: url(https://m.tiebaobei.com/m_static/img/777081b.png) no-repeat;
    background-size: 100%;
    margin-top: 78px;
    margin-left: auto;
    margin-right: auto;
  }
  /* 看车报告ul */
  .kcbg-ul{
    width: 85%;
    height: 310px;
    margin-left: auto;
    margin-right: auto;
  }
  .kcbg-li{
    width: 100%;
    height: 34px;
    background-color: #f2f6f0;
    margin-top: 10px;
    position: relative;
  }
  .kcbg-li-img1{
    width: 19px;
    height: 16px;
    position: absolute;
    top: 10px;
    left: 10px;
  }
  .kcbg-span1{
    position: absolute;
    top: 8px;
    left: 35px;
    color: #666;
  }
  .kcbg-span2{
    position: absolute;
    top: 8px;
    right: 135px;
    color: #666;
  }
  .kcbg-li-img2{
    width: 16px;
    height: 16px;
    position: absolute;
    top: 10px;
    right: 110px;
  }
.kcbg-span3{
  position: absolute;
    top: 8px;
    right: 65px;
    color: #666;
}
.kcbg-li-img3{
    width: 16px;
    height: 16px;
    position: absolute;
    top: 10px;
    right: 40px;
  }
  .kcbg-bottom-a{
    position: absolute;
    transform: translate(-50%);
    left: 50%;
  }
  .kcbg-bottom-p{
    position: absolute;
    margin-left: 20px;
    margin-right: 20px;
    font-size: 12px;
    color: #666;
    bottom: 25px;
  }

  /* 设备实拍 */
  .sbsp{
    margin-top: 20px;
    width: 100%;
    height: 5580px;
    background-color: #fff;
    overflow: hidden;
  }
  .sbsp-txt-p{
    width: 100%;
    height: 20px;
    margin-top: 20px;
  }
  .sbsp-span1{
    display: inline-block;
    width: 4px;
    height: 18px;
    background-color: #3164fb;
    margin-right: 20px;
    margin-left: 20px;
  }
  .sbsp-span2{
    font-size: 18px;
  }
  .sbsp-txt-p2{
    margin-top: 20px;
    text-align: center;
    font-size: 16px;
  }
  .sbsp-ul{
    width: 100%;
    margin-top: 20px;
  }
  .sbsp-li{
    width: 390px;
    height: 250px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 10px;
  }
  .sbsp-li img{
    width: 390px;
    height: 250px;
  }
  /* 查看跟收起按钮 */
  .anniu{
    width: 100%;
    height: 30px;
    background-color: #fff;
    position: relative;
  }
  .ckgd{
    border: none;
    background-color: #fff;
    font-size: 20px;
    position: absolute;
    transform: translate(-50%);
    left: 50%;
  }
  .c{
    height: 850px;
  }
  /* 购买流程 */
  .gmlc{
    width: 100%;
    height: 136px;
    overflow: hidden;
    background-color: #fff;
    margin-top: 20px;
    position: relative;
  }
  .gmlc-p1{
    width: 100%;
    height: 25px;
    position: relative;
    margin-top: 20px;

  }
  .gmlc-span1{
    width: 4px;
    height: 18px;
    background-color: #3164fb;
    display: inline-block;
    position: absolute;
    margin-top: 3px;
    left: 20px;
  }
  .gmlc-span2{
    font-size: 18px;
    position: absolute;
    left: 40px;
  }
  .gmlc-span3{
    width: 80%;
    height: 2px;
    display: block;
    background-color: rgb(216, 211, 211);
    position: absolute;
    transform: translate(-50%);
    left: 50%;
    top: 65px;
  }
  .gmlc-span4{
    width: 24px;
    height: 24px;
    text-align: center;
    line-height: 24px;
    display: block;
    border-radius: 50%;
    background-color: #f1f6fe;
    color: #3164fb;
    position: absolute;
    top: 55px;
    left: 50px;
  }
  .gmlc-span5{
    width: 24px;
    height: 24px;
    text-align: center;
    line-height: 24px;
    display: block;
    border-radius: 50%;
    background-color: #f1f6fe;
    color: #3164fb;
    position: absolute;
    top: 55px;
    left: 140px;
  }
  .gmlc-span6{
    width: 24px;
    height: 24px;
    text-align: center;
    line-height: 24px;
    display: block;
    border-radius: 50%;
    background-color: #f1f6fe;
    color: #3164fb;
    position: absolute;
    top: 55px;
    left: 236px;
  }
  .gmlc-span7{
    width: 24px;
    height: 24px;
    text-align: center;
    line-height: 24px;
    display: block;
    border-radius: 50%;
    background-color: #f1f6fe;
    color: #3164fb;
    position: absolute;
    top: 55px;
    left: 335px;
  }
  .gmlc-a1{
    position: absolute;
    bottom: 10px;
    left: 30px;
  }
  .gmlc-a2{
    position: absolute;
    bottom: 10px;
    left: 116px;
  }
  .gmlc-a3{
    position: absolute;
    bottom: 10px;
    left: 215px;
  }
  .gmlc-a4{
    position: absolute;
    bottom: 10px;
    left: 315px;
  }
  .xssb{
    width: 100%;
    height: 55px;
    margin-top: 10px;
    background-color: #fff;
    text-align: center;
    line-height: 55px;
  }
  .jiange{
    width: 100%;
    height: 20px;
    background-color: #fff;
  }
  /* 固定定位 */
  .gddw{
    width: 100%;
    height: 77px;
    background-color: #fff;
    position: fixed;
    bottom: 0px;
  }
  .gddw-span1{
    width: 22px;
    height: 22px;
    background: url(	https://upimg.tiebaobei.com/cloudbox/img/tiebaobei/ic_bargain@3x.png) no-repeat;
    background-size: 100%;
    display: block;
    position: absolute;
    top: 17px;
    left: 25px;
  }
  .gddw-span2{
    position: absolute;
    top: 40px;
    left: 21px;

  }
  .gddw-bnt{
    width: 332px;
    height: 48px;
    position: absolute;
    background-color: #f66a1a;
    border: none;
    border-radius: 5px;
    top: 15px;
    right: 30px;
  }
</style>

<script>

export default{
    data(){
      return{
        msg:'查看更多'
      }
    },
    methods:{
      add:function(){
        if(this.msg=='查看更多'){
            this.msg='收起'
        }
        else{
            this.msg='查看更多'
        }
      }
    }
}
</script>
