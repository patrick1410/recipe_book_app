import { Center, Heading } from "@chakra-ui/react";

export const Header = ({ text, color }) => {
  return (
    <Center>
      <Heading
        fontSize={{ base: "2xl", sm: "3xl", md: "4xl", lg: "5xl" }}
        textAlign="center"
        color={color}
        my={10}
        w="100%"
      >
        {text}
      </Heading>
    </Center>
  );
};
