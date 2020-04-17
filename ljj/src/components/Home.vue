<template>
  <div class="container">
      <van-row>
          <van-col>
              <van-icon name="location" color="#2196f3"/>
              <span>上海市浦东新区</span>
              <van-icon name="arrow-down" />
          </van-col>
          <van-col class="rightTools">
              <van-icon name="scan" />
              <van-icon name="comment-o" />
          </van-col>
      </van-row>
      <van-row>
          <van-search class="search" placeholder="搜索商家、商品名称" input-align="center" />
      </van-row>
      <van-row>         
            <van-swipe :autoplay="3000">
                <van-swipe-item v-for="(image, index) in images" :key="index">
                    <img class="news" v-lazy="image" />
                </van-swipe-item>
            </van-swipe>
      </van-row>
      <van-row type="flex" class="mainList" justify="space-between">
          <van-col>
              <van-image width="65" height="65" :src="listImage"/>
              <span>美食</span>
          </van-col>
          <van-col>
              <van-image width="65" height="65" :src="listImage"/>
              <span>商超便利</span>
          </van-col>
          <van-col>
              <van-image width="65" height="65" :src="listImage"/>
              <span>水果</span>
          </van-col>  
          <van-col>  
              <van-image width="65" height="65" :src="listImage"/>
              <span>跑腿代购</span>    
          </van-col>  
          <van-col>  
              <van-image width="65" height="65" :src="listImage"/>
              <span>甜品饮品</span>    
          </van-col>                   
      </van-row>
      <van-row type="flex" class="mainList" justify="space-between">
            <van-col>
                <van-image width="65" height="65" :src="listImage"/>
                <span>下午茶</span>
            </van-col>
            <van-col>
                <van-image width="65" height="65" :src="listImage"/>
                <span>汉堡披萨</span>
            </van-col>
            <van-col>
                <van-image width="65" height="65" :src="listImage"/>
                <span>快餐便当</span>
            </van-col>
            <van-col>
                <van-image width="65" height="65" :src="listImage"/>
                <span>买菜</span>
            </van-col>
            <van-col>
                <van-image width="65" height="65" :src="listImage"/>
                <span>送药上门</span>
            </van-col>
      </van-row>
      <van-row type="flex" class="mainList" justify="space-between">
            <van-col>
                <van-image width="65" height="65" :src="listImage"/>
                <span>星选好店</span>
            </van-col>
            <van-col>
                <van-image width="65" height="65" :src="listImage"/>
                <span>大牌惠吃</span>
            </van-col>
            <van-col>
                <van-image width="65" height="65" :src="listImage"/>
                <span>打卡领红包</span>
            </van-col>
            <van-col>
                <van-image width="65" height="65" :src="listImage"/>
                <span>炸鸡炸串</span>
            </van-col>
            <van-col>
                <van-image width="65" height="65" :src="listImage"/>
                <span>全部分类</span>
            </van-col>
      </van-row> 
      <van-row class="joinVip">
          <van-col>
              <van-image class="vipImage" :src="'../../static/images/vip.png'"/>
              <span style="font-weight: bold; margin-left: 20px;">加入超级会员</span>
              <span>·每月领20元红包</span>
          </van-col>
          <van-col style="float: right;">
              <van-row>
                  <van-col>
                      <span>限时6元开通</span>
                  </van-col>
                  <van-col>
                      <van-image class="vipImage" :src="'../../static/images/arrow.png'"/>
                  </van-col>      
              </van-row>
          </van-col>
      </van-row>
      <van-row>
            <span class="titleStyle">优惠专区</span>
            <van-row>
                <van-col class="discountArea">
                    <div class="tagStyle1">限时秒杀</div>
                </van-col>
                <van-col class="discountArea">
                    <div class="tagStyle2">运费减免</div>
                </van-col>
            </van-row>
      </van-row>
      <van-row>
            <van-col class="titleStyle">
                专属·晚餐
            </van-col>
            <van-col style="float: right; margin-top: 10px; margin-bottom: 10px;">
                <van-row>
                    <van-col style="font-size: 13px;">更多好店</van-col>
                    <van-col><van-image :src="'../../static/images/arrow.png'"/></van-col>
                </van-row>
            </van-col>
      </van-row>
      <van-row>
            <van-row>
                <van-col class="discountArea"></van-col>
                <van-col class="discountArea"></van-col>
            </van-row>
      </van-row>
      <van-row>
            <van-row>
                <van-col class="discountArea"></van-col>
                <van-col class="discountArea"></van-col>
            </van-row>
      </van-row>
      <van-row>
            <van-swipe :autoplay="3000">
                <van-swipe-item v-for="(image, index) in images" :key="index">
                    <img class="news" v-lazy="image" />
                </van-swipe-item>
            </van-swipe> 
      </van-row>
      <van-row>
            <van-tabs color="#39a9ed" v-model="active">
                <van-tab v-for="title in tabTitles" :key="title" :title="title">                   
                    <div v-if="title == '推荐'">
                        <van-row>
                            <van-col>综合排序<van-icon name="arrow-down" /></van-col>
                            <van-col>距离</van-col>
                            <van-col>销量</van-col>
                            <van-col style="margin-left: 20px;">筛选<van-icon name="filter-o" /></van-col>
                        </van-row>
                        <van-row>
                            <van-list
                                v-model="isLoading"
                                :finished="finished"
                                finished-text="没有更多了"
                                @load="onLoad"
                            >
                                <van-cell v-for="item in list" :key="item" :title="item" />
                            </van-list>
                        </van-row>
                    </div>                                                               
                </van-tab>
            </van-tabs>
      </van-row>    
      <van-footer></van-footer>
  </div>
