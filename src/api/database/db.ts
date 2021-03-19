const { DynamoDB } = require('aws-sdk');

const ddbClient = new DynamoDB.DocumentClent();

export const BOOK_TABLE_NAME = process.env.BOOK_TABLE_NAME;

if (!BOOK_TABLE_NAME) {
    throw new Error('BOOK_TABLE_NAME does not exist!');
}

export default ddbClient;