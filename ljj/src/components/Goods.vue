<template>
    <div class="container">
        <div class="firstStyle">
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
            <div class="footer">
                <button>进店抢红包</button>
                <button>加购物车</button> 
            </div>
        </div>
        <div class="secondStyle">
            <div class="left">
                <button>直播中</button>
            </div>
            <div class="right">
                <div class="secHead">
                    <div style="font-size:20px; font-weight:bold;">JNBY</div>
                    <div>
                        JL新潮国际旗舰店
                        <img src="../../static/images/arrow.png">
                    </div>
                </div>
                <div class="secBody">
                    <div class="secTitle">🇫🇷法国</div>
                    <div style=" overflow: hidden; height: 27px;">春季亚麻条纹时尚衬衫</div>
                    <ul class="priceStyle">
                        <li class="imageBg">
                            双十二
                        </li>
                        <li>¥</li>
                        <li>6?6.00</li>
                    </ul>
                    <div style="color: gray;">价格：</div>
                    <div class="secWantBuy">想买人气28888</div>
                </div>                
                <div class="secFooter">
                    <button>进店抢红包</button>
                    <button>加购物车</button> 
                </div>
            </div>
        </div>
        <div class="thirdStyle">
            <div class="thirdLeft">
                <button>直播中</button>
            </div>
            <div class="thirdRight">
                <div class="thirdHead">
                   <div class="titleStyle">春季亚麻条纹时尚衬衫</div>
                   <div style="color: gray;">价格：</div>
                    <ul class="priceStyle">
                        <li class="imageBg">
                            双十二
                        </li>
                        <li>¥</li>
                        <li>6?6.00</li>
                    </ul> 
                </div>
                <div class="thirdBody">
                    <div>布料质感很柔软，上身很舒服，极简主义，打造出青春信息</div>
                    <div class="thirdButtonStyle">
                        <button>进店抢红包</button>
                        <button>加购物车</button> 
                    </div>
                </div>               
            </div>
        </div>
        <div class="forthStyle">
            <div class="forthHead">
                更多好宝贝
                <img src="../../static/images/arrow.png">
            </div>
            <div class="forthBody">
                惊喜马上等你来揭晓
            </div>
            <div class="forthFooter">
                <ul>
                    <li>
                        <div class="imgStyle"></div>
                        <div class="forthTitle">
                            <span>口味极佳</span>
                        </div>
                    </li>
                    <li>
                        <div class="imgStyle"></div>
                        <div class="forthTitle">
                            <span>肉多汁少</span>
                        </div>
                    </li>
                    <li>
                        <div class="imgStyle"></div>
                        <div class="forthTitle">
                            <span>美味到想哭</span>
                        </div>
                    </li>
                    <li>
                        <div class="imgStyle"></div>
                        <div class="forthTitle">
                            <span>富含营养</span>
                        </div>
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
    .firstStyle{
        width: 100%;
        height: 480px;
    }
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
        margin-top: 10px;
        font-size: 18px;
        font-weight: bold;
        height: 30%;
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
    .footer{
        margin-top: 10px;
        list-style: none;
        display: flex;
        align-items: center;
    }
    .footer button{
        height: 35px;
        width: 100px;
        border-color: orangered;
        margin-left: 5px;
        border-radius: 20px;
        overflow: hidden;
        text-align: center;
    }

/* 第二张图布局 */
    .secondStyle{
        margin-top: 20px;
        width: 100%;
        height: 250px;
    }
    .left{
        background-color: gray;
        width: 52%;
        height: 100%;
        float: left;
    }
    .left button{
        height: 25px;
        width: 70px;
        border-radius: 10px;
        float: right;
        margin-top: 10px;
        margin-right: 10px;
    }
    .right{
        width: 48%;
        height: 100%;
        float: right;
    }
    .secHead{
        text-align: center;
        height: 25%;
        border-bottom:1px dashed #111;
    }
    .secHead div{
        height: 50%;
    }
    .secBody{
        margin-top: 5px;
        margin-left: 5px;
        height: 50%;
    }
    .secTitle{
        font-weight: bold;
    }
    .secWantBuy{
        color: gray;
    }
    .secFooter{
        font-size: 13px;
        list-style: none;
        display: flex;
        align-items: center;
        height: 15%;
        bottom: 0;
    }
    .secFooter button{
        height: 25px;
        width: 85px;
        border-color: orangered;
        margin-left: 5px;
        font-size: 13px;
        overflow: hidden;
        text-align: center;
    }
    
    /* 第三张图布局*/
    .thirdStyle{
        margin-top: 20px;
        width: 100%;
        height: 50vw;
    }
    .thirdLeft{
        background-color: gray;
        width: 40%;
        height: 50vw;
        float: left;
    }  
    .thirdLeft button{
        height: 25px;
        width: 70px;
        border-radius: 10px;
        float: right;
        margin-right: 10px;
        margin-top: 10px;
    }
    .thirdRight{
        width: 58%;
        height: 50vw;
        float: right;
    }
    .thirdHead{
        width: 100%;
        height: 40%;
        border-bottom:1px dashed #111;
    }
    .thirdHead div{
        height: 30%;
    }
    .thirdBody{
        width: 100%;
        height: 55%;
    }
    .thirdBody div{
        height: 50%;
        overflow: hidden;
    }
    .thirdButtonStyle{
        list-style: none;
        display: flex;
        align-items: center;
    }
    .thirdButtonStyle button{
        height: 35px;
        width: 100px;
        border-color: orangered;
        margin-left: 5px;
        border-radius: 20px;
        overflow: hidden;
        text-align: center;
    }

    /* 第四张图的布局 */
    .forthStyle{
        margin-top: 20px;
        width: 100%;
        height: 150vw;
        background-color: #FF5722;
    }
    .forthHead{
        font-size: 20px;
        font-weight: bold;
        color: white;
        padding: 10px 0;
        margin-left: 10px;
        margin-right: 10px;
    }
    .forthBody{
        color: white;
        height: 10%;
        margin-left: 10px;
        margin-right: 10px;
    }
    .forthFooter{
        height: 80%;
        margin-left: 10px;
        margin-right: 10px;
    }
    .forthFooter ul{
        clear: both;
        overflow: hidden;
    }
    .forthFooter ul li {
        width: 48%;
        height: 50vw;
        margin-bottom: 10px; 
        float: left;
    }
    .forthFooter ul li:nth-child(even) {
        margin-left: 4%;
    }
    .imgStyle{
        width: 100%;
        height: 80%;
        background-color: white;
    }
    .forthTitle{
        width: 100%;
        height: 20%;
        background-color: lightgray;
        bottom: 0;
        display: flex;
        align-items: center;
    }
    .forthTitle span{
        margin-left: 10px;
    }
</style>