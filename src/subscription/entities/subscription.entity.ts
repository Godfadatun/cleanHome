import { User } from './../../user/entities/user.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from "typeorm";

@Entity()
export class Subscription {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  bathroom: string;

  @Column()
  kitchen: string;

  @Column()
  bed_room: string;

  @Column()
  living_room: string;

  @Column()
  other_rooms: string;

  @OneToOne(()=>User)
  @JoinColumn()
  user: User;

  @Column()
  no_visits: string;
}
