<template>
  <div class="starbucks__contents">
    <div data-bds :data-href="href" data-brand="exciting_starbucks" :data-vertical="vertical" data-attribute="profile" data-async ref="bds-main">
      <Indicator/>
    </div>
  </div>
</template>
<script>
import Indicator from './_Indicator.vue';
import $ from 'jquery'
export default {
  name: 'HelloWorld',
  components: {
    Indicator
  },
  data () {
    return {
      cd_idx: this.$route.params.cd_idx
    }
  },
  computed: {
    href () {
      return `//bdshub.mycelebs.com/board/exciting_starbucks/starbucks/profile/${this.cd_idx}`
    }

  },
  mounted () {
    // BDS async script file load didn't catch.
    if (window.__BDS) {
      window.__BDS.init({
        siteid: 'exciting_starbucks',
        $target: this.$refs['bds-main']
      })
    } else {
      $(window).on('load', () => {
        window.__BDS.init({
        siteid: 'exciting_starbucks',
          $target: this.$refs['bds-main']
        })
      })
    }
  }
}
</script>
<style scoped>
  .starbucks__contents{
    max-width:640px;
    margin:0 auto;
  }
</style>