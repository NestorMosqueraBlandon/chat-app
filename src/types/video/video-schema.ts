import { IsEmail, IsNotEmpty } from "class-validator";
import { BaseEntity, Column, Entity, PrimaryColumn } from "typeorm";
import { Video } from "./index";

@Entity("Video")
export class VideoSchema extends BaseEntity {
  @PrimaryColumn({ unique: true })
  uuid: string;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  hashtag: string[];

  @Column()
  hiring: string;

  @Column()
  url: string;

  @Column()
  song: string;

  @Column()
  user: string;

  @Column()
  type: string;

  @Column()
  likes: number;

  @Column()
  privacity: string;

  @Column('simple-json')
  comments: [{uuid: string, text: string, user: string}];

  @Column()
  location: string;

  @Column()
  job_type: string;

  @Column()
  modality_type: string;
}
