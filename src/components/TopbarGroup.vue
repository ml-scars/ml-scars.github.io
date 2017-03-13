<script>
import { mapState, mapActions } from 'vuex';

export default {
  props: ['group'],
  computed: {
    ...mapState(['activeGroup']),
    active() {
      return this.activeGroup.title === this.group.title;
    },
  },
  methods: {
    ...mapActions(['selectGroup', 'selectCase', 'queueCancelGroup']),
    repoLink(r) {
      return r.replace(/\//g, '-');
    },
  },
};
</script>


<template lang='pug'>
.top-group
  a.btn(
    :class='{active}'
    @mouseenter='selectGroup(group)'
    @mouseleave='queueCancelGroup'
    )
    span {{group.title}}
  .repos(
    v-if='active'
    @mouseenter='selectGroup(group)'
    @mouseleave='selectGroup({})'
    )
    router-link.repo(
      v-for='c in group.repos'
      @click.native='selectCase(c)'
      ':to'='repoLink(c.repo)'
      ':key'='c.repo'
      )
      .name {{c.repo}}
      .desc {{c.desc}}
</template>


<style lang='stylus' scoped>
.top-group
  position relative
  display inline-block
  height 100%

.btn
  display inline-block
  font-weight bolder
  color white
  text-shadow 1px 0 1px black
  padding 0 16px
  height 100%
  &:before
    content ''
    width 0
    height 100%
  &:before
  span
    display inline-block
    vertical-align middle

  &:hover
    background rgba(#fff, .2)
  &.active
    background rgba(#fff, .4)


.repos
  position absolute
  background #C4F2EE
  box-shadow 0 2px 1px rgba(#000 ,.4)
.repo
  display block
  padding 16px
  color #00313B
  white-space nowrap
  &:not(:first-child)
    border-top 1px solid white
  &:hover
    background rgba(#fff, .4)
.name
  font-size 1em
.desc
  font-size .75em
  margin-left 1em
  color #72735D
  text-decoration none
</style>
