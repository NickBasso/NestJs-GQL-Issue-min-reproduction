import { Field, ObjectType } from '@nestjs/graphql';
import { WidgetAccess } from './widgetAccess/widgetAccess';

@ObjectType('BaseWidget')
export class WidgetType {
  @Field((type) => WidgetAccess, { nullable: true })
  access: WidgetAccess;

  constructor(access: WidgetAccess) {
    this.access = access;
  }
}
