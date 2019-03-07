<template>
  <v-card>
    <v-layout>
      <v-flex>
        <v-btn
          v-for="(item, index) in makes"
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
  name: 'MakeStep',
  data () {
    return {
      makes: [
        'ACURA',
        'BMW'
      ]
    }
  },
  methods: {
    onItemClick (make) {
      this.$store.dispatch('appStore/setMake', make)
      this.$store.dispatch('appStore/setStep', 3)
    }
  }
}
</script>

<style scoped lang="scss">
</style>
