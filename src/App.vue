<template>
  <div class="body md-layout md-gutter md-alignment-center">
    <md-card>
      <md-card-header>
        <div class="md-title">Todo List</div>
      </md-card-header>
      <md-card-content>
        <md-field class="md-layout-item">
          <md-input
            class="first-input"
            v-model="currentTodo"
            @keydown.enter="addTodo()"
            placeholder="Add a todo"
          />
        </md-field>
      </md-card-content>
      <md-card-content>
        <md-list class="todos md-layout-item">
          <draggable v-model="todo" group="people" @start="drag=true" @end="drag=false">
            <md-list-item v-for="todo in todos" :key="todo.id">
              <md-field v-if="todo.id == editedTodoId">
                <md-input
                  type="text"
                  v-model="todo.label"
                  :placeholder="'edit todo '+ todo.label"
                  @keydown.enter="stopEdit(todo)"
                />
                <md-button id="save" @click="stopEdit(todo)">save</md-button>
              </md-field>
              <md-list-item v-else class="todo">
                <md-checkbox
                  class="md-primary"
                  v-model="todo.completed"
                  true-value="true"
                  false-value="false"
                />
                <span @dblclick="editTodo(todo)">{{todo.label}}</span>
                <md-button class="md-icon-button md-accent" id="delete" @click="removeTodo(todo)">
                  <md-icon>clear</md-icon>
                </md-button>
                <md-button class="md-icon-button md-primary" id="item" @click="editTodo(todo)">
                  <md-icon>edit</md-icon>
                </md-button>
              </md-list-item>
            </md-list-item>
          </draggable>
        </md-list>
      </md-card-content>
    </md-card>
  </div>
</template>

<script>
import draggable from "vuedraggable";
export default {
  components: {
    draggable
  },
  data() {
    return {
      todos: [],
      currentTodo: "",
      editedTodoId: null
    };
  },
  methods: {
    editTodo(todo) {
      this.editedTodoId = todo.id;
    },
    stopEdit() {
      this.editedTodoId = null;
    },
    removeTodo(todo) {
      var index = this.todos.indexOf(todo);
      this.todos.splice(index, 1);
    },
    addTodo() {
      this.todos.push({
        id: this.todos.length,
        label: this.currentTodo,
        completed: false
      });
      this.currentTodo = "";
    }
  }
};
</script>

<style lang="scss" scoped>
$color-primary: #568bf5;
$color-secondary: #f5565e;
$font-primary: Roboto;

.md-card {
  font-family: $font-primary;
  min-width: 50% !important;
  margin-left: auto;
  margin-right: auto;
  margin-top: 24px;
  width: auto;
  display: inline-block;
}
.md-button.md-theme-default.md-accent .md-icon-font {
  color: $color-secondary !important;
}
.md-button.md-theme-default.md-primary .md-icon-font {
  color: $color-primary !important;
}
.md-field {
  width: 75%;
  min-height: 30px;
  margin: 0px;
  padding-top: 16px;
  display: flex;
  position: relative;
  font-family: inherit;
}
.md-list-item-content > .md-checkbox:first-child,
.md-list-item-content > .md-radio:first-child {
  margin-right: 16px;
}

.md-card-content {
  padding-left: 24px;
  padding-bottom: 8px;
  padding-right: 16px;
  font-size: 14px;
  line-height: 22px;
}
.md-icon {
  $size: 24px;

  width: $size;
  min-width: $size;
  height: $size;
  font-size: $size !important;
}

.md-button {
  $size: 32px;

  width: $size;
  min-width: $size;
  height: $size;
  font-size: 16px !important;
}
#save {
  width: 60px;
  color: $color-primary !important;
}

.body {
  box-sizing: inherit;
}
.todo {
  margin-top: -10px;
}

.md-card .md-title {
  margin-left: 8px;
}
</style>
