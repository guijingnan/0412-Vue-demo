<template>
  <div>
    <mt-button type="primary" @click="handlerHink" style="width:100%">点我</mt-button>
  </div>
</template>
<script>
  import { Toast } from 'mint-ui';
    export default {
        data() {
            return {}
        },
      methods:{
        handlerHink(){
          Toast({
            message: '提示',
            position: 'bottom',
            duration: 1000
          })
        }
      }
    }
</script>
<style></style>
