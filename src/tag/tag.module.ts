import { TagEntity } from './tag.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TagController } from '@app/tag/tag.controller';
import { Module } from '@nestjs/common';
import { TagService } from '@app/tag/tag.service';

@Module({
  controllers: [TagController],
  providers: [TagService],
  imports: [TypeOrmModule.forFeature([TagEntity])],
})
export class TagModule {}
