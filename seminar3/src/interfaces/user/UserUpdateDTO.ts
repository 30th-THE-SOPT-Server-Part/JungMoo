import { SchoolInfo } from "../school/SchoolInfo";

export interface UserUpdateDTO {
  name?: string;
  phone?: string;
  email?: string;
  age?: number;
  school?: SchoolInfo;
}
