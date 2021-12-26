import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { HelloModule } from './app/hello/hello.module';
import { UserModule } from './app/user/user.module';
import { MongooseModule } from '@nestjs/mongoose';
import { CartModule } from './app/cart/cart.module';
import { VariantModule } from './app/variant/variant.module';
import { ProductModule } from './app/product/product.module';
import { OrderModule } from './app/order/order.module';
import { CategoryModule } from './app/category/category.module';



@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/nest'),
    GraphQLModule.forRoot({
      debug: true,
      playground: true,
      autoSchemaFile: true,
      installSubscriptionHandlers: true,
    }),
    HelloModule,
    UserModule,
    CartModule,
    VariantModule,
    ProductModule,
    OrderModule,
    CategoryModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
