import { EntityRepository, Repository, SelectQueryBuilder } from 'typeorm';
import { Room } from '../room/room.entity';

@EntityRepository(Room)
export class RoomRepository extends Repository<Room> {
  createQueryBuilder(): SelectQueryBuilder<Room> {
    return super.createQueryBuilder();
  }
}