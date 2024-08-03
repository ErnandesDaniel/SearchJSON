"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecordsService = void 0;
const common_1 = require("@nestjs/common");
let RecordsService = class RecordsService {
    constructor() { }
    async readRecords(readRecords) {
        let { email, number } = readRecords;
        return new Promise(function (resolve) {
            const database = [
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
            const emailAgreement = database.filter((record) => {
                return email === record.email;
            });
            const numberAgreement = database.filter((record) => {
                return Number(number) == record.number;
            });
            setTimeout(() => {
                resolve([...emailAgreement, ...numberAgreement]);
            }, 5000);
        });
    }
};
exports.RecordsService = RecordsService;
exports.RecordsService = RecordsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], RecordsService);
//# sourceMappingURL=records.service.js.map