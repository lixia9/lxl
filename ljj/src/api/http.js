//引入安装的axios插件
import axios from 'axios'
import qs  from "qs"

import { Toast } from 'vant';

var  BASEURL=window.location.origin;
if(process.env.NODE_ENV=="development"){
  BASEURL="/api";
}
var instance  = axios.create({
  baseURL: '',
  headers: {'content-Type': 'application/x-www-form-urlencoded'}
});

// 添加请求拦截器
instance.interceptors.request.use(function (config) {
  Toast.loading({
    duration: 0, // 持续展示 toast
    message: '加载中...',
    forbidClick: true,
    className:'vant-toast-bg'
  });
  
// 在发送请求之前做些什么
if(config.url.indexOf('uploadCanopyImg')>-1){
  config.headers['content-Type'] = "multipart/form-data";
  let formData=new FormData();
  formData.append('type',config.data.type)
  formData.append('file',config.data.file)
  config.data = formData ;
}else if(config.method=="post"){

    Object.keys(config.data).forEach((key) => {
      if ((typeof config.data[key]) === 'object') {
        config.data[key] = JSON.stringify( config.data[key]) // 这里必须使用内置JSON对象转换
      }
    })
 
    config.data = qs.stringify( config.data)
}else{
  config.params={...config.data}
}

  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
instance.interceptors.response.use( (response)=> {
  // 对响应数据做点什么

Toast.clear();
// if(response.data.code=='408'){
//   // alert("登陆失败")
//   Toast.fail('登陆失败');
//   //window.location.href="#/login?url="+encodeURIComponent(window.location.href)
// }
if(response.data.code=='409'||response.data.code=='408'){
  // alert("登陆失败")
  Cookies.remove("code", {path: '/weChat'});
  Cookies.remove("code", {path: 'weChat'});
  // var ua = navigator.userAgent.toLowerCase();
  //       if (ua.match(/MicroMessenger/i) == "micromessenger") {
  //         window.location.href="https://open.weixin.qq.com/connect/oauth2/authorize?redirect_uri=http://platform.harvest-code.com/weChat/code.html&appid=wx668fab280085a42b&response_type=code&scope=snsapi_base&state=1&connect_redirect=1#wechat_redirect"  
  //       }else{
          window.location.href="#/login"
       // }
 
}
if(response.data.code=='404'){
  // alert("登陆失败")
  //Toast('请求数据为空');
}

if(response.data.code=='500'){
  // alert("登陆失败")
  Toast('服务器错误');
}
if(response.config.url.indexOf('/zhcj/a/weChat/login')>0 || response.config.url.indexOf('/zhcj/a/weChat/openIdLogin')>0){

  
  
  var buttonRole ="";
  if(response.data.data.buttonRole){
    buttonRole = JSON.stringify(response.data.data.buttonRole)
  }
  Cookies.set( "buttonRole",buttonRole )
}

  return response;
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error);
});
const http = options => {
  return new Promise((resolve, reject) => {
    
    const defaultOptions = {};
    const newOptions = {
      ...defaultOptions,
      ...options
    };
    //headers默认传递json格式数据，这里也可以设置token，每次调用都会携带
    newOptions.headers = {
      ...newOptions.headers
    };
    //这里可以在调用的时候看到你的method、url、data、headers等参数
    //console.log(newOptions);
    instance({
      method: newOptions.method||"get",
      url: BASEURL+newOptions.url||"",
      data: newOptions.data||{},
      headers: newOptions.headers||{}
    }).then(res => {
      //根据返回的状态码判断，注意res返回的并不一定都是status，比如小程序就是statusCode
      if (res.status == 200) {
       //这里我们只需要获取返回的data中的数据即可
        resolve(res.data);
      } else {
        reject(res);
      }
    }).catch(err => {
      reject(err);
    })
  })
};

export default http;