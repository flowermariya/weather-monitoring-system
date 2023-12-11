import { Prop } from '@nestjs/mongoose';

export abstract class BaseSchema {
  @Prop({ default: () => new Date() })
  createdAt: Date;

  @Prop({ default: () => new Date() })
  updatedAt: Date;

  @Prop()
  deletedAt: Date;

  @Prop({ default: false })
  isDeleted: boolean;
}
