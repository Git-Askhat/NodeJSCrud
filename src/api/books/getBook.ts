import ddbClient, { BOOK_TABLE_NAME } from '../database/db';
import { Book } from './bookTypes';

export async function getBook(bookId: string): Promise<Book | null> {
    const params = {
        TableName: BOOK_TABLE_NAME,
        Key: {
            id: bookId
        }
    }
    const { Item } =  await ddbClient.get(params).promise();
    return Item;
}
