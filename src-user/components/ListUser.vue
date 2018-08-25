<template>
  <div>
    <h1 v-show="firstView">输入用户名搜索</h1>
    <h1 v-show="loading">Loadings...</h1>
    <h1 v-show="errMsg">{{errMsg}}</h1>
    <div class="row">
      <div class="card " v-for="(user,index) in users" :key="index">
        <a :href="user.url" target="_blank">
          <img :src="user.header_url" style='width: 100px'/>
        </a>
        <p class="card-text">{{user.username}}</p>
      </div>
    </div>
  </div>
</template>
<script>
  import PunSub from 'pubsub-js'
  import axios from 'axios'
    export default {
        data() {
            return {
              firstView:true,
              loading:false,
              users:[],
              errMsg:''
            }
        },
      mounted(){

          PunSub.subscribe("SearchUser",(msg,username)=>{

            this.firstView=false;
            this.loading=true;
            this.users = [];
            this.errMsg = '';
            const url =`https://api.github.com/search/users?q=${username}`;
          axios.get(url)
            .then(response=>{
              const result = response.data;
              this.loading=false;
              this.users = result.items.map(item=>({
                username: item.login,
                header_url: item.avatar_url,
                url: item.html_url
              }))
            })
            .catch(err=>{
              this.loading=false;
              this.errMsg = '请求失败'
            })
          })
      }
    }
</script>
<style>
  .card {
    float: left;
    width: 33.333%;
    padding: .75rem;
    margin-bottom: 2rem;
    border: 1px solid #efefef;
    text-align: center;
  }

  .card > img {
    margin-bottom: .75rem;
    border-radius: 100px;
  }

  .card-text {
    font-size: 85%;
  }

</style>
