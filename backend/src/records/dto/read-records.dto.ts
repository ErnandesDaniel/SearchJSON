import { IsEmail, IsString, Length, IsNumberString, IsOptional } from '@nestjs/class-validator'

export class ReadRecordsDto {

  @IsString({message: 'Должно быть строкой'})
  @IsEmail({}, {message: "Некорректный email"})
  readonly email:string;

  @IsOptional()
  @Length(6, 6, { message: 'Длина number должна быть 6 символов'})
  @IsNumberString(null, {message: 'number должна быть числом'})
  readonly number: number;

}