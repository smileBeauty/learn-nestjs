import {
  Entity,
  PrimaryColumn,
  Column,
  BeforeInsert,
  BeforeUpdate,
} from 'typeorm';

@Entity('t_user')
export class User {
  @PrimaryColumn()
  id: string;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column()
  telephone: string;

  @Column()
  birthday: Date;

  @Column()
  createTime: Date;

  @BeforeInsert()
  setCreatedAt() {
    this.createTime = new Date();
    this.updateTime = new Date();
  }

  @Column()
  updateTime: Date;

  @BeforeUpdate()
  setUpdatedAt() {
    this.updateTime = new Date();
  }
}
