export interface CreateUserDto {
  name: string;
  password: string;
}

export interface LoginUserDto {
  name: string;
  password: string;
}

export interface PayloadDto {
  name: string;
  password: string;
}

export interface PayloadWithExpires extends PayloadDto {
  exp: number;
  iat: number;
}