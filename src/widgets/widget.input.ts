import { Field, InputType } from '@nestjs/graphql';
import { WidgetAccess } from './widgetAccess/widgetAccess';

@InputType()
export class CreateWidgetInput {
  @Field((type) => WidgetAccess, { nullable: true })
  access: WidgetAccess;

  constructor(access: WidgetAccess) {
    this.access = access;
  }
}
