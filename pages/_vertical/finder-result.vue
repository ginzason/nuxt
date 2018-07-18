<template>
  <div class="bds-board board">
    <div data-bds :data-href="href" data-brand="exciting_starbucks" :data-vertical="vertical" data-attribute="finder-result" data-async ref="bds-main">
      <Indicator/>
    </div>
  </div>
</template>
<script>
import $ from 'jquery';
import Indicator from '@/components/_Indicator.vue';
export default {
  name: 'BDSBoard',
  components: {
    Indicator
  },
  data () {
    return {
      vertical: 'starbucks',      
    }
  },
  computed: {
    href () {
      return `//bdshub.mycelebs.com/board/exciting_starbucks/starbucks/finder-result`
    }
  },  
  mounted () {
    window.__BDS.init({
      siteid: 'exciting_starbucks',
      $target: this.$refs['bds-main']
    })

  }
}
</script>
<style scoped>
  .mugger__contents{
    max-width:640px;
    margin:0 auto;
  }
</style>