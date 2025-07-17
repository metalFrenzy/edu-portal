/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Quiz, QuizDocument } from './schema/quizzes.schema';
import { CreateQuizDto } from './dto/quizzes.dto';


@Injectable()
export class QuizzesService {
    constructor(
        @InjectModel(Quiz.name) private quizModel: Model<QuizDocument>,
    ) { }

    async create(createQuizDto: CreateQuizDto): Promise<Quiz> {
        const createdQuiz = new this.quizModel(createQuizDto);
        return createdQuiz.save();
    }

    async findAll(): Promise<Quiz[]> {
        return this.quizModel.find().exec();
    }

    async findOne(id: string): Promise<Quiz> {
        return this.quizModel.findById(id).exec();
    }

    async update(id: string, updateQuizDto: Partial<CreateQuizDto>): Promise<Quiz> {
        return this.quizModel.findByIdAndUpdate(id, updateQuizDto, { new: true }).exec();
    }

    async remove(id: string): Promise<Quiz> {
        return this.quizModel.findByIdAndDelete(id).exec();
    }
}
