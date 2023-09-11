import { Box, Card, CardBody, CardHeader, Heading, Icon, Text } from '@chakra-ui/react'
import { FC } from "react";
import { GiWhiteBook } from "react-icons/gi";
import { FaCalendar, FaGlobe, FaPenFancy } from "react-icons/fa6";
import { IconType } from 'react-icons';

type BookProps = {
  title: string;
  author: string;
  language?: string;
  year: number;
};

const translations: Record<keyof BookProps, string> = {
  title: 'Titel',
  author: 'Author',
  language: 'Sprache',
  year: 'Jahr'
};

const featureIcons: Record<keyof BookProps, IconType> = {
  title: GiWhiteBook,
  author: FaPenFancy,
  language: FaGlobe,
  year: FaCalendar
};

type BookFeatureProps = {
  type: keyof BookProps;
  value: string | number | undefined;
};


const BookFeature: FC<BookFeatureProps> = ({ type, value }: BookFeatureProps) => (
  <Box>
    <Text as='span' fontSize='md' color='gray.600'>
      <Icon as={featureIcons[type]} />
      {' '}
      {translations[type]}:
      {' '}
    </Text>
    <Text as={'span'} fontSize='xl'>{value}</Text>
  </Box>
);

export const Book: FC<BookProps> = ({ title, author, language, year }: BookProps) => (
  <Card
    color='gray.800'
    bgGradient='linear(to-br, blue.100, blue.50)'
    shadow='md'
  >
    <CardHeader>
      <Heading fontSize='4xl'>
        <Icon as={featureIcons['title']} boxSize='1.3em' /> {' '}
        {title}
      </Heading>
    </CardHeader>
    <CardBody>
      <BookFeature
        type={'author'}
        value={author}
      />
      {language ? <BookFeature
        type={'language'}
        value={language}
      /> : null}
      <BookFeature
        type={'year'}
        value={year}
      />
    </CardBody>
  </Card>
);
