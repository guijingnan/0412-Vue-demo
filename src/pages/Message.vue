<template>
  <div>
    <ul>
      <li v-for="(m,index) in messages" :key="index">
        <router-link :to="`/home/message/detail/${m.id}`">{{m.text}}</router-link>
        &nbsp;<button>push查看</button>&nbsp;
        <button>replace查看</button>
      </li>

    </ul>

    <button>返回</button>
    <hr> <!---->
    <router-view/>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        messages:[]
      }
    },
    mounted(){
      const messages=[
        {id:1,text:'message01'},
        {id:3,text:'message03'},
        {id:5,text:'message05'}
        ]
      setTimeout(()=>{
        this.messages = messages
      },1000)
    }
  }
</script>
<style></style>
