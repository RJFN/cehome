<template>
    <main>
        <router-view></router-view>

        <!-- 顶部登录模块 -->
        <div class="top">
            <div class="top-main">
                <div class="top-left"></div>
                <div class="top-txt">登录/注册</div>
            </div>
        </div>

        <!-- 订单 -->
        <div class="dd">
            <p class="dd-p1">我的订单</p>
            <p class="dd-p2">全部订单></p>
        </div>

        <!-- 付款收获 -->
        <div class="fksh">
            <div class="fksh-1">
                <div>
                    <img src="https://m.mi.com/static/img/nav-4.d68723895f.png" alt="">
                    <p>待付款</p>
                </div>

                <div>
                    <img src="https://m.mi.com/static/img/nav-4.d68723895f.png" alt="">
                    <p>待收货</p>
                </div>

                <div>
                    <img src="https://m.mi.com/static/img/nav-4.d68723895f.png" alt="">
                    <p>退换修</p>
                </div>
            </div>
        </div>

        <!-- 主模块 -->
        <div class="zmk">
            <div class="zmk-1">
                <div class="zmk-div-img"><img src="../../public/img/hy.png" alt=""></div>
                <div class="zmk-div-right">
                    <a href="">会员中心</a>
                    <div class="jt">></div>
                </div>

                <div class="zmk-div-img"><img src="../../public/img/tj.png" alt=""></div>
                <div class="zmk-div-right">
                    <a href="">会员中心</a>
                    <div class="jt">></div>
                </div>
            </div>
        </div>

        <div class="zmk">
            <div class="zmk-1">
                <div class="zmk-div-img"><img src="../../public/img/ph.png" alt=""></div>
                <div class="zmk-div-right">
                    <a href="">会员中心</a>
                    <div class="jt">></div>
                </div>

                <div class="zmk-div-img"><img src="../../public/img/kf.png" alt=""></div>
                <div class="zmk-div-right">
                    <a href="">会员中心</a>
                    <div class="jt">></div>
                </div>
            </div>
        </div>

        <div class="zmk">
            <div class="zmk-1">
                <div class="zmk-div-img"><img src="../../public/img/tj.png" alt=""></div>
                <div class="zmk-div-right">
                    <a href="">会员中心</a>
                    <div class="jt">></div>
                </div>

                <div class="zmk-div-img"><img src="../../public/img/hy.png" alt=""></div>
                <div class="zmk-div-right">
                    <a href="">会员中心</a>
                    <div class="jt">></div>
                </div>
            </div>
        </div>

        <div class="zmk">
            <div class="zmk-1">
                <div class="zmk-div-img"><img src="../../public/img/kf.png" alt=""></div>
                <div class="zmk-div-right">
                    <a href="">会员中心</a>
                    <div class="jt">></div>
                </div>

                <div class="zmk-div-img"><img src="../../public/img/hy.png" alt=""></div>
                <div class="zmk-div-right">
                    <a href="">会员中心</a>
                    <div class="jt">></div>
                </div>
            </div>
        </div>

        <div class="zmk">
            <div class="zmk-1">
                <div class="zmk-div-img"><img src="../../public/img/kf.png" alt=""></div>
                <div class="zmk-div-right">
                    <a href="">设置</a>
                    <div class="jt">></div>
                </div>
            </div>
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
    background-color: #f5f5f5;
}
/* 顶部登录模块 */
.top{
    width: 100%;
    height: 90px;
    background: url(https://m.mi.com/static/img/bg.63c8e19851.png) center 0 #f37d0f;
    background-size: auto 100%;
    overflow: hidden;
}
.top-main{
    width: 100%;
    height: 50px;
    padding: 20px;
}
.top-left{
    width: 50px;
    height: 50px;
    background: url(https://m.mi.com/static/img/avatar.76a75b8f17.png) no-repeat center center;
    background-size: 100%;
    float: left;
    border: 3px solid #de8b3e;
    border-radius: 50%;
}
.top-txt{
    float: left;
    line-height: 50px;
    color: #fff;
    font-size: 14px;
    margin-left: 10px;
}
/* 订单 */
.dd{
    width: 100%;
    height: 46px;
    background-color: #fff;
    border-bottom: 1px solid rgba(0, 0, 0, .15);
    position: relative;
}
.dd-p1{
    position: absolute;
    top: 25%;
    left: 20px;
}
.dd-p2{
    position: absolute;
    top: 25%;
    right: 20px;
}
/* 付款收货 */
.fksh{
    width: 100%;
    height: 100px;
    background-color: #fff
}
.fksh img{
    width: 27px;
    height: 27px;
}
.fksh-1 div{
    width: 33%;
    float: left;
    text-align: center;
    margin-top: 28px;
}
.zmk{
    width: 100%;
    height: 120px;
    background-color: #fff;
    margin-top: 10px;
}
.zmk-1{
    width: 100%;
    height: 60px;
    border-bottom: 1px solid #f4f2f0;
}
.zmk-div-img{
    width: 60px;
    height: 60px;
    text-align: center;
    line-height: 75px;
    float: left;
}
.zmk-div-img img{
    width: 30px;
    height: 30px;
}
.jt{
    float: right;
    font-size: 40px;
    color: #c9c8c7;
}
.zmk-div-right a{
    line-height: 60px;
}
.jt{
    margin-right: 20px;
    line-height: 60px;
}
.bottom{
    width: 100%;
    height: 60px;
    background-color: #fff;
    margin-top: 20px;
    margin-bottom: 10px;
    line-height: 60px;
}
.sz{
    margin-left: 60px;
}
.bottom1{
    width: 100%;
    height: 20px;
}
</style>
