import { createUnionType, Field, InputType, ObjectType } from '@nestjs/graphql';
import { WidgetUser } from './properties/widgetUser';
import { WidgetGroup } from './properties/widgetGroup';

const WidgetUserUnion = createUnionType({
  name: 'WidgetUserUnion',
  types: () => [WidgetUser, WidgetGroup],
});

@ObjectType('WidgetAccess')
@InputType('WidgetAccessInput')
export class WidgetAccess {
  @Field({ nullable: false })
  isPublic: boolean;
  @Field((type) => [WidgetUserUnion], { nullable: true })
  users: typeof WidgetUserUnion[];

  constructor(isPublic: boolean, users: typeof WidgetUserUnion[]) {
    this.isPublic = isPublic;
    this.users = users;
  }
}
