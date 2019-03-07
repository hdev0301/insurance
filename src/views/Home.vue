<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <InsuranceForm msg="Test"/>
  </div>
</template>

<script>
// @ is an alias to /src
import InsuranceForm from '@/components/InsuranceForm.vue'

export default {
  name: 'home',
  components: {
    InsuranceForm
  }
}
</script>
