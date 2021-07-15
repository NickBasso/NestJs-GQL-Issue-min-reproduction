import { Field, InputType, ObjectType } from '@nestjs/graphql';

@ObjectType('WidgetGroup')
@InputType('WidgetGroupInput')
export class WidgetGroup {
  @Field({ nullable: false })
  groupId: string;
}
