<template>
    <main>
        <router-view></router-view>
        <div class="top">
            <img class="logo" src="../../public/img/logo.png" alt="">

            <router-link to="/denglu"><img class="top-left" src="../../public/img/dl.png" alt=""></router-link>
        </div>

        <div class="nav">
            <ul class="nav-ul">
                
                <li>首页</li>
                <li><router-link class="router" to="/shopping">二手机</router-link></li>
                <li>选车</li>
                <li>资讯</li>
                <li>论坛</li>
                <li>问答</li>
                <li>找工作</li>
                <li>招司机</li>
                <li>了解铁甲</li>
                <li>机械</li>
                <li>机型检索</li>

            </ul>
        </div>  

        <!-- 选项卡 -->
        <van-swipe style="height: 200px;" vertical>
        <van-swipe-item>
            <ul class="ul2">
                <li>
                    <img src="../../public/img/xs.jpg" alt="">
                    <a href="">小松</a>
                </li>
                <li>
                    <img src="../../public/img/ds.jpg" alt="">
                    <a href="">斗山</a>
                </li>
                <li>
                    <img src="../../public/img/ktbl.jpg" alt="">
                    <a href="">卡特彼勒</a>
                </li>
                <li>
                    <img src="../../public/img/rl.jpg" alt="">
                    <a href="">日立</a>
                </li>
                <li>
                    <img src="../../public/img/syzg.jpg" alt="">
                    <a href="">三一重工</a>
                </li>
                <li>
                    <img src="../../public/img/xs.jpg" alt="">
                    <a href="">小松</a>
                </li>
                <li>
                    <img src="../../public/img/ktbl.jpg" alt="">
                    <a href="">ktbl</a>
                </li>
                <li>
                    <img src="../../public/img/xs.jpg" alt="">
                    <a href="">小松</a>
                </li>
            </ul>
        </van-swipe-item>

        <van-swipe-item>
            <ul class="ul3">
                <li>
                    <img src="../../public/img/syzg1.jpg" alt="">
                    <a href="">三一重工</a>
                    <a href="">SY205C DPC</a>
                </li>
                <li>
                    <img src="../../public/img/shzn.jpg" alt="">
                    <a href="">山河智能</a>
                    <a href="">SWE 18UF</a>
                </li>
                <li>
                    <img src="../../public/img/ds1.jpg" alt="">
                    <a href="">斗山</a>
                    <a href="">DX220LC-9C</a>
                </li>
            </ul>
        </van-swipe-item>

        <van-swipe-item>
            <ul class="ul4">
                <li>
                    <p class="p1">小挖</p>
                    <p class="p2">6吨以下</p>
                    <span></span>
                </li>
                <li>
                    <p class="p1">小挖</p>
                    <p class="p2">6-9吨</p>
                    <span></span>
                </li>
                <li>
                    <p class="p1">中挖</p>
                    <p class="p2">10-19吨</p>
                    <span></span>
                </li>
                <li>
                    <p class="p1">中挖</p>
                    <p class="p2">20-29吨</p>
                    <span></span>
                </li>
                <li>
                    <p class="p1">大挖</p>
                    <p class="p2">30吨以上</p>
                    <span></span>
                </li>
                <li>
                    <p class="p1">小挖</p>
                    <p class="p2">6吨以下</p>
                    <span></span>
                </li>
                <li>
                    <p class="p1">小挖</p>
                    <p class="p2">6吨以下</p>
                    <span></span>
                </li>
                <li>
                    <p class="p1">小挖</p>
                    <p class="p2">6吨以下</p>
                    <span></span>
                </li>
                <li>
                    <p class="p1">小挖</p>
                    <p class="p2">6吨以下</p>
                    <span></span>
                </li>
                <li>
                    <p class="p1">小挖</p>
                    <p class="p2">6吨以下</p>
                    <span></span>
                </li>
            </ul>
        </van-swipe-item>
        </van-swipe>

        <!-- 轮播图 -->
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
            <van-swipe-item>
                <img class="lbt-img" src="../../public/img/lbt2.jpg" alt="">
            </van-swipe-item>

            <van-swipe-item>
                <img class="lbt-img" src="../../public/img/lbt3.jpg" alt="">
            </van-swipe-item>

            <van-swipe-item>
                <img class="lbt-img" src="../../public/img/lbt2.jpg" alt="">
            </van-swipe-item>

            <van-swipe-item>
                <img class="lbt-img" src="../../public/img/lbt4.png" alt="">
            </van-swipe-item>
        </van-swipe>

        <!-- 精选标题 -->
        <p class="jx-p">
            <span>精选</span>
        </p>
        <!-- 精选内容 -->
        <ul class="jx-ul">
            <li>
                <div class="jx-ul-div">
                    <h3>老爷爷要盖新房子，我们来帮老爷爷拆房子</h3>
                    <p><span>最新</span> 3回复 帖子  7小时前</p>
                </div>
                <img src="../../public/img/jx1.jpg" alt="">
            </li>
            <li>
                <div class="jx-ul-div">
                    <h3>老爷爷要盖新房子，我们来帮老爷爷拆房子</h3>
                    <p><span>最新</span> 3回复 帖子  7小时前</p>
                </div>
                <img src="../../public/img/jx1.jpg" alt="">
            </li>
            <li>
                <div class="jx-ul-div">
                    <h3>老爷爷要盖新房子，我们来帮老爷爷拆房子</h3>
                    <p><span>最新</span> 3回复 帖子  7小时前</p>
                </div>
                <img src="../../public/img/jx1.jpg" alt="">
            </li>
            <li>
                <div class="jx-ul-div">
                    <h3>老爷爷要盖新房子，我们来帮老爷爷拆房子</h3>
                    <p><span>最新</span> 3回复 帖子  7小时前</p>
                </div>
                <img src="../../public/img/jx1.jpg" alt="">
            </li>

            <li>
                <div class="jx-ul-div">
                    <h3>老爷爷要盖新房子，我们来帮老爷爷拆房子</h3>
                    <p><span>最新</span> 3回复 帖子  7小时前</p>
                </div>
                <img src="../../public/img/jx1.jpg" alt="">
            </li>

            <li>
                <div class="jx-ul-div">
                    <h3>老爷爷要盖新房子，我们来帮老爷爷拆房子</h3>
                    <p><span>最新</span> 3回复 帖子  7小时前</p>
                </div>
                <img src="../../public/img/jx1.jpg" alt="">
            </li>


            <li>
                <div class="jx-ul-div">
                    <h3>老爷爷要盖新房子，我们来帮老爷爷拆房子</h3>
                    <p><span>最新</span> 3回复 帖子  7小时前</p>
                </div>
                <img src="../../public/img/jx1.jpg" alt="">
            </li>

            <li>
                <div class="jx-ul-div">
                    <h3>老爷爷要盖新房子，我们来帮老爷爷拆房子</h3>
                    <p><span>最新</span> 3回复 帖子  7小时前</p>
                </div>
                <img src="../../public/img/jx1.jpg" alt="">
            </li>
        </ul>
    </main>
