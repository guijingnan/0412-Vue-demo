<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <todo-header @addTodo="addTodo"/>
      <List :todos="todos" />
      <TodoFooter :todos="todos"  >
        <input type="checkbox" v-model="checkAll" slot="left"/>
        <span slot="mainTodo">已完成{{completeSize}} / 全部{{todos.length}}</span>
        <button class="btn btn-danger" slot="right" v-show="completeSize" @click="clearCompletedTodos">清除已完成任务</button>
      </TodoFooter>
    </div>
  </div>
</template>
<script>
  import PubSub from 'pubsub-js'
  import Header from './components/Header.vue'
  import List from './components/List.vue'
  import Footer from './components/Footer.vue'
  import storageUtil from '../utils/storageUtil'
  export default {
    data() {
      return {
        todos: []
      }
    },
    mounted(){
      setTimeout(()=>{
        this.todos = storageUtil.getTodo()
      },1000)
      PubSub.subscribe('deleteTodo',(index)=>{
      this.deleteTodo(index)
      })
    },
    computed: {
      completeSize () {
        return this.todos.reduce((preTotal, todo) => preTotal + (todo.complete ? 1 : 0), 0)
      },
      checkAll: {
        get () {
          return this.todos.length === this.completeSize && this.completeSize>0
        },
        set (value) {
          this.checkAllTodos(value)
        }
      }
      },
    watch:{
      todos:{
        deep:true,
        handler:storageUtil.saveTodo}

    },
    methods: {
      addTodo (todo) {
        this.todos.unshift(todo)
      },
      deleteTodo (index) {
        this.todos.splice(index, 1)
      },
      checkAllTodos (isCheck) {
        this.todos.forEach(todo => {
          todo.complete = isCheck
        })
      },
      clearCompletedTodos () {
        this.todos = this.todos.filter(todo => !todo.complete)
      }
    },

    components: {
      TodoHeader: Header,
      List,
      TodoFooter: Footer
    }
  }
</script>
<style>
  .todo-container {
    width: 600px;
    margin: 0 auto;
  }
  .todo-container .todo-wrap {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
</style>
