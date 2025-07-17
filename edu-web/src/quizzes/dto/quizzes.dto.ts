/* eslint-disable prettier/prettier */
import { IsString, IsNumber } from 'class-validator';

export class CreateQuizDto {
    @IsString()
    title: string;

    @IsNumber()
    totalMarks: number;
}
