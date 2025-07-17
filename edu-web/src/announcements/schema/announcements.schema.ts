import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type AnnouncementDocument = Announcement & Document;

@Schema()
export class Announcement {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  content: string;

  @Prop({ default: Date.now })
  date: Date;
}

export const AnnouncementSchema = SchemaFactory.createForClass(Announcement);
