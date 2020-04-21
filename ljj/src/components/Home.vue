<template>
  <div class="container">
      <van-row>
          <!-- 取消css样式 采用组件自带属性span、offset来控制 -->
          <van-col span="19">
              <van-icon name="location" color="#2196f3" size="25"/>
              <!-- 这里的文字字体适当加粗调大 -->
              <span class="sizeHighlight">{{location}}</span>
              <van-icon name="arrow-down" />
          </van-col>
          <van-col span="2">
              <van-icon name="scan" size="25"/>
          </van-col>
          <van-col offset="1" span="2">
              <van-icon name="comment-o" size="25"/>
          </van-col>
      </van-row>
      <van-row>
          <!-- 取消css样式 采用组件自带属性shape来控制 -->
          <van-search placeholder="搜索商家、商品名称" input-align="center" shape="round" />
      </van-row>
      <van-row> 
            <!-- 换变量 -->
            <van-swipe :autoplay="time">
                <van-swipe-item v-for="(image, index) in images" :key="index">
                    <img class="news" v-lazy="image" />
                </van-swipe-item>
            </van-swipe>
      </van-row>
      <!-- 这里调整为循环 用对象变量控制 -->     
      <van-row type="flex" class="mainList" justify="space-between" v-for="(row,rowIndex) in listArray" :key="rowIndex">            
            <van-col v-for="(obj,colIndex) in row.listObj" :key="colIndex">
                <van-image class="imageStyle" :width="obj.width" :height="obj.height" :src="obj.imageSrc"/>
                <span>{{obj.name}}</span>
            </van-col>            
      </van-row>      
      <!-- 取消css样式 采用组件属性控制 -->
      <van-row class="joinVip">
          <van-col offset="2" span="16">
              <span style="font-weight: bold">加入超级会员</span>
              <span>·每月领20元红包</span>
          </van-col>
          <van-col span="6">
              <span>限时6元开通</span>
          </van-col>
      </van-row>
      <span class="titleStyle">优惠专区</span>
      <van-row>
          <van-col span="11" class="discountArea">
              <div class="tagStyle1">限时秒杀</div>
          </van-col>
          <van-col offset="2" span="11" class="discountArea">
              <div class="tagStyle2">运费减免</div>
          </van-col>
      </van-row>
      <van-row>
          <van-col>
              <span class="titleStyle">专属·晚餐</span>
          </van-col>
            <van-col style="float: right; margin-top: 10px; margin-bottom: 10px;">
                <van-row>
                    <van-col style="font-size: 13px;">更多好店</van-col>
                    <van-col><van-image :src="'../../static/images/arrow.png'"/></van-col>
                </van-row>
            </van-col>
      </van-row>
      <van-row>
          <van-col span="11" class="discountArea"></van-col>
          <van-col offset="2" span="11" class="discountArea"></van-col>
      </van-row>
      <van-row>
          <van-col span="11" class="discountArea"></van-col>
          <van-col offset="2" span="11" class="discountArea"></van-col>
      </van-row>            
      <van-row>
            <van-swipe :autoplay="time">
                <van-swipe-item v-for="(image, index) in images" :key="index">
                    <img class="news" v-lazy="image" />
                </van-swipe-item>
            </van-swipe> 
      </van-row>     
      <van-tabs class="tabStyle" color="#39a9ed" title-active-color="#39a9ed" v-model="active" sticky swipeable>
            <van-tab v-for="title in tabTitles" :key="title" :title="title">                   
                <div v-if="title == '推荐'">
                    <van-row style="margin: 10px 0;">
                        <van-col offset="1" span="6">
                            综合排序<van-icon name="arrow-down" />
                        </van-col>
                        <van-col span="4">距离</van-col>
                        <van-col span="9">销量</van-col>
                        <van-col span="4">
                            筛选<van-icon name="filter-o" class="filterRight"/>
                        </van-col>
                    </van-row>
                    
                    <van-row class="tagListStyle">
                        <div v-for="tag in tags" :key="tag">
                            <van-col offset="1" span="5">
                                {{tag}}
                            </van-col>
                        </div>                       
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
                <div v-else-if="title == '果蔬商超'">
                    <van-list
                            v-model="isLoading"
                            :finished="finished"
                            finished-text="没有更多了"
                            @load="onLoad"
                        >
                            <van-cell v-for="item in list" :key="item" :title="item" />
                        </van-list>
                </div>
                <div v-else>
                    <van-list
                        v-model="isLoading"
                        :finished="finished"
                        finished-text="没有更多了"
                        @load="onLoad"
                    >
                        <van-cell v-for="item in list" :key="item" :title="item" />
                    </van-list>
                </div>                                                               
            </van-tab>
      </van-tabs>
      <div class="footer">
          <van-footer></van-footer>
      </div>  
      
  </div>
