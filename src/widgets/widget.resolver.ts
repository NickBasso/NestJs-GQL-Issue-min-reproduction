import { Mutation, Query, Resolver } from '@nestjs/graphql';
import { BaseWidgetType } from './baseWidget.type';
import { WidgetService } from './widget.service';

@Resolver((of) => BaseWidgetType)
export class WidgetResolver {
  constructor(protected WidgetService: WidgetService) {
  }

  @Query((returns) => [BaseWidgetType])
  all() {
    return this.WidgetService.getAll();
  }

  @Mutation((returns) => BaseWidgetType)
  createWidget() {
    return this.WidgetService.createWidget();
  }
}
