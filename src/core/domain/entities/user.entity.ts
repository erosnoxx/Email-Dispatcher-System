import { IsEmail, IsNotEmpty, Length } from "class-validator";
import BaseEntity from "./base.entity";

export default class UserEntity extends BaseEntity {
  @IsNotEmpty({ message: "O nome não pode estar vazio" })
  @Length(3, 50, { message: "O nome deve ter entre 3 e 50 caracteres" })
  name: string;

  @IsEmail({}, { message: "Email inválido" })
  email: string;

  @IsNotEmpty({ message: "A senha não pode estar vazia" })
  @Length(8, 100, { message: "A senha deve ter pelo menos 8 caracteres" })
  passwordHash: string;

  constructor(name: string, email: string, passwordHash: string) {
    super();
    this.name = name;
    this.email = email;
    this.passwordHash = passwordHash;
  }
}
