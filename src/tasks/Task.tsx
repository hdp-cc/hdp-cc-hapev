import { Heading, Divider, Stack } from "@chakra-ui/react";
import { ReactNode, FC } from "react";

type Props = {
  headline: string;
  description: ReactNode;
  showcase: ReactNode;
};

export const Task: FC<Props> = ({ headline, description, showcase }) => {
  return (
    <>
      <Heading>{headline}</Heading>
      <Divider my="4" />
      <Stack spacing="2">{description}</Stack>
      <Divider my="4" />
      {showcase}
    </>
  );
};