</template>

<style scoped>
    *{
        margin: 0px;
        padding: 0px;
        list-style: none;
    }
    .top{
        width: 100%;
        height: 50px;
        background-color: #fff;
        position: relative;
    }
    .logo{
        width: 166px;
        height: 36px;
        position: absolute;
        top: 7px;
        left: 17px;
    }
    .top-left{
        width: 33px;
        height: 33px;
        position: absolute;
        top: 8.5px;
        right: 17px;

    }

    .nav{
        width: 100%;
        height: 45px;
        overflow: auto;
    }
    .nav-ul{
        width: 825px;
        height: 45px;
    }
    .nav-ul li{
        width: 75px;
        height: 45px;
        background-color: #028ce5;
        float: left;
        color: #fff;
        font-size: 18px;
        text-align: center;
        line-height: 45px;
    }
    .nav-ul .router{
        color: #fff;
    }
    .nav-ul li:nth-of-type(1){
        background-color: #057fd2;
    }

    /* 选项卡 */
    .ul2{
        width: 100%;
        height: 100%;
        padding: 0px 20px 0px 20px;
    }
    .ul2 li{
        width: 23%;
        height: 50%;
        text-align: center;
        padding-top: 10px;
        float: left;
        color: #000;
    }
    .ul2 a{
        color: #000;
    }
    .ul2 li img{
        width: 100%;
    }


    .ul3{
        width: 100%;
        height: 100%;
        padding: 0px 20px 0px 0px;
        
    }
    .ul3 li{
        width: 32%;
        height: 100%;
        text-align: center;
        padding-top: 10px;
        float: left;
    }
    .ul3 img{
        width: 100%;
    }
    .ul3 a{
        font-size: 12px;
        display: block;
        margin-top: 15px;
        color: black;
    }


    .ul4{
        width: 100%;
        height: 100%; 
        padding-left: 10px;
        padding-right: 10px;
    }
    .ul4 li{
        width: 20%;
        height: 50%;
        text-align: center;
        overflow: hidden;
        float: left;
    }
    .ul4 .p1{
        font-size: 14px;
        margin-top: 40px;
    }
    .ul4 .p2{
        font-size: 12px;
        color: darkgrey;
    }
    .ul4 span{
        display: inline-block;
        width: 1px;
        height: 18px;
        background-color: rgb(171, 163, 163);
        float: right;
        margin-top: -26px;
    }
    /* 轮播图 */
    .my-swipe .van-swipe-item {
        color: #fff;
        font-size: 216px;
        line-height: 0px;
        text-align: center;
        background-color: #39a9ed;
    }
    .lbt-img{
        width: 100%;
        height: 100%;
    }

    .jx-p{
        width: 100%;
        height: 50px;
        border-bottom: 1px solid rgb(237, 237, 228);
    }
    .jx-p span{
        font-size: 18px;
        line-height: 50px;
        border-left: 4px solid #008be7;
        margin-left: 20px;
        padding-left: 9px;
    }
    .jx-ul{
        width: 100%;

    }
    .jx-ul li{
        height: 90px;
        padding: 17px 17px 17px 17px;
        position: relative;
        border-bottom: 1px solid rgb(227, 220, 220);
    }
    .jx-ul-div{
        width: 65%;
        height: 100%;
    }
    .jx-ul img{
        width: 120px;
        height: 82px;
        position: absolute;
        top: 21px;
        right: 20px;
    }
    .jx-ul p{
        font-size: 12px;
        position: absolute;
        bottom: 20px;
        color: #bbb;
    }
    .jx-ul span{
        color: rgb(255, 0, 0);
        border: 1px solid rgb(255, 0, 0);
        border-radius: 3px;
        padding: 1px;
    }
</style>
