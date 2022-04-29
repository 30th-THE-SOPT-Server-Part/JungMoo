import { SchoolInfo } from "../school/SchoolInfo";

export interface UserCreateDTO {
  name: string;
  phone: string;
  email: string;
  age?: number;
  school: SchoolInfo;
}
