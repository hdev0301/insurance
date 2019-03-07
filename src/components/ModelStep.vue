<template>
  <v-card>
    <v-layout>
      <v-flex>
        <v-btn
          v-for="(item, index) in selectedModels"
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
  name: 'ModelStep',
  data () {
    return {
      models: []
    }
  },
  computed: {
    selectedModels () {
      const { year, make } = this.appState
      let modelList = []

      if (year === '2018' && make === 'ACURA') {
        modelList = ['ILX', 'MDX', 'NSX']
      } else if (year === '2019' && make === 'ACURA') {
        modelList = ['ILX', 'MDX', 'NSX', 'RDX', 'RLX', 'TLX']
      }

      return modelList
    }
  }
}
</script>

<style scoped lang="scss">
</style>
