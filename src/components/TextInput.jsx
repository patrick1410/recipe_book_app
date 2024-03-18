import { Input, InputGroup, InputLeftElement, Flex } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
export const TextInput = ({ value, changeFn, placeholder }) => {
  return (
    <Flex justifyContent="center">
      <InputGroup
        w={{ base: "90%", sm: "60%", md: "50%", lg: "40%", xl: "30%" }}
      >
        <InputLeftElement
          pointerEvents="none"
          children={<SearchIcon color="gray" />}
        />
        <Input
          border="none"
          backgroundColor="#fff"
          mb={10}
          placeholder={placeholder}
          size="md"
          type="text"
          value={value}
          onChange={changeFn}
        />
      </InputGroup>
    </Flex>
  );
};
