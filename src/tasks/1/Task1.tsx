import { Code, StackDivider, Text, VStack } from "@chakra-ui/react";
import { FC } from "react";
import { Task } from "../Task";
import { Book } from "./Book";

export const Task1: FC = () => {
  return (
    <Task
      headline="Task # 1 - Das Buch"
      description={
        <>
          <Text>
            Bei dieser Aufgabe geht es um die Darstellung eines Buches. Die
            Komponente <Code>Book</Code> in <Code>/src/tasks/1/Book.tsx</Code>{" "}
            soll die Daten, die sie als Props erhält, darstellen. Eine genaue
            Vorgabe für die Darstellung gibt es nicht. Die Komponente darf ruhig
            die gesamte verfügbare Breite nutzen und so hoch sein, wie sie hoch
            sein muss. Unterhalb wird die Komponente gerendert, sodass Du sehen
            kannst, wie sich deine Implementation für zwei Bücher beispielhaft
            verhält.
          </Text>
          <Text>
            Bitte verändere die Props von <Code>Book</Code> nicht.
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
          <Book
            title="Moby-Dick"
            author="Herman Melville"
            language="English"
            year={1851}
          />
          <Book
            title="Schuld und Sühne"
            author="Fjodor Michailowitsch Dostojewski"
            year={1866}
          />
        </VStack>
      }
    />
  );
};
