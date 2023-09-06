import { Code, Text, VStack } from "@chakra-ui/react";
import { FC } from "react";
import { Task } from "../Task";
import { books } from "../books";
import { BookList } from "./BookList";

export const Task2: FC = () => {
  return (
    <Task
      headline="Task # 2 - Ein Buch kommt selten allein"
      description={
        <>
          <Text>
            Es gibt wirklich viele Bücher! Und jetzt, wo wir ein Buch so schön
            darstellen können, wollen wir gleich ganz viele in einer Lite
            darstellen. Dazu musst Du die Komponente <Code>BookList</Code> in{" "}
            <Code>/src/tasks/2/BookList.tsx</Code> mit Leben füllen.
          </Text>
          <Text>
            Tatsächlich sollen die Bücher nicht nur in einer Liste, sondern auch
            in einer ganz bestimmten Reihenfolge, nach Buchtitel und
            aufsteigend, dargestellt werden. Falls das zu einfach ist, wäre
            optional auch eine Erweiterung möglich, sodass der Nutzer selbst mit
            Hilfe von zwei Selects auswählen kann, nach welchem Attribut wie
            sortiert wird.
          </Text>
          <Text>
            Bitte verändere die Props von <Code>BookList</Code> nicht.
          </Text>
          <Text>Happy hacking!</Text>
        </>
      }
      showcase={
        <VStack>
          <BookList books={books} />
        </VStack>
      }
    />
  );
};
