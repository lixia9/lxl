<template>
   <div class="lxl">
       <span>w</span>
       <p>c</p>
   </div>
       
</template>

<script>
import {
 login,
 pddGoods
} from "@/api/api.js";
export default {
    name: 'goods',
    data () {
        return {

        }
    },
    created() {
       
    //  login().then(data=>{
    //     console.log(data)
    //  })
     //subject_id=5571&page=1&size=10
     pddGoods({data:{
         subject_id:5571,
         page:1,
         size:10
     }}).then(data=>{
        console.log(data)
     })

    },
}

</script>
<style scoped>
    .firstStyle{
        width: 100%;
        height: 196vw;
    }
    .firstStyle .header{
        display: flex;
        align-items: center;
        height: 4.467rem;
        padding-left: 1.6rem;
        border-top-right-radius: 1.667rem;
        border-top-left-radius: 1.667rem;
        background-color: #F5F5F5;
    }
    .firstStyle .header span{
        font-size: 2rem;
    }
    .firstStyle .header img{
        width: 1.667rem;
        height: 1.667rem;
        margin-left: 0.333rem;
    }
    .firstStyle .banner{
        position: relative;
        width: 100%;
        height: 100vw;
    }
    .firstStyle .banner img {
        width: 100%;
        height: 100%;
    }
    .firstStyle .content{
        width: 100%;
        margin-left: 1.6rem;
    }
    .firstStyle .banner div{
        position: absolute;
        bottom: 0;
        right: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 13.8rem;
        height: 2.533rem;
        color: white;
        font-size: 1.8rem;
        background-color: rgba(0,0,0,.5);        
    }
    .firstStyle .title{
        margin-top: 1.6rem;
        font-size: 2rem;
    }
    .firstStyle .productStatus{
        font-size: 1.6rem;
    }
    .firstStyle .productStatus span{
        font-size: 1.6rem;
    }
    .firstStyle .productPrice{
        font-size: 1.467rem;
    }
    .firstStyle .productPrice img{
        width: 5.667rem;
        height: 2rem;
        margin-right: 0.667rem;
    }
    .firstStyle .productPrice span{
        margin-left: 0.333rem;
        font-size: 2.4rem;
    }
    .firstStyle .footer{
        display: flex;
        align-items: center;
        margin-left: 0.333rem;
        margin-left: 1.333rem;
        list-style: none;      
    }
    .firstStyle .footer button{
        width: 11rem;
        height: 5rem;
        font-size: 1.8rem;
        border-radius: 3.333rem;
    }
    .firstStyle .btn-buy{
        margin-right: 0.667rem;
    }

