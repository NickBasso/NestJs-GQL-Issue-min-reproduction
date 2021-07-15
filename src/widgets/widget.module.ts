import { Module } from '@nestjs/common';
import { WidgetService } from './widget.service';
import { WidgetResolver } from './widget.resolver';

@Module({
  imports: [],
  providers: [WidgetResolver, WidgetService],
})
export class WidgetModule {
}
