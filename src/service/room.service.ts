import { Injectable } from '@nestjs/common';
import { RoomRepository } from '../room/room.repository';
import {
  applyPagination,
  applyFilters,
  applySorting,
} from '../utils/query-utils';
import { Field, ObjectMetadata } from '../types/metadata.types';
import { Room } from '../room/room.entity';

@Injectable()
export class RoomService {
  constructor(private readonly roomRepository: RoomRepository) {}

  async findAll(
    page: number,
    limit: number,
    filters: { field: string; value: any; operator: string }[],
    sort: { field: string; order: 'ASC' | 'DESC' }[],
  ): Promise<Room[]> {
    const stringToField = (str: string): Field => ({
      field: str,
      propertyPath: str,
    });

    const roomMetadata: ObjectMetadata = {
      alias: 'room',
      columns: [
        { field: 'id', propertyPath: 'id' },
        { field: 'name', propertyPath: 'name' },
        { field: 'capacity', propertyPath: 'capacity' },
        { field: 'userId', propertyPath: 'userId' },
      ],
    };

    let queryBuilder = this.roomRepository.createQueryBuilder('room');

    queryBuilder = applyPagination(queryBuilder, page, limit);
    queryBuilder = applyFilters(queryBuilder, filters.map(filter => ({ ...filter, field: stringToField(filter.field) })), roomMetadata);
    queryBuilder = applySorting(queryBuilder, sort.map(sortItem => ({ ...sortItem, field: stringToField(sortItem.field) })), roomMetadata);

    return queryBuilder.getMany();
  }
}
