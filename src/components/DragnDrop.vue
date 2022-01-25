<template>
  <div class="block">
    <h2 class="title">dragndrop page</h2>

    <input type="text" v-model="newTodo" placeholder="type you need to remember" @keyup.enter="addTodo"  class="dragInput">
    <div v-if="myArray.length === 0" class="no-list">
      no list
    </div>

    <draggable v-else v-model="myArray" @start="drag=true" @end="drag=false" class="myarray">
      <transition-group name="list" tag="div">
        <div v-for="(element, index) in myArray" :key="index" class="list">
          {{ index + 1 }}. {{ element }}
        <span class="btn-del" @click="removeTodo(element, index)"><font-awesome-icon :icon="['fas', 'trash-alt']"  :style="{color: '#343434'}"></font-awesome-icon></span>
        </div>
      </transition-group>
    </draggable>

    <button v-if="myArray.length > 0" @click="clearAll" class="delAll">ClearAll</button>

  </div>
</template>

<script>
import draggable from 'vuedraggable'

export default {
  components: {
    draggable
  },
  data () {
    return {
      newTodo: '',
      myArray: [],
      draggable: false
    }
  },
  created () {
    if (localStorage.length > 0) {
      for (var i = 0; localStorage.length > i; i++) {
        this.myArray.push(localStorage.key(i))
      }
    }
  },
  methods: {
    addTodo () {
      var value = this.newTodo && this.newTodo.trim()

      if (this.newTodo !== '') {
        localStorage.setItem(value, value)
        this.clearInput()
        this.myArray.push(value)
      }
    },
    clearInput () {
      this.newTodo = ''
    },
    removeTodo (element, index) {
      console.log(element, index)
      localStorage.removeItem(element)
      this.myArray.splice(index, 1)
    },
    clearAll () {
      localStorage.clear()
      this.myArray = []
    }
  }
}
</script>

<style scoped>
.buttons {
  margin-top: 35px;
}
.ghost {
  opacity: 0.5;
  background: #c8ebfb;
}
</style>
