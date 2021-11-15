import { Injectable } from '@nestjs/common';
import { Bunyan } from '@eropple/nestjs-bunyan';

@Injectable()
export abstract class LoggableProvider {
  protected readonly log: Bunyan;

  protected constructor(rootLogger: Bunyan) {
    this.log = rootLogger.child({ component: this.constructor.name });
  }
}
