<template>
    <div class="container">
        <div class="head">
            <span>JL女装官方旗舰店</span>
            <img src="../../static/images/arrow.png">
        </div>
        <div class="imageArea">
            <div class="transPosition">想买人气28888</div>
        </div>
        <div class="mainBody">
            <div class="titleStyle">春季亚麻条纹时尚上衣</div>
            <div>价格：</div>
            <ul class="priceStyle">
                <li class="imageBg">
                    双十二
                </li>
                <li>¥</li>
                <li>6?6.00</li>
            </ul>
            <ul class="buttonStyle">
                <li>
                    <button>进店抢红包</button>
                </li>
                <li>
                    <button>加购物车</button>
                </li>
            </ul>
        </div>        
    </div>
</template>

<script>
export default {
    name: 'goods',
    data () {
        return {

        }
    },
}
</script>
<style scoped>
    .head{
        margin-left: 10px;
    }
    .head span{
        font-size: 18px;
        font-weight: bold;
    }
    .mainBody{
        margin-left: 10px;
        margin-top: 10px;
    }
    .imageArea{
        height: 300px;
        width: 100%;
        background-color: gray;
        position: relative;
        margin-top: 10px;
    }
    .transPosition{
        width: 150px;
        height:30px;
        position: absolute;
        bottom: 0;
        right: 0;
        background-color: black;
        color: wheat;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .titleStyle{
        font-size: 18px;
        font-weight: bold;
    }
    .priceStyle{
        list-style: none;
        color: orangered;
    }
    
    .priceStyle li{
        display: inline;
    }
    .priceStyle li:last-child{
        font-size: 18px;
        font-weight: bold;
    }
    .imageBg{
        background-color: orange;
    }
    .buttonStyle{
        margin-top: 10px;
        list-style: none;
    }
    .buttonStyle li{
        display: inline;
    }
    .buttonStyle button{
        height: 50px;
        width: 100px;
        border-radius: 20px;
    }
</style>