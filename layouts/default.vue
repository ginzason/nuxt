<template>
  <div class="section-excitingl">
    <common-header />
    <nuxt />
    <AppMalhae />
    <div class="backdrop" v-show="finderActive"></div>
    <Finder class="starbucks__finder" 
      :active="finderActive" 
      :toggleFinder="toggleFinder"       
    />
  </div>
</template>
<script>
  import AppMalhae from '@/components/AppMalhae.vue';
  import CommonHeader from '@/components/CommonHeader.vue';
  import Finder from '@/components/Finder'
  import { EventBus } from '@/utils/EventBus.js'

  export default {
    components: {
      CommonHeader,
      AppMalhae,
      Finder
    },
    data(){
      return {
        finderActive: false
      }
    },
    methods: {
      toggleFinder (boolean) {
        this.finderActive = boolean
      },
      toggleBodyScrollLockHandler() {
        const body = document.querySelector('body');
        if(this.finderActive){
          this.scrollYBuffer = window.scrollY;
          body.style.top = `-${this.scrollYBuffer}px`;
          body.style.right = 0;
          body.style.left = 0;
          body.style.position = 'fixed';
        } else {
          body.style.position = 'relative';
          body.style.top = 'auto';
          body.style.right = 'auto';
          body.style.left = 'auto';
          window.scrollTo(0, this.scrollYBuffer);
        }
      }
    },
    watch: {
      finderActive (){
        this.toggleBodyScrollLockHandler();
      }
    },
    mounted(){
      EventBus.$on('toggleFinder', this.toggleFinder)
    }
  }

</script>
<style>
html {
  font-family: Avenir, 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,
    sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
body {
  background-color: #f4f4f2;
}
*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
  font-family: Avenir;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
.section-excitingl {
  position: relative;
  width: 100%;
  max-width: 414px;
  overflow: hidden;
  margin: 0px auto;
}
img {
  max-width: 100%;
}
.starbucks__finder {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  z-index: 101;
  max-width: 414px;
  background-color: #fff;
  transform: translateX(100%);
  transition: all 0.3s ease-in-out;
}
.starbucks__finder.is-active {
  transform: translateX(0);
}
.finder-open {
  position: fixed;
  right: 10px;
  bottom: 90px;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  z-index: 100;
  background: #313131 url(../components/images/ico_find.png) center center no-repeat;
  background-size: 33px;
}
.backdrop {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 100;
  background-color: rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease-in-out;
}
</style>
