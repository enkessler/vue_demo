var app = new Vue({
  el: '#app',
  data: {
    searchResult: null
  },
  methods: {
    handleSearchResult(searchResult) {
      console.log('received search result:' + JSON.stringify(searchResult));
      this.searchResult = searchResult.data
    }
  },
  computed: {}
});
