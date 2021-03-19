import ddbClient, { BOOK_TABLE_NAME } from '../database/db';
import { Book, UpdateBookParams } from './bookTypes';

export async function updateBook(book: any) {
    const attributes = Object.keys(book);

    if(attributes.length == 1) {
        throw new Error('Error');
    }
    const params: UpdateBookParams = {
        TableName: BOOK_TABLE_NAME,
        Key: {
            id: book.id
        },
        ExpressionAttributeValues: {},
        ExpressionAttributeNames: {},
        UpdateExpression: '',
        ReturnValues: 'UPDATED_NEW'
    };
    let prefix = 'set';

    for (let i = 0; i<attributes.length; i++) {
        const attribute = attributes[i];

        if (attribute !== 'id') {
            params.UpdateExpression += `${prefix} #${attribute} = :${attribute}`;
            params.ExpressionAttributeNames[`#${attribute}`] = attribute;
            params.ExpressionAttributeValues[`:${attribute}`] = book[attribute];

            prefix = ',';
        }
    }
    await ddbClient.update(params).promise();

    return book;
}