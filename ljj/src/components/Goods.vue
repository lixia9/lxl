<template>
    <div class="container">
        <div class="firstStyle">
            <div class="header">
                <span>JL女装官方旗舰店</span>
                <img src="../../static/images/arrow (2).png">
            </div>
            <div class="main">
                <div class="banner">
                    <img src="../../static/images/pic1.jpg">
                    <div class="shop">想买人气28888</div>
                </div>
                <div class="content">
                    <div class="title">春季亚麻条纹时尚上衣</div>
                    <div class="productStatus">价格：
                        <span>¥12345678</span>
                    </div>
                    <div class="productPrice">
                        <img src="../../static/images/pic2.jpg">¥
                        <span>6?6.00</span>
                    </div>
                </div>
            </div>            
            <div class="footer">
                <button class="btn-buy">进店抢红包</button>
                <button class="btn-basket">加购物车</button> 
            </div>           
        </div>

        <div class="secondStyle">
            <div class="left">
                <img class="banner" src="../../static/images/pic1.jpg">
                <div class="shop">
                    <img src="../../static/images/point.png">
                    直播中
                </div>
            </div>
            <div class="right">
                <div class="header">
                    <div class="title">JNBY</div>
                    <div class="summary">
                        JL新潮国际旗舰店
                        <img src="../../static/images/arrow.png">
                    </div>
                </div>
                <div class="main">
                    <div class="productMade">🇫🇷 法国</div>
                    <div class="productTitle">春季亚麻条纹时尚性感衬衫</div>
                    <div class="productPrice">
                        <img src="../../static/images/pic2.jpg">¥
                        <span>66?6.00</span>
                    </div>
                    <div class="productStatus">价格：
                        <span>¥ 6666.00</span>
                    </div>
                </div>                
                <div class="footer">
                    <div class="tips">想买人气283838</div>
                    <div class="btn">
                        <button class="btn-buy">
                            <span>进店抢红包</span>
                            <img src="../../static/images/arrow (3).png">
                        </button>
                        <button class="btn-basket">
                            <span>加购物车</span>
                            <img src="../../static/images/arrow (4).png">
                        </button>
                    </div>          
                </div>
            </div>
        </div>

        <div class="thirdStyle">
            <div class="left">
                <img class="banner" src="../../static/images/pic1.jpg">
                <div class="shop">
                    <img src="../../static/images/point.png">
                    直播中
                </div>
            </div>
            <div class="right">
                <div class="header">
                   <div class="productTitle">春季亚麻条纹时尚性感上衣</div>
                   <div class="productStatus">
                       价格：
                       <span>¥ 666.00</span>
                    </div>
                    <div class="productPrice">
                        <img src="../../static/images/pic2.jpg">¥
                        <span>6?6.00</span>
                    </div>
                </div>
                <div class="main">
                    布料质感很柔软，上身很舒服，极简主义，打造出青春气息
                </div>
                <div class="footer">
                    <button class="btn-buy">进店抢红包</button>
                    <button class="btn-basket">加购物车</button> 
                </div>               
            </div>
        </div>

        <div class="forthStyle">
            <div class="header">
                更多好宝贝
                <img src="../../static/images/arrow-right.png">
            </div>
            <div class="main">
                惊喜马上等你来揭晓
            </div>
            <div class="footer">
                <ul>
                    <li>
                        <div class="productBanner">
                            <img src="../../static/images/good1.jpg">
                        </div>
                        <div class="productTitle">
                            <span>口味极佳</span>
                        </div>
                    </li>
                    <li>
                        <div class="productBanner">
                            <img src="../../static/images/good2.jpg">
                        </div>
                        <div class="productTitle">
                            <span>肉多汁少</span>
                        </div>
                    </li>
                    <li>
                        <div class="productBanner">
                            <img src="../../static/images/good3.jpg">
                        </div>
                        <div class="productTitle">
                            <span>美味到想哭</span>
                        </div>
                    </li>
                    <li>
                        <div class="productBanner">
                            <img src="../../static/images/good4.jpg">
                        </div>
                        <div class="productTitle">
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
        width: 408px;
        height: 737px;
    }
    .firstStyle .header{
        display: flex;
        align-items: center;
        height: 67px;
        padding-left: 24px;
        border-top-right-radius: 25px;
        border-top-left-radius: 25px;
        background-color: #F5F5F5;
    }
    .firstStyle .header span{
        font-size: 30px;
    }
    .firstStyle .header img{
        width: 25px;
        height: 25px;
        margin-left: 5px;
    }
    .firstStyle .banner{
        position: relative;
        width: 100%;
        height: 408px;
    }
    .firstStyle .banner img {
        width: 408px;
        height: 408px;
    }
    .firstStyle .content{
        width: 100%;
        margin-left: 24px;
    }
    .firstStyle .banner div{
        position: absolute;
        bottom: 0;
        right: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 207px;
        height: 38px;
        color: white;
        font-size: 27px;
        background-color: rgba(0,0,0,.5);        
    }
    .firstStyle .title{
        margin-top: 24px;
        font-size: 30px;
    }
    .firstStyle .productStatus{
        font-size: 24px;
    }
    .firstStyle .productPrice{
        font-size: 22px;
    }
    .firstStyle .productPrice img{
        width: 85px;
        height: 30px;
        margin-right: 10px;
    }
    .firstStyle .productPrice span{
        margin-left: 5px;
        font-size: 36px;
    }
    .firstStyle .footer{
        display: flex;
        align-items: center;
        margin-top: 5px;
        margin-left: 20px;
        list-style: none;      
    }
    .firstStyle .footer button{
        height: 80px;
        width: 180px;
        font-size: 30px;
        border-radius: 50px;
    }
    .firstStyle .btn-buy{
        margin-right: 10px;
    }

