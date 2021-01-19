import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { SubscriptionModule } from './subscription/subscription.module';
import { ServiceModule } from './service/service.module';
import { DurationsModule } from './durations/durations.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      autoLoadEntities:true 
    }),
    UserModule,
    SubscriptionModule,
    ServiceModule,
    DurationsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
