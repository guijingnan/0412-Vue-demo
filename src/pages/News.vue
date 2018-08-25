<template>
  <ul>
    <li v-for="(news,index) in newsList" :key="index">{{news}}</li>
  </ul>
</template>
<script>
    export default {
        data() {
            return {
              newsList:['news01','news02','news03']
            }
        }
    }
</script>
<style></style>
