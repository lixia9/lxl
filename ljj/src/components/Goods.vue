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
                        <span>¥ 12345678</span>
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
                        <img src="../../static/images/pic3.jpg">¥
                        <span>66?6.00</span>
                    </div>
                    <div class="productStatus">价格：
                        <span>¥ 6666.00</span>
                    </div>
                </div>                
                <div class="footer">
                    <p class="tips">想买人气283838</p>
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
                        <img src="../../static/images/pic3.jpg">¥
                        <span>6?6.00</span>
                    </div>
                </div>
                <div class="main">
                    <p>布料质感很柔软，上身很舒服，极简主义，打造出青春气息</p>
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
    /* p{
        margin: 10px 0;
    } */
    .firstStyle{
        width: 100%;
        height: 550px;
    }
    .firstStyle .header{
        display: flex;
        align-items: center;
        height: 50px;
        padding-left: 20px;
        border-top-right-radius: 15px;
        border-top-left-radius: 15px;
        background-color: #F5F5F5;
    }
    .firstStyle .header span{
        font-size: 20px;
    }
    .firstStyle .header img{
        width: 25px;
        height: 25px;
        margin-left: 5px;
    }
    .firstStyle .banner{
        position: relative;
        width: 100%;
        height: 300px;
        background-color: gray; 
    }
    .firstStyle .banner img {
        width: 100vw;
        height: 300px;
    }
    .firstStyle .content{
        width: 100%;
        margin-left: 20px;
    }
    .firstStyle .banner div{
        position: absolute;
        bottom: 0;
        right: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 140px;
        height: 30px;
        color: white;
        font-size: 18px;
        background-color: rgba(0,0,0,0.5);        
    }
    .firstStyle .title{
        font-size: 20px;
    }
    .firstStyle .productStatus{
        color: #9D9D9D; 
        font-size: 18px;
    }
    .firstStyle .productStatus span{
        text-decoration:line-through;
    }
    .firstStyle .productPrice{
        display: flex;
        align-items: center;
        color: #EA4C33;
        font-size: 18px;
        font-weight: bold;
    }
    .firstStyle .productPrice img{
        margin-right: 10px;
    }
    .firstStyle .productPrice span{
        margin-left: 5px;
        font-size: 24px;
        font-family: Arial, Helvetica, sans-serif;
    }
    .firstStyle .footer{
        display: flex;
        align-items: center;
        margin-top: 5px;
        margin-left: 20px;
        list-style: none;      
    }
    .firstStyle .footer button{
        height: 50px;
        width: 120px;
        overflow: hidden;
        text-align: center;
        font-size: 18px;
        border-radius: 20px;
    }
    .firstStyle .btn-buy{
        margin-right: 5px;
        color: #EA4C33;
        border-color: #EA4C33;
        background-color: white;
    }
    .firstStyle .btn-basket{
        color: white; 
        border-color: #EA4C33;
        background-color: #EA4C33;
    }

