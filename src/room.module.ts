import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RoomRepository } from './room/room.repository';
import { Room } from './room/room.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Room])],
  providers: [RoomRepository],
  exports: [RoomRepository],
})
export class RoomModule {}