<template>
    <div class="Home">
        <div class="header">
            <div class="header-top">
                <p>催更有用吗</p>
                <p>混吃等死</p>
            </div>
            <div class="header-bottom">
                <router-link to="/index">
                    <img src="../assets/imgs/1.png" alt="">
                    <p>番剧</p>
                </router-link>
                <router-link to="/">
                    <img src="../assets/imgs/1.png" alt="">
                    <p>动画</p>
                </router-link>
                <router-link to="/">
                    <img src="../assets/imgs/1.png" alt="">
                    <p>纪录片</p>
                </router-link>
                <router-link to="/">
                    <img src="../assets/imgs/1.png" alt="">
                    <p>国创</p>
                </router-link>
                <router-link to="/">
                    <img src="../assets/imgs/1.png" alt="">
                    <p>音乐</p>
                </router-link>
                <router-link to="/">
                    <img src="../assets/imgs/1.png" alt="">
                    <p>舞蹈</p>
                </router-link>
                <router-link to="/">
                    <img src="../assets/imgs/1.png" alt="">
                    <p>鬼畜</p>
                </router-link>
                <router-link to="/">
                    <img src="../assets/imgs/1.png" alt="">
                    <p>科技</p>
                </router-link>
            </div>
        </div>
        <!-- 超值特惠 -->
        <div class="discounts">
            <p class="title">
                <span>超值特惠</span>
                <span>更多优惠</span>
            </p>
            <div class="shopLists">
                <div v-for="v in getGoods.discounts" :key="v.name">
                    <div to="" class="singleList" @click="changeGoods(v.name,v.price)">
                        <img src="../assets/imgs/paojie.png" alt="">
                        <p>{{v.name}}</p>
                        <span class="price">￥{{v.price}}</span>
                        <span>￥1099</span>
                    </div>
                </div>
            </div>
        </div>
        <!--猜你喜欢  -->
        <div class="recommend">
            <p class="title">猜你喜欢</p>
            <div class="like-lists">
                <div v-for="v in getGoods.recommend" :key="v.name">
                    <div class="singleList" @click="changeGoods(v.name,v.price)">
                        <img src="../assets/imgs/goods1.png" alt="">
                        <div class="right">
                            <p class="name">{{v.name}}</p>
                            <p class="desc">超值选购,首抽优惠9折优惠</p>
                            <span class="price">￥{{v.price}}</span>
                            <span>￥59.9</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                arr:[],
            }
        },
        methods:{
            // 当点击商品时
            changeGoods(name,price){
                this.arr.push({name:name,price:price})
            //  方法1：利用对象访问属性的方法，判断对象中是否存在key
                var result = [];
                var obj = {};
                for(var i =0; i<this.arr.length; i++){
                   if(!obj[this.arr[i].name]){
                      result.push(this.arr[i]);
                      obj[this.arr[i].name] = true;
                   }
                }
                console.log(result)
                this.$store.commit('getGoodsName',result.reverse())
            }
        },

        computed:{
            getGoods(){
                return this.$store.state.goodsList
            }
        }
        ,
        created(){
            console.log(this.$store.state.goodsList)
        }
    }
</script>

<style lang="less" scoped>
.header{
    .header-top{
        text-align: center;
        font-size: 20px;
        background: rgb(250, 219, 162);
        color: #fff;
    }
    .header-bottom{
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        background: pink;
        text-align: center;
        padding: 0;
        a{
            display: block;
            width: 25%;
            height: 76px;
            // line-height: 76px;
            img{
                border-radius: 50%;
                width:44px;
            }
        }
    }
}
// 超值特惠
.discounts{
    border-bottom: 1px solid #ddd;
    .title{
        height: 40px;
        line-height: 40px;
        display: flex;
        justify-content: space-between;
        padding: 0 10px;
        span:first-child{
            font-size: 18px;
            font-weight: bold;
            color: rgb(202, 9, 9);
        }
    }
    .shopLists{
        display: flex;
        // justify-content: space-around;
        .singleList{
            flex: 1;
            display: block;
            text-align: center;
            color: #333;
            .price{
                color: red;
                font-size: 16px;
            }
            span:last-child{
                font-size: 12px;
                text-decoration: line-through;
            }
            img{
                width: 90%;
            }
        }
    }
}
// 猜你喜欢
.recommend{
    margin-top: 10px;
    padding: 0 10px;
    border-top: 1px solid #ddd;
    background: #fff;
    .title{
        height: 40px;
        line-height: 40px;
    }
    .like-lists{
        color: #333;
        .singleList{
            display: flex;
            margin-bottom: 15px;
            img{
                width: 100px;
                height: 100px;
            }
            .right{
                margin-left: 10px;
                .name{
                    font-size: 16px;
                    font-weight: bold;
                }
                .desc{
                    font-size: 12px;
                }
                .price{
                    color: red;
                    font-size: 16px;
                }
                span:last-child{
                    text-decoration: line-through;
                }
            }
        }
    }
}
</style>