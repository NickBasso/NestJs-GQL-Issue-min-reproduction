import { Field, InputType, ObjectType } from '@nestjs/graphql';

@ObjectType('WidgetUser')
@InputType('WidgetUserInput')
export class WidgetUser {
  @Field({ nullable: false })
  userId: string;
}
