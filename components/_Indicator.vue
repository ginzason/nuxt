<template>
  <div class="bds-indicator">
    <div class="bds-board-loading-indicator">
      <div class="bds-board-loading-indicator__module">
        <div class="bds-board-loading-indicator__placeholder-title"></div>
        <div class="bds-board-loading-indicator__placeholder-content"></div>
      </div>
      <div class="bds-board-loading-indicator__module">
        <div class="bds-board-loading-indicator__placeholder-title"></div>
        <div class="bds-board-loading-indicator__placeholder-content"></div>
      </div>
      <div class="bds-board-loading-indicator__module">
        <div class="bds-board-loading-indicator__placeholder-title"></div>
        <div class="bds-board-loading-indicator__placeholder-content"></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
    }
  }
}
</script>
<style lang="scss">
.bds-indicator{
  position:relative;
  width:100%;
  height:300px;
  border-bottom:1px solid #D0D0D0;
  background-color:#FFF;
}
.bds-board-loading-indicator{
 font-size:10px;
 &,
 & *{
  box-sizing:border-box;
 }
 position:absolute;
 top:50%;
 left:50%;
 width:10em;
 height:15em;
 padding-top:1em;
 padding-bottom:1em;
 transform:translate(-50%, -50%);
 // background-color:#434343;
  &__module{
   position:relative;
   
   width:8em;
   height:4em;
   margin:.5em auto 0;
   padding:1em;
   
   box-shadow:0 1px 1px rgba(0,0,0,.54);
   animation-iteration-count:infinite;
   animation-duration: 1.5s;
   animation-timing-function:ease-out;
   
   background-color:#FFF;
   opacity:0;
   
   &:first-child{
    margin-top:0;
   }
   
   &:nth-of-type(1){
    animation-name: first-action;
   }
   &:nth-of-type(2){
    animation-name: second-action;
    animation-delay:150ms;
   }
   &:nth-of-type(3){
    animation-name: third-action;
    animation-delay:300ms;
   }
  }
 &__placeholder-title{
  width:70%;
  height:.5em;
  background-color:#B0B0B0;
 }
 &__placeholder-content{
  width:100%;
  height:1em;
  margin-top:.4em;
  background-color:#D0D0D0;
 }
}
// odd-action
@keyframes first-action{
 0% {
  transform:translate(-8em, 6em);
 }
 20% {
  transform:translate(0, 0);
  opacity:1;
 }
 70% {
  transform:translate(0, 0);
 }
 100%{
  transform:translate(0, -8em);
  opacity:0
 }
}
// even-action
@keyframes second-action{
 0% {
  transform:translate(8em, 6em);
 }
 20% {
  transform:translate(0, 0);
  opacity:1;
 }
 60% {
  transform:translate(0, 0);
 }
 100%{
  transform:translate(0, -8em);
  opacity:0
 }
}
@keyframes third-action{
 0% {
  transform:translate(0, 6em);
 }
 20% {
  transform:translate(0, 0);
  opacity:1;
 }
 50% {
  transform:translate(0, 0);
 }
 100%{
  transform:translate(0, -8em);
  opacity:0
 }
}
</style>