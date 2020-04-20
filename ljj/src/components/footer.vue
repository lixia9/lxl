<template> 
  <van-tabbar v-model="active">
    <!-- 变量控制 -->
    <div class="tabStyle" v-for="(tab,index) in tabs" :key="index">
      <van-tabbar-item :icon="tab.icon" @click="changePage(index, tab.name)">
        <span :class="currentIndex == index ? active:''">{{tab.title}}</span>
      </van-tabbar-item>
    </div>
  </van-tabbar>  
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {
      currentIndex: 0,
      active: 0,
      tabs: [
        {
          name: "home",
          title: "外卖",
          icon: "cart-circle-o"
        },{
          name: "life",
          title: "生活",
          icon: "flower-o"
        },{
          name: "orders",
          title: "订单",
          icon: "balance-list-o"
        },{
          name: "mime",
          title: "我的",
          icon: "user-circle-o"
        }
      ],
    }
  },
  mounted(){
    this.changeActive();
  },
  methods: {
    changePage(index, name){
      this.currentIndex = index;
      this.$router.push({name: name});
    },
    changeActive(){
      // 根据地址栏 切换状态
      const href = location.href.split('#/')[1];
      for(let i = 0; i < this.tabs.length; i++){
        if(href == this.tabs[i].name){
          this.active = i;
        }
      }
    }
  }
}
</script>
<style  scoped>
    .tabStyle{
      width: 100%;
      display: flex;
    }
</style>