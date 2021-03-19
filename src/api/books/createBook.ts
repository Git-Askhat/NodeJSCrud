import ddbClient, { BOOK_TABLE_NAME } from '../database/db';
import {  CreateBookParams, Book } from './bookTypes';

export default async function createBook(book: Book): Promise<Book> {
    const params: CreateBookParams = {
        TableName: BOOK_TABLE_NAME,
        Item: book
    };

    await ddbClient.put(params).promise();

    return book;
}