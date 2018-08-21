<template>
  <div class="col-md-4">
    <form class="form-horizontal">
      <div class="form-group">
        <label>用户名</label>
        <input type="text" class="form-control" placeholder="用户名" v-model="username">
      </div>
      <div class="form-group">
        <label>评论内容</label>
        <textarea class="form-control" rows="6" placeholder="评论内容" v-model="comments"></textarea>
      </div>
      <div class="form-group">
        <div class="col-sm-offset-2 col-sm-10">
          <button type="button" class="btn btn-default pull-right" @click="addComments">提交</button>
        </div>
      </div>
    </form>
  </div>
</template>
<script>
    export default {
      props:['addComment'],
        data() {
            return {
              username:'',
              comments:''
            }
        },
      methods:{
        addComments(){
          const comm = {username:this.username,comment:this.comments};
        this.addComment(comm)
          this.username = ''
          this.comments = ''

        }
      }
    }
</script>
<style></style>
