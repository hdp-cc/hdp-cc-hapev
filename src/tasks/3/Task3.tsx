import { Code, StackDivider, Text, VStack } from "@chakra-ui/react";
import { FC } from "react";
import { Task } from "../Task";
import { books } from "../books";
import { BookManager } from "./BookManager";

export const Task3: FC = () => {
  return (
    <Task
      headline="Task # 3 - Und noch mehr Bücher..."
      description={
        <>
          <Text>
            Es ist toll, dass wir nun all unsere Bücher sehen können. Leider
            fällt dabei auf, dass wir einige vergessen haben. Und vermutlich
            fallen uns da immer mal wieder vergessene Bücher ein, die wir
            nachtragen müssen. Wir brauchen also die Möglichkeit Bücher
            hinzuzufügen! Darum geht es in der Komponente
            <Code>BookManager</Code> in
            <Code>/src/tasks/3/BookManager.tsx</Code>
          </Text>
          <Text>
            Dazu sollst Du in <Code>BookManager</Code> eine dynamische Liste von
            Büchern darstellen, die ein Nutzer einfach per UI erweitern kann.
            Eine initiale Bücherliste wird aber bereits übergeben.
          </Text>
          <Text>
            Es gibt viele Wege wie man ein neues Buch in der UI anlegen könnte.
            Du hast keinerlei Vorgaben - egal ob Modal, Form neben der Liste
            oder sonst irgendeine kreative Idee. Die einzigen Anforderungen
            sind, dass alle Bücher dargestellt werden, der Nutzer dynamisch ein
            Buch anlegen/hinzufügen kann und dieses dann auch an der korrekten
            Position in der Liste dargestellt wird.
          </Text>
          <Text>
            Bitte verändere die Props von <Code>BookManager</Code> nicht.
          </Text>
          <Text>Happy hacking!</Text>
        </>
      }
      showcase={
        <VStack
          divider={<StackDivider borderColor='gray.300' />}
          spacing={4}
          align='stretch'
        >
          <BookManager initialBooks={books} />
        </VStack>
      }
    />
  );
};
