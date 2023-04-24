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
      this.tasks.splice(index, 1);
      this.saveTasks();
    },
    deleteAllTasks() {
      this.tasks = [];
      this.saveTasks();
      localStorage.removeItem('tasks');
    },
    loadTasks() {
      const tasks = JSON.parse(localStorage.getItem("tasks") || "[]");
      this.tasks = tasks;
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
            <button class="btn norm">{{ $t('extra.todo.add') }}</button>
          </form>
        </th>
      </tr>
      <tr>
        <th>№</th>
        <th>{{ $t('extra.todo.task') }}</th>
        <th class="status">{{ $t('extra.todo.status') }}</th>
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
          <button class="btn" @click="task.completed = !task.completed">
            <i :class="task.completed ? 'fas fa-check' : 'fas fa-clock'"></i>
          </button>
        </td>
        <td class="action">
          <button class="btn norm" @click="task.editing = true" v-if="!task.editing">{{ $t('extra.todo.edit') }}</button>
          <button class="btn danger" @click="deleteTask(index)">{{ $t('extra.todo.delete') }}</button>
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

  .name {
    color: black;
    max-width: 550px; /* задаётся ширина контейнера для задания */
    word-wrap: break-word; /* перенос слов */
  }

  .action {
    max-width: 250px;
    word-wrap: break-word;
  }

  input:active, :focus {
    outline: 1px solid lightskyblue;
    outline-offset: 0;
    box-shadow: 3px 3px 4px 0 lightgrey;
  }

  input[type="text"] {
    border: 1px solid #e0e0e0;
    font-size: 2rem;
    border-radius: 5px;
    width: 63%;
    padding: 0.6rem;
    margin-right: 5px;
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
  }

  .btn:hover {
    background-color: #f1f1f1;
    box-shadow: 3px 3px 4px 0 lightgrey;
  }

  .danger {
    color: darkred;
  }

  .danger:hover {
    color: red;
    background-color: white;
  }

  .norm {
    color: lightseagreen;
  }

  .norm:hover {
    color: limegreen;
    background-color: white;
  }
}

@media(max-width: 1020px) {
  .table {
    font-size: 1.8rem;

    .name {
      max-width: 355px;
    }

    .action {
      max-width: 180px;
    }

    input[type="text"] {
      font-size: 1.8rem;
      width: 73%;
      padding: 0.5rem;
      margin-right: 5px;
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

    .name {
      max-width: 100px;
    }

    .action {
      max-width: 150px;
    }

    input[type="text"] {
      font-size: 1rem;
      width: 60%;
      padding: 0.3rem;
      margin-right: 3px;
    }

    .btn {
      font-size: 1rem;
      padding: 0.3rem;
      margin: 3px 3px;
    }

    .status {
      visibility: hidden;
      margin: 0;
      //transform: rotate(-90deg);
      max-width: 20px;
    }
  }
}

</style>