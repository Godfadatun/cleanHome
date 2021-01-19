import { Service } from './../../service/entities/service.entity';
import { Entity, PrimaryGeneratedColumn, Column, JoinColumn, OneToMany } from "typeorm";

@Entity()
export class Duration {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany( type => Service, service => service.duration )
  service: Service[];


}
