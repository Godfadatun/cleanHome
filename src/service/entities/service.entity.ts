import { Duration } from './../../durations/entities/duration.entity';
import { User } from './../../user/entities/user.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, ManyToOne } from "typeorm";

@Entity()
export class Service {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  type: string;

  // @Column()
  // duration: string;

  @Column()
  no_staff: string;

  @Column()
  date: string;

  @OneToOne( () => User )
  @JoinColumn()
  user: User;

  @ManyToOne( type => Duration, duration => duration.service )
  duration: Duration;

}
