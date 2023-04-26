<script lang="ts">
import {Options, Vue} from "vue-class-component";

interface Note {
  id: number;
  text: string;
  editing: boolean;
  updatedAt: string;
}

@Options({
  data() {
    return {
      notes: [] as Note[],
      newNote: '',
      currentDate: new Date()
    };
  },
  computed: {
    formattedDate(): string {
      const locale = localStorage.getItem('user-locale') ?? 'en';
      const dateOptions = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        hour12: false
      };

      if (locale === 'es') {
        return this.currentDate.toLocaleDateString('es-ES', dateOptions);
      } else if (locale === 'ua') {
        return this.currentDate.toLocaleDateString('uk-UA', dateOptions);
      } else {
        return this.currentDate.toLocaleDateString('en-US', dateOptions);
      }
    }
  },
  methods: {
    addNote() {
      if (this.newNote.trim() === "") {
        return; // если новая заметка пустая, то не добавляем ее
      }

      const newNote = {
        id: this.notes.length + 1,
        text: this.newNote,
        editing: false,
        updatedAt: this.formattedDate
      };
      this.currentDate = new Date(); // обновляем свойство currentDate
      this.notes.push(newNote);
      this.newNote = '';
      this.saveNotes();
    },
    editNote(note: Note) {
      note.editing = false;
      this.currentDate = new Date(); // обновляем свойство currentDate
      note.updatedAt = this.formattedDate; // обновляем свойство updatedAt
      this.saveNotes();
    },
    deleteNote(index: number) {
      if (confirm(this.$t('extra.notes.delete-msg'))) {
        this.notes.splice(index, 1);
        this.saveNotes();
      }
    },
    deleteAllNotes() {
      if (confirm(this.$t('extra.notes.delete-msg'))) {
        this.notes = [];
        this.saveNotes();
        localStorage.removeItem('notes');
      }
    },
    saveNotes() {
      localStorage.setItem("notes", JSON.stringify(this.notes));
    },
    loadNotes() {
      const notes = localStorage.getItem('notes');
      if (notes) {
        this.notes = JSON.parse(notes);
      }
    },
  },
  created() {
    this.loadNotes();
  },
  components: {},
})
export default class Notes extends Vue {
}
</script>

<template>
  <div class="table">
    <table>
      <thead>
      <tr>
        <th colspan="4">
          <form @submit.prevent="addNote">
            <textarea v-model="newNote" :placeholder="$t('extra.notes.add-note')"/>
            <button class="add-note"><i class="fas fa-plus-circle"></i></button>
          </form>
        </th>
      </tr>
      <tr>
        <th>№</th>
        <th>{{ $t('extra.notes.note') }}</th>
        <th>{{ $t('extra.notes.modified') }}</th>
        <th>{{ $t('extra.notes.actions') }}</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(note, index) in notes" :key="note.id">
        <td>{{ index + 1 }}</td>
        <td class="text">
            <span v-if="note.editing">
              <textarea v-model="note.text" @keyup.enter="editNote(note)" @blur="editNote(note)"/>
            </span>
          <span v-else>{{ note.text }}</span>
        </td>
        <td class="updatedAt">{{ note.updatedAt }}</td>
        <td class="action">
          <button class="btn norm txt" @click="note.editing = true" v-if="!note.editing">{{ $t('extra.notes.edit') }}</button>
          <button class="btn danger txt" @click="deleteNote(index)">{{ $t('extra.notes.delete') }}</button>
          <button class="btn norm icon" @click="note.editing = true" v-if="!note.editing" title="Edit...">
            <i class="fas fa-edit"></i>
          </button>
          <button class="btn danger icon" @click="deleteNote(index)" title="Delete...">
            <i class="fas fa-trash"></i>
          </button>
        </td>
      </tr>
      </tbody>
      <tr>
        <th colspan="4">
          <button class="btn danger" @click="deleteAllNotes">{{ $t('extra.notes.delete-all') }}</button>
        </th>
      </tr>
    </table>
  </div>
</template>

<style lang="scss" scoped>
.table {
  font-size: 2rem;
  caret-color: blue;

  form {
    display: inline-flex;
    align-items: center;

    textarea {
      border: 1px solid #e0e0e0;
      font-size: 2rem;
      border-radius: 5px;
      width: 600px;
      padding: 0.6rem;
      margin: 0 5px;
    }

    textarea:active, :focus {
      outline: 1px solid lightskyblue;
      outline-offset: 0;
      box-shadow: 3px 3px 4px 0 lightgrey;
    }
    .add-note {
      border: none;
      border-radius: 50%;
      background-color: inherit;
      text-align: left;
      margin: 0 0 0 5px;
      outline: none;
      color: steelblue;
      font-size: 3rem;
      font-weight: bolder;
      cursor: pointer;
      transition: border-color .2s ease-in-out, background-color .2s, box-shadow .2s;
    }

    .add-note:active, :focus {
      box-shadow: none;
    }
    .add-note:hover {
      background: inherit;
      color: hotpink;
    }
  }

  .text {
    color: black;
    text-align: left;
    max-width: 550px; /* задаётся ширина контейнера для задания */
    word-wrap: break-word; /* перенос слов */
    textarea {
      border: 1px solid #e0e0e0;
      font-size: 2rem;
      border-radius: 5px;
      max-width: 550px;
      padding: 0.6rem;
      margin: 0 5px;
    }

    textarea:active, :focus {
      outline: 1px solid lightskyblue;
      outline-offset: 0;
      box-shadow: 3px 3px 4px 0 lightgrey;
    }
  }

  .icon {display: none;}
  .txt {display: inline-block;}

  .updatedAt {
    font-size: 1.7rem;
    max-width: 180px;
    word-wrap: break-word;
  }

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

    .text {
      max-width: 355px;
      textarea {
        font-size: 1.8rem;
        max-width: 300px;
        padding: 0.5rem;
        margin: 0 5px;
      }
    }
    .updatedAt {
      font-size: 1.6rem;
      max-width: 100px;
    }
    .txt {display: inline-block;}
    .icon {display: none;}
    .action {max-width: 180px;}

    form {
      textarea {
        font-size: 1.8rem;
        width: 550px;
        padding: 0.5rem;
        margin: 0 5px;
      }

      .add-note {
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

    .text {
      max-width: 145px;
      textarea {
        font-size: 1rem;
        max-width: 125px;
        padding: 0.3rem;
        margin: 0 3px;
      }
    }
    .updatedAt {
      font-size: 0.8rem;
      max-width: 40px;
    }
    .action {max-width: 50px;}

    form {
      textarea {
        font-size: 1rem;
        width: 235px;
        padding: 0.3rem;
        margin: 0 0 0 3px;
      }

      .add-note {font-size: 1.6rem;}
    }

    .btn {
      font-size: 1rem;
      padding: 0.3rem;
      margin: 3px 3px;
    }

    .txt {display: none;}
    .icon {display: inline-block;}
  }
}

</style>