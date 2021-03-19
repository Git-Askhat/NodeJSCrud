import createBook from './createBook';
import { AppSyncEvent } from './bookTypes';

export async function handler(event: AppSyncEvent) {
    const book = event.arguments;
    
    switch(book) {
        case 'createBook':
            return await createBook(book);
        case 'deleteBook':
            return
        case 'getBook':
            return
        case 'updateBook':
            return
    }
}