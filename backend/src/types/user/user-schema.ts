import { IsEmail, IsNotEmpty } from "class-validator";
import { BaseEntity, Column, Entity, PrimaryColumn } from "typeorm";
import { User } from "./index";

@Entity("User")
export class UserSchema extends BaseEntity {
  @PrimaryColumn({ unique: true })
  uuid: string;

  @Column()
  name: string;

  @Column()
  lastName: string;

  @Column({ unique: true })
  @IsEmail(undefined, { message: "The email is not valid" })
  @IsNotEmpty({ message: "The email is required" })
  email: string;

  @Column()
  password: string;

  @Column({default: "Masculino"})
  gender: string;

  @Column()
  phone: string;

  @Column({default: "Masculino"})
  birthday: string;

  @Column({default: "Masculino"})
  username: string;

  @Column({default: "Masculino"})
  country: string;

  @Column({default: "Masculino"})
  province: string;

  @Column({default: "Masculino"})
  city: string;

  @Column('simple-json', {nullable: true})
  preferences: [{uuid: string, name: string}];

  @Column({default: 0})
  salary: number;

  @Column({default: "Masculino"})
  summary: string;

  @Column('simple-array', {nullable: true})
  links: string[];

  @Column({default: "Masculino"})
  titular: string;

  @Column({default: "Masculino"})
  video: string;

  @Column({default: "Masculino"})
  photo: string;

  @Column('simple-json', {nullable: true})
  social_netwoeks: [{uuid: string, name: string}];

  @Column('simple-json', {nullable: true})
  experience: [{uuid: string, name: string}];

  @Column('simple-json', {nullable: true})
  skills: [{uuid: string, name: string}];

  @Column('simple-json', {nullable: true})
  langueges: [{uuid: string, name: string}];

  @Column('simple-array', {nullable: true})
  followers: string[];

  @Column('simple-array', {nullable: true})
  followed: string[];

  @Column('simple-array', {nullable: true})
  views: string[];
}
