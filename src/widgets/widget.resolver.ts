import { Mutation, Query, Resolver } from '@nestjs/graphql';
import { WidgetType } from './widget.type';
import { WidgetService } from './widget.service';

@Resolver((of) => WidgetType)
export class WidgetResolver {
  constructor(protected WidgetService: WidgetService) {
  }

  @Query((returns) => [WidgetType])
  all() {
    return this.WidgetService.getAll();
  }

  @Mutation((returns) => WidgetType)
  createWidget() {
    return this.WidgetService.createWidget();
  }
}
