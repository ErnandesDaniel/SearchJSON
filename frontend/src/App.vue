<script  lang="ts">
import TextField from "@/components/text-field.vue";
import SubmitButton from "@/components/submit-button.vue";
import RecordsList from "@/components/records-list.vue";
import {defineComponent} from "vue";
import {verifyEmail} from '@devmehq/email-validator-js';
import type {GetRecordsResponse, Record} from "@/assets/types.ts";
import {axios, getAxiosCancelTokenSourse} from "@/assets/axios";
import type {CancelTokenSource} from "axios";


export default defineComponent({

  data(){

    return{

      number:'',

      email:'',

      isEmailError:false,

      emailErrorText:'Вам нужно ввести email',

      recordsList:[] as Record[],

      //Указание получен ответ с сервера или нет
      responseWasReceived:false,

      //Указание идет поиск записей на сервере или нет
      searchIsUnderway:false,

      //Токен axios-запроса
      axiosCancelTokenSourse: undefined as undefined | CancelTokenSource,

    }
  },

  methods:{

    async submit(){

      if(this.email.length>0) {

        let validEmail= await this.validateEmail(this.email);

        if(!validEmail){

          this.emailErrorText='Введите корректный email';

          this.isEmailError=true;

        }

      }else{

        this.emailErrorText='Введите email';

        this.isEmailError=true;

      }

      if(!this.isEmailError){

        //Проверяем есть ли протекающие сейчас запросы, и если есть, то отменяем их
        if (this.axiosCancelTokenSourse !=undefined) {
          this.axiosCancelTokenSourse.cancel("Operation canceled due to new request.");

        }

        //Сохраняем токен отмены текущего запроса
        this.axiosCancelTokenSourse =getAxiosCancelTokenSourse();

        this.responseWasReceived=false;

        this.searchIsUnderway=true;

        axios.get<GetRecordsResponse>('records?',{ params: {

          email: this.email,

          number: this.number.length > 0 ? this.number.replace(/\D/g,''): undefined,

          },

          cancelToken:this.axiosCancelTokenSourse.token,

        }).then((response)=>{

          // @ts-ignore
          this.recordsList=response.data;

          this.responseWasReceived=true;

          this.searchIsUnderway=false;

        }).catch((error)=>{

          console.error(error);

          if(error.code !== 'ERR_CANCELED'){

            this.responseWasReceived=true;

            this.searchIsUnderway=false;

          }
        })
      }

    },

    async validateEmail(email:string){

      const { validFormat } = await verifyEmail({ emailAddress: email, timeout: 3000 });

        return validFormat

      },

  },

  watch:{

    email(){

      this.isEmailError=false;
    },

  },

  components: {RecordsList, SubmitButton, TextField}
});
</script>

<template>


  <text-field

    class="text-field"
    v-model="email"
    :error="isEmailError"
    :error-text="emailErrorText"
    title="email"
    placeholder="Ввведите email"

  />

  <text-field

    class="text-field"
    v-model="number"
    :error="false"
    error-text=""
    title="number"
    placeholder="Ввведите номер"
    mask="##-##-##"
  />

  <submit-button

      class="submit-button"

      title="Отправить"

      v-on:click="submit"

  />

  <div v-if="searchIsUnderway" class="searchIsUnderway">Идет поиск записей...</div>

  <records-list

      :recordsList="recordsList"

      v-if="responseWasReceived"/>

</template>

<style scoped>

.text-field, .submit-button{

  width:400px;

}

.searchIsUnderway{

  margin-left: auto;
  margin-top: 50px;
  border-width: 1px 1px 1px 1px;
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


</style>
