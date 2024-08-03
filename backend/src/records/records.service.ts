import { Injectable } from '@nestjs/common';
import {ReadRecordsDto} from "./dto/read-records.dto";

interface record{
  email: string,
  number: number
}

@Injectable()
export class RecordsService {

  constructor(){}
  
  async readRecords(readRecords:ReadRecordsDto) {

    let { email, number} = readRecords;

    return new Promise(function (resolve) {

        const database: record[] =

            [

              {
                email: 'jim@gmail.com',
                number: 221122
              },

              {
                email: 'jam@gmail.com',
                number: 830347
              },

              {
                email: 'john@gmail.com',
                number: 221122
              },

              {
                email: 'jams@gmail.com',
                number: 349425
              },

              {
                email: 'jams@gmail.com',
                number: 141424
              },

              {
                email: 'jill@gmail.com',
                number: 822287
              },

              {
                email: 'jill@gmail.com',
                number: 822286
              }

            ];

        //Ищем совпадения по email
        const emailAgreement=database.filter((record)=>{

            return email===record.email;

        });

        //ищем совпадения по номеру
        const numberAgreement=database.filter((record)=>{

            return Number(number)==record.number;

        });

        //Через 5 секунд отправляем массив из записей где number или email совпадают

        setTimeout(() => {

          resolve([...emailAgreement, ...numberAgreement]);

        }, 5000);

      })

  }
}