</template>

<script>
import Footer from '../components/footer.vue';

export default {
  name: 'Home',
  data () {
    return {
      tabTitles: ['推荐', '果蔬商超', '到店自取'],
      tags: ['津贴优惠', '满减优惠', '品质联盟', '配送费优惠'],
      images: [
          'https://img.yzcdn.cn/vant/apple-1.jpg',
          'https://img.yzcdn.cn/vant/apple-2.jpg',
          'https://img.yzcdn.cn/vant/apple-3.jpg',
      ],
      listImage: '../../static/images/list.jpeg',
      active: 0,
      isLoading: false,
      finished: false,
      list: [],
    }
  },
  components: {
      'van-footer':Footer,
  },
  methods: {
      onLoad(){
          setTimeout(() => {
            for (let i = 0; i < 10; i++) {
                this.list.push(this.list.length + 1);
            }
            this.isLoading = false;
            if (this.list.length >= 40) {
                this.finished = true;
            }
          }, 1000);
      }
  }
}
</script>
<style scoped>
    *{
        margin-left: 2px;
        margin-right: 2px;
    }
    .header{
        color: black;
        height: 30px;
    }
    .rightTools{
        float: right;
        width: 15%;
        height: 30px;
    }
    .search{
        height: 34px;
        border-radius: 10px;
        background: #f7f8fa;
        margin-top:20px;
        margin-bottom: 10px;
    }
    .news{
        width: 100%;
        height: 150px;
        margin: 0;
    }
    .mainList{
        padding-top: 10px;
        font-size: 13px;
    }
    
    .mainList span{
        width: 65px;
        display: block;
        text-align: center;
    }
    .joinVip{
        background:#ffd21e59;
        line-height: 30px;
        border-radius: 8px;
        font-size: 13px;
        margin: 10px;
        position:relative;
    }
    .vipImage {
        position: absolute;
        top: 50%;
        margin-top:-8px;
    }
    .titleStyle{
        font-weight: bold; 
        font-size: 18px; 
        display: block; 
        margin-top: 10px; 
        margin-bottom: 10px;
    }
    .discountArea{
        border-radius: 8px;
        background-color:  #ededed;
        width: 48%;
        height: 175px;
        text-align: center;
        display: flex;
        justify-content: center;
        margin-bottom: 5px;
    }
    .tagStyle1{
        background-color: #ff6034; 
        width: 120px;
        height:25px; 
        color: white;
    }
    .tagStyle2{
        background-color: #1989fa; 
        width: 120px;
        height:25px; 
        color: white;
    }
</style>