/* 第二张图布局 */
    .secondStyle{
        width: 605px;
        height: 360px;
    }
    .secondStyle .left{
        position: relative;
        float: left;
        width: 360px;
        height: 360px;
    }
    .secondStyle .banner{
        width: 360px;
        height: 360px;
    }
    .secondStyle .shop{
        position: absolute;
        right: 0;
        top: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 80px;
        height: 30px;
        margin-right: 12px;
        margin-top: 12px;
        border-radius: 20px;
        color: white;
        font-size: 14px;
        background-color: rgba(0,0,0,.6);
    }
    .secondStyle .shop img{
        width: 25px;
        height: 25px;
    }
    .secondStyle .right{
        position: relative;
        float: right;
        width: 245px;
        height: 360px;
    }
    .secondStyle .header{
        padding-bottom: 10px;
        margin-left: 12px;
        text-align: center;
        border-bottom:1px dashed #F0F0F0;
    }
    .secondStyle .header div{
        height: 50%;
    }
    .secondStyle .title{
        display: flex; 
        align-items: center; 
        justify-content: center;
        margin-top: 15px;
        font-size: 24px;
        font-weight: bold; 
    }
    .secondStyle .summary{
        display: flex;
        justify-content: center;
        align-items: center;
        color: #9D9D9D;
        font-size: 14px;
    }
    .secondStyle .productPrice{
        /* display: flex;
        align-items: center;
        color: #EA4C33; */
        font-size: 15px;
        /* font-weight: bold; */
    }
    .secondStyle .productPrice img{
        width: 60px;
        height: 25px;
        margin-right: 5px;
    }
    .secondStyle .productPrice span{
        margin-left: 5px;
        font-size: 26px;
        /* font-family: Arial, Helvetica, sans-serif; */
    }
    .secondStyle .main{
        position: absolute;
        margin-top: 10px;
        margin-left: 12px;
    }
    .productMade{
        margin-top: 8px;
        font-weight: bold;
    }
    .secondStyle .productTitle{
        overflow: hidden; 
        font-size: 15px;
    }
    .secondStyle .productStatus{ 
        font-size: 15px;
    }
    .secondStyle .footer{
        position: absolute;
        bottom: 10px;
        margin-left: 12px;
        font-size: 15px;
    }
    .secondStyle .tips{
        color: #9D9D9D;
    }
    .secondStyle .btn{
        margin-top: 12px;
        display: flex;
    }
    .secondStyle .btn button{
        width: 109px;
        height: 41px;
        font-size: 14px;
        border: 2px solid #EA4C33;
    }
    .secondStyle .btn img{
        display: flex;
        align-items: center;
        width: 12px;
        height: 12px;
    }
    
    /* 第三张图布局*/
    .thirdStyle{
        width: 678px;
        height: 308px;
        margin-top: 20px;
    }
    .thirdStyle .left{
        position: relative;
        float: left;
        width: 308px;
        height: 308px;
        background-color: gray;
    }
    .thirdStyle .banner{
        width: 308px;
        height: 308px;
    }
    .thirdStyle .shop{
        position: absolute;
        right: 0;
        top: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 103px;
        height: 43px;
        margin-right: 10px;
        margin-top: 10px;
        border-radius: 20px;
        color: white;
        font-size: 20px;
        background-color: rgba(0,0,0,0.7);
        
        
    }
    .thirdStyle .right{
        position: relative;
        float: right;
        width: 370px;
        height: 308px;
    }
    .thirdStyle .header{
        margin-left: 20px;
        padding-bottom: 15px;
        border-bottom: 1px dashed #F0F0F0;
    }
    .thirdStyle .header div{
        height: 33%;
    }
    .thirdStyle .productTitle{
        margin-top: 24px;
        font-size: 26px;
    }
    .thirdStyle .productStatus{
        font-size: 21px;
    }
    .thirdStyle .productPrice{
        /* display: flex;
        align-items: center;
        color: #EA4C33; */
        font-size: 21px;
        /* font-weight: bold; */
    }
    .thirdStyle .productPrice img{
        widows: 70px;
        height: 25px;
        margin-right: 5px;
        margin-top: 5px;
        margin-bottom: 5px;
    }
    .thirdStyle .productPrice span{ 
        margin-left: 5px;
        font-size: 30px;
        /* font-family: Arial, Helvetica, sans-serif; */
    }
    .thirdStyle .main{
        margin-top: 10px;
        margin-left: 20px;
        color: #9D9D9D; 
        font-size: 22px;
    }
    .thirdStyle .footer{
        position: absolute;
        bottom: 10px;
        display: flex;
        margin-left: 20px;
    }
    .thirdStyle .footer button{
        width: 160px;
        height: 60px;
        font-size: 22px;
        border-radius: 30px;
    }
    .thirdStyle .btn-buy{
        margin-right: 10px;
    }
    /* 第四张图的布局 */
    .forthStyle{
        width: 330px;
        height: 600px;
        margin-top: 20px;
        background-color: #EA4433;
        border-radius: 10px;
    }
    .forthStyle .header{
        display: flex;
        align-items: center;
        padding-top: 20px;
        margin-left: 20px;
        margin-right: 20px;
        color: white;
        font-size: 34px;
        font-weight: bold;
    }
    .forthStyle .header img{
        width: 42px;
        height: 42px;
    }
    .forthStyle .main{
        margin: 8px 20px 28px 20px;
        color: white;
        font-size: 22px;
    }
    .forthStyle .footer{
        margin-left: 20px;
        margin-right: 20px;
    }
    .forthStyle .footer ul li {
        width: 140px;
        height: 182px;
        margin-bottom: 10px; 
    }
    .productBanner{
        width: 140px;
        height: 140px;
    }
    .productBanner img{
        height: 100%;
        width: 100%;
        border-top-left-radius: 8px;
        border-top-right-radius: 8px;
    }
    .forthStyle .productTitle{
        bottom: 0;
        display: flex;
        align-items: center;
        height: 38px;
        font-size: 20px;
        background-color: #F8F8F8;
        border-bottom-left-radius: 8px;
        border-bottom-right-radius: 8px;
    }
    .forthStyle .productTitle span{
        margin-left: 10px;
    }
</style>