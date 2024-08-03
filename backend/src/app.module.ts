import { Module } from '@nestjs/common';
import * as path from 'path';
import { RecordsModule } from './records/records.module';
import { ServeStaticModule } from '@nestjs/serve-static';

@Module({
  imports: [

    //Перенаправляем запросы на фронтенд
    ServeStaticModule.forRoot({

	rootPath:path.resolve(__dirname, '../..', 'frontend', 'dist'),
			
	}),
	
    RecordsModule,
  ],


})

export class AppModule {}
