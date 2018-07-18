<template>
  <div class="finder" :class="{'is-active': active}">
    <nav class="finder__nav">
      <button class="finder__nav-item">
        <span>나만의 음료 취향발견</span>
      </button>
      <button class="finder__nav-item finder__nav-item--close" @click="toggleFinder(false)">
        <img src="https://www.noler.co.kr/images/btn-lnb-close.png" alt="" width="18" height="18">
      </button>
    </nav>
    <div class="finder__item">
      <form data-bds data-href="//bdshub.mycelebs.com/board/exciting_starbucks/starbucks/finder" data-brand="exciting_starbucks" data-vertical="starbucks" data-attribute="finder" data-async="" action="/starbucks/finder-result" method="post" ref="finder-starbucks">
        <Indicator/>
      </form>
    </div>
  </div>
</template>
<script>
import Indicator from '@/components/_Indicator.vue';
export default {
  name: 'Finder',  
  components: {
    Indicator
  },
  props: {
    active: {
      type: Boolean,
      default: true
    },
    toggleFinder: {
      type: Function,
      default () {
        return true;
      }
    } 
  },
  data () {
    return {
      activeFinder: this.$route.params.vertical || 'starbucks'
    }
  },
  methods: {
    loadBDSFinder(){
      window.__BDS.init({        
        siteid: 'exciting_starbucks',
        $target: this.$refs['finder-starbucks'],
        options: {
          forceRendering: true
        }
      })  
    }
  },
  mounted() {
    setTimeout(() => {
      this.loadBDSFinder()
    }, 1000);
  }
}
</script>
<style lang="css" scoped>
button {
  padding: 0;
  margin: 0;
  border: 0;
  background-color: transparent;
}
.finder {
}

.finder__backdrop.is-active {
  opacity: 1;
  z-index: 10;
}
.finder__nav {
  width: 100%;
  height: 42px;
  font-size: 0;
  margin: 0;
  &:after {
    clear: both;
    display: block;
    content: '';
  }
}
.finder__nav-item {
  position: relative;
  display: block;
  float: left;
  width: 86%;
  height: 42px;
  padding-left: 15px;
  font-weight: bold;
  font-size: 14px;
  text-align: left;
  background-color: #111;
  color: #fff;
}
.finder__nav-item > span {
  position: relative;
  display: block;
  vertical-align: middle;
  line-height: 42px;
}

.finder__nav-item.is-active {
  color: #fff;
}
.finder__nav-item--close {
  width: 14%;
  background-color: #111;
}
.finder__item {
  position: absolute;
  top: 42px;
  right: 0;
  left: 0;
  bottom: 0;
}
.finder__item.is-active {
  display: block;
}
.finder__contents {
  position: relative;
  height: 100%;
}
</style>