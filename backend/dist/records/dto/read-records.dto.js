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
exports.ReadRecordsDto = void 0;
const class_validator_1 = require("@nestjs/class-validator");
class ReadRecordsDto {
}
exports.ReadRecordsDto = ReadRecordsDto;
__decorate([
    (0, class_validator_1.IsString)({ message: 'Должно быть строкой' }),
    (0, class_validator_1.IsEmail)({}, { message: "Некорректный email" }),
    __metadata("design:type", String)
], ReadRecordsDto.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.Length)(6, 6, { message: 'Длина number должна быть 6 символов' }),
    (0, class_validator_1.IsNumberString)(null, { message: 'number должна быть числом' }),
    __metadata("design:type", Number)
], ReadRecordsDto.prototype, "number", void 0);
//# sourceMappingURL=read-records.dto.js.map