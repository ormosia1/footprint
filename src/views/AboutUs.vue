<template>
    <div class="aboutUs">
        <div class="title">换头像~</div>
        <div class="myHeadImg">
            <img src="../assets/imgs/1.png" alt="">
            <p>我的头像</p>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="less" scoped>
.aboutUs{
    .title{
        height: 40px;
        line-height: 40px;
        text-align: center;
        background: rgb(245, 201, 118);
        color: #fff;
    }
    .myHeadImg{
        text-align: center;
        img{
            width: 70px;
            height: 70px;
            border-radius: 50%;
        }
    }
}
</style>