import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm';
import { v4 as uuid } from 'uuid';

@Entity("settings")
class Settings {

  @PrimaryColumn()
  readonly id: string;

  @Column()
  username: string;

  @Column()
  chat: boolean;

  @CreateDateColumn()
  created_at: Date;

  @CreateDateColumn()
  updated_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid()
    }
  }

}

export { Settings };
