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
        </div>
        <ul class="buttonStyle">
                <li>
                    <button>进店抢红包</button>
                </li>
                <li>
                    <button>加购物车</button>
                </li>
        </ul>
        <div class="secondStyle">
            <div class="left">
                <button>直播中</button>
            </div>
            <div class="right">
                <div class="secHead">
                    <div>JNBY</div>
                    <div>
                        JL新潮国际旗舰店
                        <img src="../../static/images/arrow.png">
                    </div>
                </div>
                <div class="secBody">
                    <div class="secTitle">🇫🇷法国</div>
                    <div>春季亚麻条纹时尚衬衫</div>
                    <ul class="priceStyle">
                        <li class="imageBg">
                            双十二
                        </li>
                        <li>¥</li>
                        <li>6?6.00</li>
                    </ul>
                    <div>价格：</div>
                    <div class="secWantBuy">想买人气28888</div>
                </div>
                <ul class="secButtonStyle">
                    <li>
                        <button>进店抢红包</button>
                    </li>
                    <li>
                        <button>加购物车</button>
                    </li>
                </ul>
            </div>
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
        display: flex;
        justify-content: center;
    }
    .buttonStyle li{
        display: inline;
    }
    .buttonStyle button{
        height: 50px;
        width: 100px;
        border-radius: 20px;
        margin-left: 10px;
    }

/* 第二张图布局 */
    .secondStyle{
        margin-top: 20px;
        width: 100%;
        height: 250px;
    }
    .left{
        background-color: gray;
        width: 50%;
        height: 100%;
        float: left;
    }
    .left button{
        height: 25px;
        width: 70px;
        border-radius: 10px;
        float: right;
    }
    .right{
        width: 50%;
        height: 100%;
        float: right;
    }
    .secHead{
        text-align: center;
        height: 50px;
        border-bottom:1px dashed #111;
    }
    .secBody{
        margin-left: 10px;
    }
    .secTitle{
        font-weight: bold;
    }
    .secWantBuy{
        color: gray;
        margin-top: 20px;
    }
    .secButtonStyle{
        margin-top: 10px;
        list-style: none;
        display: flex;
        justify-content: center;
    }
    .secButtonStyle li{
        display: inline;
    }
    .secButtonStyle button{
        height: 30px;
        width: 85px;
        border-color: orangered;
        margin-left: 5px;
        font-size: 13px;
    }
</style>