<template>
  <div>
    <h1 v-if="!repoUrl">Loadings...</h1>
    <p v-else>most start repo is <a :href="repoUrl">{{repoName}}</a></p>
  </div>
</template>
<script>
  import axios from 'axios'
    export default {
      mounted(){
       /* const url='https://api.github.com/search/repositories?q=v&sort=stars'
        this.$http.get(url)
          .then(response=>{
         const result = response.data
            const mostRepo = result.items[0];
         this.repoUrl = mostRepo.html_url;
         this.repoName = mostRepo.name
          })
          .catch(err=>{
            alert(err)
          })*/
       const url = 'https://api.github.com/search/repositories?q=v&sort=stars'
        axios.get(url)
          .then(response=>{
            const result = response.data;
            const mostRepo =result.items[0];
            this.repoUrl = mostRepo.html_url;
            this.repoName = mostRepo.name;
          })
          .catch(err=>{
            alert(err)
          })
      },
        data() {
            return {
              repoUrl:'',
              repoName:''
            }
        }
    }
</script>
<style></style>
