<template>
  <v-card>
    <v-layout>
      <v-flex>
        <v-btn
          v-for="(item, index) in years"
          :key="index"
          @click="onItemClick(item)"
        >
          {{ item }}
        </v-btn>
      </v-flex>
    </v-layout>
  </v-card>
</template>

<script>
export default {
  name: 'YearStep',
  data () {
    return {
      years: [
        '2018',
        '2019'
      ]
    }
  },
  methods: {
    onItemClick (year) {
      this.$store.dispatch('appStore/setYear', year)
      this.$store.dispatch('appStore/setStep', 2)
    }
  }
}
</script>

<style scoped lang="scss">
</style>
