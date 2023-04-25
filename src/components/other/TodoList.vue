<script lang="ts">
import {Options, Vue} from "vue-class-component";

interface Task {
  id: number;
  name: string;
  editing: boolean;
  completed: boolean;
}

@Options({
  data() {
    return {
      tasks: [] as Task[],
      newTask: "",
      lastId: 0,
    };
  },
  created() {
    this.loadTasks();
  },
  methods: {
    addTask() {
      if (this.newTask) {
        const task = {
          id: ++this.lastId,
          name: this.newTask,
          editing: false,
          completed: false,
        };
        this.tasks.push(task);
        this.saveTasks();
        this.newTask = "";
      }
    },
    editTask(task: Task) {
      task.editing = false;
      this.saveTasks();
    },
    deleteTask(index: number) {
      if (confirm(this.$t('extra.todo.delete-msg'))) {
        this.tasks.splice(index, 1);
        this.saveTasks();
      }
    },
    deleteAllTasks() {
      if (confirm(this.$t('extra.todo.delete-msg'))) {
        this.tasks = [];
        this.saveTasks();
        localStorage.removeItem('tasks');
      }
    },
    toggleCompleted(task: Task) {
      task.completed = !task.completed;
      this.saveTasks();
    },
    loadTasks() {
      const tasks = JSON.parse(localStorage.getItem("tasks") || "[]");
      this.tasks = tasks.map((task: Task) => {
        task.completed = task.completed || false; // добавляем проверку для того, чтобы значение по умолчанию было false
        return task;
      });
      this.lastId = tasks.reduce((maxId: number, task: Task) => Math.max(maxId, task.id), 0);
    },
    saveTasks() {
      localStorage.setItem("tasks", JSON.stringify(this.tasks));
    }
  },
  components: {},
})
export default class TodoList extends Vue {
}
</script>

<template>
  <div class="table">
    <table>
      <thead>
      <tr>
        <th colspan="4">
          <form @submit.prevent="addTask">
            <input type="text" v-model="newTask" :placeholder="$t('extra.todo.add-task')"/>
            <button class="add-task"><i class="fas fa-plus-circle"></i></button>
          </form>
        </th>
      </tr>
      <tr>
        <th>№</th>
        <th>{{ $t('extra.todo.task') }}</th>
        <th><span class="icon"><i class="fas fa-check-circle"></i></span><span class="txt">{{ $t('extra.todo.status') }}</span></th>
        <th>{{ $t('extra.todo.actions') }}</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(task, index) in tasks" :key="task.id">
        <td>{{ index + 1 }}</td>
        <td class="name">
            <span v-if="task.editing">
              <input type="text" v-model="task.name" @keyup.enter="editTask(task)" @blur="editTask(task)"/>
            </span>
          <span v-else v-bind:class="{ completed: task.completed }">{{ task.name }}</span>
        </td>
        <td>
          <button class="btn" @click="toggleCompleted(task)" title="Status...">
            <i :class="task.completed ? 'fas fa-check' : 'fas fa-clock'"></i>
          </button>
        </td>
        <td class="action">
          <button class="btn norm txt" @click="task.editing = true" v-if="!task.editing">{{ $t('extra.todo.edit') }}</button>
          <button class="btn danger txt" @click="deleteTask(index)">{{ $t('extra.todo.delete') }}</button>
          <button class="btn norm icon" @click="task.editing = true" v-if="!task.editing" title="Edit...">
            <i class="fas fa-edit"></i>
          </button>
          <button class="btn danger icon" @click="deleteTask(index)" title="Delete...">
            <i class="fas fa-trash"></i>
          </button>
        </td>
      </tr>
      </tbody>
      <tr>
        <th colspan="4">
          <button class="btn danger" @click="deleteAllTasks">{{ $t('extra.todo.delete-all') }}</button>
        </th>
      </tr>
    </table>
  </div>
</template>

<style lang="scss" scoped>
.table {
  font-size: 2rem;
  caret-color: blue;

  .completed {
    //text-decoration: line-through;
    filter: blur(1.5px);
    color: steelblue;
  }
  form {
    display: inline-flex;
    align-items: center;
    input[type="text"] {
      border: 1px solid #e0e0e0;
      font-size: 2rem;
      border-radius: 5px;
      width: 600px;
      padding: 0.6rem;
      margin-right: 5px;
    }
    input:active, :focus {
      outline: 1px solid lightskyblue;
      outline-offset: 0;
      box-shadow: 3px 3px 4px 0 lightgrey;
    }
    .add-task {
      display: inline-flex;
      border: none;
      border-radius: 50%;
      background-color: inherit;
      margin: 0 0 0 5px;
      color: steelblue;
      font-size: 3rem;
      font-weight: bolder;
      cursor: pointer;
      transition: border-color .2s ease-in-out, background-color .2s, box-shadow .2s;
    }
    .add-task:hover {
      background: inherit;
      color: blue;
    }
  }
  .name {
    color: black;
    max-width: 550px; /* задаётся ширина контейнера для задания */
    word-wrap: break-word; /* перенос слов */
  }

  .icon {display: none;}
  .txt {display: inline-block;}

  .action {
    max-width: 250px;
    word-wrap: break-word;
  }

  .btn {
    background-color: #f9f9f9;
    border: 1px solid #ddd;
    font-size: 2rem;
    text-align: center;
    border-radius: 5px;
    padding: 0.6rem;
    margin: 5px 5px;
    cursor: pointer;
    transition: border-color .2s ease-in-out, background-color .2s, box-shadow .2s;
    .fa-check {color: darkgoldenrod;}
    .fa-clock {color: darkred;}
  }

  .btn:hover {
    background-color: white;
    box-shadow: 3px 3px 4px 0 lightgrey;
  }

  .danger {color: darkred;}
  .danger:hover {color: red;background-color: white;}
  .norm {color: lightseagreen;}
  .norm:hover {color: limegreen;background-color: white;}
}

@media(max-width: 1020px) {
  .table {
    font-size: 1.8rem;
    .name {max-width: 355px;}
    .txt {display: inline-block;}
    .icon {display: none;}
    .action {max-width: 180px;}

    form {
      input[type="text"] {
        font-size: 1.8rem;
        width: 550px;
        padding: 0.5rem;
        margin-right: 5px;
      }
      .add-task {
        margin-left: 5px;
        font-size: 2.8rem;
      }
    }

    .btn {
      font-size: 1.8rem;
      padding: 0.5rem;
      margin: 5px 5px;
    }

  }
}

@media (max-width: 768px) {
  .table {
    font-size: 1rem;
    .name {max-width: 170px;}
    .action {max-width: 150px;}

    form {
      input[type="text"] {
        font-size: 1rem;
        width: 200px;
        padding: 0.3rem;
        margin-right: 3px;
      }
      .add-task {
        margin-left: 3px;
        font-size: 1.6rem;
      }
    }

    .btn {
      font-size: 1rem;
      padding: 0.3rem;
      margin: 3px 3px;
    }

    .txt {display: none;}
    .icon {display: inline-block;}

    thead {
      .fa-check-circle {color: steelblue;}
    }
  }
}

</style>