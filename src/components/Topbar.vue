<script>
import TopbarGroup from './TopbarGroup';

export default {
  components: { TopbarGroup },
  computed: {
    cases() {
      return this.$store.state.cases;
    },
  },
};
</script>


<template lang='pug'>
.top
  TopbarGroup(
    v-for='group in cases'
    ':group'='group'
    ':key'='group'
  )
</template>

<style lang='stylus' scoped>
.top
  background #007990
</style>
