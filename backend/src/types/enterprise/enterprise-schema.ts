import { IsEmail, IsNotEmpty } from "class-validator";
import { BaseEntity, Column, Entity, PrimaryColumn } from "typeorm";
import { Enterprise } from "./index";

@Entity("Enterprise")
export class EnterpriseSchema implements Enterprise {
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

  @Column()
  gender: string;

  @Column()
  phone: string;

  @Column()
  birthday: string;

  @Column()
  username: string;

  @Column()
  country: string;

  @Column()
  province: string;

  @Column()
  city: string;

  @Column()
  preferences: [];

  @Column()
  salary: number;

  @Column()
  summary: string;

  @Column()
  links: string[];

  @Column()
  titular: string;

  @Column()
  video: string;

  @Column()
  photo: string;

  @Column()
  social_netwoeks: [];

  @Column()
  experience: [];

  @Column()
  skills: [];

  @Column()
  langueges: [];

  @Column()
  followers: string[];

  @Column()
  followed: string[];

  @Column()
  views: string[];
}
