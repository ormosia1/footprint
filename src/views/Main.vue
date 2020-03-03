<template>
    <div id="main">
        <div class="content">
            <router-view></router-view>
        </div>
        <div class="footer">
            <router-link to="/" active-class="active">首页</router-link>
            <router-link to="/footprint" active-class="active">足迹</router-link>
            <router-link to="/aboutUs" active-class="active">我的</router-link>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="less" scoped>
#main{
    .content{
        border-bottom: 1px solid #ddd;
        background: #fff;
    }
    .footer{
        width: 100%;
        display: flex;
        justify-content: space-around;
        height: 40px;
        line-height: 40px;
        background: rgb(245, 201, 118);
        position: fixed;
        bottom: 0;
        left: 0;
        z-index: 1000;
        a{
            text-align: center;
            color: #fff;
        }
    }
}
.active{
        color: red;
    }
</style>