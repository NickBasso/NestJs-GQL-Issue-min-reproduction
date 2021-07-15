import { Injectable } from '@nestjs/common';
import { BaseWidgetType } from './baseWidget.type';
import { WidgetAccess } from './widgetAccess/widgetAccess';
import { WidgetUser } from './widgetAccess/properties/widgetUser';

@Injectable()
export class WidgetService {
  private storage: Array<BaseWidgetType>;

  async getAll(): Promise<Array<BaseWidgetType>> {
    return this.storage;
  }

  async createWidget(): Promise<BaseWidgetType> {
    const widget = new BaseWidgetType(new WidgetAccess(true, [new WidgetUser()]));
    this.storage.push(widget);

    return widget;
  }
}
