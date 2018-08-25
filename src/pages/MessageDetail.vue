<template>
  <ul>
    <li>id: {{$route.params.id}}</li>
    <li>title: {{messageDetail.title}}</li>
    <li>content: {{messageDetail.content}}</li>
  </ul>
</template>
<script>
  const allMessageDetails = [
    {id: 1, title: 'message001', content: 'message content001....'},
    {id: 3, title: 'message003', content: 'message content003....'},
    {id: 5, title: 'message005', content: 'message content005....'},
  ]
  export default {

    data() {
      return {
        messageDetail: {}
      }
    },
    mounted(){
      this.showDetail(this.$route)
    },
    watch:{
      $route(val){
        this.showDetail(val)
      }
    },
    methods:{
      showDetail(route){
        const id= route.params.id*1;
        /*.find默认找第一条，所以要监视$route的变化*/
        this.messageDetail = allMessageDetails.find(md=>md.id === id)
      }
    }

  }
</script>
<style></style>
