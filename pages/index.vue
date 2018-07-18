
<template>
  <section class="container">                
      <div class="main-finder" id="finderOpen">
        <a href="#" @click="handleFinderClick">
          <span class="ico-finder"></span>
          <span class="main-finder__button">Find Your Taste</span>
        </a>
      </div>
      <div>
      </div>
      <div class="intro-contentList">                        
        <div class="matro-main">
          <a 
            class="item" 
            :href="item.url"
            v-for="(item, index) in items" 
            :key="index"           
          >
            <div 
              class="item__content" 
              :class="`item__content--${item.grid}`"
            >
              <img :src="item.image" :alt="item.title">
              <p>{{ item.title }}</p>
            </div>
          </a>          
        </div>
      </div>      

  </section>
</template>

<script>
import { EventBus } from '@/utils/EventBus.js'
import axios from 'axios';
import {encodeUriParameter} from '@/utils/helper.js'
export default {
  name : 'intro-contentList',  
  async asyncData () {
    let { data } = await axios.get(`https://bds.mycelebs.com/hub/board/exciting_starbucks/starbucks/combines/raw`);
    let dataSet = data.body[0].modules[0].data.data;
    const gridSize = ['medium', 'small', 'small', 'medium', 'small', 'medium', 'medium', 'small']
    let refinedData = dataSet.map((item, index) => {
      let filters = item.data.map(filter => {
        if (filter.field === 'filter_key') {

          let obj = {
            ...filter.value[0],
            point_value: filter.value[0].value
          };
          delete obj['value']
          return obj;
        } else {
          return filter;
        }
      })
      const url = `/starbucks/finder-result?${encodeUriParameter(filters, { vertical: 'starbucks' })}`;
      return {
        ...item,
        url,
        grid: gridSize[index]
      }
    })
    return {
      items: refinedData
    }
  },
  methods:{
    handleFinderClick () {
      EventBus.$emit('toggleFinder', true)
    }
  }
}

</script>

<style lang="scss">
.content-box {
  padding-top: 15px;
}

.main-finder {
  height: 116px;
  background-color: #111;
  padding: 0 10px;
  a {
    display: block;
    text-align: center;
    border-top: 1px solid #292929;
    border-bottom: 1px solid #292929;
    padding: 30px 0 28px;
    span {
      display: inline-block;
      color: #fff;
      font-size: 20px;
      line-height: 55px;
      &.ico-finder {
        width: 55px;
        height: 55px;
        background: url(../components/images/ico_mainfind.png) no-repeat;
        background-size: 100%;
        vertical-align: top;
      }
    }
  }
}
.intro-contentList {
  position: relative;
}
.matro-main {
  column-count: 2;
  column-gap: 0;
  counter-reset: item-counter;
  padding: 12px;
  background: #111;
}

.item {
  display: block;
  break-inside: avoid;
  padding: 3.5px;
  counter-increment: item-counter;
  p {
    position: absolute;
    bottom: 10px;
    font-size: 16px;
    color: #fff;
    padding: 0px 10px;
    font-weight: bold;
    z-index: 5;
  }
  &__content {
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 220px;
    box-sizing: border-box;
    background: #ddd;
    border-radius: 5px;
    &--small {
      height: 158px;
    }
    &--medium {
      height: 214px;
    }
    &:after {
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      content: '';
      background: rgba(0, 0, 0, 0.3);
    }
    img {
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
  }
}
.btn-goMain {
  display: block;
  width: 53px;
  height: 53px;
  background: #009bfa;
  border-radius: 50%;
  font-size: 28px;
  color: #fff;
  font-weight: bold;
  line-height: 56px;
  text-align: center;
  margin: 0px auto;
}
</style>
