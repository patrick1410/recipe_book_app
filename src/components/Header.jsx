import { Center, Heading } from "@chakra-ui/react";

export const Header = () => {
  return (
    <Center>
      <Heading
        fontSize={{ base: "2xl", sm: "3xl", md: "4xl", lg: "5xl" }}
        textAlign="center"
        color="#fff"
        my={10}
        w="100%"
      >
        📙 Recipe Book App 🍽️
      </Heading>
    </Center>
  );
};
