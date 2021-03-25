import { sendGetRequest, sendPostRequest } from 'api/utils';
import {
  BasicUserInformation,
  LoginResponse,
  BooksResponse,
  AggregateResponse,
  Book,
} from './types';
import { api_url } from '../utils/consts';

export default () => ({
  login: async (userInfo: BasicUserInformation): Promise<string> => {
    const { data }: LoginResponse = await sendGetRequest(
      api_url + '/api/checkConnection'
    );
    return data;
  },
  insertBooks: async (): Promise<Book[]> => {
    const { data }: BooksResponse = await sendPostRequest(
      api_url + '/api/books',
      ''
    );
    return data;
  },
  getBooksAggregate: async (): Promise<{
    time: number;
    data: Book[];
  }> => {
    const { data }: AggregateResponse = await sendGetRequest(
      api_url + '/api/booksAgreggate'
    );
    return data;
  },
});
