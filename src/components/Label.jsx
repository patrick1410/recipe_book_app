import { Tag } from "@chakra-ui/react";

export const Label = ({ label, color, bgColor }) => {
  return (
    <Tag
      color={color}
      backgroundColor={bgColor}
      m={1}
      textTransform="uppercase"
    >
      {label}
    </Tag>
  );
};
