<template>
  <div class="col-md-8">
    <h3 class="reply">评论回复：</h3>
    <h2 v-show="isShow">暂无评论，点击左侧添加评论！！！</h2>
    <ul class="list-group">
     <CommentItem v-for="(comment,index) in comments" :key="index" :comment="comment" :deleteComments="deleteComments" :index="index"/>
    </ul>
  </div>
</template>
<script>
  import CommentItem from './CommentItem.vue'
    export default {
    props:{
      comments:{
        type:Array
      },
      deleteComments:{
        type:Function
      }
    },
      components:{CommentItem},
        data() {
            return {

            }
        },
      computed:{
        isShow(){
          return this.comments.length<=0;
        }
      }
    }
</script>
<style></style>
