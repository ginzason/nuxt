<template>
  <section class="profile-contents">
    <div ref="profile" data-bds :data-href='href' data-brand=“exciting_starbucks” data-vertical=“starbucks” data-attribute=“profile” data-async></div> 
  </section>
</template>
<script>
import $ from 'jquery'
export default {  
  asyncData({params}) {
    const { cd_idx } = params;    
    return {cd_idx}
  },  
  methods:{
    loadProfile(){
       window.__BDS.init({
        siteid: 'exciting_starbucks',
        $target: this.$refs.profile,
        options: {
          forceRendering: true
        }
      });
    }
  },
  mounted(){
    this.loadProfile();
  },
  computed: {
    href(){
      return `//bdshub.mycelebs.com/board/exciting_starbucks/starbucks/profile/${this.cd_idx}`
    }
  }
}
</script>
