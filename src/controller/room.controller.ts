import { Controller, Get, Query } from '@nestjs/common';
import { RoomService } from '../service/room.service';
import { Room } from '../room/room.entity';

@Controller('api/rooms')
export class RoomController {
  constructor(private readonly roomService: RoomService) {}

  @Get()
  async findAll(
    @Query('page') page: number,
    @Query('limit') limit: number,
    @Query('filters') filters: string,
    @Query('sort') sort: string,
  ): Promise<Room[]> {
    const parsedFilters = JSON.parse(filters || '[]');
    const parsedSort = JSON.parse(sort || '[]');

    return this.roomService.findAll(page, limit, parsedFilters, parsedSort);
  }
}
