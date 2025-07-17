/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateAnnouncementDto } from './dto/create-announcement.dto';
import { UpdateAnnouncementDto } from './dto/update-announcement.dto';
import {
  Announcement,
  AnnouncementDocument,
} from './schema/announcements.schema';

@Injectable()
export class AnnouncementsService {
  constructor(
    @InjectModel(Announcement.name)
    private announcementModel: Model<AnnouncementDocument>,
  ) {}

  async create(createDto: CreateAnnouncementDto): Promise<Announcement> {
    const created = new this.announcementModel(createDto);
    return created.save();
  }

  async findAll(): Promise<Announcement[]> {
    return this.announcementModel.find().sort({ date: -1 }).exec();
  }

  async findOne(id: string): Promise<Announcement> {
    const announcement = await this.announcementModel.findById(id).exec();
    if (!announcement) throw new NotFoundException('Announcement not found');
    return announcement;
  }

  async update(
    id: string,
    updateDto: UpdateAnnouncementDto,
  ): Promise<Announcement> {
    const updated = await this.announcementModel.findByIdAndUpdate(id, updateDto, {
      new: true,
    });
    if (!updated) throw new NotFoundException('Announcement not found');
    return updated;
  }

  async remove(id: string): Promise<void> {
    const result = await this.announcementModel.findByIdAndDelete(id);
    if (!result) throw new NotFoundException('Announcement not found');
  }
}