</template>

<script>
import Footer from '../components/footer.vue';

export default {
  name: 'home',
  data () {
    return {
        location: '上海浦东新区',
        time: '1000',
        listArray: [
            {
                listObj:[
                    {
                        width: '65',
                        height: '65',
                        imageSrc: '../../static/images/list.jpeg',
                        name: '美食'
                    },{
                        width: '65',
                        height: '65',
                        imageSrc: '../../static/images/list.jpeg',
                        name: '商超便利'
                    },{
                        width: '65',
                        height: '65',
                        imageSrc: '../../static/images/list.jpeg',
                        name: '水果'
                    },{
                        width: '65',
                        height: '65',
                        imageSrc: '../../static/images/list.jpeg',
                        name: '跑腿代购'
                    },{
                        width: '65',
                        height: '65',
                        imageSrc: '../../static/images/list.jpeg',
                        name: '甜品饮品'
                    }
                ]
            }, {
                listObj:[
                    {
                        width: '50',
                        height: '50',
                        imageSrc: '../../static/images/list.jpeg',
                        name: '下午茶'
                    },{
                        width: '50',
                        height: '50',
                        imageSrc: '../../static/images/list.jpeg',
                        name: '汉堡披萨'
                    },{
                        width: '50',
                        height: '50',
                        imageSrc: '../../static/images/list.jpeg',
                        name: '快餐便当'
                    },{
                        width: '50',
                        height: '50',
                        imageSrc: '../../static/images/list.jpeg',
                        name: '买菜'
                    },{
                        width: '50',
                        height: '50',
                        imageSrc: '../../static/images/list.jpeg',
                        name: '送药上门'
                    }
                ]
            },{
                listObj:[
                    {
                        width: '50',
                        height: '50',
                        imageSrc: '../../static/images/list.jpeg',
                        name: '星选好店'
                    },{
                        width: '50',
                        height: '50',
                        imageSrc: '../../static/images/list.jpeg',
                        name: '大牌惠吃'
                    },{
                        width: '50',
                        height: '50',
                        imageSrc: '../../static/images/list.jpeg',
                        name: '打卡领红包'
                    },{
                        width: '50',
                        height: '50',
                        imageSrc: '../../static/images/list.jpeg',
                        name: '炸鸡炸串'
                    },{
                        width: '50',
                        height: '50',
                        imageSrc: '../../static/images/list.jpeg',
                        name: '全部分类'
                    }
                ]
            }          
        ],
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
    .container{
        margin-left: 10px;
        margin-right: 15px;
    }
    .sizeHighlight{
        font-size: 18px;
        font-weight: bold; 
    }
    .header{
        color: black;
        height: 30px;
    }
    .news{
        width: 100%;
        height: 100px;
        margin: 0;
    }
    .mainList{
        padding-top: 10px;
        font-size: 13px;
        text-align: center;
    }  
    .mainList span{
        width: 65px;
        display: block;   
    }
    /* 图标样式 改伪元素before、after */ 
    .joinVip::before{
        content: url('../../static/images/vip.png');
        display: block;
        position: absolute;
        margin-left: 10px;
        margin-top: 2px;
    }
    .joinVip{
        position: relative;
        background:#ffd21e59;
        height: 30px;
        line-height: 30px;
        border-radius: 8px;
        font-size: 13px;
        margin: 10px 0;
    }
    .joinVip::after{
        content: url('../../static/images/arrow.png');
        position: absolute;
        right: 0;
        top: 4px;
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
        height: 175px;
        display: flex;
        justify-content: center;
        margin-bottom: 10px;
    }
    .tagStyle1{
        background-color: #ff6034; 
        width: 120px;
        height:25px; 
        color: white;
        text-align: center;
    }
    .tagStyle2{
        background-color: #1989fa; 
        width: 120px;
        height:25px; 
        color: white;
        text-align: center;
    }
    .tabStyle{
        font-size: 13px;
    }
    .tagListStyle{
        height: 30px;
    }
    .tagListStyle div{
        background-color: #f7f8fa;
        text-align: center;
    }
    .footer{
        position: fixed;
        z-index: 300;
        bottom: 0;
        width: 100%;
    }
</style>