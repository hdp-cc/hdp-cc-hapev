import {
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Heading,
  Divider,
  Stack,
  UnorderedList,
  ListItem,
  Code,
  Box,
  Text
} from "@chakra-ui/react";
import { Task1 } from "./tasks/1/Task1";
import { Task2 } from "./tasks/2/Task2";
import { Task3 } from "./tasks/3/Task3";

import "./styles.css";

export function App() {
  return (
    <Tabs isLazy>
      <TabList>
        <Tab>Intro</Tab>
        <Tab>Task #1</Tab>
        <Tab>Task #2</Tab>
        <Tab>Task #3</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <Heading>Intro</Heading>
          <Divider my="4" />
          <Stack spacing="4">
            <Text>
              Vielen Dank, dass Du dir die Zeit nimmst die, im Folgenden genauer
              vorgestellten, Aufgaben zu bearbeiten.
            </Text>
            <Text>
              Durch die Bearbeitung dieser Aufgaben sollst Du uns dein React-
              und TypeScript-Wissen zeigen können.
            </Text>
            <Text>Ein paar grundlegende Anmerkungen:</Text>
            <Box pl="2">
              <UnorderedList>
                <ListItem>
                  Nutze in deinen Lösungen nicht TypeScripts <Code>any</Code>.
                </ListItem>
                <ListItem>
                  Es geht bei den Aufgaben nicht wirklich ums Visuelle - wenn Du
                  eine Komponente implementieren musst, sollte diese vom Layout
                  her ok aussehen. Farben, Schatten, Schriftarten, usw. sind
                  aber nicht im Fokus. Eine wunderschöne UI wird nicht gegen
                  dich verwendet, aber gleichzeitig reicht uns auch eine simple
                  Komponente, solange sie alle Anforderungen erfüllt. Du kannst
                  selbst entscheiden wieviel Du stylen willst und mit welcher
                  Technologie. Diese CodeSandbox unterstützt normales CSS (siehe{" "}
                  <Code>/src/styles.css</Code>, aber auch Styling via Chakra
                  UI (präferiert)).
                </ListItem>
                <ListItem>
                  Zeige, dass Du die Aufgabe verstanden hast und schreibe
                  lesbaren, stabilen und wartbaren Code, anstatt einer hacky
                  Lösung.
                </ListItem>
                <ListItem>
                  Falls Du Fragen hast, melde dich gerne direkt bei uns.
                  Nachfragen wird in keiner Weise negativ ausgelegt.
                </ListItem>
                <ListItem>
                  Bitte schick uns den Link zu deiner Lösung vor dem
                  Zweitgespräch, damit wir uns in diesem zusammen deine Lösung
                  angucken und darüber diskutieren können.
                </ListItem>
                <ListItem>
                  Am Besten loggst Du dich bei Codesandbox mit deinem
                  Github-Account ein. Wenn du deinen Link in einem Incognito-Tab
                  öffnen kannst, können wir das auch.
                </ListItem>
              </UnorderedList>
            </Box>
          </Stack>
        </TabPanel>
        <TabPanel>
          <Task1 />
        </TabPanel>
        <TabPanel>
          <Task2 />
        </TabPanel>
        <TabPanel>
          <Task3 />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}
