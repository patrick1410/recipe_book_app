import { Input, InputGroup, InputLeftElement, Flex } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
export const TextInput = ({ value, changeFn }) => {
  return (
    <Flex justifyContent="center">
      <InputGroup w="40%">
        <InputLeftElement
          pointerEvents="none"
          children={<SearchIcon color="gray" />}
        />
        <Input
          border="none"
          backgroundColor="#fff"
          mb={10}
          placeholder="Search recipe by name or health label..."
          size="md"
          type="text"
          value={value}
          onChange={changeFn}
        />
      </InputGroup>
    </Flex>
  );
};
