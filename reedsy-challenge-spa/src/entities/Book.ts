export interface Book {
    title: string;
    cover: string;
    author: string;
    rating: string;
    slug: string;
    synopsis: string;
    upvoted: boolean;
    upvotes: number;
}

export interface BookDetails {
    books: Book[];
    meta: BooksMetaData;
}

export interface BooksMetaData {
    count: number;
}
