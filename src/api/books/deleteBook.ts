import ddbClient, { BOOK_TABLE_NAME } from '../database/db';

export async function deleteBook(bookId: string): Promise<string | null> {
    const params = {
        TableName: BOOK_TABLE_NAME,
        Key: {
            id: bookId
        }
    }
    return await ddbClient.delete(params).promise();
}