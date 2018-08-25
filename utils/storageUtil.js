/*把数据存储到localstorage中*/
const TODOKEY ='todo_key'
export default {
  saveTodo (val){
    localStorage.setItem(TODOKEY,JSON.stringify(val))
},
  getTodo:function () {
    return JSON.parse(localStorage.getItem(TODOKEY)  || '[]')
  }
}
