import { Entity, PrimaryColumn, Column } from 'typeorm';

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
}
