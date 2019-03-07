import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState('appStore', {
      appState: state => state
    })
  }
}
