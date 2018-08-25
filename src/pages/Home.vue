<template>
  <div msg="atguigu"><h2>home组件</h2>
    <div>
      <ul class="nav nav-tabs">
        <li>
          <router-link to="/home/news" class="activeClass">news</router-link>

        </li>
        <li>
          <router-link to="/home/message" class="activeClass">message</router-link>
        </li>
      </ul>
      <div>
        <keep-alive>
          <router-view/>
        </keep-alive>

        <hr>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {

      }
    }
  }
</script>
<style>

</style>
