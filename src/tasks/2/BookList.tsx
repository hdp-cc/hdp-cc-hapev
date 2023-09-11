import { Box } from "@chakra-ui/react";
import { FC } from "react";
import { Book as BookType } from "../books";
import { Book } from "../1/Book";

type BookListProps = {
  books: BookType[];
};

const createKey = (book: BookType) => encodeURIComponent(`${book.title}-${book.author}-${book.year}-${book.language}`).replace(/(%20)|%/g, '');

const sortArrayByObjectProperty = (array: BookType[], property: keyof BookType) => {
  return [...array].sort((a, b) => {
    if (a[property] < b[property]) {
      return -1;
    }
    if (a[property] > b[property]) {
      return 1;
    }
    return 0;
  });
}

export const BookList: FC<BookListProps> = ({ books }: BookListProps) => {
  const sortedBooks = sortArrayByObjectProperty(books, 'title');
  return (
    sortedBooks.map((book) => <Book key={`${createKey(book)}`} {...book} />)
  );
};
