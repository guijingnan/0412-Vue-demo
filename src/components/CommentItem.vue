<template>
  <li class="list-group-item">
    <div class="handle">
      <a href="javascript:;" @click="deleteComment">删除</a>
    </div>
    <p class="user"><span >{{comment.username}}</span><span>说:</span></p>
    <p class="centence">{{comment.comment}}</p>
  </li>
</template>
<script>
    export default {
      props:['comment','deleteComments','index'],
        data() {
            return {}
        },
      methods:{
        deleteComment(){
          if(confirm(`确认删除${this.comment.username}的评论吗？`)){
           this.deleteComments(this.index)
          }
        }
      }
    }
</script>
<style></style>
