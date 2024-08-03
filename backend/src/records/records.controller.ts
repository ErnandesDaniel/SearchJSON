import { Controller, Get, Query } from "@nestjs/common";
import {RecordsService} from "./records.service"
import {ReadRecordsDto} from "./dto/read-records.dto";

@Controller('records')
export class RecordsController {

  constructor(private recordsService: RecordsService) {}

  @Get('')
  async getRecords(@Query() query:ReadRecordsDto){

    return await this.recordsService.readRecords(query);

  }
  
}
