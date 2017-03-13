<script>
import { mapState } from 'vuex';

function requireAll(context) {
  return context.keys().map(context);
}
const imgs = requireAll(require.context('img'));

export default {
  computed: {
    ...mapState(['activeCase']),
    repoLink() {
      return `https://github.com/${this.activeCase.repo}`;
    },
    tags() {
      const { tags } = this.activeCase;
      if (!tags) return [];
      return tags.split(/\s*,\s*/);
    },
    imgs() {
      const { repo } = this.activeCase;
      if (!repo) return [];
      const r = repo.replace(/\//g, '-');
      const regexp = new RegExp(`img/${r}/`);
      return imgs.filter(m => m.match(regexp));
    },
    vids() {
      const { vids = [] } = this.activeCase;
      return vids.map(v => `https://www.youtube.com/embed/${v}?ecver=1`);
    },
  },
};
</script>
<iframe width="560" height="315" src="https://www.youtube.com/embed/TRDFdweM01Q?ecver=1" frameborder="0" allowfullscreen></iframe>

<template lang='pug'>
transition(mode='out-in')
  .cont(:key='activeCase')
    a.repo(:href='repoLink' target='_blank') {{activeCase.repo}}
    br
    a.link(:href='activeCase.link' target='_blank') {{activeCase.link}}
    br
    .desc {{activeCase.desc}}
    .tags
      .tag(v-for='t in tags') {{t}}
    .vids
      iframe(
        v-for='v in vids'
        width='1280'
        height='720'
        frameborder='0'
        ':src'='v'
        ':key'='v'
        )
    .imgs
      img(v-for='m in imgs' ':src'='m' ':key'='m')
</template>


<style lang='stylus' scoped>
.v-enter
.v-leave-active
  opacity 0
.cont
  padding 20px 40px
  box-sizing border-box
  transition opacity .2s
.repo
.link
.desc
  display inline-block
  margin-bottom 1em
.repo
  font-size 1.2em

.tag
  display inline-block
  padding .3em .6em
  background #71D9C6
  border-radius 4px
  margin 4px
  font-size .8em

.vids
  iframe
    width 100%
.imgs
  img
    max-width 100%
    margin-bottom 80px
</style>
