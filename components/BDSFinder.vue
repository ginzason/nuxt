<template>
  <form data-bds :data-href="href" data-brand="exciting_starbucks" :data-vertical="vertical" data-attribute="finder" data-async ref="bds-board" :action="action" method="post">
    <Indicator/>
  </form>
</template>
<script>
import Indicator from './_Indicator.vue';
import $ from 'jquery'
export default {
  name: 'BDSFinder',
  components: {
    Indicator
  },
  props: {
    vertical: {
      type: String,
      default: 'starbucks'
    }
  },
  data () {
    return {
    }
  },
  computed: {
    href () {
      // 674449
      // 674654
      return `//bdshub.mycelebs.com/board/exciting_starbucks/starbucks/finder`
    },
    action () {
      return `/starbucks/finder-result`
    }
  }
}
</script>
<style lang="css" scoped>
</style>