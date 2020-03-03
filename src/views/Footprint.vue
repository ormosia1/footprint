<template>
    <div class="footprint">
        <div class="title">这是你近期的访问记录~</div>
        <div class="content-box">
            <div class="list" v-for="v in getfootPrint" :key="v.name">
                <p>{{v.name}}</p>
                <p>￥{{v.price}}</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        computed:{
            getfootPrint(){
                return this.$store.state.footprintGoods;
            }
        }
    }
</script>

<style lang="less" scoped>
.footprint{
    .title{
        height: 40px;
        line-height: 40px;
        text-align: center;
        background: rgb(245, 201, 118);
        color: #fff;
    }
    .content-box{
        padding: 20px 10px;
        margin-bottom: 30px;
        .list{
            background: pink;
            height: 80px;
            margin-right: 10px;
            border-bottom: 1px solid #ddd;
        }
    }
}
</style>