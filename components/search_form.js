Vue.component('search-form', {
  template: `
    <div>
      <form @submit.prevent="onSubmit">
        Enter company symbol (e.g. FB)<br>
        <input type='text' 
                placeholder="Enter symbol"
                v-model.trim="companySymbol">
        <input type="submit" value="Search">
      </form>
    </div>
  `,
  data() {
    return {
      searchURL: 'https://financialmodelingprep.com/api/v3/company/profile',
      companySymbol: '',
      searchResponse: null
    }
  },
  methods: {
    onSubmit() {
      axios.get(this.searchURL + '/' + this.companySymbol)
        .then(response => this.$emit('search-result', response))
        .catch(error => (console.log(error)));
    }
  },
  computed: {}
});