/* 第二张图布局 */
    .secondStyle{
        width: 100%;
        height: 59.5vw;
    }
    .secondStyle .left{
        position: relative;
        float: left;
        width: 56vw;
        height: 56vw;
    }
    .secondStyle .banner{
        width: 100%;
        height: 100%;
    }
    .secondStyle .shop{
        position: absolute;
        right: 0;
        top: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 5.333rem;
        height: 2rem;
        margin-right: 0.8rem;
        margin-top: 0.8rem;
        border-radius: 1.333rem;
        color: white;
        font-size: 0.8rem;
        background-color: rgba(0,0,0,.6);
    }
    .secondStyle .shop img{
        width: 1.667rem;
        height: 1.667rem;
    }
    .secondStyle .right{
        position: relative;
        float: right;
        width: 44vw;
        height: 56vw;
    }
    .secondStyle .header{
        padding-bottom: 0.3rem;
        margin-left: 0.3rem;
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
        font-size: 1.2rem;
        font-weight: bold; 
    }
    .secondStyle .summary{
        display: flex;
        justify-content: center;
        align-items: center;
        color: #9D9D9D;
        font-size: 0.8rem;
    }
    .secondStyle .productPrice{
        font-size: 0.8rem;
    }
    .secondStyle .productPrice img{
        width: 3.3rem;
        height: 1.2rem;
        margin-right: 0.333rem;
    }
    .secondStyle .productPrice span{
        margin-left: 0.333rem;
        font-size: 1.3rem;
    }
    .secondStyle .main{
        margin-left: 0.3rem;
    }
    .productMade{
        margin-top: 0.533rem;
        font-size: 0.9rem;
        font-weight: bold;
    }
    .secondStyle .productTitle{
        overflow: hidden; 
        white-space:nowrap;
        text-overflow:ellipsis;
        font-size: 0.8rem;
    }
    .secondStyle .productStatus{
        font-size: 0.8rem;
    }
    .secondStyle .productStatus span{
        font-size: 0.8rem; 
    }
    .secondStyle .footer{
        position: absolute;
        bottom: 0;
        width: 100%;
        margin-left: 0.3rem;
    }
    .secondStyle .tips{
        font-size: 0.6rem;
        color: #9D9D9D;
    }
    .secondStyle .btn{
        margin-top: 0.2rem;
        display: flex;
    }
    .secondStyle .btn button{
        width: 5rem;
        height: 2rem;
        border: 0.1rem solid #EA4C33;
    }
    .secondStyle .btn img{
        display: flex;
        align-items: center;
        width: 0.5rem;
        height: 0.5rem;
    }
    .secondStyle .btn span{
        font-size: 0.6rem;
        white-space:nowrap;
        overflow:hidden;
    }
    
    /* 第三张图布局*/
    .thirdStyle{
        width: 100%;
        height: 45vw;
    }
    .thirdStyle .left{
        position: relative;
        float: left;
        width: 45vw;
        height: 45vw;
        background-color: gray;
    }
    .thirdStyle .banner{
        width: 100%;
        height: 100%;
    }
    .thirdStyle .shop{
        position: absolute;
        right: 0;
        top: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 5.5rem;
        height: 2rem;
        margin-right: 0.667rem;
        margin-top: 0.667rem;
        border-radius: 1.333rem;
        color: white;
        background-color: rgba(0,0,0,.7);    
    }
    .thirdStyle .shop img{
        width: 1.8rem;
        height: 1.8rem;
    }
    .thirdStyle .right{
        position: relative;
        float: right;
        width: 55vw;
        height: 45vw;
    }
    .thirdStyle .header{
        margin-left: 0.6rem;
        padding-bottom: 0.5rem;
        border-bottom: 1px dashed #F0F0F0;
    }
    .thirdStyle .productTitle{
        margin-top: 0.3rem;
    }
    .thirdStyle .productStatus{
        font-size: 0.8rem;
    }
    .thirdStyle .productStatus span{
        font-size: 0.8rem;
    }
    .thirdStyle .productPrice{
        font-size: 0.8rem;
    }
    .thirdStyle .productPrice img{
        width: 2.6rem;
        height: 1.2rem;
        margin-right: 0.33rem;
        margin-top: 0.33rem;
        margin-bottom: 0.33rem;
    }
    .thirdStyle .productPrice span{ 
        margin-left: 0.33rem;
        font-size: 1.2rem;
    }
    .thirdStyle .main{
        margin-top: 0.3rem;
        margin-left: 0.6rem;
        color: #9D9D9D; 
        font-size: 0.85rem;
        overflow:hidden;
        text-overflow:ellipsis;
        display:-webkit-box;
        -webkit-box-orient:vertical;
        -webkit-line-clamp:2;
    }
    .thirdStyle .footer{
        position: absolute;
        bottom: 0.3rem;
        display: flex;
        font-size: 1rem;
        margin-left: 0.6rem;
    }
    .thirdStyle .footer button{
        width: 5.2rem;
        height: 2rem;
        font-size: 0.8rem;
        border-radius: 1.667rem;
    }
    .thirdStyle .btn-buy{
        margin-right: 0.6rem;
    }
    .thirdStyle .footer span{
        white-space:nowrap;
        overflow:hidden;
    }
    /* 第四张图的布局 */
    .forthStyle{
        width: 100%;
        height: 182vw;
        margin-top: 1.33rem;
        background-color: #EA4433;
        border-radius: 0.667rem;
    }
    .forthStyle .header{
        display: flex;
        align-items: center;
        padding-top: 1.333rem;
        margin-left: 1.333rem;
        margin-right: 1.333rem;
        color: white;
        font-size: 2.8rem;
        font-weight: bold;
    }
    .forthStyle .header img{
        width: 3.4rem;
        height: 3.4rem;
    }
    .forthStyle .main{
        margin: 0.53rem 1.33rem 1.86rem 1.33rem;
        color: white;
        font-size: 1.85rem;
    }
    .forthStyle .footer{
        margin-left: 1.33rem;
        margin-right: 1.33rem;
    }
    .forthStyle .footer ul li {
        width: 10.8rem;
        height: 10.8rem;
        margin-bottom: 3rem;
    }
    .productBanner{
        width: 10.8rem;
        height: 10.8rem;
    }
    .productBanner img{
        height: 100%;
        width: 100%;
        border-top-left-radius: 0.53rem;
        border-top-right-radius: 0.53rem;
    }
    .forthStyle .productTitle{
        bottom: 0;
        display: flex;
        align-items: center;
        height: 2.53rem;
        font-size: 1rem;
        background-color: #F8F8F8;
        border-bottom-left-radius: 0.53rem;
        border-bottom-right-radius: 0.53rem;
    }
    .forthStyle .productTitle span{
        font-size: 1.5rem;
        margin-left: 0.6rem;
    }

    .lxl{
        font-size: 20rem;
    }
</style>