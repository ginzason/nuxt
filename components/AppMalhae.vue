<template>
  <div class="box-floatingLink">
    <button class="btn-finderOpen" @click="handleFinderClick">
      <span class="screen-out">finderopen</span>
    </button>
    <button class="btn-malhae" @click="callMalhaeScheme">
      <span class="screen-out">말해앱열기</span>
    </button>
  </div>
</template>

<script>
import { EventBus } from '@/utils/EventBus.js'
import ConnectMalhae from '@/utils/connectMalhae.js'
export default {
  name: 'box-floatingLink',  
  methods: {
    callMalhaeScheme(){    
        // Create CustomSchemeManager Class
        var csm = new ConnectMalhae();        
        csm.scheme = "malhae";
        csm.schemeAnd = "mycelebs";        
        csm.androidPackageName = "com.mycelebs.say";        
        csm.iosAppID = "1358216435";
        csm.query = 'contact_us';
        csm.android_query = 'say';
        csm.ios_query = '';
        csm.run();
    },    
    handleFinderClick () {
      EventBus.$emit('toggleFinder', true)
    }
    
  }
}


</script>

<style lang="scss">
.box-floatingLink{
  position: fixed;
  right:10px;
  bottom:20px;
  z-index: 6;  
  .btn-finderOpen{
    display: block;
    width: 60px;
    height:60px;
    background:#313131 url(./images/ico_find.png) center center no-repeat;
    background-size: 33px;
    border:0;
    border-radius:50%;
    margin-bottom:10px;
  }
  .btn-malhae{
    display: block;
    width: 60px;
    height:60px;
    background: url(./images/btn_malhae.png) no-repeat;
    background-size: 100%;
    border:0;
  }  
}

.screen-out{
  display: block;
  position: absolute;
  top:-9999;
  left:-9999;
  overflow:hidden;
  width:1px;
  height:1px;
}
</style>
