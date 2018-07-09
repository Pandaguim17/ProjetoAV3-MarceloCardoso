<template>
  <div id="app">
    <img src="./assets/logo.png">
    
    <h1 v-text="msg" :title="msg"></h1>
    
    <h2>{{ title }}</h2>
    
    <p>{{info.disclaimer}}</p>
    
    <b-list-group class="mx-4">
      <b-list-group-item v-for="f in frameworks">
        Framework: {{ f.name }}, 
        Votes: {{ f.votes }} 
        <b-button variant="dark" size="sm" v-on:click="toVote(f)">Vote</b-button>
        <b-button variant="danger" size="sm" v-on:click="removeFramework(f)" v-if="editMode">Delete</b-button>
      </b-list-group-item>
    </b-list-group>
    
    <input type="text" placeholder="Add Framework name" v-on:keyup.enter="addFramework" v-if="editMode">
    
    <b-button variant="warning" class="mt-4" v-on:click="toggleEdit">{{ editMode ? 'Leave edit mode' : 'Enter edit mode' }}</b-button>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'app',
  data () {
    return {
      info: null,
      msg: 'Welcome to Your Vue.js App',
      title: 'Aula de Vue',
      editMode: false,
      frameworks: [
        {
          name: 'React',
          votes: 0
        }, {
          name: 'Angular',
          votes: 0
        }, {
          name: 'Vue',
          votes: 0
        }
      ]
    }
  },
  methods: {
    toVote: function(f) {
      f.votes += 1
    }, 
    addFramework: function(event) {
      this.frameworks.push({
        name: event.target.value,
        votes: 0
      }),
      event.target.value = ''
    },
    removeFramework: function(f) {
      this.frameworks = this.frameworks.filter(i => i != f)
    },
    toggleEdit: function() {
      this.editMode = !this.editMode
    }
  },
  mounted() {
    axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
    .then(response => (this.info = response.data))
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}
</style>