/* 第二张图布局 */
    .secondStyle{
        width: 100%;
        height: 65vw;
    }
    .secondStyle .left{
        position: relative;
        float: left;
        width: 50%;
        height: 100%;
        background-color: gray;
    }
    .secondStyle .banner{
        width: 50vw;
        height: 65vw;
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
        margin-right: 10px;
        margin-top: 10px;
        border-radius: 20px;
        color: white;
        font-size: 14px;
        background-color: rgba(0,0,0,0.7);
    }
    .secondStyle .shop img{
        width: 25px;
        height: 25px;
    }
    .secondStyle .right{
        position: relative;
        float: right;
        width: 50%;
        height: 100%;
    }
    .secondStyle .header{
        /* height: 25%; */
        padding-bottom: 8px;
        margin-left: 5px;
        text-align: center;
        border-bottom:1px dashed #111;
    }
    .secondStyle .header div{
        height: 50%;
    }
    .secondStyle .title{
        display: flex; 
        align-items: center; 
        justify-content: center;
        font-size:20px; 
        font-weight:bold; 
    }
    .secondStyle .summary{
        display: flex;
        justify-content: center;
        align-items: center;
        color: #9D9D9D;
        font-size: 14px;
    }
    .secondStyle .productPrice{
        display: flex;
        align-items: center;
        color: #EA4C33;
        font-size: 18px;
        font-weight: bold;
    }
    .secondStyle .productPrice img{
        width: 60px;
        height: 25px;
        margin-right: 5px;
    }
    .secondStyle .productPrice span{
        margin-left: 5px;
        font-size: 20px;
        font-family: Arial, Helvetica, sans-serif;
    }
    .secondStyle .main{
        position: absolute;
        /* height: 50%; */
        margin-top: 10px;
        margin-left: 5px;
    }
    .productMade{
        font-weight: bold;
    }
    .secondStyle .productTitle{
        overflow: hidden; 
        font-size: 14px;
    }
    .secondStyle .productStatus{
        color: #9D9D9D; 
        font-size: 14px;
    }
    .secondStyle .productStatus span{
        text-decoration: line-through; 
        font-family: Arial, Helvetica, sans-serif;
    }
    .secondStyle .footer{
        position: absolute;
        bottom: 10px;
        margin-left: 5px;
        font-size: 14px;
    }
    .secondStyle .tips{
        color: #9D9D9D;
    }
    .secondStyle .btn{
        margin-top: 5px;
        display: flex;
    }
    .secondStyle .btn button{
        display: flex;
        align-items: center;
        justify-content: center;
        height: 8vw;
        width: 24vw;
        font-size: 14px;
        overflow: hidden;
        text-align: center;
        border-color: #EA4C33;
    }
    .secondStyle .btn img{
        display: flex;
        align-items: center;
        width: 12px;
        height: 12px;
    }
    .secondStyle .btn-buy{
        margin-right: 5px;
        color: #EA4C33;        
        background-color: white;
    }
    .secondStyle .btn-basket{
        color: white; 
        background-color: #EA4C33;
    }
    
    /* 第三张图布局*/
    .thirdStyle{
        width: 100%;
        height: 45vw;
        margin-top: 20px;
    }
    .thirdStyle .left{
        position: relative;
        float: left;
        width: 45%;
        height: 45vw;       
        background-color: gray;
    }
    .thirdStyle .banner{
        width: 45vw;
        height: 45vw;
    }
    .thirdStyle .shop{
        position: absolute;
        right: 0;
        top: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 75px;
        height: 25px;
        margin-right: 10px;
        margin-top: 10px;
        border-radius: 20px;
        color: white;
        font-size: 14px;   
        background-color: rgba(0,0,0,0.7);
        
        
    }
    .thirdStyle .shop img{
        width: 20px;
        height: 20px;
    }  
    .thirdStyle .left button{
        float: right;
        height: 25px;
        width: 70px;
        margin-right: 10px;
        margin-top: 10px;
        border-radius: 10px;      
    }
    .thirdStyle .right{
        position: relative;
        float: right;
        width: 53%;
        height: 45vw;     
    }
    .thirdStyle .header{
        width: 100%;
        height: 35%;
    }
    .thirdStyle .header div{
        height: 33%;
    }
    .thirdStyle .productTitle{
        display: flex;
        align-items: center;
        margin-top: 10px;
        font-size: 16px;
    }
    .thirdStyle .productStatus{
        display: flex; 
        align-items: center;
        color: #9D9D9D; 
        font-size: 14px; 
    }
    .thirdStyle .productStatus span{
        text-decoration: line-through; 
        font-family: Arial, Helvetica, sans-serif;
    }
    .thirdStyle .productPrice{
        display: flex;
        align-items: center;
        color: #EA4C33;
        font-weight: bold;
    }
    .thirdStyle .productPrice img{
        width: 50px;
        height: 25px;
        margin-right: 5px;
        margin-top: 5px;
        margin-bottom: 5px;
    }
    .thirdStyle .productPrice span{ 
        margin-left: 5px;
        font-size: 18px;
        font-family: Arial, Helvetica, sans-serif;
    }
    .thirdStyle .main{
        width: 100%;
        height: 50%;
        margin-top: 5px;
        border-top: 1px dashed #111;
    }
    .thirdStyle .main p{    
        height: 45px; 
        margin-top: 5px;
        overflow: hidden; 
        font-size: 14px; 
        color: #9D9D9D; 
    }
    .thirdStyle .footer{
        position: absolute;
        bottom: 10px;
        display: flex;
        height: 15%;
        margin-top: 5px; 
    }
    .thirdStyle .footer button{
        display: flex;
        align-items: center;
        justify-content: center;
        height: 8vw;
        width: 25vw;
        overflow: hidden;
        font-size: 14px;
        border-color: #EA4C33;
        border-radius: 20px;
        text-align: center;   
    }
    .thirdStyle .btn-buy{
        margin-right: 5px;
        color: #EA4C33;
        background-color: white;
    }
    .thirdStyle .btn-basket{
        color: white; 
        background-color: #EA4C33;
    }

    /* 第四张图的布局 */
    .forthStyle{
        width: 100%;
        height: 150vw;
        margin-top: 20px;
        background-color: #EA4433;
        border-radius: 10px;
    }
    .forthStyle .header{
        display: flex;
        align-items: center;
        padding: 10px 0;
        margin-left: 10px;
        margin-right: 10px;
        color: white;
        font-size: 20px;
        font-weight: bold;
    }
    .forthStyle .header img{
        width: 24px;
        height: 24px;
    }
    .forthStyle .main{
        height: 10%;
        margin-left: 10px;
        margin-right: 10px;
        color: white;
    }
    .forthStyle .footer{
        height: 80%;
        margin-left: 10px;
        margin-right: 10px;
    }
    .forthStyle .footer ul{
        clear: both;
        overflow: hidden;
    }
    .forthStyle .footer ul li {
        float: left;
        width: 48%;
        height: 50vw;
        margin-bottom: 10px; 
    }
    .forthStyle .footer ul li:nth-child(even) {
        margin-left: 2%;
    }
    .productBanner{
        width: 100%;
        height: 80%;
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
        width: 100%;
        height: 20%;
        background-color: #F8F8F8;
        border-bottom-left-radius: 8px;
        border-bottom-right-radius: 8px;
    }
    .forthStyle .productTitle span{
        margin-left: 10px;
    }
</style>