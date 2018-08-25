<template>
  <div>
    <header class="site-header jumbotron">
      <div class="container">
        <div class="row">
          <div class="col-xs-12">
            <h1>请发表对React的评论</h1>
          </div>
        </div>
      </div>
    </header>
    <div class="container">
      <AddComment :addComment="addComment"/>
      <CommentList :comments="comments" :deleteComments="deleteComments"/>
    </div>
  </div>
</template>
<script>
  import AddComment from './components/AddComment.vue'
  import CommentList from './components/CommentList.vue'

    export default {
    components:{
      AddComment,
      CommentList,

    },
        data() {
            return {
              comments:[
                {username:'张三',comment:'React不错!'},
                {username:'李四',comment:'React很不错!'},
                ]
            }
        },
      methods:{
      addComment(comment){
        this.comments.unshift(comment)
      },
        deleteComments(index){
          this.comments.splice(index,1)
        }
      }
    }
</script>
<style></style>
