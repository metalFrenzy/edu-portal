/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type QuizDocument = Quiz & Document;

@Schema({ timestamps: true })
export class Quiz {
    @Prop({ required: true })
    title: string;

    @Prop({ required: true })
    totalMarks: number;

    @Prop({ default: Date.now })
    date: Date;
}

export const QuizSchema = SchemaFactory.createForClass(Quiz);
