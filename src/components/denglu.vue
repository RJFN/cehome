<template>
    <main>
        <router-view></router-view>
        <router-link to="index"><span class="fh">《</span></router-link>
        
        <h4>
            手机验证码登录
        </h4>
        <input type="text" placeholder="请输入手机号">
        <p class="txt-p1">
            用户名密码登录 
        </p>
        <router-link to="denglu2">
        <p class="txt-p1-1">新用户注册</p>
        </router-link>
        <p class="txt-p2">下一步 ></p>
        <p class="txt-p3">登录遇到问题？【客服热线：400-000-9035】</p>
    </main>
</template>

<style scoped>
*{
    margin: 0px;
    padding: 0px;
    list-style: none;
}
.fh{
    display: block;
    font-size: 30px;
    color: rgb(189, 184, 184);
    margin-left: 15px;
    margin-top: 20px;
}
h4{
    font-size: 30px;
    font-weight: 500;
    color: rgba(45,45,51,1);
    margin-top: 65px;
    margin-left: 30px;
}
input{
    width: 80%;
    height: 50px;
    margin-left: 30px;
    margin-top: 40px;
    border: none;
    border-bottom: 1px solid rgb(189, 184, 184);
    font-size: 20px;
    color: rgb(189, 184, 184);
}
.txt-p1{
    color: rgb(189, 184, 184);
    margin-left: 30px;
    margin-top: 40px;
}
.txt-p1-1{
    color: rgb(189, 184, 184);
    margin-left: 30px;
    margin-top: 20px;
}
.txt-p2{
    font-size: 28px;
    color: rgb(189, 184, 184);
    margin-left: 30px;
    margin-top: 40px;
}
.txt-p3{
    color: rgb(189, 184, 184);
    font-size: 12px;
    text-align: center;
    margin-top: 430px;
}
</style>
