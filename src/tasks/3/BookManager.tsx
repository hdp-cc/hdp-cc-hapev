import { Dispatch, FC, RefObject, SetStateAction, useRef, useState } from "react";
import { AddIcon } from '@chakra-ui/icons'
import hash from 'object-hash';

import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  Input,
  Stack,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  VStack,
  HStack,
} from '@chakra-ui/react'
import { Book } from "../books";
import { BookList } from '../2/BookList'

type BookManagerProps = {
  initialBooks: Book[];
};

type HapevDrawerProps = {
  allBooks: Book[];
  userCreatedBooks: Book[];
  onSave: Dispatch<SetStateAction<Book[]>>;
};

type ValueOfBook = string | number | undefined;

const initialBookData: Book = {
  title: '',
  author: '',
  language: '',
  year: 0,
};

type ValidationError = Record<string, string>;

const initialErrors: ValidationError = {};

const HapevDrawer = ({ allBooks, userCreatedBooks, onSave }: HapevDrawerProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [newBookData, setNewBookData] = useState<Book>(initialBookData);
  const [errors, setErrors] = useState(initialErrors);

  const hashes = new Set(allBooks.map((book) => hash(book)));

  const validateNewBookData = (): boolean => {
    const isEmpty = (value: ValueOfBook): boolean => typeof value === 'number' ? value === undefined : !value;
    const isUnique = (): boolean => {
      const newBookHash = hash(newBookData);
      return !hashes.has(newBookHash);
    };

    let isInvalid = false;
    // CheckIfEmpty for all fields of newBookData
    for (const featureKey in newBookData) {
      if (isEmpty(newBookData[featureKey])) {
        setErrors((state) => {
          return {
            ...state,
            [featureKey]: 'Dieses Feld darf nicht leer sein.'
          };
        });
        isInvalid = true;
      }
    }
    if (!isUnique()) {
      setErrors((state) => {
        return {
          ...state,
          generalErrorMessage: 'Dieses Buch existiert bereits.'
        }
      });
      isInvalid = true;
    }

    if (isInvalid) {
      return false;
    }
    return true;

  }

  const resetNewBookData = () => {
    setNewBookData(initialBookData);
    setErrors(initialErrors);
  };

  const handleOnSave = () => {
    if (!validateNewBookData()) {
      return;
    }
    onSave([...userCreatedBooks, newBookData]);
    resetNewBookData();
    onClose();
    return;
  }

  const handleInputChange = (event: { target: { name: string; value: string; }; }) => {
    setNewBookData({
      ...newBookData,
      [event.target.name]: event.target.name === 'year'
        ? Number(event.target.value)
        : event.target.value
    })
  };

  const btnRef: RefObject<HTMLButtonElement | null> = useRef<HTMLButtonElement | null>(null);

  return (
    <>
      <Button
        ref={btnRef as React.RefObject<HTMLButtonElement>}
        colorScheme='teal'
        onClick={onOpen}
      >
        <AddIcon mr='2' />
        Buch hinzufügen
      </Button>
      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef as React.RefObject<HTMLButtonElement>}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Neues Buch hinzufügen</DrawerHeader>

          <DrawerBody>
            <Stack spacing={6}>
              <FormControl isInvalid={!!errors.title}>
                <FormLabel>Buchtitel</FormLabel>
                <Input
                  name='title'
                  value={newBookData.title}
                  placeholder='Buchtitel'
                  isRequired
                  onChange={handleInputChange}
                />
                {!errors.title ? (
                  <FormHelperText>
                    Bitte geben Sie einen Buchtitel ein.
                  </FormHelperText>
                ) : (
                  <FormErrorMessage>Ein Buchtitel ist erforderlich.</FormErrorMessage>
                )}
              </FormControl>
              <FormControl isInvalid={!!errors.author}>
                <FormLabel>Author</FormLabel>
                <Input
                  name='author'
                  value={newBookData.author}
                  placeholder='Author'
                  isRequired
                  onChange={handleInputChange}
                />
                {!errors.author ? (
                  <FormHelperText>
                    Bitte geben Sie einen Author ein.
                  </FormHelperText>
                ) : (
                  <FormErrorMessage>Ein Author ist erforderlich.</FormErrorMessage>
                )}
              </FormControl>
              <FormControl>
                <FormLabel>Sprache</FormLabel>
                <Input
                  name='language'
                  value={newBookData.language}
                  placeholder='Sprache'
                  onChange={handleInputChange}
                />
                <FormHelperText>
                  Optional: Bitte geben Sie eine Sprache ein.
                </FormHelperText>
              </FormControl>
              <FormControl isInvalid={!!errors.year}>
                <FormLabel>Jahr</FormLabel>
                <NumberInput
                  min={-9999}
                  max={9999}
                  isRequired
                  value={newBookData.year}
                  placeholder='Jahr'
                >
                  <NumberInputField
                    name='year'
                    value={newBookData.year}
                    onChange={handleInputChange}
                  />
                  <NumberInputStepper
                  >
                    <NumberIncrementStepper
                      onClick={() => handleInputChange({ target: { name: 'year', value: `${newBookData.year + 1}` } })}
                    />
                    <NumberDecrementStepper
                      onClick={() => handleInputChange({ target: { name: 'year', value: `${newBookData.year - 1}` } })}
                    />
                  </NumberInputStepper>
                </NumberInput>
                {!errors.year ? (
                  <FormHelperText>
                    Bitte geben Sie ein Jahr ein.
                  </FormHelperText>
                ) : (
                  <FormErrorMessage>Ein Jahr ist erforderlich.</FormErrorMessage>
                )}
              </FormControl>
            </Stack>
          </DrawerBody>

          <DrawerFooter>
            <VStack spacing={5}>
              <FormControl isInvalid={!!errors.generalErrorMessage}>
                {errors.generalErrorMessage && (
                  <FormErrorMessage>{errors.generalErrorMessage}</FormErrorMessage>
                )}
              </FormControl>
              <HStack spacing={3}>
                <Button
                  variant='outline'
                  mr={3}
                  onClick={onClose}
                >
                  Abbrechen
                </Button>
                <Button
                  colorScheme='blue'
                  onClick={handleOnSave}
                >
                  Hinzufügen
                </Button>
              </HStack>
            </VStack>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export const BookManager: FC<BookManagerProps> = ({ initialBooks }: BookManagerProps) => {
  const [userCreatedBooks, setUserCreatedBooks] = useState<Book[]>([]);
  const allBooks = [...initialBooks, ...userCreatedBooks];
  return (
    <>
      <HapevDrawer allBooks={allBooks} userCreatedBooks={userCreatedBooks} onSave={setUserCreatedBooks} />
      <BookList books={allBooks} />
    </>
  );
};
