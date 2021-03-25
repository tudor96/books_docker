import { AxiosResponse } from 'axios';

export interface BasicUserInformation {
  email: string;
  password: string;
}
export interface Book {
  name: string;
  description: string;
}

export interface LoginResponse extends AxiosResponse {
  data: string;
}
export interface BooksResponse extends AxiosResponse {
  data: Book[];
}
export interface AggregateResponse extends AxiosResponse {
  data: {
    time: number;
    data: Book[];
  };
}
