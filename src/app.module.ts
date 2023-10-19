import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ProductosModule } from './productos/productos.module';
import { CustomersModule } from './customers/customers.module';
import { InventoryModule } from './inventory/inventory.module';
import { OrdersModule } from './orders/orders.module';
import { PaymentsModule } from './payments/payments.module';
import { AuthModule } from './auth/auth.module';
import { ProductoService } from './producto/producto.service';
import { ProductosModule } from './productos/productos.module';

@Module({
  imports: [UsersModule, ProductosModule, AuthModule, PaymentsModule, OrdersModule, InventoryModule, CustomersModule],
  controllers: [AppController],
  providers: [AppService, ProductoService],
})
export class AppModule {}
