import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { config } from 'dotenv';
config();

const connectionString = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_HOST}/${process.env.MONGO_DB}`;
console.log('connectionString', connectionString);

@Module({
  imports: [MongooseModule.forRoot(connectionString)],
  controllers: [],
  providers: [],
})
export class MongooseConfigModule {}
