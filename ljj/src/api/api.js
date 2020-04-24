import http from './http.js'
import data from './mock.js'
const mock = false;
let result =  (key,option)=>new Promise((resolove,reject)=>{
  if(mock){
   
   return resolove(data[key])
  }else{
   return resolove(http(option))
  }

} )
//登录
export const login = (option = {}) => {
  option.method = "post"
  option.url = "/login"
  return result("login",option)
}



//subject_id=5571&page=1&size=10
export const pddGoods = (option = {}) => {
  option.url = "/api/gindex/subject/limited/goods"
  return result("pddGoods",option)
}
