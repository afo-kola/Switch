import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { AppController } from "./app.controller";

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: [".env"],
    }),
  ],
  providers: [],
  controllers: [AppController],
})
export class AppModule {}
