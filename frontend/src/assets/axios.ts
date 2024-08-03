//Создаем переменную для адреса REST API
let baseURL='';

//Настриваем значение REST API в зависимости от типа запуска приложения -
//в режиме разработки или в продакшн режиме
if(import.meta.env.MODE=='development'){
    //Если приложение запущено в режиме разработки, то соединяемся с сервером API следующим образом:
    baseURL='http://'+window.location.hostname+':'+import.meta.env.VITE_SERVER_PORT+'/api/';

}else{
//Если приложение запущено в продакшн режиме, то соединяеся с источником:

    baseURL=window.location.origin+'/api/';
}

let axiosConfig:any={

    //baseURL: 'http://localhost:3000/api/',  //Работа на локальном сервере для разработки

    baseURL:baseURL,

    timeout: 6000,

    headers:{'Content-Type': 'application/json; charset=utf-8'},

};

import axios from 'axios';

export const getAxiosCancelTokenSourse=()=>axios.CancelToken.source();

const axiosInstance = axios.create(axiosConfig);

export {axiosInstance as axios};