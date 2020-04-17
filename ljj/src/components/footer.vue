<template>
  <div class="footer">
      <van-tabbar >
          <van-tabbar-item icon="cart-circle-o">外卖</van-tabbar-item>
          <van-tabbar-item icon="flower-o" >生活</van-tabbar-item>
          <van-tabbar-item icon="balance-list-o">订单</van-tabbar-item>
          <van-tabbar-item icon="user-circle-o">我的</van-tabbar-item>
      </van-tabbar> 
  </div>
  
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {
      
    }
  }
}
</script>
<style  scoped>
    .footer{
        position: fixed;
        z-index: 300;
        bottom: 0;
        width: 100%;
    }
</style>