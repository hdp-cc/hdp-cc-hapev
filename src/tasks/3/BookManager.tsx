import { Alert, AlertIcon } from "@chakra-ui/react";
import { FC } from "react";
import { Book } from "../books";

type Props = {
  initialBooks: Book[];
};

export const BookManager: FC<Props> = () => {
  return (
    <Alert status="warning">
      <AlertIcon />
      Das ist nur ein Platzhalter - hier gehört deine Implementierung hin!
    </Alert>
  );
};
