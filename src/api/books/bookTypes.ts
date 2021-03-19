export type Book = {
    id: string,
    name: string,
    author: string,
    genre: string,
    rating: Float32Array,
    image: string
}

export type CreateBookParams = {
    TableName: string,
    Item: Book;
}

export type Books = Book[];

type BookTableKey = {
    id: string;
}

export type AppSyncEvent = {
    info: {
        fieldName: string
    },
    arguments: any
}

export type UpdateBookParams = {
  TableName: string,
  Key: BookTableKey,
  ExpressionAttributeValues: any,
  ExpressionAttributeNames: any,
  UpdateExpression: string,
  ReturnValues: string
}