Vue.component('company-profile', {
  props: {
    profileData: {
      required: true
    }
  },
  //TODO: 'td' logic is kind of messy. Extract to its own component?
  template: `
    <div>
      <h3>Stock: {{profileData.symbol}}</h3>
      
      <table class="table">
        <thead>
          <tr>
            <th v-for="property in Object.keys(profileData.profile)">{{property}}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td v-for="(value, propertyName) in profileData.profile">
              <span v-show="propertyName === 'price'">$</span>
              <span :class="{color_red: ((propertyName == 'changes') && (value < 0)) || ((propertyName == 'changesPercentage') && (parseFloat(value.match(/(-|\\+)\\d+.\\d+%/)[0]) < 0)),
                             color_green: ((propertyName == 'changes') && (value > 0)) || ((propertyName == 'changesPercentage') && (parseFloat(value.match(/(-|\\+)\\d+.\\d+%/)[0]) > 0))}">
              <a v-if="((typeof value) == 'string') && value.match(/http/)" :href="value">{{value}}</a>
              <span v-else> {{value}}</span>
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  `,
  data() {
    return {}
  },
  methods: {},
  computed: {}
});
