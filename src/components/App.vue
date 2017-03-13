<script>
import { mapActions } from 'vuex';
import Topbar from './Topbar';
import RepoContent from './RepoContent';

export default {
  name: 'App',
  components: { Topbar, RepoContent },
  methods: {
    ...mapActions(['selectCaseByRepo', 'selectFirstRepo']),
  },
  created() {
    const { repo } = this.$route.params;
    if (repo) {
      this.selectCaseByRepo(repo);
    } else {
      this.selectFirstRepo();
    }
  },
};
</script>



<template lang='pug'>
#app
  Topbar.top
  RepoContent.cont
</template>


<style lang='stylus'>
html, body
  font-family 'Arial', 'Microsoft JhengHei'
  width 100%
  height 100%
  padding 0
  margin 0
a
  cursor pointer
</style>

<style lang='stylus' scoped>
#app
  position absolute
  width 100%
  height 100%
  overflow hidden
.top
.cont
  position absolute
  left 0
  right 0
.top
  top 0
  height 40px
  z-index 110
.cont
  top 40px
  bottom 0
  z-index 10
  overflow-y scroll
</style>
