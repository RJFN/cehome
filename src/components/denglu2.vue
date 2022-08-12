<template>
    <main>
        <router-view></router-view>
        <div class="top">
            <router-link to="denglu"><span class="top-left">《</span></router-link>
            <span class="top-center">注册</span>
        </div>

        <input type="text" class="inp1" placeholder="请输入您的手机号">
        
        <div class="yzm">
            <input type="text" name="" id="" class="inp1" placeholder="请输入您收到的验证码">
            <button class="but1">获取验证码</button>
        </div>

        <input type="text" class="inp1" placeholder="请输入您的密码">
        <input type="text" class="inp1" placeholder="请再次输入您的密码">

        <span class="imgspan1">低</span>
        <span class="imgspan2">中</span>
        <span class="imgspan3">强</span>

        <button class="bottom-btn">立即注册</button>

        <p class="yyzh">已有账号？</p>

        <p class="bottom-p">
            若点击“立即注册”即代表您已同意我们的网站相关规定和需求。
        </p>

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
    background-color: rgb(212, 209, 205);
    text-align: center;
}
.top-left{
    font-size: 30px;
    color: whitesmoke;
    float: left;
}
.top-center{
    font-size: 30px;
    color: whitesmoke;
}

.inp1{
    width: 90%;
    height: 50px;
    margin-left: 5%;
    margin-top: 30px;
    border-radius: 10px;
    border: 2px solid rgb(212, 209, 205);
    
}
.yzm{
    position: relative;
}
.but1{
    position: absolute;
    padding: 10px;
    top: 36px;
    right: 24px;
    border-radius: 10px;
    border: none;
}
.imgspan1{
    display: block;
    width: 116px;
    font-size: 12px;
    color: #fff;
    background-color: rgb(212, 209, 205);
    margin-top: 10px;
    text-align: center;
    float: left;
    margin-left: 22px;
}
.imgspan2{
    display: block;
    width: 116px;
    font-size: 12px;
    color: #fff;
    background-color: rgb(212, 209, 205);
    margin-top: 10px;
    text-align: center;
    float: left;
    margin-left: 14px;
}
.imgspan3{
    display: block;
    width: 116px;
    font-size: 12px;
    color: #fff;
    background-color: rgb(212, 209, 205);
    margin-top: 10px;
    text-align: center;
    float: left;
    margin-left: 14px;
}
.bottom-btn{
    width: 380px;
    height: 50px;
    background-color: rgb(212, 209, 205);
    border: none;
    border-radius: 10px;
    margin-top: 30px;
    margin-left: 19px;
    color: #fff;
}
.yyzh{
    float: right;
    margin-top: 20px;
    margin-right: 30px;
    color: rgb(212, 209, 205);
}
.bottom-p{
    margin-top: 120px;
    padding: 30px;
    color: rgb(212, 209, 205);
}
</style>
