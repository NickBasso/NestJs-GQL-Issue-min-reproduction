import { Injectable } from '@nestjs/common';
import { WidgetType } from './widget.type';
import { WidgetAccess } from './widgetAccess/widgetAccess';
import { WidgetUser } from './widgetAccess/properties/widgetUser';

@Injectable()
export class WidgetService {
  private storage: Array<WidgetType>;

  async getAll(): Promise<Array<WidgetType>> {
    return this.storage;
  }

  async createWidget(): Promise<WidgetType> {
    const widget = new WidgetType(new WidgetAccess(true, [new WidgetUser()]));
    this.storage.push(widget);

    return widget;
  }
}
