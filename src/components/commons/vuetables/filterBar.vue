 <template>
    <div class="filter-bar ui basic segment grid">
      <div class="ui form" style='width:40%'>
        <div class="inline field">
          <label>Search for:</label>
          <input type="text" v-model="filterText" class="three wide column" @keyup.enter="doFilter" placeholder="name, nickname, or email">
          <button class="ui primary button" @click="doFilter">Go</button>
          <button class="ui button" @click="resetFilter">Reset</button>
        </div>
      </div>
    </div>
  </template>

  <script>
  	import Vue from 'vue'
  export default {
    data () {
      return {
        filterText: ''
      }
    },
    props:['tableNode'],
    methods: {
      doFilter () {
        this.tableNode.moreParams = {'filter': this.filterText};
        Vue.nextTick( () => this.tableNode.$refs.vuetable.refresh());
        

      },
      resetFilter () {
      	 this.filterText = '';
         this.tableNode.moreParams = {};
         Vue.nextTick( () => this.tableNode.$refs.vuetable.refresh());
      }
    }
  }
</script>