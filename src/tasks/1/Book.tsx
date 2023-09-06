import { Alert, AlertIcon } from "@chakra-ui/react";
import { FC } from "react";

type Props = {
  title: string;
  author: string;
  language?: string;
  year: number;
};

export const Book: FC<Props> = () => {
  return (
    <Alert status="warning">
      <AlertIcon />
      Das ist nur ein Platzhalter - hier gehört deine Implementierung hin!
    </Alert>
  );
};
