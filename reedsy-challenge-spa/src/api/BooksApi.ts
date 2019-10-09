import { getRequest } from '../tools/Http';
import {Book, BookDetails} from '../entities/Book';

const baseUrl = '/api/v2/account';

export let BooksApi = {
    listAllBooks: (): Promise<BookDetails> => {
        return getRequest(`/books`);
    },
    findBook: (slug: string): Promise<Book> => {
        return getRequest('/books/' + slug);
    },
};
