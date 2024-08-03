<script  lang="ts">


import {defineComponent} from "vue";
export default defineComponent({

  props: {

    title: {type:String, required:true},
  },

});

</script>

<template>

  <div class="submit-button">{{title}}</div>

</template>

<style scoped>

.submit-button {
  border-width: 1px;
  border-color: black;
  border-style: solid;
  margin-left: auto;
  margin-right: auto;
  display: flex;align-items: center;
  justify-content: center;
  width: 100%;
  height: 60px;
  font-size: 20px;
  cursor:pointer;
}

</style>