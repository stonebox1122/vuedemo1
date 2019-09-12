<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <TodoHeader @addTodo="addTodo"/> <!--给TodoHeader标签对象绑定addTodo事件监听-->
      <TodoList :todos="todos"/>
      <!--<TodoFooter :todos="todos" :deleteCompleteTodos="deleteCompleteTodos" :selectAllTodos="selectAllTodos"/>-->
      <TodoFooter>
        <input type="checkbox" v-model="isAllCheck" slot="checkAll"/>
        <span slot="count">已完成{{completeSize}} / 全部{{todos.length}}</span>
        <button class="btn btn-danger" v-show="completeSize" @click="deleteCompleteTodos" slot="delete">清除已完成任务</button>
      </TodoFooter>
    </div>
  </div>
</template>
<!--
绑定事件监听 -- 订阅消息
触发事件 --- 发布消息
-->
<script>
  import PubSub from 'pubsub-js'
  import TodoHeader from './components/TodoHeader'
  import TodoList from './components/TodoList'
  import TodoFooter from './components/TodoFooter'
  import storageUtil from './util/storageUtil'
  export default {
    name: 'App',
    data () {
      return {
        // 从localStorage读取todos
        // todos: JSON.parse(window.localStorage.getItem('todos_key') || '[]')
        todos: storageUtil.readTodos()
      }
    },
    computed: {
      completeSize () {
        return this.todos.reduce((preTotal, todo) => preTotal + (todo.complete?1:0), 0)
      },
      isAllCheck: {
        get () {
          return this.completeSize===this.todos.length && this.todos.length>0
        },
        set (value) { // value是当前checkbox最新的值
          this.selectAllTodos(value)
        }
      }
    },
    components: {
      TodoHeader,
      TodoList,
      TodoFooter
    },
    mounted () {
      // 订阅消息
      PubSub.subscribe('deleteTodo', (msg, index) => {
        this.deleteTodo(index)
      })
    },
    methods: {
      addTodo (todo) {
        this.todos.unshift(todo)
      },
      deleteTodo (index) {
        this.todos.splice(index, 1)
      },
      // 删除所有选中的todo
      deleteCompleteTodos () {
        this.todos = this.todos.filter(todo => !todo.complete)
      },
      // 全选/全不选
      selectAllTodos (check) {
        this.todos.forEach(todo => todo.complete = check)
      }
    },
    watch: {
      todos: {
        deep: true, // 深度监视
        handler: function (value) {
          // 将todos最新值的json数据，保存到localStorage
          // window.localStorage.setItem('todos_key',JSON.stringify(value))
          storageUtil.saveTodos(value)
        }
        // handler: storageUtil.saveTodos
        // handler: function (todos) {
        //   window.localStorage.setItem(TODOS_KEY,JSON.stringify(todos))
        // }
      }
    }
  }
</script>

<style scoped>
  /*app*/
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
