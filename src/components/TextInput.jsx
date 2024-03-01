import { Center, Input } from "@chakra-ui/react";

export const TextInput = ({ value, changeFn }) => {
  return (
    <Center>
      <Input
        border="none"
        backgroundColor="#fff"
        mb={10}
        w="40%"
        placeholder="🔍 Search recipe by name or health label..."
        size="md"
        type="text"
        value={value}
        onChange={changeFn}
      />
    </Center>
  );
};
