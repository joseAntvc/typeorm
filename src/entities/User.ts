import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstname: string;

  @Column({unique: true})
  email: string

  @Column()
  lastname: string;

  @Column({
    default: true
  })
  active: boolean;

  @CreateDateColumn()
  createDat: Date;

  @UpdateDateColumn()
  updateDat: Date;
}
