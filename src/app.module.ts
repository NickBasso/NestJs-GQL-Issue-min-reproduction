import { Module } from '@nestjs/common';
import { WidgetModule } from './widgets/widget.module';
import { GraphQLModule } from '@nestjs/graphql';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: true,
    }),
    WidgetModule],
})
export class AppModule {
}
