<template>
  <section class="jumbotron">
    <h3 class="jumbotron-heading">Search Github Users</h3>
    <div>
      <input type="text" placeholder="enter the name you search" v-model="username" />
      <button @click="search">Search</button>
    </div>
  </section>
</template>
<script>
  import PunSub from 'pubsub-js'
    export default {
        data() {
            return {
              username:''
            }
        },
      methods:{
        search(){
          const username = this.username.trim();
          console.log(1,this.username)
          if(username){
            PunSub.publish('SearchUser',username)
          }

        }
      }
    }
</script>
<style></style>
