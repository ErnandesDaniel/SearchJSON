<template>

  <div class="text-field">

    <div class="title">{{title}}</div>

    <input
        v-if="mask==undefined"
        :style="{ 'border-color': borderColor }"
        class="input"
        v-model="text"
        :placeholder="placeholder"
    >

    <MaskInput
        v-if="mask!=undefined"
        :style="{ 'border-color': borderColor }"
        class="input"
        v-model="text"
        :placeholder="placeholder"
        :mask="mask"
    />

    <div class="error-message" v-if="error">{{errorText}}</div>


  </div>


</template>

<script lang="ts">



import {defineComponent} from "vue";
export default defineComponent({

  props:{

    title:{type:String, required:true},

    error:{type:Boolean, required:true},

    errorText:{type:String, required:true},

    placeholder:{type:String, required:true},

    modelValue:{type:String, required:true},

    // @ts-ignore
    mask:{type:[String, undefined], required:false},

  },

  data(){

    return{

      text:'',

    }
  },


  computed:{

    borderColor(){

      // @ts-ignore
      if(this.error){

        return 'red';

      }

    },

  },

  watch:{

    text(){

      // @ts-ignore
      this.$emit('update:modelValue', this.text);

    },

  },

});

</script>


<style scoped>

.text-field {

  margin-bottom:40px;
  margin-left: auto;
  margin-right: auto;


  .title{

    text-align:start;
    margin-bottom:5px;
    font-size:20px;

  }

  .input {
    border-width: 1px;
    border-color: black;
    border-style: solid;
    margin-left: auto;
    margin-right: auto;
    display: block;
    width: 100%;
    padding-left: 10px;
    height: 60px;
    font-size: 20px;
  }

  .error-message{

    margin-top:5px;
    color:red;
    font-size:18px;
    text-align:start;
    position:absolute;

  }

}

</style>