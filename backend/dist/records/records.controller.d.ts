import { RecordsService } from "./records.service";
import { ReadRecordsDto } from "./dto/read-records.dto";
export declare class RecordsController {
    private recordsService;
    constructor(recordsService: RecordsService);
    getRecords(query: ReadRecordsDto): Promise<unknown>;
}
