<script lang="ts">
import {defineComponent} from 'vue'
import type { PropType } from 'vue'
import type { Record } from "@/assets/types.ts";

export default defineComponent({

  props:{

    recordsList: {
      type: Array as PropType<Record[]>,
      required: true
    }
  },

})
</script>

<template>

  <div class="server-response">

    <div class="server-response-title">Результаты поиска</div>

    <div class="server-response-list-container">

      <div class="records-not-found"

           v-if="recordsList.length===0"

      >Записи не найдены</div>


      <div

          class="record"

          v-for="record in recordsList"

      >

        <div class="email">email: {{record.email}}</div>

        <div class="number">number: {{record.number}}</div>

      </div>

    </div>

  </div>

</template>

<style scoped>

  .server-response {

    .server-response-title {

      margin-left: auto;
      margin-top: 50px;
      border-width: 1px 1px 0 1px;
      border-color: black;
      border-style: solid;
      width: 400px;
      height: 50px;
      font-size: 20px;
      margin-right: auto;
      display: flex;
      align-items: center;
      justify-content: center;


    }

    .server-response-list-container {

      width: 400px;
      margin-right: auto;
      margin-left: auto;
      border-width: 0 1px 1px 1px;
      border-color: black;
      border-style: solid;
      height: 250px;
      position: relative;
      overflow-y: auto;


      .records-not-found {

        font-size: 20px;
        width: 100%;
        text-align: center;
        margin: auto;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        display: flex;
        justify-content: center;
        align-items: center;

      }

      .record {

        height: 70px;

        width: 90%;
        margin: 20px auto;

        border-width: 2px;
        border-color: black;
        border-style: solid;
        font-size: 20px;
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;

      }

    }


  }

</style>