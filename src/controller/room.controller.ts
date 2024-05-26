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
    @Query('filters') filters: { field: string; value: any; operator: string }[],
    @Query('sort') sort: { field: string; order: 'ASC' | 'DESC' }[],
  ): Promise<Room[]> {
    return this.roomService.findAll(page, limit, filters, sort);
  }
}