import { Box, SimpleGrid, Tag } from "@chakra-ui/react";

export const Cautions = ({ cautions }) => {
  return cautions.map((caution, index) => (
    <Tag
      margin={1}
      backgroundColor="red.100"
      color="red"
      textTransform="uppercase"
      key={index}
    >
      {caution}
    </Tag>
  ));
};
